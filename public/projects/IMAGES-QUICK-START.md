# Quick Reference: Adding Images to Project Markdown

## ✅ Yes, Images Work in Markdown Files!

The ProjectDetailPage.tsx fully supports images in markdown with automatic styling.

## 📝 Three Ways to Add Images

### 1. Local Images (Recommended)
```markdown
![Description](/images/projects/your-project/image.png)
```

**Steps:**
1. Create folder: `/public/images/projects/your-project-name/`
2. Add your images there (PNG, JPG, WebP, GIF)
3. Reference in markdown with path starting from `/images/...`

### 2. External URLs
```markdown
![Description](https://example.com/image.png)
```

### 3. HTML with Captions
```html
<figure>
  <img src="/images/projects/my-image.png" alt="Description" />
  <figcaption>Figure 1: Your caption here</figcaption>
</figure>
```

## 🎨 Automatic Styling

Images are automatically styled with:
- ✓ Rounded corners
- ✓ Drop shadow
- ✓ Responsive sizing (mobile-friendly)
- ✓ Dark mode border
- ✓ Centered alignment
- ✓ Proper spacing

## 📂 Recommended Structure

```
public/
  images/
    projects/
      lays-imc/
        architecture.png
        results.png
      brain-tumor/
        example.png
      mlops/
        pipeline.png
```

## 💡 Example Usage

```markdown
# My Project

## Architecture

![System Design](/images/projects/my-project/architecture.png)

Our system consists of three main components...

## Results

![Performance Chart](/images/projects/my-project/results.png)

The chart shows our model achieving 95% accuracy.
```

## 🚀 Try It Now!

1. Add an image to `/public/images/projects/`
2. Reference it in your markdown file
3. View the project detail page
4. The image will render beautifully!

---

**See EXAMPLE-WITH-IMAGES.md for a complete working example.**
