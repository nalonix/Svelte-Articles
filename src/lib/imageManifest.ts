// src/lib/imageManifest.ts

// This file uses Vite's import.meta.glob to build a manifest of all gallery images at build time.
// It scans the static directory for images based on the expected folder structure.

const allGalleryFiles = import.meta.glob(
    '/static/**/media/images/gallery/**/*.{jpg,png,gif,svg,webp}',
    { eager: true, query: '?url' }
);

interface GalleryManifest {
    [article: string]: {
        [slug: string]: string[];
    };
}

const galleryManifest: GalleryManifest = {};

for (const path in allGalleryFiles) {
    const relativePath = path.replace('/static', '');
    const parts = relativePath.split('/');


    const article = parts[1];
    const slug = parts[5];
    const imageUrl = (allGalleryFiles[path] as { default: string }).default.replace('/static', '');

    if (article && slug && imageUrl) {
        if (!galleryManifest[article]) {
            galleryManifest[article] = {};
        }
        if (!galleryManifest[article][slug]) {
            galleryManifest[article][slug] = [];
        }
        galleryManifest[article][slug].push(imageUrl);
    }
}

// Sort image URLs - alphabetically
for (const articleKey in galleryManifest) {
    for (const slugKey in galleryManifest[articleKey]) {
        galleryManifest[articleKey][slugKey].sort();
    }
}



export { galleryManifest };