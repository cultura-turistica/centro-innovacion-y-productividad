"use client";
import React, { useState, useEffect, useRef } from 'react';
import { User, MessageCircle, RefreshCcw, Send } from 'lucide-react';

export default function InterviewSimulator({ data, themeColor = "#2563eb" }) {
  const [history, setHistory] = useState([]);
  const [currentNodeId, setCurrentNodeId] = useState("start");
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef(null);

  if (!data || !data.nodes) return null;

  // Initial load
  useEffect(() => {
    if (history.length === 0) {
      const startNode = data.nodes["start"];
      if (startNode) {
        setHistory([{ role: 'system', content: data.context }, { role: 'tourist', content: startNode.touristMessage }]);
      }
    }
  }, [data, history.length]);

  // Scroll to bottom
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [history, isTyping]);

  const handleChoice = (choice) => {
    // Add user message
    setHistory(prev => [...prev, { role: 'user', content: choice.text }]);
    
    // Simulate typing
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      const nextNode = data.nodes[choice.nextNode];
      
      if (nextNode) {
        setHistory(prev => [...prev, { role: 'tourist', content: nextNode.touristMessage }]);
        setCurrentNodeId(choice.nextNode);
      } else {
        // End of simulation
        setCurrentNodeId("end");
      }
    }, 1200);
  };

  const handleReset = () => {
    setHistory([]);
    setCurrentNodeId("start");
  };

  const currentNode = data.nodes[currentNodeId];

  return (
    <div className="bg-white rounded-[2rem] shadow-xl border border-slate-200 overflow-hidden flex flex-col h-[600px]">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200 p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <User size={20} />
          </div>
          <div>
            <h4 className="font-bold text-slate-800">{data.touristName || "Turista Entrevistado"}</h4>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span> En línea
            </span>
          </div>
        </div>
        <button onClick={handleReset} className="text-slate-400 hover:text-slate-700 transition-colors" title="Reiniciar Simulación">
          <RefreshCcw size={20} />
        </button>
      </div>

      {/* Chat Area */}
      <div ref={chatRef} className="flex-1 p-6 overflow-y-auto bg-slate-50/50 space-y-6">
        {history.map((msg, idx) => {
          if (msg.role === 'system') {
            return (
              <div key={idx} className="flex justify-center">
                <div className="bg-amber-100 text-amber-800 text-xs font-bold px-4 py-2 rounded-full border border-amber-200 text-center max-w-md">
                  {msg.content}
                </div>
              </div>
            );
          }
          
          const isUser = msg.role === 'user';
          return (
            <div key={idx} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                isUser 
                  ? 'bg-blue-600 text-white rounded-tr-sm' 
                  : 'bg-white text-slate-700 border border-slate-200 rounded-tl-sm shadow-sm'
              }`}>
                {msg.content}
              </div>
            </div>
          );
        })}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm flex items-center gap-1">
              <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce delay-150"></div>
              <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce delay-300"></div>
            </div>
          </div>
        )}
      </div>

      {/* Options Area */}
      <div className="bg-white border-t border-slate-200 p-4">
        {!isTyping && currentNode && currentNode.options && (
          <div className="space-y-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 px-2">Selecciona tu respuesta:</p>
            {currentNode.options.map((choice, idx) => (
              <button
                key={idx}
                onClick={() => handleChoice(choice)}
                className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all flex items-center justify-between group"
              >
                <span className="text-slate-700 font-medium group-hover:text-blue-700 transition-colors">{choice.text}</span>
                <Send size={16} className="text-slate-300 group-hover:text-blue-500" />
              </button>
            ))}
          </div>
        )}
        
        {(!currentNode || !currentNode.options || currentNodeId === "end") && (
          <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-center">
            <h4 className="font-bold flex items-center justify-center gap-2 mb-1">
              <CheckCircle2 size={20} /> Fin de la Entrevista
            </h4>
            <p className="text-sm">Has llegado a un hallazgo de usuario. Presiona el botón superior para intentar otra ruta.</p>
          </div>
        )}
      </div>
    </div>
  );
}
