# Gallery Images API

A simple endpoint that lists all images in a gallery folder.

## Usage

```
GET /api/gallery/[gallery-name]
```

Returns a list of image URLs for the specified gallery:

```json
[
  "/media/images/gallery/my-gallery/image1.jpg",
  "/media/images/gallery/my-gallery/image2.png"
]
```

## Notes

- Images should be in: `static/media/images/gallery/[gallery-name]/`
- Supports: jpg, png, gif, svg, webp
- Returns 500 error if gallery folder is missing or unreadable
