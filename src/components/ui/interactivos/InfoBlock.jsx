import React from 'react';

export default function InfoBlock({ data, themeColor = "#2563eb", variant: propVariant = "default" }) {
  if (!data) return null;

  const variant = data.variant || propVariant;

  // Extract paragraphs (handling both array of paragraphs or p1, p2, p3... pattern)
  const paragraphs = [];
  if (Array.isArray(data.paragraphs)) {
    paragraphs.push(...data.paragraphs);
  } else {
    Object.keys(data).forEach(key => {
      if (key.match(/^p\d+$/)) {
        paragraphs.push(data[key]);
      }
    });
  }

  // Fallback if no paragraphs were found
  if (paragraphs.length === 0) {
    if (data.description) paragraphs.push(data.description);
    if (data.text) paragraphs.push(data.text);
  }

  // Variant styles
  let containerStyle = "bg-white p-8 rounded-3xl shadow-lg border-l-4";
  let titleStyle = "text-2xl font-bold mb-4";

  if (variant === "alert") {
    containerStyle = "bg-red-50 p-8 rounded-3xl shadow-sm border border-red-200";
    titleStyle = "text-2xl font-bold mb-4 text-red-700";
  }

  return (
    <div className={containerStyle} style={variant !== "alert" ? { borderColor: themeColor } : {}}>
      {data.title && (
        <h3 className={titleStyle} style={variant !== "alert" ? { color: themeColor } : {}}>
          {data.title}
        </h3>
      )}
      <div className="space-y-4">
        {paragraphs.map((p, index) => (
          <p 
            key={index} 
            className={`text-slate-600 leading-relaxed ${variant === "alert" ? "text-red-900" : ""}`}
            dangerouslySetInnerHTML={{ __html: p }} 
          />
        ))}
      </div>
    </div>
  );
}
