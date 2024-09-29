"use client";

import { ShortenedUrl } from "@/app/database";
import { ChangeEventHandler, useState } from "react";

interface UrlFormProps {
  onNewUrl: (url: ShortenedUrl) => void;
}

export default function UrlForm({ onNewUrl }: UrlFormProps) {
  const [url, setUrl] = useState("");
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  let urlIsValid;
  try {
    const { protocol } = new URL(url);
    urlIsValid = ["http:", "https:"].includes(protocol);
  } catch {
    urlIsValid = false;
  }

  const showError = url && !editing && !urlIsValid;
  const canSubmit = url && urlIsValid && !loading;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUrl(event.target.value);
  };

  const handleFocus = () => {
    setEditing(true);
  };

  const handleBlur = () => {
    setEditing(false);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const response = await fetch("/api/urls", {
      method: "POST",
      body: JSON.stringify({ url }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newUrl = await response.json();
    onNewUrl(newUrl);
    setUrl("");
    setLoading(false);
  };

  return (
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
          disabled={loading}
          className="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 leading-6 sm:min-w-96 lg:min-w-lg"
        />
        {showError && (
          <p className="text-sm text-red-600">Please enter a valid URL</p>
        )}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={!canSubmit}
            className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-400"
          >
            {loading ? "Shortening..." : "Shorten URL"}
          </button>
        </div>
      </div>
    </form>
  );
}
