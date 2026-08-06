import React from 'react';

export const AnatomyNode = ({ node, isActive, onClick }) => {
  return (
    <div 
      className="anatomy-node absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-300 hover:scale-110 flex items-center justify-center"
      style={{ 
        '--x-desktop': `${node.pos.x}%`, 
        '--y-desktop': `${node.pos.y}%`,
        '--x-mobile': `${node.posMobile.x}%`,
        '--y-mobile': `${node.posMobile.y}%`
      }}
      onMouseEnter={onClick}
      onClick={onClick}
    >
      {/* Pulse Effect */}
      {isActive && (
        <div className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full animate-ping opacity-30" style={{ backgroundColor: node.color }}></div>
      )}
      
      {/* Glow Background */}
      <div className="absolute w-10 h-10 md:w-12 md:h-12 rounded-full opacity-30 blur-md transition-colors" style={{ backgroundColor: isActive ? node.color : 'transparent' }}></div>
      
      {/* Main Dot Container */}
      <div 
        className="relative w-8 h-8 md:w-10 md:h-10 rounded-full border-2 flex items-center justify-center shadow-lg transition-all z-10 bg-white"
        style={{ 
          borderColor: node.color,
          boxShadow: isActive ? `0 4px 15px ${node.color}40` : '0 2px 4px rgba(0,0,0,0.05)'
        }}
      >
        <div className="scale-75 md:scale-100 flex items-center justify-center">
          {React.createElement(node.icon, { size: 18, color: isActive ? node.color : '#94a3b8' })}
        </div>
      </div>
    </div>
  );
};
