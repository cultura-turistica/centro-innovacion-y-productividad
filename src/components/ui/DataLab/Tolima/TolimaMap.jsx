"use client";
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Polygon, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { coordsFinca, boundsFinca } from '@/data/laboratorios/tolimaData';

// Controlador de cámara para sincronizar el mapa con el Scrollyteller
function MapController({ activeStep }) {
  const map = useMap();
  useEffect(() => {
    // Forzamos la invalidación del tamaño para evitar el "grey block bug" de Leaflet
    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    if (activeStep === 0) {
      // Act 1: El Origen - Vista general de la región / Colombia
      map.flyTo([4.5709, -74.2973], 6); 
    } else if (activeStep === 1) {
      // Act 2: La Intervención - Zoom a la Finca
      map.flyTo([3.431, -75.214], 14); 
    } else if (activeStep >= 2) {
      // Act 3 y 4: Encuadre exacto (fitBounds)
      map.fitBounds(boundsFinca, { padding: [50, 50] }); 
    }
  }, [activeStep, map]);
  
  return null;
}

export default function TolimaMap({ activeStep }) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-0">
      <MapContainer 
        center={[4.5709, -74.2973]} 
        zoom={6} 
        zoomControl={false} 
        scrollWheelZoom={false} 
        dragging={false} 
        className="w-full h-full"
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri &mdash; Source: Esri"
        />
        <MapController activeStep={activeStep} />
        
        {activeStep > 0 && (
          <Polygon 
            positions={coordsFinca} 
            pathOptions={{ 
              color: activeStep >= 2 ? '#22C55E' : '#eab308', 
              weight: 3, 
              fillColor: activeStep >= 2 ? '#22C55E' : 'transparent', 
              fillOpacity: activeStep >= 2 ? 0.3 : 0 
            }} 
          />
        )}
      </MapContainer>
      
      {/* Capa de inmersión y gradiente para suavizar bordes del mapa hacia el texto */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-stone-900/95 to-stone-900/60 md:bg-gradient-to-r md:from-stone-900/95 md:via-stone-900/70 md:to-stone-900/10 pointer-events-none z-10"></div>
    </div>
  );
}
