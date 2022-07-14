# Async Await

```swift
extension LPMetadataProvider {
    func meta(url: String) async -> Meta? {
        guard let url = URL(string: url) else { return nil }
        let metadata = try? await startFetchingMetadata(for: url)
        let image = await metadata?.imageProvider?.loadImage()
        let meta = Meta(metadata: metadata, image: image)
        return meta
    }
}
```


:::note
Test
:::
