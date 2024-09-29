export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form>
          <div className="flex flex-col gap-2 items-center">
            <input
              id="url"
              name="url"
              type="url"
              placeholder="Enter your URL here..."
              className="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 leading-6 sm:min-w-96 lg:min-w-lg"
            />
            <div className="flex gap-4 items-center flex-col sm:flex-row">
              <button
                type="button"
                className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Shorten URL
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
