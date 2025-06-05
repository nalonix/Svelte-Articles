# Articles API Endpoint

This is a simple API endpoint that serves up all the articles for our blog. Here's what it does in plain English:

## What This Does

When someone visits `/api/articles`, this code:
1. Looks through all the markdown files in our `src/articles` folder
2. Reads each article's information (like title, description, date, etc.)
3. Only includes articles that are marked as "published"
4. Sorts the articles based on their "order" number (so we can control which articles appear first)
5. Sends back a list of all the articles in a format that's easy for our website to use

## How to Use It

You can get all articles by making a GET request to `/api/articles`. The response will be a list of articles, where each article has:
- A title
- A description
- A date
- Tags
- A banner image
- And other article details

## Example Response

```json
[
  {
    "title": "My First Article",
    "description": "This is a great article about...",
    "date": "2024-03-20",
    "tags": ["web", "svelte"],
    "banner": "/images/banner.jpg",
    "slug": "my-first-article",
    "order": 1,
    "published": true
  },
  // ... more articles
]
```

## Technical Notes

- Articles are stored as markdown (`.md`) files in the `src/articles` directory
- Each article needs to have a `published: true` in its frontmatter to appear in the list
- Articles are sorted by their `order` number (lower numbers appear first)
- The endpoint automatically updates when you add or modify articles in the `src/articles` folder 