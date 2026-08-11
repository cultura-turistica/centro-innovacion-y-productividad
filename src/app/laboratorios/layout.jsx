import React from 'react';
import BrowserWarningBanner from '../../components/BrowserWarningBanner';

export default function LaboratoriosLayout({ children }) {
  return (
    <>
      <BrowserWarningBanner />
      {children}
    </>
  );
}
