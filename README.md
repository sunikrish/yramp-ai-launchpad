# Y-RAMP company website

The public website for Y-RAMP Technologies LLP, built with TanStack Start and deployed to Cloudflare.

## Local setup

1. Install dependencies with `npm install` (or Bun if available).
2. Copy `.env.example` to `.env.local`.
3. Add a Brevo API key as `BREVO_API_KEY`. Never expose it with a `VITE_` prefix.
4. Verify `hello@yramp.com` as a transactional sender and authenticate `yramp.com` in Brevo.
5. Run `npm run dev`.

The contact form sends the enquiry to `hello@yramp.com` and sends an acknowledgment to the visitor. Production deployment must configure `BREVO_API_KEY` as a server-side Cloudflare secret.

## Launch checks

Run `npm run lint` and `npm run build` before deployment. Confirm the contact flow with a real test address after configuring Brevo, and update the Legal Notice with the LLP registration identifiers once issued.
