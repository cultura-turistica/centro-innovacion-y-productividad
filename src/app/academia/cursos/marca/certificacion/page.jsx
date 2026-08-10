'use client';
import React from 'react';
import CourseCertificationLayout from '../../../../../components/layout/CourseCertificationLayout';
import { certificacionData } from '../../../../../data/cursos/marca/certificacion';

export default function CertificacionPage() {
  return (
    <CourseCertificationLayout
      data={certificacionData}
      courseUrl="/academia/cursos/marca"
      breadcrumbTitle="Diseño de Marca"
      theme={{
        selection: "selection:bg-rose-100",
        hoverText: "hover:text-rose-500",
        textHighlight: "text-rose-500",
        primaryBg: "bg-rose-900",
        blurPrimary: "bg-rose-500/20",
        blurSecondary: "bg-pink-500/20",
        badgeBg: "bg-rose-800/50",
        badgeText: "text-rose-300",
        badgeBorder: "border-rose-700",
        textLight: "text-rose-100",
        btnText: "text-rose-950",
        themeColorHex: "#e11d48"
      }}
    />
  );
}
