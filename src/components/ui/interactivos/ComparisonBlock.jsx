import React from 'react';

export default function ComparisonBlock({ data, leftTheme: propLeftTheme = "slate", rightTheme: propRightTheme = "emerald" }) {
  if (!data) return null;

  const leftTheme = data.leftTheme || propLeftTheme;
  const rightTheme = data.rightTheme || propRightTheme;

  // Expects { left: {title, subtitle, content}, right: {title, subtitle, content} }
  // OR the format from modulo-1: { producto, experiencia }
  const leftData = data.left || data.producto || Object.values(data)[0];
  const rightData = data.right || data.experiencia || Object.values(data)[1];

  const getThemeClasses = (theme) => {
    switch (theme) {
      case 'emerald':
        return {
          bg: 'bg-emerald-50',
          border: 'border-emerald-200',
          title: 'text-emerald-900',
          subtitle: 'text-emerald-600',
          prose: 'prose-emerald'
        };
      case 'rose':
        return {
          bg: 'bg-rose-50',
          border: 'border-rose-200',
          title: 'text-rose-900',
          subtitle: 'text-rose-600',
          prose: 'prose-rose'
        };
      default: // slate
        return {
          bg: 'bg-slate-50',
          border: 'border-slate-200',
          title: 'text-slate-800',
          subtitle: 'text-slate-600',
          prose: 'prose-slate'
        };
    }
  };

  const leftStyles = getThemeClasses(leftTheme);
  const rightStyles = getThemeClasses(rightTheme);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className={`${leftStyles.bg} p-8 rounded-3xl border ${leftStyles.border}`}>
        {leftData.title && <h4 className={`text-xl font-bold ${leftStyles.title} mb-2`}>{leftData.title}</h4>}
        {leftData.subtitle && <p className={`${leftStyles.subtitle} font-medium mb-4`}>{leftData.subtitle}</p>}
        {leftData.content && <div className={`prose ${leftStyles.prose}`} dangerouslySetInnerHTML={{ __html: leftData.content }} />}
      </div>
      <div className={`${rightStyles.bg} p-8 rounded-3xl border ${rightStyles.border}`}>
        {rightData.title && <h4 className={`text-xl font-bold ${rightStyles.title} mb-2`}>{rightData.title}</h4>}
        {rightData.subtitle && <p className={`${rightStyles.subtitle} font-medium mb-4`}>{rightData.subtitle}</p>}
        {rightData.content && <div className={`prose ${rightStyles.prose}`} dangerouslySetInnerHTML={{ __html: rightData.content }} />}
      </div>
    </div>
  );
}
