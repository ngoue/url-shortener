export interface ShortenedUrl {
  slug: string;
  url: string;
  redirects: number;
}

/**
 * An in-memory database of shortened URLs.
 */
export const shortenedUrls: ShortenedUrl[] = [
  {
    slug: "61ob77",
    url: "https://www.example.com",
    redirects: 0,
  },
];

/**
 * Create a new shortened URL.
 *
 * @param url string The URL to shorten.
 * @returns ShortenedUrl The shortened URL.
 */
export const createShortenedUrl = (url: string): ShortenedUrl => {
  // CoPilot suggested this for slugs, my considerations were:
  // - Hash the URL to generate a unique slug.
  // - Random 5-character alphanumeric string.
  const slug = Math.random().toString(36).slice(2, 8);
  const shortenedUrl: ShortenedUrl = { slug, url, redirects: 0 };
  shortenedUrls.push(shortenedUrl);
  return shortenedUrl;
};

/**
 * Delete a shortened URL.
 *
 * @param slug string The slug of the shortened URL to delete.
 * @returns boolean Whether the shortened URL was deleted.
 */
export const deleteShortenedUrl = (slug: string): boolean => {
  const index = shortenedUrls.findIndex(
    (shortenedUrl) => shortenedUrl.slug === slug
  );
  if (index >= 0) {
    shortenedUrls.splice(index, 1);
    return true;
  } else {
    return false;
  }
};
