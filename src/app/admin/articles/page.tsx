"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

interface Article {
  id: number;
  title: string;
  category: string;
  author: string;
  created_at: string;
}

export default function ArticlesPage() {

  const [articles, setArticles] = useState<Article[]>([]);

  async function fetchArticles() {

    const { data } = await supabase
      .from("articles")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (data) {
      setArticles(data);
    }

  }

  async function deleteArticle(id: number) {

    const confirmDelete = confirm(
      "Delete this article?"
    );

    if (!confirmDelete) return;

    await supabase
      .from("articles")
      .delete()
      .eq("id", id);

    fetchArticles();

  }

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen bg-[#d9dee3]">

      {/* TOP */}

      <div className="border-b-4 border-[#c79a2b] bg-[#06264d]">

        <div className="max-w-[1700px] mx-auto px-5 h-[72px] flex items-center justify-between">

          <div>

            <h1 className="text-[30px] font-black text-white">
              Article Management
            </h1>

            <p className="text-[#d6a437] text-[12px] uppercase tracking-[2px] mt-1 font-bold">
              SANews Newsroom Administration
            </p>

          </div>

          <a
            href="/admin/create-article"
            className="border border-[#8f6c16] bg-gradient-to-b from-[#e0b54c] to-[#c99722] px-5 py-3 text-[13px] font-bold"
          >
            CREATE ARTICLE
          </a>

        </div>

      </div>

      {/* CONTENT */}

      <div className="max-w-[1700px] mx-auto p-4">

        <div className="border border-[#aeb6c0] bg-[#eef1f4]">

          <div className="bg-[#d8dde3] border-b border-[#b6bec8] px-4 py-3">

            <h2 className="text-[18px] font-bold text-[#022b5b]">
              Published Articles
            </h2>

          </div>

          <div className="p-4 overflow-x-auto">

            <table className="w-full border-collapse min-w-[1100px]">

              <thead>

                <tr>

                  <th className="border border-[#c5ccd4] bg-[#e7ebef] px-4 py-3 text-left text-[13px] uppercase tracking-[1px] text-[#8b6b18]">
                    ID
                  </th>

                  <th className="border border-[#c5ccd4] bg-[#e7ebef] px-4 py-3 text-left text-[13px] uppercase tracking-[1px] text-[#8b6b18]">
                    Title
                  </th>

                  <th className="border border-[#c5ccd4] bg-[#e7ebef] px-4 py-3 text-left text-[13px] uppercase tracking-[1px] text-[#8b6b18]">
                    Category
                  </th>

                  <th className="border border-[#c5ccd4] bg-[#e7ebef] px-4 py-3 text-left text-[13px] uppercase tracking-[1px] text-[#8b6b18]">
                    Author
                  </th>

                  <th className="border border-[#c5ccd4] bg-[#e7ebef] px-4 py-3 text-left text-[13px] uppercase tracking-[1px] text-[#8b6b18]">
                    Created
                  </th>

                  <th className="border border-[#c5ccd4] bg-[#e7ebef] px-4 py-3 text-left text-[13px] uppercase tracking-[1px] text-[#8b6b18]">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {articles.map((article) => (

                  <tr
                    key={article.id}
                    className="border border-[#c5ccd4]"
                  >

                    <td className="bg-white px-4 py-3">
                      {article.id}
                    </td>

                    <td className="bg-white px-4 py-3 font-semibold text-[#022b5b]">
                      {article.title}
                    </td>

                    <td className="bg-white px-4 py-3">
                      {article.category}
                    </td>

                    <td className="bg-white px-4 py-3">
                      {article.author}
                    </td>

                    <td className="bg-white px-4 py-3">
                      {new Date(
                        article.created_at
                      ).toLocaleDateString()}
                    </td>

                    <td className="bg-white px-4 py-3">

                      <div className="flex gap-2">

                        <button
                          className="border border-[#44698f] bg-[#dbe9f7] px-3 py-2 text-[12px] font-bold"
                        >
                          EDIT
                        </button>

                        <button
                          onClick={() => deleteArticle(article.id)}
                          className="border border-[#8d2d2d] bg-[#f3d7d7] px-3 py-2 text-[12px] font-bold"
                        >
                          DELETE
                        </button>

                      </div>

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