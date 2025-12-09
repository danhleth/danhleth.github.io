# Project Markdown Files

This directory contains detailed markdown documentation for each project displayed on the website.

## File Structure

Each project should have its own markdown file named with the project ID:
- `{project-id}.md` - Full project documentation

## Creating a New Project Markdown File

1. Create a new `.md` file in `/public/projects/`
2. Name it using the project ID (e.g., `my-project.md`)
3. Update the project in `/src/data/projects.ts` to reference it:

```typescript
{
  id: 'my-project',
  title: 'My Project',
  description: 'Short description...',
  markdownFile: 'my-project.md', // Add this line
  // ... other fields
}
```

## Markdown Guidelines

### Recommended Structure

```markdown
# Project Title

## Overview
Brief introduction to the project

## Background
Context and motivation

## Technical Approach
Methodology and implementation details

## Results
Outcomes and achievements

## Future Work
Next steps and improvements
```

### Supported Markdown Features

- **Headings**: # H1, ## H2, ### H3
- **Bold**: **text** or __text__
- **Italic**: *text* or _text_
- **Lists**: Ordered and unordered
- **Code blocks**: \`\`\`language ... \`\`\`
- **Inline code**: \`code\`
- **Links**: [text](url)
- **Tables**: Standard markdown tables
- **Blockquotes**: > quote
- **Horizontal rules**: ---

### Styling Tips

The markdown is rendered with custom styling:
- Headings are styled to match the website theme
- Code blocks have syntax highlighting support
- Links use the accent color (#B4975A)
- Tables are properly bordered
- Dark mode is fully supported

## Example

See `lays-imc.md` for a complete example of a well-structured project documentation.

## Tips

1. Use headings hierarchically (don't skip levels)
2. Keep paragraphs concise and readable
3. Use code blocks for technical examples
4. Include tables for comparative data
5. Add lists for features or steps
6. Bold important terms on first mention

## Fallback

If a markdown file is not found or fails to load, the system will fall back to the `fullDescription` field in the project data.
