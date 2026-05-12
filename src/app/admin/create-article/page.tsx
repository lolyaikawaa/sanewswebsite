"use client";

import { useState } from "react";

import { supabase } from "@/lib/supabase";

export default function CreateArticlePage() {

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("SANews Staff");

  const [loading, setLoading] = useState(false);

  async function handlePublish() {

    if (!title || !slug || !content) {
      alert("Please complete all required article fields.");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("articles")
      .insert([
        {
          title,
          slug,
          excerpt,
          content,
          image,
          author,
          category: "Broadcast",
        },
      ]);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Article published successfully.");

    setTitle("");
    setSlug("");
    setExcerpt("");
    setContent("");
    setImage("");
    setAuthor("SANews Staff");

  }

  return (
    <div className="min-h-screen bg-[#d4d9de] p-5">

      <div className="max-w-[1200px] mx-auto">

        {/* HEADER */}

        <div className="border border-[#aeb6c0] bg-[#eef1f4]">

          <div className="bg-[#06264d] border-b-4 border-[#c79a2b] px-6 py-5">

            <h1 className="text-[34px] font-black text-white leading-none">
              SANews Article Publisher
            </h1>

            <p className="text-[11px] uppercase tracking-[3px] text-[#d6a437] font-bold mt-3">
              Internal Newsroom Publication Management
            </p>

          </div>

          {/* FORM */}

          <div className="p-6 bg-[#f7f9fb] space-y-6">

            {/* TITLE */}

            <div>

              <p className="text-[12px] uppercase tracking-[1px] text-[#8b6b18] font-bold mb-2">
                Article Title
              </p>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter article headline..."
                className="w-full border border-[#bcc5cf] bg-white px-4 py-3 outline-none text-[14px]"
              />

            </div>

            {/* SLUG */}

            <div>

              <p className="text-[12px] uppercase tracking-[1px] text-[#8b6b18] font-bold mb-2">
                Article Slug
              </p>

              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="example-breaking-news"
                className="w-full border border-[#bcc5cf] bg-white px-4 py-3 outline-none text-[14px]"
              />

            </div>

            {/* AUTHOR */}

            <div>

              <p className="text-[12px] uppercase tracking-[1px] text-[#8b6b18] font-bold mb-2">
                Article Author
              </p>

              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="SANews Staff"
                className="w-full border border-[#bcc5cf] bg-white px-4 py-3 outline-none text-[14px]"
              />

            </div>

            {/* IMAGE */}

            <div>

              <p className="text-[12px] uppercase tracking-[1px] text-[#8b6b18] font-bold mb-2">
                Article Image URL
              </p>

              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://image-url.com/banner.png"
                className="w-full border border-[#bcc5cf] bg-white px-4 py-3 outline-none text-[14px]"
              />

            </div>

            {/* EXCERPT */}

            <div>

              <p className="text-[12px] uppercase tracking-[1px] text-[#8b6b18] font-bold mb-2">
                Article Excerpt
              </p>

              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Short article summary..."
                rows={4}
                className="w-full border border-[#bcc5cf] bg-white px-4 py-3 outline-none text-[14px] resize-none"
              />

            </div>

            {/* CONTENT */}

            <div>

              <p className="text-[12px] uppercase tracking-[1px] text-[#8b6b18] font-bold mb-2">
                Full Article Content
              </p>

              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write full article content..."
                rows={14}
                className="w-full border border-[#bcc5cf] bg-white px-4 py-3 outline-none text-[14px] resize-none"
              />

            </div>

            {/* BUTTON */}

            <div className="flex items-center gap-4">

              <button
                onClick={handlePublish}
                disabled={loading}
                className="border border-[#8f6c16] bg-gradient-to-b from-[#e0b54c] to-[#c99722] px-8 py-4 text-[12px] uppercase tracking-[1px] font-black text-black"
              >
                {loading
                  ? "Publishing Article..."
                  : "Publish Article"}
              </button>

              <p className="text-[11px] uppercase tracking-[1px] text-[#6b7683]">
                SANews Internal CMS System
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}