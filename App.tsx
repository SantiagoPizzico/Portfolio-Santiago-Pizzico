import React, { useState } from 'react';
import { Terminal, User, Briefcase, Code, GraduationCap, Mail, MapPin, Download, Menu, X, ArrowRight, ExternalLink, Globe, MessageCircle, FileText, Linkedin, Github, Lock } from 'lucide-react';
import Typewriter from './components/Typewriter';
import TerminalWindow from './components/TerminalWindow';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import FadeIn from './components/FadeIn';
import { PROFILE, EXPERIENCE, EDUCATION, SKILLS, LANGUAGES, PROJECTS, CONTACT_CONFIG } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Función para desplazarse a una sección específica
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  // Función para generar enlace de WhatsApp
  const getWhatsAppLink = () => {
    // Eliminamos caracteres no numéricos del teléfono para la API
    const cleanPhone = PROFILE.phone.replace(/[^0-9]/g, ''); 
    const text = encodeURIComponent(`Hola ${PROFILE.name}, vi tu portafolio web y me gustaría contactarte.`);
    return `https://wa.me/${cleanPhone}?text=${text}`;
  };

  // Función para generar enlace de Email (Gmail Direct)
  const getEmailLink = () => {
    const to = PROFILE.email;
    const subject = encodeURIComponent(CONTACT_CONFIG.emailSubject);
    const body = encodeURIComponent(CONTACT_CONFIG.emailBody);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen font-mono text-slate-300 bg-console-bg selection:bg-console-green selection:text-black">
      
      {/* Barra de Navegación */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-console-bg/95 backdrop-blur-sm border-b border-console-dim h-16">
        <div className="max-w-5xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-2 text-console-green cursor-pointer" onClick={() => scrollTo('hero')}>
            <Terminal className="w-5 h-5" />
            <span className="font-bold tracking-tighter">root@santiago:~$</span>
          </div>

          {/* Navegación para Escritorio */}
          <div className="hidden md:flex items-center space-x-6 text-sm">
            {[
              { id: 'about', label: '/about' },
              { id: 'projects', label: '/projects' },
              { id: 'experience', label: '/experience' },
              { id: 'skills', label: '/skills' },
              { id: 'contact', label: '/contact' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="hover:text-console-accent hover:bg-console-dim/30 px-3 py-1 rounded transition-all"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Botón de Menú Móvil */}
          <button onClick={toggleMenu} className="md:hidden text-console-green p-2">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Menú Desplegable Móvil */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-900 border-b border-console-dim shadow-xl">
            <div className="flex flex-col p-4 space-y-4">
              {[
                { id: 'about', label: '/about' },
                { id: 'projects', label: '/projects' },
                { id: 'experience', label: '/experience' },
                { id: 'skills', label: '/skills' },
                { id: 'contact', label: '/contact' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-slate-300 hover:text-console-accent py-2 border-l-2 border-transparent hover:border-console-accent pl-4"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Área de Contenido Principal */}
      <main className="max-w-4xl mx-auto px-4 pt-24 pb-20">
        
        {/* Sección Hero (Bienvenida) */}
        <section id="hero" className="min-h-[60vh] flex flex-col justify-center mb-16">
          <FadeIn>
            <TerminalWindow title="bash - greeting.sh" className="border-console-green/30">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 text-console-dim">
                  <span>#</span>
                  <span>Inicializando perfil del desarrollador...</span>
                </div>
                <div className="text-xl md:text-4xl font-bold text-white mb-4">
                  <span className="text-console-green mr-3">{'>'}</span>
                  <Typewriter text={`Hola, soy ${PROFILE.name}`} delay={500} />
                </div>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl">
                  {PROFILE.role} | {PROFILE.location}
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <button 
                    onClick={() => scrollTo('contact')}
                    className="bg-console-green text-black px-6 py-2 rounded font-bold hover:bg-console-accent transition-colors flex items-center gap-2 group"
                  >
                    <Mail className="w-4 h-4 group-hover:animate-pulse" />
                    Contratar
                  </button>
                </div>
              </div>
            </TerminalWindow>
          </FadeIn>
        </section>

        {/* Sección Sobre Mí */}
        <Section id="about" title="sobre_mi" icon={User}>
          <div className="bg-slate-900/50 p-6 rounded border-l-4 border-console-dim hover:border-console-accent transition-all">
            <p className="text-lg leading-relaxed text-slate-300">
              "{PROFILE.about}"
            </p>
          </div>
        </Section>

        {/* Sección de Proyectos */}
        <Section id="projects" title="proyectos" icon={Terminal}>
           {/* Grid de 2 columnas en pantallas medianas */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {PROJECTS.map((project, idx) => (
               <ProjectCard key={idx} project={project} />
             ))}
             {/* Marcador para futuros proyectos */}
             <div className="border border-dashed border-console-dim p-8 rounded flex flex-col items-center justify-center text-console-dim min-h-[250px] bg-slate-900/10 hover:bg-slate-900/20 transition-colors">
               <Code className="w-8 h-8 mb-4 opacity-50" />
               <span className="text-sm font-bold opacity-75">Más proyectos en proceso...</span>
               <span className="text-xs mt-2 opacity-50">Compilando código...</span>
             </div>
           </div>
        </Section>

        {/* Sección de Experiencia */}
        <Section id="experience" title="experiencia_laboral" icon={Briefcase}>
          <div className="space-y-8">
            {EXPERIENCE.map((job, idx) => (
              <div key={idx} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-console-dim">
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-console-green shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                
                <h3 className="text-xl font-bold text-white mb-1">{job.role}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center text-console-accent text-sm mb-4 gap-2 sm:gap-4">
                  <span className="font-semibold">@ {job.company}</span>
                  <span className="hidden sm:inline text-console-dim">|</span>
                  <span>{job.period}</span>
                  <span className="hidden sm:inline text-console-dim">|</span>
                  <span>{job.location}</span>
                </div>
                
                <div className="bg-slate-900 p-4 rounded border border-slate-800">
                   <p className="mb-4 text-slate-300">{job.description}</p>
                   {job.tasks.length > 0 && (
                     <ul className="space-y-2 mb-4">
                       {job.tasks.map((task, tIdx) => (
                         <li key={tIdx} className="flex items-start text-sm text-slate-400">
                           <span className="mr-2 text-console-dim">{'>'}</span>
                           {task}
                         </li>
                       ))}
                     </ul>
                   )}
                   {job.contact && (
                     <div className="text-xs text-slate-500 mt-2 font-italic border-t border-slate-800 pt-2">
                       {job.contact}
                     </div>
                   )}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Sección de Habilidades */}
        <Section id="skills" title="habilidades_tecnicas" icon={Code}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS.map((category, idx) => (
              <TerminalWindow key={idx} title={`cat ${category.title.toLowerCase().replace(' ', '_')}.txt`} className="h-full mb-0">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-3 py-1 bg-slate-800 text-console-accent rounded text-sm hover:bg-console-accent hover:text-black transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </TerminalWindow>
            ))}
          </div>
        </Section>

        {/* Educación e Idiomas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <Section id="education" title="educacion" icon={GraduationCap}>
                <div className="space-y-4">
                  {EDUCATION.map((edu, idx) => (
                    <div key={idx} className="bg-slate-900/30 p-4 rounded border border-console-dim hover:border-console-accent transition-colors">
                      <h4 className="font-bold text-white">{edu.degree}</h4>
                      <p className="text-console-accent text-sm mt-1">{edu.institution}</p>
                      <p className="text-slate-500 text-xs mt-2">{edu.period}</p>
                      <p className="text-slate-500 text-xs">{edu.location}</p>
                    </div>
                  ))}
                </div>
              </Section>
            </div>
            
            <div>
              <Section id="languages" title="idiomas" icon={Globe}>
                 <div className="space-y-4">
                   {LANGUAGES.map((lang, idx) => (
                     <div key={idx} className="flex justify-between items-center p-3 border-b border-console-dim last:border-0">
                       <span className="font-bold text-white">{lang.name}</span>
                       <div className="text-right">
                         <span className="block text-console-accent">{lang.level}</span>
                         {lang.details && <span className="text-[10px] text-slate-500 block max-w-[150px] leading-tight">{lang.details}</span>}
                       </div>
                     </div>
                   ))}
                 </div>
              </Section>
            </div>
        </div>

        {/* Sección de Contacto */}
        <Section id="contact" title="contacto" icon={Mail}>
          <div className="bg-slate-900 border border-console-dim rounded p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                 <p className="text-slate-400 mb-6 leading-relaxed">
                   Actualmente buscando nuevas oportunidades. Si tienes una propuesta interesante o simplemente quieres saludar, elige tu protocolo de comunicación preferido.
                 </p>
                 
                 <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-300">
                      <div className="w-8 h-8 rounded bg-console-dim/30 flex items-center justify-center text-console-accent">
                        <MapPin size={16} />
                      </div>
                      <span>{PROFILE.location}</span>
                    </div>

                    {/* Enlaces a Redes Sociales */}
                    {PROFILE.socials.linkedin && (
                      <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                        <div className="w-8 h-8 rounded bg-console-dim/30 flex items-center justify-center text-console-accent group-hover:bg-console-dim/50">
                          <Linkedin size={16} />
                        </div>
                        <span className="hover:underline decoration-console-accent">LinkedIn</span>
                      </a>
                    )}
                    
                    {PROFILE.socials.github && (
                       <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                        <div className="w-8 h-8 rounded bg-console-dim/30 flex items-center justify-center text-console-accent group-hover:bg-console-dim/50">
                          <Github size={16} />
                        </div>
                        <span className="hover:underline decoration-console-accent">GitHub</span>
                      </a>
                    )}
                 </div>
              </div>

              {/* Central de Comandos de Comunicación */}
              <div className="bg-black p-4 rounded border border-console-dim font-mono text-sm h-full flex flex-col relative overflow-hidden">
                <div className="text-slate-500 mb-4 select-none border-b border-slate-800 pb-2">
                  # Selecciona el protocolo de comunicación:
                </div>
                
                <div className="flex flex-col gap-3 justify-center flex-1">
                  
                  {/* Opción de WhatsApp */}
                  <a 
                    href={getWhatsAppLink()}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group w-full text-left bg-slate-900 hover:bg-green-900/20 border border-console-dim hover:border-console-green p-4 rounded transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-5 h-5 text-console-green" />
                      <div>
                        <div className="text-console-green font-bold text-xs mb-1">Contactar vía WhatsApp</div>
                        <div className="text-slate-400 text-xs">Chat directo vía WhatsApp</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-console-dim group-hover:text-console-green transform group-hover:translate-x-1 transition-all" />
                  </a>

                  {/* Opción de Email */}
                  <a 
                    href={getEmailLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full text-left bg-slate-900 hover:bg-blue-900/20 border border-console-dim hover:border-blue-400 p-4 rounded transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <div>
                        <div className="text-blue-400 font-bold text-xs mb-1">Redactar MAIL</div>
                        <div className="text-slate-400 text-xs">{PROFILE.email}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-console-dim group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all" />
                  </a>

                  {/* Opción de Descarga de CV (Google Drive) */}
                  <a 
                    href={CONTACT_CONFIG.googleDriveCV}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full text-left bg-slate-900 hover:bg-purple-900/20 border border-console-dim hover:border-purple-400 p-4 rounded transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-purple-400" />
                      <div>
                        <div className="text-purple-400 font-bold text-xs mb-1">Descargar CV</div>
                        <div className="text-slate-400 text-xs">Enlace a Google Drive</div>
                      </div>
                    </div>
                    <Download className="w-4 h-4 text-console-dim group-hover:text-purple-400 transform group-hover:translate-y-0.5 transition-all" />
                  </a>

                </div>
                
                <div className="mt-4 pt-2 border-t border-slate-800 text-[10px] text-slate-600 flex justify-between">
                  <span>ESTADO: EN LÍNEA</span>
                  <span>ENCRIPTACIÓN: ACTIVADA</span>
                </div>
              </div>
            </div>
          </div>
        </Section>

      </main>

      {/* Footer */}
      <footer className="border-t border-console-dim bg-slate-950 py-8 text-center text-slate-500 text-xs">
         <p>Designed & Built by Santiago Pizzico</p>
      </footer>
    </div>
  );
};

export default App;