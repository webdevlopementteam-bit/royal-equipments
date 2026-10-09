"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import { blogPosts } from "@/data/data";
import Link from "next/link";
import Image from "next/image";

function Category() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "blog";

  const filterCategory =
    blogPosts?.filter(
      (blog) => blog.category?.toLowerCase() === type.toLowerCase(),
    ) || [];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      {filterCategory.length > 0 ? (
        <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filterCategory.map((post, idx) => {
            const parts = post.bottomTag ? post.bottomTag.split("/") : [];
            const author = parts[0]?.trim() || "ROYAL EQUIPMENTS";
            const date = parts[1]?.trim() || "";

            return (
              <article
                key={idx}
                className="flex flex-col bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#2F3192]/30 transition-all duration-300 overflow-hidden group h-full md:h-[650px]"
              >
                <div className="p-6 pb-4">
                  <span className="text-xs font-semibold tracking-widest text-[#2F3192] uppercase mb-3 block">
                    {post.category}
                  </span>
                  <Link
                    href={post.slug}
                    className="block h-[76px] no-underline"
                  >
                    <h2 className="text-lg font-semibold text-[#2F3192] leading-snug line-clamp-3 hover:text-[#22246f] transition-colors duration-300">
                      {post.title}
                    </h2>
                  </Link>
                </div>

                <Link
                  href={post.slug}
                  className="block relative w-full h-60 shrink-0 overflow-hidden bg-slate-100 no-underline"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover p-3 transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </Link>

                <div className="p-6 pt-5 flex-1 flex flex-col">
                  <p className="text-[17px] md:text-base text-slate-600 leading-7 group-hover:text-slate-800 transition-colors overflow-y-auto pr-1">
                    {post.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-wider shrink-0">
                    <Link
                      href="/"
                      className="text-slate-500 hover:text-[#2F3192] transition-colors no-underline"
                    >
                      {author}
                    </Link>
                    {date && (
                      <span className="text-slate-400 whitespace-nowrap">
                        / {date}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </main>
      ) : (
        <div className="max-w-2xl mx-auto min-h-[55vh] flex items-center justify-center">
          <div className="w-full bg-white border border-[#2F3192]/15 rounded-2xl p-8 sm:p-12 text-center shadow-sm">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#2F3192]/10 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-[#2F3192]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.7}
                  d="M12 8v4m0 4h.01M10.3 3.9h3.4L21 17.2a1.6 1.6 0 0 1-1.4 2.4H4.4A1.6 1.6 0 0 1 3 17.2L10.3 3.9Z"
                />
              </svg>
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold text-[#2F3192] mb-3">
              No Blogs Found
            </h2>

            <p className="text-base text-slate-600 leading-7 mb-7">
              Sorry, there are currently no blogs available in this category.
              Please explore our other articles.
            </p>

            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 bg-[#2F3192] text-white px-6 py-3 rounded-lg hover:bg-[#22246f] transition-colors duration-300 no-underline"
            >
              Explore Blogs
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14m-7-7 7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Category;
