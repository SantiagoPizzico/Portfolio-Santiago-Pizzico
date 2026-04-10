import React from 'react';
import { Globe, Cpu, ExternalLink, Terminal } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a 
      href={project.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative flex flex-col h-full bg-slate-900/40 border border-console-dim rounded-lg overflow-hidden hover:border-console-green hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all duration-300 block cursor-pointer"
    >
      
      {/* Cabecera de navegador simulada */}
      <div className="bg-slate-900 border-b border-console-dim p-3 flex items-center gap-3 relative">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50 group-hover:bg-red-500 transition-colors"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50 group-hover:bg-yellow-500 transition-colors"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50 group-hover:bg-green-500 transition-colors"></div>
        </div>
        <div className="flex-1 bg-black/50 rounded px-3 py-1 text-[10px] md:text-xs text-console-accent font-mono truncate flex items-center gap-2 group-hover:text-console-green transition-colors shadow-inner shadow-black/50">
          <Globe className="w-3 h-3" />
          {project.url.replace('https://', '')}
        </div>
        
        {/* Icono de enlace externo superior */}
        <ExternalLink className="w-4 h-4 text-console-dim group-hover:text-console-green transition-colors ml-2" />
      </div>

      {/* Contenido principal */}
      <div className="p-6 flex-1 flex flex-col relative">
        
        {/* Título y Estado */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-console-accent transition-colors">
            {project.name}
          </h3>
          <div className={`flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase border ${
            project.status === 'Live' 
              ? 'border-green-900 bg-green-900/20 text-green-400' 
              : 'border-yellow-900 bg-yellow-900/20 text-yellow-400'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Live' ? 'bg-green-400 animate-pulse' : 'bg-yellow-400'}`}></span>
            {project.status}
          </div>
        </div>

        {/* Descripción */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1 group-hover:text-slate-300 transition-colors">
          {project.description}
        </p>

        {/* Stack Tecnológico */}
        <div className="space-y-3 mb-6">
          <div className="text-[10px] text-console-dim uppercase tracking-widest font-bold flex items-center gap-2">
            <Cpu className="w-3 h-3" />
            Stack Tecnológico
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 group-hover:border-console-dim/50 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Indicador de acción inferior */}
        <div className="mt-auto pt-4 border-t border-console-dim/30 flex items-center justify-between text-xs font-mono">
            <span className="text-console-dim group-hover:text-slate-500 transition-colors duration-300">
               ./launch_site.sh
            </span>
            <div className="flex items-center gap-2 text-slate-500 group-hover:text-console-green transition-colors duration-300">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold tracking-wider">
                  [ ACCEDER ]
                </span>
                <Terminal className="w-4 h-4" />
            </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;