# Root Route Components

This directory contains components that are used in the root route (`/`) of the application. These components form the main layout and structure of the homepage.

## Components Overview

### Header.svelte
A navigation header component (currently unused but available for customization).
- Features:
  - Social media links with icons
  - Responsive layout
  - Uses Phosphor icons
- Props: None (uses global `SOCIALS` constant)

### Hero.svelte
The main hero section of the homepage.
- Features:
  - Large welcome text
  - Watermark background
  - Call-to-action button
  - Responsive design
- Props: None
- Uses:
  - `WatermarkBackground.svelte`
  - Phosphor icons

### Footer.svelte
The site footer component.
- Features:
  - Social media links
  - Gradient background
  - Copyright information
  - Hover effects on social icons
- Props: None (uses global `SOCIALS` constant)

### ArticlesSection.svelte
A dynamic section for displaying and filtering Articles.
- Features:
  - Tag-based filtering
  - Responsive grid layout
  - Article cards display
  - State management for filters
- Props:
  - `Articles`: Array of Article objects
- Uses:
  - `ArticleCard.svelte`
  - Filter tags for categorization

### ArticleCard.svelte
A card component for displaying individual Articles/articles.
- Features:
  - Article banner image
  - Title and description
  - Tags display
  - Like button
  - Fade transition effect
- Props:
  - `article`: Article object containing:
    - `slug`: Unique identifier
    - `title`: Article title
    - `description`: Article description
    - `banner`: Image URL
    - `date`: Publication date
    - `tags`: Array of tags

### WatermarkBackground.svelte
A decorative background component.
- Features:
  - Large watermark text
  - Responsive sizing
  - Low opacity
  - Non-selectable text
- Props: None

## Usage

These components are typically used in the root route layout. Example structure:

```svelte
<!-- +page.svelte -->
<script>
  import Header from './_components/Header.svelte';
  import Hero from './_components/Hero.svelte';
  import ArticlesSection from './_components/ArticlesSection.svelte';
  import Footer from './_components/Footer.svelte';
  
  // Load Articles data
  const articles = [...]; // Your articles data
</script>

<Header />
<Hero />
<ArticlesSection {articles} />
<Footer />
```

## Styling

Components use Tailwind CSS for styling with some custom styles:
- Responsive design using Tailwind breakpoints
- Custom card styles
- Tag styling with active states
- Gradient backgrounds
- Hover effects
- Transitions and animations

## Best Practices

1. Keep the hero section concise and impactful
2. Ensure all images have proper alt text
3. Maintain consistent spacing and typography
4. Use semantic HTML elements
5. Keep the filter tags up to date with your content categories
6. Optimize images for web performance
7. Ensure all interactive elements are accessible
