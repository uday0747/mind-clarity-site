import AVFoundation
import Foundation

guard CommandLine.arguments.count == 4 else {
    fputs("usage: mux_audio.swift VIDEO AUDIO OUTPUT\n", stderr)
    exit(2)
}

let videoURL = URL(fileURLWithPath: CommandLine.arguments[1])
let audioURL = URL(fileURLWithPath: CommandLine.arguments[2])
let outputURL = URL(fileURLWithPath: CommandLine.arguments[3])
try? FileManager.default.removeItem(at: outputURL)

let videoAsset = AVURLAsset(url: videoURL)
let audioAsset = AVURLAsset(url: audioURL)
let composition = AVMutableComposition()

guard let sourceVideo = videoAsset.tracks(withMediaType: .video).first,
      let targetVideo = composition.addMutableTrack(withMediaType: .video, preferredTrackID: kCMPersistentTrackID_Invalid) else {
    fputs("Missing video track\n", stderr)
    exit(3)
}

do {
    try targetVideo.insertTimeRange(sourceVideo.timeRange, of: sourceVideo, at: .zero)
    if let sourceAudio = audioAsset.tracks(withMediaType: .audio).first,
       let targetAudio = composition.addMutableTrack(withMediaType: .audio, preferredTrackID: kCMPersistentTrackID_Invalid) {
        let duration = min(sourceVideo.timeRange.duration, sourceAudio.timeRange.duration)
        try targetAudio.insertTimeRange(CMTimeRange(start: .zero, duration: duration), of: sourceAudio, at: .zero)
    }
    guard let exporter = AVAssetExportSession(asset: composition, presetName: AVAssetExportPresetHighestQuality) else {
        fputs("Could not create exporter\n", stderr)
        exit(4)
    }
    exporter.outputURL = outputURL
    exporter.outputFileType = .mp4
    exporter.shouldOptimizeForNetworkUse = true
    exporter.exportAsynchronously {
        guard exporter.status == .completed else {
            fputs("Mux failed: \(exporter.error?.localizedDescription ?? "unknown")\n", stderr)
            exit(5)
        }
        print("WROTE \(outputURL.path)")
        exit(0)
    }
    RunLoop.current.run()
} catch {
    fputs("Mux failed: \(error)\n", stderr)
    exit(6)
}
