# URL Shortener

## Implementation Details

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

It utilizes a simple in-memory database to track shortened URLs and the app makes basic REST API reqeusts to list, create, and delete shortened URL records.

When a user visits `http://localhost:3000/{slug}`, they will be redirected to the destination URL for the shortened URL otherwise a 404 page is shown.

## How to Run

To run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

No tests currently available

## Tools Used

- [Next.js](https://nextjs.org)
- [TailwindCSS](https://tailwindcss.com)
