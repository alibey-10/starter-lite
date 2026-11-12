# lite-starter

TanStack Start, Tailwind CSS, and shadcn/ui on Cloudflare Workers.

```bash
bun install
bun run dev        # http://localhost:3000
bun run build
bun run deploy
```

Preview deploys upload a new Worker version without promoting it to production:

```bash
bun run deploy:preview                          # https://<version-id>-lite-starter.<subdomain>.workers.dev
bun run deploy:preview --preview-alias my-pr    # https://my-pr-lite-starter.<subdomain>.workers.dev
```

If the repo is connected to Cloudflare Workers Builds, every push to a non-production branch gets a preview URL automatically.

Add a shadcn component:

```bash
pnpm dlx shadcn@latest add button
```
