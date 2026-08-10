'use client';
import React from 'react';
import CourseCertificationLayout from '../../../../../components/layout/CourseCertificationLayout';
import { certificacionData } from '../../../../../data/cursos/curso-2/certificacion';

export default function CertificacionPage() {
  return (
    <CourseCertificationLayout
      data={certificacionData}
      courseUrl="/academia/cursos/diseno-producto"
      breadcrumbTitle="Curso Diseño de Producto"
      theme={{
        selection: "selection:bg-emerald-100",
        hoverText: "hover:text-emerald-500",
        textHighlight: "text-emerald-500",
        primaryBg: "bg-emerald-900",
        blurPrimary: "bg-emerald-500/20",
        blurSecondary: "bg-teal-500/20",
        badgeBg: "bg-emerald-800/50",
        badgeText: "text-emerald-300",
        badgeBorder: "border-emerald-700",
        textLight: "text-emerald-100",
        btnText: "text-emerald-950",
        themeColorHex: "#10b981"
      }}
    />
  );
}
