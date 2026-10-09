"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/data";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Banner */}{" "}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        {" "}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 tracking-tight">
          Latest News & Insights{" "}
        </h1>{" "}
        <p className="mt-3 text-base text-slate-600">
          Discover top commercial kitchen equipment, guides, and industry
          trends{" "}
        </p>{" "}
      </div>
      {/* Blog Cards Grid */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {blogPosts.map((post, idx) => {
          const parts = post.bottomTag ? post.bottomTag.split("/") : [];
          const author = parts[0]?.trim() || "ROYAL EQUIPMENTS";
          const date = parts[1]?.trim() || "";

          return (
            <article
              key={idx}
              className="flex flex-col bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden group h-full md:h-[650px]"
            >
              {/* Category & Title */}
              <div className="p-6 pb-4">
                <Link
                  href={`/category/blog?type=${post.category.toLowerCase()}`}
                  className="text-xs font-bold tracking-widest text-[#2F3192] uppercase mb-3 block"
                >
                  {post.category}
                </Link>

                <Link href={post.slug} className="block h-[76px] no-underline">
                  <h2 className="text-lg font-bold text-slate-900 leading-snug line-clamp-3 hover:text-blue-700 transition-colors duration-300">
                    {post.title}
                  </h2>
                </Link>
              </div>

              {/* Card Image */}
              <Link
                href={post.slug}
                className="block relative w-full h-60 shrink-0 overflow-hidden bg-slate-100 no-underline"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover p-3 transition-transform duration-500 ease-out hover:scale-105"
                />
              </Link>

              {/* Description & Footer */}
              <div className="p-6 pt-5 flex-1 flex flex-col ">
                <p className="text-[17px] md:text-base text-slate-600 leading-7 group-hover:text-slate-800 transition-colors overflow-y-auto pr-1">
                  {post.description}
                </p>

                {/* Footer */}
                <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-wider shrink-0">
                  <Link
                    href="/"
                    className="text-slate-500 hover:text-blue-700 transition-colors no-underline"
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
    </div>
  );
}
