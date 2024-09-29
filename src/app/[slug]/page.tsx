import { shortenedUrls } from "../database";
import { redirect, notFound } from "next/navigation";

interface UrlRedirectParams {
  params: {
    slug: string;
  };
}

export default function UrlRedirect({ params }: UrlRedirectParams) {
  const shortenedUrl = shortenedUrls.find((url) => url.slug === params.slug);

  if (!shortenedUrl) {
    notFound();
  }

  shortenedUrl.redirects++;
  redirect(shortenedUrl.url);
}
