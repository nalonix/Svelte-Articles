// src/routes/api/gallery/[article]/[slug]/+server.ts

import { json } from '@sveltejs/kit';
import { galleryManifest } from '$lib/imageManifest'; // Import the build-time manifest

interface Params {
    slug: string;
    article: string;
}

export async function GET({ params }: { params: Params }) {
    const { slug, article } = params;

    // Retrieve images from the pre-generated manifest
    if (galleryManifest[article] && galleryManifest[article][slug]) {
        const imageUrls = galleryManifest[article][slug];
        return json(imageUrls);
    } else {
        // Return 404 if the specific gallery is not found
        return json({ error: 'Gallery not found or no images defined' }, { status: 404 });
    }
}