import React from 'react';
import { Globe, Cpu, ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const TYPE_LABELS: Record<Project['type'], string> = {
  cliente: '[cliente]',
  personal: '[personal]',
  academico: '[académico]',
};

const STATUS_STYLES: Record<Project['status'], { badge: string; dot: string }> = {
  Live: { badge: 'border-green-900 bg-green-900/20 text-green-400', dot: 'bg-green-400 animate-pulse' },
  Development: { badge: 'border-yellow-900 bg-yellow-900/20 text-yellow-400', dot: 'bg-yellow-400' },
  Repo: { badge: 'border-blue-900 bg-blue-900/20 text-blue-400', dot: 'bg-blue-400' },
  Offline: { badge: 'border-slate-700 bg-slate-800/40 text-slate-400', dot: 'bg-slate-500' },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const statusStyle = STATUS_STYLES[project.status];

  return (
    <div className="group relative flex flex-col h-full bg-slate-900/40 border border-console-dim rounded-lg overflow-hidden hover:border-console-green hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all duration-300">

      {/* Cabecera de navegador simulada */}
      <div className="bg-slate-900 border-b border-console-dim p-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50 group-hover:bg-red-500 transition-colors"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50 group-hover:bg-yellow-500 transition-colors"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50 group-hover:bg-green-500 transition-colors"></div>
        </div>
        <div className="flex-1 bg-black/50 rounded px-3 py-1 text-[10px] md:text-xs text-console-accent font-mono truncate flex items-center gap-2 group-hover:text-console-green transition-colors shadow-inner shadow-black/50">
          <Globe className="w-3 h-3 shrink-0" />
          {project.url ? project.url.replace('https://', '') : 'sistema-interno.local'}
        </div>
      </div>

      {/* Captura del proyecto (solo webs con imagen) */}
      {project.image && (
        <div className="aspect-video bg-slate-950 border-b border-console-dim overflow-hidden">
          <img
            src={project.image}
            alt={`Captura de ${project.name}`}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}

      {/* Contenido principal */}
      <div className="p-6 flex-1 flex flex-col">

        {/* Título y Estado */}
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-console-accent transition-colors">
            {project.name}
          </h3>
          <div className={`flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase border shrink-0 ${statusStyle.badge}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`}></span>
            {project.status}
          </div>
        </div>

        {/* Tipo y año */}
        <div className="flex items-center gap-3 mb-4 text-xs font-mono">
          <span className="text-console-accent">{TYPE_LABELS[project.type]}</span>
          <span className="text-console-dim">{project.year}</span>
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

        {/* Acciones */}
        <div className="mt-auto pt-4 border-t border-console-dim/30 flex items-center gap-3 text-xs font-mono">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded border border-console-dim text-console-green hover:bg-console-green hover:text-black font-bold transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Ver sitio
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded border border-console-dim text-slate-300 hover:border-slate-400 hover:text-white font-bold transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              Código
            </a>
          )}
          {!project.url && !project.repo && (
            <span className="text-console-dim">// sistema interno, sin enlace público</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
