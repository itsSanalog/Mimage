# [ImageMasker.github.io](https://imageMasker.github.io)

### Image masker for /r/PictureGame

### Local development

The current app uses native ES modules, so it must be served over HTTP for local development. Opening the site with `file://` will not work correctly. GitHub Pages is unaffected because it already serves the site over HTTPS.

Run any simple static server from the repo root, for example:

```bash
python -m http.server 8000
# or
npx serve .
```

Then open `http://localhost:8000`.

For a manual browser verification checklist after larger changes, use [`docs/manual-smoke-test.md`](./docs/manual-smoke-test.md).

Optional development assertions can be enabled with `?devAsserts=1` in the URL or by setting `localStorage['imagemasker.dev.asserts'] = '1'` in DevTools.