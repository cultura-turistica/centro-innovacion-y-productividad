'use client';
import React from 'react';
import CourseCertificationLayout from '../../../../../components/layout/CourseCertificationLayout';
import { certificacionData } from '../../../../../data/cursos/fotografia/certificacion';

export default function CertificacionPage() {
  return (
    <CourseCertificationLayout
      data={certificacionData}
      courseUrl="/academia/cursos/fotografia"
      breadcrumbTitle="Curso de Fotografía"
      theme={{
        selection: "selection:bg-indigo-100",
        hoverText: "hover:text-indigo-500",
        textHighlight: "text-indigo-500",
        primaryBg: "bg-indigo-900",
        blurPrimary: "bg-indigo-500/20",
        blurSecondary: "bg-purple-500/20",
        badgeBg: "bg-indigo-800/50",
        badgeText: "text-indigo-300",
        badgeBorder: "border-indigo-700",
        textLight: "text-indigo-100",
        btnText: "text-indigo-950",
        themeColorHex: "#4f46e5"
      }}
    />
  );
}
