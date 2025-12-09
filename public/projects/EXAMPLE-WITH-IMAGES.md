# Example Project with Images

## Overview

This is a demonstration of how to include images in your markdown files.

## Architecture

Here's our system architecture:

![System Architecture](https://placehold.co/800x400/B4975A/FFFFFF/png?text=System+Architecture+Diagram)

The diagram above shows the complete system flow from data ingestion to model deployment.

## Results Visualization

### Performance Comparison

![Performance Graph](https://placehold.co/700x400/800020/FFFFFF/png?text=Performance+Chart)

As shown in the chart, our approach achieves:
- 92% accuracy on test set
- 45% faster inference time
- 30% reduction in model size

### Sample Outputs

<figure>
  <img src="https://placehold.co/600x400/B4975A/FFFFFF/png?text=Sample+Output+1" alt="Sample output 1" />
  <figcaption>Figure 1: Example of generated output with high quality</figcaption>
</figure>

<figure>
  <img src="https://placehold.co/600x400/800020/FFFFFF/png?text=Sample+Output+2" alt="Sample output 2" />
  <figcaption>Figure 2: Another example showing versatility</figcaption>
</figure>

## Multiple Images in Row

You can also display multiple images side by side using HTML:

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin: 2rem 0;">
  <img src="https://placehold.co/400x300/B4975A/FFFFFF/png?text=Image+1" alt="Image 1" style="width: 100%;" />
  <img src="https://placehold.co/400x300/800020/FFFFFF/png?text=Image+2" alt="Image 2" style="width: 100%;" />
</div>

## Using Local Images

To use your own images:

1. Create a folder: `/public/images/projects/your-project-name/`
2. Add your images there
3. Reference them in markdown:

```markdown
![My Image](/images/projects/your-project-name/my-image.png)
```

## Animated GIFs

You can also include GIFs to show animations:

![Demo Animation](https://placehold.co/600x400/B4975A/FFFFFF/png?text=Animated+Demo+GIF)

## Best Practices

1. **Optimize images** - Compress before uploading
2. **Use descriptive filenames** - `model-architecture.png` not `image1.png`
3. **Add alt text** - For accessibility
4. **Responsive images** - They auto-scale on mobile
5. **Group by project** - Keep organized in folders

---

**Note**: The placeholder images above are just examples. Replace them with your actual project images stored in `/public/images/projects/`.
