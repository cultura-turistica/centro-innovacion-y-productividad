"use client";
import React, { useState, useEffect } from 'react';
import { Users, CheckCircle2, AlertCircle } from 'lucide-react';
import Image from 'next/image';

export default function MatchGame({ data }) {
  const { badge, title, description, rolesTitle, zonesTitle, roles, zones, success } = data;
  const [selectedRole, setSelectedRole] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [errorZone, setErrorZone] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (matchedPairs.length === roles.length * 2) {
      setIsCompleted(true);
    }
  }, [matchedPairs, roles.length]);

  const handleRoleClick = (roleId) => {
    if (matchedPairs.includes(roleId)) return;
    setSelectedRole(selectedRole === roleId ? null : roleId);
    setErrorZone(null);
  };

  const handleZoneClick = (zoneId) => {
    if (!selectedRole) return;
    if (matchedPairs.includes(selectedRole)) return;

    const role = roles.find(r => r.id === selectedRole);
    
    if (role.matchId === zoneId) {
      // Correct match
      setMatchedPairs([...matchedPairs, selectedRole, zoneId]);
      setSelectedRole(null);
      setErrorZone(null);
    } else {
      // Wrong match
      setErrorZone(zoneId);
      setTimeout(() => setErrorZone(null), 800);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-16 bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border border-slate-200/60 shadow-xl shadow-indigo-100/30">
      
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs tracking-widest uppercase mb-6 border border-indigo-100">
          <Users className="w-4 h-4" />
          <span>{badge}</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
          {title}
        </h2>
        <p 
          className="text-slate-500 text-lg"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Columna Izquierda: Talentos */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">{rolesTitle}</h3>
          <div className="grid grid-cols-2 gap-4">
            {roles.map(role => {
              const isMatched = matchedPairs.includes(role.id);
              const isSelected = selectedRole === role.id;
              
              return (
                <button
                  key={role.id}
                  onClick={() => handleRoleClick(role.id)}
                  disabled={isMatched}
                  className={`relative p-6 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-300 border-2
                    ${isMatched ? 'bg-slate-50 border-slate-200 opacity-50 cursor-not-allowed' : 
                      isSelected ? 'bg-indigo-50 border-indigo-500 shadow-md shadow-indigo-100 scale-105' : 
                      'bg-white border-slate-100 hover:border-indigo-200 hover:shadow-sm cursor-pointer'
                    }`}
                >
                  <div className="text-4xl mb-3">
                  {role.icon.startsWith('http') || role.icon.startsWith('/') ? (
                    <Image src={role.icon} alt={role.name} className="w-16 h-16 rounded-full mx-auto shadow-md bg-white p-1" width={1000} height={1000} unoptimized={true} />
                  ) : (
                    role.icon
                  )}
                  </div>
                  <span className={`font-bold text-sm text-center ${isSelected ? 'text-indigo-700' : 'text-slate-700'}`}>
                    {role.name}
                  </span>
                  
                  {isMatched && (
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1 shadow-md">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Columna Derecha: Zonas */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">{zonesTitle}</h3>
          <div className="grid grid-cols-1 gap-4">
            {zones.map(zone => {
              const isMatched = matchedPairs.includes(zone.id);
              const isError = errorZone === zone.id;
              
              // Find which role is matched to this zone
              const matchedRole = isMatched ? roles.find(r => r.matchId === zone.id) : null;

              return (
                <button
                  key={zone.id}
                  onClick={() => handleZoneClick(zone.id)}
                  disabled={isMatched || !selectedRole}
                  className={`w-full p-5 rounded-2xl flex items-center justify-between transition-all duration-300 border-2
                    ${isMatched ? 'bg-green-50 border-green-200' : 
                      isError ? 'bg-red-50 border-red-400 animate-shake' :
                      selectedRole ? 'bg-white border-dashed border-indigo-300 hover:bg-indigo-50 cursor-pointer' :
                      'bg-slate-50 border-slate-200 opacity-70 cursor-not-allowed'
                    }`}
                >
                  <span className={`font-bold ${isMatched ? 'text-green-700' : 'text-slate-600'}`}>
                    {zone.label}
                  </span>
                  
                  <div className="flex items-center">
                    {isMatched ? (
                      <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full shadow-sm text-green-700 font-bold text-sm">
                        <span>
                          {matchedRole.icon.startsWith('http') || matchedRole.icon.startsWith('/') ? (
                            <Image src={matchedRole.icon} alt={matchedRole.name} className="w-6 h-6 rounded-full" width={1000} height={1000} unoptimized={true} />
                          ) : (
                            matchedRole.icon
                          )}
                        </span>
                        <span>{matchedRole.name}</span>
                      </div>
                    ) : isError ? (
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    ) : (
                      <div className="w-8 h-8 rounded-full border-2 border-dashed border-slate-300"></div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Mensaje de Éxito */}
      <div className={`mt-12 transition-all duration-700 ease-out overflow-hidden ${isCompleted ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl p-6 text-white text-center shadow-xl">
          <h4 className="text-xl font-bold mb-2 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-6 h-6" />
            {success.title}
          </h4>
          <p className="text-indigo-100 text-sm md:text-base" dangerouslySetInnerHTML={{ __html: success.message }}>
          </p>
        </div>
      </div>

    </div>
  );
}
