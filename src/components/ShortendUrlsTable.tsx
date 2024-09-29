import type { ShortenedUrl } from "@/app/database";

interface ShortenedUrlsTableProps {
  urls: ShortenedUrl[];
  onDeleteUrl: (slug: string) => void;
}

export default function ShortenedUrlsTable({
  urls,
  onDeleteUrl,
}: ShortenedUrlsTableProps) {
  const handleDelete = async (slug: string) => {
    fetch("/api/urls", {
      method: "DELETE",
      body: JSON.stringify({ slug }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    onDeleteUrl(slug);
  };

  return (
    <div className="p-4">
      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0 hidden md:table-cell"
                  >
                    Slug
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Short URL
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden md:table-cell"
                  >
                    Long URL
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden md:table-cell"
                  >
                    Redirects
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {urls.map(({ slug, url, redirects }) => (
                  <tr key={slug}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 hidden md:table-cell">
                      {slug}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm font-medium sm:pr-0">
                      <a
                        href={`/${slug}`}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        {`http://localhost:3000/${slug}`}
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm font-medium sm:pr-0 hidden md:table-cell">
                      <a
                        href={`/${slug}`}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        {url}
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden md:table-cell">
                      {redirects}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <button
                        onClick={() => handleDelete(slug)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
