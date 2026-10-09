"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HashRouteHandler() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash;
    if (hash && (hash.startsWith('#/verificar') || hash.startsWith('#/verificador'))) {
      const cleanParam = hash.replace(/^#\/(verificar|verificador)/, '');
      router.replace('/verificar' + cleanParam);
    }
  }, [router]);

  return null;
}
