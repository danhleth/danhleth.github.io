# How to Add Images to Markdown Files

## Using Images in Your Project Markdown

You can add images to your markdown files in three ways:

### 1. Images from Public Folder

Store images in `/public/images/projects/` and reference them:

```markdown
![Project Screenshot](/images/projects/my-project-screenshot.png)
```

### 2. External Images (URLs)

Use direct URLs to images hosted elsewhere:

```markdown
![Architecture Diagram](https://example.com/path/to/image.png)
```

### 3. Images with Captions

Use HTML for more control:

```markdown
<figure>
  <img src="/images/projects/result.png" alt="Results visualization" />
  <figcaption>Figure 1: Model performance comparison</figcaption>
</figure>
```

## Image Best Practices

### Recommended Image Sizes
- **Screenshots**: Max width 1200px
- **Diagrams**: 800-1000px wide
- **Icons/Logos**: 200-400px
- **Format**: Use WebP or PNG for quality, JPEG for photos

### Styling
Images are automatically styled with:
- Rounded corners
- Drop shadow
- Responsive sizing
- Dark mode border

### Example: Full Project with Images

```markdown
# My Awesome Project

## Overview
This project achieves amazing results...

![System Architecture](/images/projects/architecture.png)

## Results

Our model achieved state-of-the-art performance:

![Performance Graph](/images/projects/performance-chart.png)

The image above shows our model (blue line) outperforming baselines.

## Demo

<figure>
  <img src="/images/projects/demo.gif" alt="Live demo" />
  <figcaption>Interactive demo of the system in action</figcaption>
</figure>
```

## Directory Structure

```
public/
  images/
    projects/
      lays-imc/
        architecture.png
        results.png
        demo.gif
      brain-tumor/
        segmentation-example.png
        comparison.png
```

## Tips

1. **Optimize images** before uploading (compress, resize)
2. **Use descriptive alt text** for accessibility
3. **Group related images** in project-specific folders
4. **Consider using WebP** format for better performance
5. **Add captions** to provide context
