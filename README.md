# Svelte Articles

A modern article server built with SvelteKit, designed for hosting articles with rich media support. Features MDX processing, syntax highlighting, and responsive design.

## Table of Contents
- [Overview](#overview)
- [Article System](#article-system)
- [Media Management](#media-management)
- [Gallery System](#gallery-system)
- [Video Embedding](#video-embedding)
- [Technical Stack](#technical-stack)
- [Development Setup](#development-setup)

## Overview

This project is a full-featured article server that supports:
- MDX-based articles with frontmatter and syntax highlighting
- Rich media galleries with lightbox support
- Video embedding with custom player
- Responsive design with Tailwind CSS
- Table of contents generation
- Tag-based filtering
- Analytics integration

## Article System

### Structure
Articles are written in MDX format and stored in `src/articles/`. Each article requires:

```yaml
---
title: "Article Title"
description: "Brief description"
date: "2024-03-20"
tags: ["web", "svelte"]
banner: "/path/to/banner.jpg"
order: 1
published: true
---
```

### Features
- **MDX Processing**: Enhanced Markdown with JSX support via `mdsvex`
- **Syntax Highlighting**: Code blocks with `rehype-pretty-code`
- **Auto-linking Headers**: Automatic anchor links via `rehype-autolink-headings`
- **GitHub Flavored Markdown**: Support via `remark-gfm`
- **Table of Contents**: Generated from article headings
- **Tag System**: Filter articles by tags
- **Ordering**: Control article display order via `order` field
- **Publishing**: Toggle article visibility with `published` flag

## Media Management

### File Structure
```
static/
  [article-slug]/
    media/
      images/
        gallery/
          [gallery-name]/
            image1.jpg
            image2.png
      videos/
        video1.mp4
```

### Supported Formats
- Images: jpg, png, gif, svg, webp (with lightbox support via `bigger-picture`)
- Videos: mp4, webm (with custom player via `vidstack`)

## Gallery System

### API Endpoints
- `/api/gallery/[article]/[gallery]` - Get images for specific article gallery
- `/api/gallery/[gallery]` - Get images for standalone gallery

### Features
- Lightbox support for image viewing
- Responsive grid layout
- Lazy loading
- Image optimization

## Video Embedding

### Supported Methods
1. **Custom Player** (via `vidstack`)
   ```mdx
   <Video src="/path/to/video.mp4" />
   ```

2. **YouTube Integration**
   ```mdx
   <YouTube id="video-id" />
   ```

3. **Vimeo Integration**
   ```mdx
   <Vimeo id="video-id" />
   ```

## Technical Stack

### Core Technologies
- **Framework**: SvelteKit 2.x
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.x
- **Content**: MDX (via mdsvex)
- **Icons**: Phosphor Icons
- **Package Manager**: pnpm 10.x

### Key Dependencies
- **Content Processing**:
  - `mdsvex`: MDX processing
  - `rehype-pretty-code`: Syntax highlighting
  - `rehype-autolink-headings`: Header linking
  - `rehype-slug`: Header slug generation
  - `remark-gfm`: GitHub Flavored Markdown
  - `unist-util-visit`: AST traversal

- **UI Components**:
  - `bigger-picture`: Lightbox for images
  - `vidstack`: Video player
  - `class-variance-authority`: Component variants
  - `tailwind-merge` & `tailwind-variants`: Styling utilities
  - `clsx`: Class name utilities

- **Analytics**:
  - `@loglib/tracker`: Analytics tracking

## Development Setup

1. **Prerequisites**
   ```bash
   node >= 18.0.0
   pnpm >= 10.0.0
   ```

2. **Installation**
   ```bash
   # Clone the repository
   git clone [repository-url]
   cd svelte-articles

   # Install dependencies
   pnpm install
   ```

3. **Development**
   ```bash
   # Start development server
   pnpm dev

   # Type checking
   pnpm check
   pnpm check:watch

   # Linting and formatting
   pnpm lint
   pnpm format

   # Build for production
   pnpm build

   # Preview production build
   pnpm preview
   ```

### Project Structure
```
svelte-articles/
├── src/
│   ├── articles/        # MDX article content
│   ├── lib/
│   │   ├── components/  # Reusable components
│   │   └── types.ts     # TypeScript definitions
│   └── routes/
│       ├── api/         # API endpoints
│       └── articles/[slug]/      # Article pages
├── static/             # Static assets
│   └── [article-slug]/ # Article media
└── [config files]      # Project configuration
```

### Configuration Files
- `svelte.config.js`: SvelteKit and MDX configuration
- `tailwind.config.js`: Tailwind CSS settings
- `tsconfig.json`: TypeScript configuration
- `vite.config.ts`: Vite bundler settings
- `.prettierrc`: Code formatting rules

### Deployment
The project uses `@sveltejs/adapter-auto` for automatic platform detection. Deploy to:
- Vercel
- Netlify
- Cloudflare Pages
- Or any other platform supporting SvelteKit
