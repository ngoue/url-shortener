export interface ShortenedUrl {
  slug: string;
  url: string;
  redirects: number;
}

export const shortenedUrls: ShortenedUrl[] = [
  {
    slug: "61ob77",
    url: "https://www.example.com",
    redirects: 0,
  },
];

export const createShortenedUrl = (url: string): ShortenedUrl => {
  const slug = Math.random().toString(36).slice(2, 8);
  const shortenedUrl: ShortenedUrl = { slug, url, redirects: 0 };
  shortenedUrls.push(shortenedUrl);
  return shortenedUrl;
};
