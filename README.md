# Netlify Dev Error Demo

While using Netlify CLI's local `dev` feature, everything works except POSTing to form actions.

## Reproduction

1. Clone this repo
1. Open a terminal to the repo's directory
1. Install dependencies (I use `pnpm`)
1. Run `netlify dev` using your preferred package manager. For example, `pnpm exec netlify dev`. This will use the version of `netlify-cli` specified in `package.json` instead of your global install.
1. Open the development site specified in the `dev` command output - mine is usually `localhost:8888`, while the SvelteKit route is `localhost:5173`
1. Click the "Submit" button in the index (`/`) route.
1. Error will occur

![Screenshot of Netlify CLI function not found error](readme-images/2023-08-15 07.24.02.gif)

{% note %}

NOTE: Repeating the last two steps on on the SvelteKit server (`localhost:5173` for me), should yield a redirect to the `/success` page.

{% endnote %}

## What's happening

After walking through the reproduction steps, the web browser displays an error: `Function not found...`.

![Reproduction of netlify cli's sveltekit form action error](readme-images/2023-08-15 07.24.02.gif)

## What I'm expecting to happen

After walking through the reproduction steps, the web browser is redirected `/success`.

![Recording of SvelteKit form successfully posting to an action that redirects to a success page](/readme-images/2023-08-15 07.24.57.gif)
