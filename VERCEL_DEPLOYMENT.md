# Vercel preparation — commands not executed

Publication is blocked by unresolved facts and the test limitations listed in PERSONALIZATION_REPORT.md. No deployment, repository push, remote write or domain change was performed.

## A. Git integration

1. Finish missing content and re-run build/validation locally.
2. Separately approve creating or pushing your chosen repository. No destination repository has been assumed.
3. Import that repository into Vercel and select the folder containing package.json.
4. Framework preset: Vite. Install: `npm ci`. Build: `npm run build`. Output: `dist`.
5. Configure only your own EmailJS service/template/public key. These `VITE_` values are exposed to the frontend build; never put private service secrets here. Restrict recipients and allowed origins in the EmailJS dashboard.
6. Use a preview deployment first. Check external CDN requests and every contact/resume link.

## B. CLI preview — requires separate publication approval

From the project root, after local validation:

```sh
npx vercel login
npx vercel
```

Select the intended account/project, Vite, `npm run build` and `dist`. This publishes a remote preview; it has not been run here.

## C. Production — requires separate publication approval

```sh
npx vercel --prod
```

Run only after preview review and explicit production approval. Configure a custom domain separately. No `vercel.json` or Next.js configuration is required by this migration.

## Existing environment variable names

- VITE_APP_EMAILJS_SERVICE_ID
- VITE_APP_EMAILJS_TEMPLATE_ID
- VITE_APP_EMAILJS_PUBLIC_KEY

`.env.example` contains empty placeholders only. EmailJS delivery itself has not been tested, and the template dashboard must be checked to ensure messages go to Omkar's verified address.
