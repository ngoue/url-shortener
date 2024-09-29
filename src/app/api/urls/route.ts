import { createShortenedUrl, shortenedUrls } from "@/app/database";

export async function GET() {
  return Response.json(shortenedUrls);
}

export async function POST(request: Request) {
  const { url } = await request.json();
  const shortenedUrl = createShortenedUrl(url);
  return Response.json(shortenedUrl);
}

export async function DELETE(request: Request) {
  const { slug } = await request.json();
  const index = shortenedUrls.findIndex(
    (shortenedUrl) => shortenedUrl.slug === slug
  );
  shortenedUrls.splice(index, 1);
  return Response.json({ success: true });
}
