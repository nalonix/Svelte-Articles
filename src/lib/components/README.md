# Article Components

This directory contains reusable components that will be reused through out the project. These are components used with in the markdown files and allow to enhance the contents displayed. 


## Components Overview

### VideoPlayer.svelte
A video player component built with Vidstack that provides a modern, accessible video playback experience.
- Features:
  - Custom video player with thumbnail support
  - Responsive design
  - Accessible controls
- Props:
  - `src`: Video source URL
  - `title`: Video title
  - `thumbnails`: Thumbnail image URL

### Link.svelte
A styled link component for external references in articles.
- Features:
  - Consistent styling for external links
  - Hover effects with underline
  - Opens in new tab by default
- Props:
  - `name`: Link text
  - `href`: Link URL

### Gallery.svelte
An interactive image gallery component that displays a collection of images with lightbox functionality.
- Features:
  - Lightbox image viewer using BiggerPicture
  - Responsive grid layout
  - Image captions
  - Lazy loading
- Props:
  - `id`: Unique identifier for the gallery
  - `artivle`: article identifier
  - `caption`: Optional caption text

### TableOfContents.svelte
A dynamic table of contents component that automatically generates a hierarchical navigation from article headings.
- Features:
  - Automatic heading hierarchy detection
  - Smooth scrolling to sections
  - Nested navigation structure
- Props:
  - `headings`: Array of heading objects with text, level, and slug

### Tags.svelte
A component for displaying article tags/categories.
- Features:
  - Flexible tag layout
  - Consistent tag styling
  - Responsive design
- Props:
  - `tags`: Array of tag strings

## Usage

These components are designed to be used within MDX articles and can be imported directly in your content. Example:

```mdx
---
title: My Article
tags: ['web', 'svelte', 'tutorial']
---

import VideoPlayer from '$lib/components/VideoPlayer.svelte';
import Gallery from '$lib/components/Gallery.svelte';
import Tags from '$lib/components/Tags.svelte';

<Tags tags={tags} />

# Article Content

<VideoPlayer 
  src="/videos/demo.mp4"
  title="Demo Video"
  thumbnails="/thumbnails/demo.jpg"
/>

<Gallery 
  id="tokyo"
  article="japancities"
  caption="Screenshots of the implementation"
/>
```

## Styling

Components use Tailwind CSS for styling and can be customized through the global Tailwind configuration. Some components include additional custom styles that can be modified as needed.
