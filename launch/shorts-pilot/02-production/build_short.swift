import AVFoundation
import AppKit
import CoreGraphics
import CoreText
import Foundation

guard CommandLine.arguments.count == 4 else {
    fputs("usage: build_short.swift IMAGE AUDIO OUTPUT\n", stderr)
    exit(2)
}

let imageURL = URL(fileURLWithPath: CommandLine.arguments[1])
let audioURL = URL(fileURLWithPath: CommandLine.arguments[2])
let outputURL = URL(fileURLWithPath: CommandLine.arguments[3])

guard let source = CGImageSourceCreateWithURL(imageURL as CFURL, nil),
      let image = CGImageSourceCreateImageAtIndex(source, 0, nil) else {
    fputs("Could not decode image\n", stderr)
    exit(3)
}

let audio = AVAsset(url: audioURL)
let audioDuration = CMTimeGetSeconds(audio.duration)
guard audioDuration.isFinite, audioDuration > 1 else {
    fputs("Could not read audio duration\n", stderr)
    exit(4)
}

let width = 1080
let height = 1920
let fps = 30
let frameDuration = CMTime(value: 1, timescale: CMTimeScale(fps))
let tempURL = outputURL.deletingPathExtension().appendingPathExtension("video-only.mp4")
try? FileManager.default.removeItem(at: tempURL)
try? FileManager.default.removeItem(at: outputURL)

let writer = try AVAssetWriter(outputURL: tempURL, fileType: .mp4)
let videoSettings: [String: Any] = [
    AVVideoCodecKey: AVVideoCodecType.hevc,
    AVVideoWidthKey: width,
    AVVideoHeightKey: height
]
let videoInput = AVAssetWriterInput(mediaType: .video, outputSettings: videoSettings)
videoInput.expectsMediaDataInRealTime = false
let adaptor = AVAssetWriterInputPixelBufferAdaptor(
    assetWriterInput: videoInput,
    sourcePixelBufferAttributes: [
        kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32ARGB,
        kCVPixelBufferWidthKey as String: width,
        kCVPixelBufferHeightKey as String: height
    ]
)
writer.add(videoInput)
writer.startWriting()
writer.startSession(atSourceTime: .zero)

let captions = [
    "You send a message. Hours pass.",
    "The mind says: They don't care.",
    "We are the Creator.",
    "We entered this game of experiences.",
    "The Creator is shared in both lives.",
    "You do not yet know why the reply has not come.",
    "You cannot dictate the next scene.",
    "A considerate follow-up is still participation.",
    "What reply are you demanding?",
    "Remember the same Creator in the other person.",
    "Notice what changes, or what does not.",
    "Explore the free reflection at Mind Clarity."
]
let weights = captions.map { max(1, $0.split(separator: " ").count) }
let totalWeight = weights.reduce(0, +)
var ranges: [(Double, Double, String)] = []
var cursor = 0.0
for (caption, weight) in zip(captions, weights) {
    let next = cursor + audioDuration * Double(weight) / Double(totalWeight)
    ranges.append((cursor, next, caption))
    cursor = next
}

func font(_ size: CGFloat, weight: CTFontSymbolicTraits = []) -> CTFont {
    let base = CTFontCreateWithName("Avenir Next" as CFString, size, nil)
    if weight.isEmpty { return base }
    return CTFontCreateCopyWithSymbolicTraits(base, size, nil, weight, weight) ?? base
}

func drawText(_ text: String, in context: CGContext, rect: CGRect, size: CGFloat, color: CGColor, alignment: NSTextAlignment = .center) {
    let paragraph = NSMutableParagraphStyle()
    paragraph.alignment = alignment
    paragraph.lineBreakMode = .byWordWrapping
    let attributes: [NSAttributedString.Key: Any] = [
        .font: font(size, weight: .traitBold),
        .foregroundColor: color,
        .paragraphStyle: paragraph
    ]
    let attributed = NSAttributedString(string: text, attributes: attributes)
    let framesetter = CTFramesetterCreateWithAttributedString(attributed)
    let path = CGPath(rect: rect, transform: nil)
    let frame = CTFramesetterCreateFrame(framesetter, CFRange(location: 0, length: attributed.length), path, nil)
    context.saveGState()
    context.textMatrix = .identity
    context.translateBy(x: 0, y: CGFloat(height))
    context.scaleBy(x: 1, y: -1)
    CTFrameDraw(frame, context)
    context.restoreGState()
}

func roundedRect(_ rect: CGRect, radius: CGFloat, in context: CGContext, fill: CGColor) {
    context.setFillColor(fill)
    context.addPath(CGPath(roundedRect: rect, cornerWidth: radius, cornerHeight: radius, transform: nil))
    context.fillPath()
}

let frameCount = Int(ceil(audioDuration * Double(fps)))
for index in 0..<frameCount {
    while !videoInput.isReadyForMoreMediaData { Thread.sleep(forTimeInterval: 0.002) }
    var pixelBuffer: CVPixelBuffer?
    CVPixelBufferCreate(kCFAllocatorDefault, width, height, kCVPixelFormatType_32ARGB, nil, &pixelBuffer)
    guard let buffer = pixelBuffer else {
        fputs("Could not create pixel buffer\n", stderr)
        exit(5)
    }
    CVPixelBufferLockBaseAddress(buffer, [])
    defer { CVPixelBufferUnlockBaseAddress(buffer, []) }
    guard let base = CVPixelBufferGetBaseAddress(buffer) else {
        fputs("Could not access pixel buffer\n", stderr)
        exit(6)
    }
    let bytesPerRow = CVPixelBufferGetBytesPerRow(buffer)
    guard let context = CGContext(
        data: base,
        width: width,
        height: height,
        bitsPerComponent: 8,
        bytesPerRow: bytesPerRow,
        space: CGColorSpaceCreateDeviceRGB(),
        bitmapInfo: CGImageAlphaInfo.premultipliedFirst.rawValue | CGBitmapInfo.byteOrder32Big.rawValue
    ) else { exit(7) }
    let t = Double(index) / Double(fps)
    context.setFillColor(CGColor(red: 0.03, green: 0.04, blue: 0.05, alpha: 1))
    context.fill(CGRect(x: 0, y: 0, width: width, height: height))
    let imageScale = max(CGFloat(width) / CGFloat(image.width), CGFloat(height) / CGFloat(image.height)) * (1.04 + 0.035 * CGFloat(t / audioDuration))
    let drawWidth = CGFloat(image.width) * imageScale
    let drawHeight = CGFloat(image.height) * imageScale
    let x = (CGFloat(width) - drawWidth) / 2 - CGFloat(18 * sin(t / audioDuration * Double.pi))
    let y = (CGFloat(height) - drawHeight) / 2 - CGFloat(18 * cos(t / audioDuration * Double.pi))
    context.draw(image, in: CGRect(x: x, y: y, width: drawWidth, height: drawHeight))
    let gradient = CGGradient(colorsSpace: CGColorSpaceCreateDeviceRGB(), colors: [
        CGColor(red: 0.02, green: 0.03, blue: 0.05, alpha: 0.72),
        CGColor(red: 0.02, green: 0.03, blue: 0.05, alpha: 0.05),
        CGColor(red: 0.02, green: 0.03, blue: 0.05, alpha: 0.82)
    ] as CFArray, locations: [0.0, 0.44, 1.0])!
    context.drawLinearGradient(gradient, start: CGPoint(x: 0, y: 0), end: CGPoint(x: 0, y: CGFloat(height)), options: [])
    drawText("MIND CLARITY", in: context, rect: CGRect(x: 70, y: 90, width: 940, height: 48), size: 28, color: CGColor(gray: 1, alpha: 0.88))
    if t < 4.5 {
        drawText("When a message has no reply", in: context, rect: CGRect(x: 74, y: 250, width: 930, height: 180), size: 68, color: CGColor(gray: 1, alpha: 0.98))
    }
    if let current = ranges.first(where: { t >= $0.0 && t < $0.1 }) {
        let box = CGRect(x: 70, y: 1450, width: 940, height: 225)
        roundedRect(box, radius: 26, in: context, fill: CGColor(red: 0.02, green: 0.03, blue: 0.05, alpha: 0.76))
        drawText(current.2, in: context, rect: CGRect(x: 106, y: 1492, width: 868, height: 145), size: 42, color: CGColor(gray: 1, alpha: 0.98))
    }
    drawText("Free reflection → mindclarity.co.in", in: context, rect: CGRect(x: 70, y: 1795, width: 940, height: 50), size: 26, color: CGColor(red: 0.92, green: 0.84, blue: 0.55, alpha: 0.98))
    if !adaptor.append(buffer, withPresentationTime: CMTimeMultiply(frameDuration, multiplier: Int32(index))) {
        fputs("Could not append frame \(index): \(writer.error?.localizedDescription ?? "unknown")\n", stderr)
        exit(8)
    }
}
videoInput.markAsFinished()
writer.finishWriting {
    guard writer.status == .completed else {
        fputs("Video render failed: \(writer.error?.localizedDescription ?? "unknown")\n", stderr)
        exit(8)
    }
    let composition = AVMutableComposition()
    do {
        guard let videoTrack = AVAsset(url: tempURL).tracks(withMediaType: .video).first,
              let compositionVideo = composition.addMutableTrack(withMediaType: .video, preferredTrackID: kCMPersistentTrackID_Invalid) else { exit(9) }
        try compositionVideo.insertTimeRange(CMTimeRange(start: .zero, duration: videoTrack.timeRange.duration), of: videoTrack, at: .zero)
        if let sourceAudio = audio.tracks(withMediaType: .audio).first,
           let compositionAudio = composition.addMutableTrack(withMediaType: .audio, preferredTrackID: kCMPersistentTrackID_Invalid) {
            try compositionAudio.insertTimeRange(CMTimeRange(start: .zero, duration: min(audio.duration, videoTrack.timeRange.duration)), of: sourceAudio, at: .zero)
        }
        guard let exporter = AVAssetExportSession(asset: composition, presetName: AVAssetExportPresetHighestQuality) else { exit(10) }
        exporter.outputURL = outputURL
        exporter.outputFileType = .mp4
        exporter.shouldOptimizeForNetworkUse = true
        exporter.exportAsynchronously {
            if exporter.status != .completed {
                fputs("Mux failed: \(exporter.error?.localizedDescription ?? "unknown")\n", stderr)
                exit(11)
            }
            try? FileManager.default.removeItem(at: tempURL)
            print("WROTE \(outputURL.path) duration=\(audioDuration)")
            exit(0)
        }
        RunLoop.current.run()
    } catch {
        fputs("Composition failed: \(error)\n", stderr)
        exit(12)
    }
}
RunLoop.current.run()
