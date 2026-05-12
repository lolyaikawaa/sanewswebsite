import {
  Newspaper,
  Star,
  User,
  Clock3,
  ChevronRight,
  FileText,
} from "lucide-react";

import articles from "../../data/articles.json";

export default function NewsroomPage() {
  const featured = articles.find((a) => a.featured);

  return (
    <div className="min-h-screen bg-[#eef1f4]">

      <section className="max-w-[1650px] mx-auto px-6 py-7 space-y-6">

        {/* HERO */}

        <div className="bg-white border border-[#d7dce2] rounded-md overflow-hidden shadow-sm">

          <div className="relative bg-[#022b5b] overflow-hidden">

            {/* GOLD LINE */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#d9aa33]" />

            {/* BG DECOR */}
            <div className="absolute inset-0 opacity-[0.06] bg-[url('/images/banner.jpg')] bg-cover bg-center" />

            <div className="relative z-10 px-12 py-12 flex items-center justify-between">

              <div className="flex items-start gap-7">

                <div className="w-[92px] h-[92px] border border-[#d9aa33] rounded-md flex items-center justify-center">

                  <Newspaper
                    size={48}
                    className="text-[#d9aa33]"
                  />

                </div>

                <div>

                  <h1 className="text-6xl font-black text-white leading-none">
                    SANews Newsroom
                  </h1>

                  <p className="mt-4 text-[#d9aa33] tracking-[4px] font-bold text-lg uppercase">
                    Official Journalism Publications
                  </p>

                  <p className="mt-6 text-gray-200 text-[22px] leading-relaxed max-w-[850px]">
                    Official reports, interviews, broadcasts,
                    and verified media publications from SANews.
                  </p>

                </div>

              </div>

              <img
                src="/images/logo.png"
                className="w-32 opacity-10"
              />

            </div>

          </div>

        </div>

        {/* FEATURED */}

        {featured && (

          <div className="bg-white border border-[#d7dce2] rounded-md overflow-hidden shadow-sm">

            <div className="bg-[#022b5b] text-white px-7 py-5 border-b-[3px] border-[#d9aa33] flex items-center gap-4">

              <Star
                size={24}
                className="text-[#d9aa33]"
              />

              <h2 className="text-4xl font-bold">
                Featured Publication
              </h2>

            </div>

            <div className="p-6">

              <div className="border border-[#d7dce2] rounded-md overflow-hidden bg-white">

                <div className="grid grid-cols-12">

                  {/* IMAGE */}

                  <div className="col-span-5">

                    <img
                      src="/images/banner.jpg"
                      className="w-full h-full object-cover"
                    />

                  </div>

                  {/* CONTENT */}

                  <div className="col-span-7 p-7">

                    <div className="flex items-center gap-3 mb-5">

                      <span className="bg-[#d9aa33] text-black text-sm font-bold px-4 py-2 rounded-sm flex items-center gap-2">

                        <Star size={15} />

                        FEATURED

                      </span>

                      <span className="bg-[#103d73] text-white text-sm font-bold px-4 py-2 rounded-sm">
                        {featured.category}
                      </span>

                    </div>

                    <h1 className="text-[58px] font-black text-[#062a56] leading-tight">
                      {featured.title}
                    </h1>

                    <div className="flex items-center gap-8 text-gray-600 mt-6 text-lg">

                      <div className="flex items-center gap-3">

                        <User size={18} />

                        {featured.author}

                      </div>

                      <div className="flex items-center gap-3">

                        <Clock3 size={18} />

                        {featured.date}

                      </div>

                    </div>

                    <div className="w-full h-[1px] bg-[#e5e7eb] my-7" />

                    <p className="text-gray-600 text-xl leading-relaxed">

                      The Mayor unveils a comprehensive public safety initiative aimed
                      at enhancing community security, increasing patrol presence,
                      and strengthening cooperation between law enforcement and citizens.

                    </p>

                    <button className="mt-8 bg-[#022b5b] hover:bg-[#033a79] transition text-white font-bold px-8 py-4 text-lg flex items-center gap-3">

                      READ ARTICLE

                      <ChevronRight size={20} />

                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

        )}

        {/* LATEST */}

        <div className="bg-white border border-[#d7dce2] rounded-md overflow-hidden shadow-sm">

          <div className="bg-[#022b5b] text-white px-7 py-5 border-b-[3px] border-[#d9aa33] flex items-center gap-4">

            <FileText
              size={24}
              className="text-[#d9aa33]"
            />

            <h2 className="text-4xl font-bold">
              Latest Publications
            </h2>

          </div>

          <div>

            {articles.map((article, index) => (

              <div
                key={article.id}
                className={`grid grid-cols-12 items-center px-7 py-6 hover:bg-[#f8fafc] transition ${
                  index !== articles.length - 1
                    ? "border-b border-[#e5e7eb]"
                    : ""
                }`}
              >

                {/* NUMBER */}

                <div className="col-span-1">

                  <span className="text-3xl font-black text-[#062a56]">
                    0{article.id}
                  </span>

                </div>

                {/* CATEGORY */}

                <div className="col-span-2">

                  <span className="bg-[#103d73] text-white text-sm font-bold px-4 py-2 rounded-sm uppercase">
                    {article.category}
                  </span>

                </div>

                {/* TITLE */}

                <div className="col-span-5">

                  <h3 className="text-2xl font-bold text-[#062a56]">
                    {article.title}
                  </h3>

                </div>

                {/* AUTHOR */}

                <div className="col-span-2 flex items-center gap-2 text-gray-600 text-lg">

                  <User size={16} />

                  {article.author}

                </div>

                {/* DATE */}

                <div className="col-span-1 flex items-center gap-2 text-gray-600 text-lg">

                  <Clock3 size={16} />

                  {article.date}

                </div>

                {/* BUTTON */}

                <div className="col-span-1 flex justify-end">

                  <button className="border border-[#c8d0da] hover:bg-[#022b5b] hover:text-white transition px-5 py-3 font-bold text-[#062a56] flex items-center gap-2">

                    READ

                    <ChevronRight size={17} />

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}