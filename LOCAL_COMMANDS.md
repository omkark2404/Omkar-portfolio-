# Local workflow and commit template

## Preflight and preservation (already performed)

The ZIP had no Git history. All 182 original files were compared byte-for-byte with the upload. The original archive and a source tar backup were saved outside the source directory; exact paths and archive SHA256 are in personalization/baseline-manifest.json.

```sh
git init -b baseline
git add .
git commit -m "chore: preserve uploaded upstream baseline"
git switch -c personalize/omkar-kumar
```

Commit identity was supplied per invocation using `git -c user.name='Omkar Kumar' -c user.email='omkark2404@users.noreply.github.com'`; no real email was inferred or configured globally. The baseline is newly created local history, not verified upstream ancestry. The ZIP's commit comment is recorded as an archive hint only.

## Content migration

```sh
node scripts/personalize.mjs --config personalization/personal-data.json --dry-run
node scripts/personalize.mjs --config personalization/personal-data.json --apply
node scripts/personalize.mjs --config personalization/personal-data.json --dry-run
npm ci --ignore-scripts --no-audit --no-fund
npm run build
npm run preview -- --host 127.0.0.1
node scripts/verify-personalization.mjs
git diff --check
git diff --stat
git diff --ignore-space-at-eol
```

The initial build was checked before personalisation and again afterward. `--host 0.0.0.0` encountered a runtime interface-enumeration issue; explicit loopback preview works. No package versions or lockfile bytes changed.

The automated renderer verifies protected-file hashes and expected content matches before writing. Asset replacements use explicit source/destination mappings and SHA256. It rejects drift and produces personalization/change-manifest.json. Reapplying unchanged config produces zero changes.

Modified CRLF content files were normalised to LF and trailing whitespace removed so `git diff --check` passes. No protected file was normalised.

## Residual scan

```sh
rg -n -i 'jayant|potdar|jayant-1|jayantpotdar' src index.html public/resume
```

Expected: no active-text matches. Remaining original-owner occurrences in LICENSE, original-project credits, ASSET_SOURCES.md, saved baseline templates and documentation are intentional attribution/provenance.

## Reusable commit message

```text
feat(content): personalize portfolio for Omkar Kumar

- replace verified identity and profile content
- update projects and assets from primary sources
- update draft resume and contact/social values
- preserve original UI, 3D assets and architecture
```

No command in scripts/personalize.mjs pushes or deploys. Remote publication requires a separate explicit action and a reviewable destination.
