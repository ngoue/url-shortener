interface ShortenedURL {
  slug: string;
  url: string;
  redirects: number;
}

export const shortendURLs: { [key: string]: ShortenedURL } = {
  "61ob77": {
    slug: "61ob77",
    url: "https://www.example.com",
    redirects: 0,
  },
};

export const createShortenedURL = (url: string): ShortenedURL => {
  const slug = Math.random().toString(36).slice(2, 8);
  const shortenedURL: ShortenedURL = { slug, url, redirects: 0 };
  shortendURLs[slug] = shortenedURL;
  return shortenedURL;
};
