import React from 'react';

export default function ArtQuote({ quote, author, themeColor = "#0f172a" }) {
  if (!quote) return null;

  return (
    <div className="w-full max-w-4xl mx-auto my-24 px-6 py-12 md:py-20 text-center">
      <blockquote 
        className="font-serif text-3xl md:text-5xl lg:text-6xl italic font-light leading-snug text-slate-800"
        style={{ color: themeColor }}
      >
        “{quote}”
      </blockquote>
      {author && (
        <p className="mt-8 text-lg font-bold tracking-widest uppercase text-slate-400">
          — {author}
        </p>
      )}
    </div>
  );
}
