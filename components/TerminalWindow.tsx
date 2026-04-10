import React from 'react';

interface TerminalWindowProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ children, title, className = "" }) => {
  return (
    <div className={`border border-console-dim bg-console-bg rounded-lg overflow-hidden shadow-lg shadow-emerald-900/10 mb-8 ${className}`}>
      {/* Cabecera de la ventana */}
      <div className="bg-slate-900 border-b border-console-dim p-2 flex items-center justify-between sticky top-0 z-10">
        <div className="flex space-x-2 ml-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="text-xs text-slate-400 font-mono select-none">
          {title}
        </div>
        <div className="w-10"></div> {/* Espaciador para centrado */}
      </div>
      
      {/* Contenido de la ventana */}
      <div className="p-4 md:p-6 font-mono text-sm md:text-base leading-relaxed text-console-text">
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;