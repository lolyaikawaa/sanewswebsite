export default function AboutPage() {
  return (
    <main className="p-8">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="w-full min-h-[320px] border border-neutral-300 bg-white">
          <div className="p-5 border-b border-neutral-300">
            <h2 className="text-2xl font-bold text-blue-900 leading-tight">
              Professional Journalism
            </h2>
          </div>

          <div className="p-5">
            <p className="text-gray-700 leading-8 text-lg">
              SANews follows professional journalism standards focused on
              credibility, verified reporting, and responsible media publication.
            </p>
          </div>
        </div>

      </div>

    </main>
  );
}
