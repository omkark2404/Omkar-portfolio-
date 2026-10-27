# Omkar Kumar portfolio — start here

This is the existing React/Vite portfolio with content personalisation. It is not a single self-contained HTML file. Opening source `index.html` with a double-click will not run the React app.

## Run from source

Requires Node.js and npm. Open a terminal in this folder:

```sh
npm ci
npm run dev -- --host 127.0.0.1
```

Open the local URL printed by Vite. Do not use paid hosting or services for this step.

## Production preview

```sh
npm run build
npm run preview -- --host 127.0.0.1
```

The production output is `dist`. Spline/Draco/font runtime files are loaded by the original application from external CDNs, so normal internet access to those providers is required. A successful build alone does not guarantee that a restricted network can render 3D.

## Update content safely

Edit `personalization/personal-data.json`, then:

```sh
node scripts/personalize.mjs --config personalization/personal-data.json --dry-run
node scripts/personalize.mjs --config personalization/personal-data.json --apply
npm run build
git diff --check
```

The renderer rejects unexpected edits to protected files, content outputs, templates or asset bytes. To replace an asset, update its source bytes and sourceSha256 in the explicit mapping; do not alter expectedOldSha256. Always review the dry-run. It contains no push/deploy operation.

The `personalization/baseline/` directory is historical source used for safe regeneration. Original-owner strings there are intentional and do not feed the live site.

## Complete the draft

Email, location, employment details, certifications, testimonials, final résumé PDF, validated live demos, website/canonical URL and open-graph preferences remain MISSING or NO_SPECIFIC_CONSTRAINT. Do not publish until the blockers in PERSONALIZATION_REPORT.md are resolved. The contact form refuses to send while email is MISSING. The résumé button opens a clearly marked print-friendly draft.

## Local Git history

The upload contained no `.git`. A new local `baseline` commit records its exact tracked files, and `personalize/omkar-kumar` records the adaptation. There is no remote. If a history bundle is included in the download, restore it with:

```sh
git clone personalization-history.bundle restored-portfolio
```

The source folder itself can run without restoring that history. See LOCAL_COMMANDS.md and PERSONALIZATION_REPORT.md for the exact changes and checks.
