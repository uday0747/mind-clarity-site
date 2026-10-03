import AVFoundation
import Foundation

guard CommandLine.arguments.count == 4 else {
    fputs("usage: mux_audio_writer.swift VIDEO AUDIO OUTPUT\n", stderr)
    exit(2)
}

let videoURL = URL(fileURLWithPath: CommandLine.arguments[1])
let audioURL = URL(fileURLWithPath: CommandLine.arguments[2])
let outputURL = URL(fileURLWithPath: CommandLine.arguments[3])
try? FileManager.default.removeItem(at: outputURL)

let videoAsset = AVURLAsset(url: videoURL)
let audioAsset = AVURLAsset(url: audioURL)
guard let videoTrack = videoAsset.tracks(withMediaType: .video).first,
      let audioTrack = audioAsset.tracks(withMediaType: .audio).first else {
    fputs("Missing video or audio track\n", stderr)
    exit(3)
}

let readerVideo = try AVAssetReader(asset: videoAsset)
let readerAudio = try AVAssetReader(asset: audioAsset)
let videoOutput = AVAssetReaderTrackOutput(track: videoTrack, outputSettings: [
    kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32BGRA
])
let audioOutput = AVAssetReaderTrackOutput(track: audioTrack, outputSettings: [
    AVFormatIDKey: kAudioFormatLinearPCM,
    AVSampleRateKey: 44100,
    AVNumberOfChannelsKey: 1,
    AVLinearPCMBitDepthKey: 16,
    AVLinearPCMIsBigEndianKey: false,
    AVLinearPCMIsFloatKey: false,
    AVLinearPCMIsNonInterleaved: false
])
guard readerVideo.canAdd(videoOutput), readerAudio.canAdd(audioOutput) else {
    fputs("Could not add reader outputs\n", stderr)
    exit(4)
}
readerVideo.add(videoOutput)
readerAudio.add(audioOutput)

let writer = try AVAssetWriter(outputURL: outputURL, fileType: .mp4)
let videoInput = AVAssetWriterInput(mediaType: .video, outputSettings: [
    AVVideoCodecKey: AVVideoCodecType.h264,
    AVVideoWidthKey: 1080,
    AVVideoHeightKey: 1920,
    AVVideoCompressionPropertiesKey: [
        AVVideoAverageBitRateKey: 6_000_000,
        AVVideoProfileLevelKey: AVVideoProfileLevelH264HighAutoLevel
    ]
])
let audioInput = AVAssetWriterInput(mediaType: .audio, outputSettings: [
    AVFormatIDKey: kAudioFormatMPEG4AAC,
    AVSampleRateKey: 44100,
    AVNumberOfChannelsKey: 1,
    AVEncoderBitRateKey: 128000
])
videoInput.expectsMediaDataInRealTime = false
audioInput.expectsMediaDataInRealTime = false
guard writer.canAdd(videoInput) else {
    fputs("Could not add video writer input\n", stderr)
    exit(5)
}
writer.add(videoInput)
guard writer.canAdd(audioInput) else {
    fputs("Could not add audio writer input\n", stderr)
    exit(5)
}
writer.add(audioInput)
let adaptor = AVAssetWriterInputPixelBufferAdaptor(assetWriterInput: videoInput, sourcePixelBufferAttributes: [
    kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32BGRA,
    kCVPixelBufferWidthKey as String: 1080,
    kCVPixelBufferHeightKey as String: 1920
])
guard writer.startWriting() else {
    fputs("Could not start writer: \(writer.error?.localizedDescription ?? "unknown")\n", stderr)
    exit(6)
}
readerVideo.startReading()
readerAudio.startReading()
writer.startSession(atSourceTime: .zero)

while videoInput.isReadyForMoreMediaData,
      let sample = videoOutput.copyNextSampleBuffer() {
    guard let pixelBuffer = CMSampleBufferGetImageBuffer(sample) else {
        fputs("Missing decoded video frame\n", stderr)
        exit(7)
    }
    let pts = CMSampleBufferGetPresentationTimeStamp(sample)
    if !adaptor.append(pixelBuffer, withPresentationTime: pts) {
        fputs("Video append failed: \(writer.error?.localizedDescription ?? "unknown")\n", stderr)
        exit(7)
    }
}
videoInput.markAsFinished()

let videoDuration = CMTimeGetSeconds(videoTrack.timeRange.duration)
while audioInput.isReadyForMoreMediaData,
      let sample = audioOutput.copyNextSampleBuffer() {
    let pts = CMSampleBufferGetPresentationTimeStamp(sample)
    if CMTimeGetSeconds(pts) >= videoDuration { break }
    if !audioInput.append(sample) {
        fputs("Audio append failed: \(writer.error?.localizedDescription ?? "unknown")\n", stderr)
        exit(8)
    }
}
audioInput.markAsFinished()

let group = DispatchGroup()
group.enter()
writer.finishWriting {
    if writer.status == .completed {
        print("WROTE \(outputURL.path)")
    } else {
        fputs("Writer failed: \(writer.error?.localizedDescription ?? "unknown")\n", stderr)
        exit(9)
    }
    group.leave()
}
group.wait()
