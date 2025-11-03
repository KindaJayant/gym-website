import React from "react";

const featuredArticle = {
  title:
    "More Training, More Gaining: Everything You Need To Know About Training Volume",
  author: "DR. GREG NUCKOLS",
  summary:
    "Higher training volumes tend to facilitate more muscle growth and larger strength gains. Here’s a deep-dive into optimizing your programming for consistent progression.",
  imageUrl: "https://placehold.co/1200x700/141414/ffffff?text=IronForm+Feature",
};

const recentArticles = [
  {
    title: "Rough Heuristics For Interpreting Strength And Hypertrophy",
    author: "DR. GREG NUCKOLS",
    imageUrl: "https://placehold.co/400x250/141414/ffffff?text=Article+1",
  },
  {
    title:
      "Protein Science Updated: Why It’s Time To Move Beyond The 1.6-2.2 g/kg Rule",
    author: "DR. ERIC TREXLER",
    imageUrl: "https://placehold.co/400x250/141414/ffffff?text=Article+2",
  },
  {
    title: "Strength Data Don’t Tell You Much About Hypertrophy",
    author: "DR. GREG NUCKOLS",
    imageUrl: "https://placehold.co/400x250/141414/ffffff?text=Article+3",
  },
];

const Articles: React.FC = () => {
  return (
    <div className="section space-y-20">
      {/* ===== Hero Section ===== */}
      <section className="text-center relative overflow-hidden py-24 rounded-3xl bg-gradient-to-br from-[#1b1b22]/80 via-[#191924]/70 to-[#101016]/90 backdrop-blur-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.25),transparent_60%)] blur-3xl" />
        <h1 className="relative text-5xl md:text-6xl font-extrabold text-white mb-6">
          Tips&nbsp;&amp;&nbsp;Articles
        </h1>
        <p className="relative text-gray-400 max-w-2xl mx-auto">
          Expert insights, training philosophy, and nutrition science — designed
          to help you lift smarter and recover better.
        </p>
      </section>

      {/* ===== Featured Article ===== */}
      <section className="glass-card p-8 md:p-12 md:flex items-center gap-10">
        <div className="md:w-1/2">
          <img
            src={featuredArticle.imageUrl}
            alt={featuredArticle.title}
            className="rounded-2xl object-cover w-full h-72 md:h-[420px]"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-white">
            {featuredArticle.title}
          </h2>
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            {featuredArticle.author}
          </p>
          <p className="text-gray-300 leading-relaxed">
            {featuredArticle.summary}
          </p>
          <button className="btn-primary mt-4">Read Article</button>
        </div>
      </section>

      {/* ===== Recent Articles ===== */}
      <section>
        <h3 className="text-2xl font-semibold text-white mb-8">
          Recent&nbsp;Articles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {recentArticles.map((article, i) => (
            <div
              key={i}
              className="glass-card overflow-hidden group hover:shadow-purple-500/20 transition-all"
            >
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="p-6 space-y-2">
                <h4 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
                  {article.title}
                </h4>
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  {article.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Articles;
