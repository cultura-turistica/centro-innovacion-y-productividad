import React from 'react';
import Image from 'next/image';

export default function FeatureImage({ src, alt, caption }) {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 my-12">
      <figure className="relative rounded-3xl overflow-hidden shadow-2xl group border border-slate-100 bg-slate-50">
        <Image src={src} 
          alt={alt} 
          className="w-full h-auto max-h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" width={1000} height={1000} unoptimized={true} />
        {caption && (
          <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900/80 to-transparent p-6 pt-12">
            <p className="text-white font-medium text-lg text-center drop-shadow-md">
              {caption}
            </p>
          </figcaption>
        )}
      </figure>
    </div>
  );
}
