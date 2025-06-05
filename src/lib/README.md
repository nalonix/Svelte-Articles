# Library Files

This directory contains utility files and type definitions that support the article system. Here's an overview of each file:

## TypeScript Files

### config.ts
Contains global configuration settings for the application.
- Currently defines the site title
- Can be extended to include other global configuration values

### constants.ts
Defines constant values used throughout the application.
- Contains social media links and icons
- Uses Phosphor icons for social media platforms
- Exports a `SOCIALS` array with platform information

### extractHeadings.ts
A utility for processing markdown content to extract and structure headings.
- Extracts headings from markdown AST (Abstract Syntax Tree)
- Generates slugs for each heading
- Maintains heading hierarchy
- Used by the TableOfContents component
- Exports a function that can be used as a remark plugin

### index.ts
Entry point for the `$lib` alias in SvelteKit.
- Allows importing files from this directory using the `$lib` alias
- Currently serves as a placeholder for future exports

### types.ts
Contains TypeScript type definitions used throughout the application.
- Defines interfaces and types for:
  - Markdown nodes
  - File data structures
  - Component props
  - Other shared types

### utils.ts
Contains utility functions for common operations.
- Provides a `cn` function for merging Tailwind CSS classes
- Uses `clsx` and `tailwind-merge` for class name management
- Helps maintain consistent styling across components

## Usage

These files can be imported using the `$lib` alias in SvelteKit. For example:

```typescript
import { SOCIALS } from '$lib/constants';
import { cn } from '$lib/utils';
import type { MarkdownNode } from '$lib/types';
```

## Best Practices

1. Keep type definitions in `types.ts`
2. Use `utils.ts` for shared utility functions
3. Add new constants to `constants.ts`
4. Update `config.ts` for global configuration changes
5. Use the `$lib` alias for imports to maintain consistency
