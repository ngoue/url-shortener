"use client";

import ShortenedUrlsTable from "@/components/ShortendUrlsTable";
import { shortenedUrls } from "./database";
import { ChangeEventHandler, useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [editing, setEditing] = useState(false);

  let urlIsValid;
  try {
    const { protocol } = new URL(url);
    urlIsValid = ["http:", "https:"].includes(protocol);
  } catch {
    urlIsValid = false;
  }

  const showError = url && !editing && !urlIsValid;
  const canSubmit = url && urlIsValid;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUrl(event.target.value);
  };

  const handleFocus = () => {
    setEditing(true);
  };

  const handleBlur = () => {
    setEditing(false);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start mx-auto">
        <form className="w-full">
          <div className="flex flex-col gap-2 items-center">
            <input
              id="url"
              name="url"
              type="url"
              placeholder="Enter your URL here..."
              value={url}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 leading-6 sm:min-w-96 lg:min-w-lg"
            />
            {url && !editing && !urlIsValid && (
              <p className="text-sm text-red-600">Please enter a valid URL</p>
            )}
            <div className="flex gap-4 items-center flex-col sm:flex-row">
              <button
                type="button"
                disabled={!canSubmit}
                className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-400"
              >
                Shorten URL
              </button>
            </div>
          </div>
        </form>
        <div className="flex flex-col gap-4 border border-solid border-gray-300 rounded-lg w-full">
          <ShortenedUrlsTable urls={Object.values(shortenedUrls)} />
        </div>
      </main>
    </div>
  );
}
