"use client";

import type { ShortenedUrl } from "@/app/database";
import ShortenedUrlsTable from "@/components/ShortendUrlsTable";
import UrlForm from "@/components/UrlForm";
import { useState, useEffect } from "react";

export default function Home() {
  const [urls, setUrls] = useState<ShortenedUrl[]>([]);

  useEffect(() => {
    fetch("/api/urls")
      .then((response) => response.json())
      .then(setUrls);
  }, []);

  const handleNewUrl = (url: ShortenedUrl) => {
    setUrls((urls) => [...urls, url]);
  };

  const handleDeleteUrl = (slug: string) => {
    setUrls((urls) => urls.filter((url) => url.slug !== slug));
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start mx-auto">
        <UrlForm onNewUrl={handleNewUrl} />
        <div className="flex flex-col gap-4 border border-solid border-gray-300 rounded-lg w-full">
          <ShortenedUrlsTable urls={urls} onDeleteUrl={handleDeleteUrl} />
        </div>
      </main>
    </div>
  );
}
