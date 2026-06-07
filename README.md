# Academic Portfolio — GitHub Pages

A clean, minimal academic portfolio website inspired by the [al-folio](https://github.com/alshedivat/al-folio) theme. Pure HTML/CSS/JS — no build tools, no frameworks, no dependencies.

## 🚀 Deploy to GitHub Pages

### Option A: User site (`yourusername.github.io`)

1. Create a new repository named **`yourusername.github.io`** (replace with your actual GitHub username)
2. Clone the repo locally:
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   ```
3. Copy all files from this folder into the repo
4. Push:
   ```bash
   git add .
   git commit -m "Initial portfolio"
   git push origin main
   ```
5. Your site will be live at **`https://yourusername.github.io`** within a few minutes

### Option B: Project site (`yourusername.github.io/portfolio`)

1. Create a new repository with any name (e.g. `portfolio`)
2. Push the files to the `main` branch
3. Go to **Settings → Pages → Source** → select `main` branch, `/ (root)` folder
4. Your site will be live at `https://yourusername.github.io/portfolio`

## 📁 Project Structure

```
├── index.html              ← About / home page
├── publications.html       ← Full publications list
├── cv.html                 ← Curriculum Vitae
├── README.md
└── assets/
    ├── css/
    │   └── style.css       ← All styles (light + dark theme)
    ├── js/
    │   └── main.js         ← Theme toggle, mobile menu, pub toggles
    ├── img/
    │   └── (your photo)    ← Place your profile photo here
    └── pdf/
        └── cv.pdf          ← Place your CV PDF here
```

## ✏️ How to Customise

### Your info
- Search for `Your Name` across all HTML files and replace it
- Search for `✏️` comments in `index.html` for guided placeholders

### Profile photo
1. Add your photo to `assets/img/` (e.g. `photo.jpg`)
2. In `index.html`, replace the `<div class="profile-placeholder">` block with:
   ```html
   <img src="assets/img/photo.jpg" alt="Your Name" class="profile-photo">
   ```

### Social links
Edit the `<div class="social-links">` section in `index.html`. Remove or add icons as needed.

### Publications
Each publication follows this template — copy-paste and fill in:

```html
<li class="pub-item fade-in">
  <div><span class="pub-venue-badge">VENUE</span></div>
  <div>
    <!-- Optional award badge: -->
    <!-- <div class="pub-award">🏆 Best Paper</div> -->
    <div class="pub-title">Paper Title</div>
    <div class="pub-authors">
      <span class="you">Your Name</span>, Co-Author One, and Co-Author Two
    </div>
    <div class="pub-meta">Venue details, Year</div>
    <div class="pub-links">
      <button onclick="toggleEl(this,'abs')">Abs</button>
      <a href="https://doi.org/...">DOI</a>
      <a href="https://arxiv.org/abs/...">arXiv</a>
      <button onclick="toggleEl(this,'bib')">Bib</button>
      <a href="https://github.com/...">Code</a>
    </div>
    <div class="pub-abstract">Your abstract here.</div>
    <div class="pub-bibtex"><pre>@inproceedings{...}</pre></div>
  </div>
</li>
```

### CV entries
Each entry follows this template:

```html
<div class="cv-entry">
  <div class="cv-date">2020 — 2024</div>
  <div class="cv-content">
    <h4>Title / Degree</h4>
    <div class="cv-org"><a href="https://...">Institution</a></div>
    <div class="cv-desc">Optional description.</div>
  </div>
</div>
```

Add new sections by wrapping entries in:

```html
<div class="cv-section fade-in">
  <h3>Section Name</h3>
  <!-- cv-entry blocks here -->
</div>
```

### CV PDF download
1. Place your CV at `assets/pdf/cv.pdf`
2. The download button in `cv.html` already points there

### Colours
Edit the CSS variables in `assets/css/style.css` under `:root` (light) and `[data-theme="dark"]` (dark).

## ✨ Features

- **Light / dark mode** — auto-detects OS preference, persists in localStorage, no flash on load
- **Responsive** — clean layout on mobile with hamburger menu
- **Expandable publications** — click Abs / Bib to reveal abstract and BibTeX
- **Fade-in animations** — subtle scroll-triggered entrance effects
- **Zero dependencies** — pure HTML, CSS, JS. No build step, no npm, no Jekyll
- **SEO-ready** — semantic HTML, meta tags, proper heading hierarchy

## 📄 Licence

MIT — use it however you like.
