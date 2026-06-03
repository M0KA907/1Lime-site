import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://m0ka907.github.io/1Lime-site/
// Hosted from the public mirror repo M0KA907/1Lime-site (factory repo stays private).
// `site` + `base` make absolute URLs and asset paths resolve correctly under the repo subpath.
export default defineConfig({
  site: 'https://m0ka907.github.io',
  base: '/1Lime-site',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
