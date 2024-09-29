export interface ShortenedUrl {
  slug: string;
  url: string;
  redirects: number;
}

export const shortenedUrls: { [key: string]: ShortenedUrl } = {
  "61ob77": {
    slug: "61ob77",
    url: "https://www.example.com",
    redirects: 0,
  },
};

export const createShortenedURL = (url: string): ShortenedUrl => {
  const slug = Math.random().toString(36).slice(2, 8);
  const shortenedURL: ShortenedUrl = { slug, url, redirects: 0 };
  shortenedUrls[slug] = shortenedURL;
  return shortenedURL;
};
