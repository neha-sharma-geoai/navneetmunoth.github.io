# Dr. Navneet Munoth — Academic Website

A responsive, static academic profile for Dr. Navneet Munoth. The site uses plain HTML and CSS, so it can be hosted on GitHub Pages without a build step.

The site includes a detailed academic CV based on the supplied resumes. Personal and family details and private residential contact information from those documents are intentionally omitted from the public profile.

## Preview locally

Open `index.html` in a browser, or serve this folder with Python:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

In the repository settings, open **Pages**, select **Deploy from a branch**, and choose the `main` branch and `/ (root)` folder. After deployment, the site will be available at the repository’s GitHub Pages URL.

## Updating the site

- Edit `index.html` to update profile text, research areas, publications, and links.
- Edit `assets/styles.css` to adjust the visual design and responsive layouts.
- Replace `assets/navneet-munoth.jpg` with an updated portrait, keeping the same filename or updating the image path in `index.html`.
- The CV details are grouped in expandable sections on the page. Verify bibliographic and project details against source records when updating them.

Profile details and selected coauthored publications were taken from the linked profile repository. Please verify and update publication metadata as new work is added.

## Design features

- Light and dark themes (toggle in the header; remembers choice, follows system preference by default).
- Larger type scale, inline SVG graphics (contour lines, skyline), scrolling topic ticker, scroll progress bar and reveal animations (disabled for reduced-motion users).
