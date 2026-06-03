# 1Lime — site (public deploy mirror)

Public hosting mirror of the 1Lime factory site. Source of truth is the private
factory repo `M0KA907/1Lime` (`apps/site`). This repo exists only to host the built
site on GitHub Pages (free Pages requires a public repo).

- Live: https://m0ka907.github.io/1Lime-site/
- Stack: Astro SSG → GitHub Pages (Actions source)
- Built and deployed by `.github/workflows/deploy.yml` on push to `main`.

## Local dev
```bash
npm install && npm run dev
```
