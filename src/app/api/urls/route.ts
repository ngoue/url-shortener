import {
  createShortenedUrl,
  deleteShortenedUrl,
  shortenedUrls,
} from "@/app/database";

/**
 * List all shortened URLs.
 */
export async function GET() {
  return Response.json(shortenedUrls);
}

/**
 * Create a shortened URL.
 */
export async function POST(request: Request) {
  const { url } = await request.json();
  const shortenedUrl = createShortenedUrl(url);
  return Response.json(shortenedUrl);
}

/**
 * Delete a shortened URL.
 */
export async function DELETE(request: Request) {
  const { slug } = await request.json();
  const success = deleteShortenedUrl(slug);
  return Response.json({ success });
}
