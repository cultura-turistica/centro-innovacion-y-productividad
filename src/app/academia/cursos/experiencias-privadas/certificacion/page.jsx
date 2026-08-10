'use client';
import React from 'react';
import CourseCertificationLayout from '../../../../../components/layout/CourseCertificationLayout';
import { certificacionData } from '../../../../../data/cursos/experiencias-privadas/certificacion';

export default function CertificacionPage() {
  return (
    <CourseCertificationLayout
      data={certificacionData}
      courseUrl="/academia/cursos/experiencias-privadas"
      breadcrumbTitle="Arquitectura de Experiencias Privadas"
      theme={{
        selection: "selection:bg-blue-200",
        hoverText: "hover:text-blue-600",
        textHighlight: "text-blue-600",
        primaryBg: "bg-blue-900",
        blurPrimary: "bg-blue-500/20",
        blurSecondary: "bg-indigo-500/20",
        badgeBg: "bg-blue-800/50",
        badgeText: "text-blue-300",
        badgeBorder: "border-blue-700",
        textLight: "text-blue-100",
        btnText: "text-blue-950",
        themeColorHex: "#1e40af"
      }}
    />
  );
}
