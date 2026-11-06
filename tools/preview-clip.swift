// Cuts a short silent clip for a case card. Compile with: swiftc -O tools/preview-clip.swift -o /tmp/clip
// Run: /tmp/clip <video url> assets/video/previews/<case id>.mp4 <where to start, 0-1> 4
import AVFoundation
let a = CommandLine.arguments
let asset = AVURLAsset(url: URL(string: a[1])!)
let frac = Double(a[3])!, secs = Double(a[4])!
let sem = DispatchSemaphore(value: 0)
Task {
    do {
        let dur = try await asset.load(.duration).seconds
        guard let vt = try await asset.loadTracks(withMediaType: .video).first else { print("no video"); exit(1) }
        let start = CMTime(seconds: max(0, dur * frac), preferredTimescale: 600)
        let len = CMTime(seconds: min(secs, dur), preferredTimescale: 600)
        let comp = AVMutableComposition()
        let t = comp.addMutableTrack(withMediaType: .video, preferredTrackID: kCMPersistentTrackID_Invalid)!
        try t.insertTimeRange(CMTimeRange(start: start, duration: len), of: vt, at: .zero)
        t.preferredTransform = try await vt.load(.preferredTransform)
        let ex = AVAssetExportSession(asset: comp, presetName: AVAssetExportPreset640x480)!
        ex.outputURL = URL(fileURLWithPath: a[2]); ex.outputFileType = .mp4; ex.shouldOptimizeForNetworkUse = true
        try? FileManager.default.removeItem(atPath: a[2])
        await ex.export()
        print("status", ex.status.rawValue, ex.error as Any, "duration", dur)
    } catch { print("error", error) }
    sem.signal()
}
sem.wait()
