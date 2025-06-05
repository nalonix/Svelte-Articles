# Gallery Images API Endpoint

This endpoint helps us load images for article galleries. Think of it as a helper that finds and serves up all the images for a specific gallery in an article.

## What This Does

When someone wants to see the images in an article's gallery, this code:
1. Takes an article name and gallery name (from the URL)
2. Looks in the right folder for that gallery's images
3. Finds all the image files (jpg, png, gif, svg, or webp)
4. Creates a list of web-friendly URLs for each image
5. Sends back the list of image URLs

## How to Use It

You can get all images for a gallery by making a GET request to:
```
/api/gallery/[article-name]/[gallery-name]
```

For example:
```
/api/gallery/my-article/my-gallery
```

## Example Response

```json
[
  "/my-article/media/images/gallery/my-gallery/image1.jpg",
  "/my-article/media/images/gallery/my-gallery/image2.png",
  "/my-article/media/images/gallery/my-gallery/image3.webp"
]
```

## Technical Notes

- Images should be stored in: `static/[article-name]/media/images/gallery/[gallery-name]/`
- Supported image formats: jpg, png, gif, svg, webp
- If the gallery folder doesn't exist or can't be read, you'll get an error message
- The URLs returned are ready to use in `<img>` tags on the website

## Folder Structure Example

```
static/
  my-article/
    media/
      images/
        gallery/
          my-gallery/
            image1.jpg
            image2.png
            image3.webp
```
