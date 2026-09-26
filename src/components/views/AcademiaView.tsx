import React, { useState } from 'react';
import { ViewType } from '../../types/esports';
import {
  GraduationCap,
  Award,
  Activity,
  HeartPulse,
  Brain,
  Dumbbell,
  Users,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  TrendingUp,
  FileText,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Star
} from 'lucide-react';

interface AcademiaViewProps {
  onSelectView: (view: ViewType) => void;
}

export const AcademiaView: React.FC<AcademiaViewProps> = ({ onSelectView }) => {
  const [activeTab, setActiveTab] = useState<'pilares' | 'staff' | 'planes' | 'calendario'>('pilares');

  return (
    <div className="space-y-6">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#0c0e14] border border-[#282a30] rounded-2xl p-6 md:p-8 shadow-2xl">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#d0bcff]/10 blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 -bottom-32 w-80 h-80 rounded-full bg-[#4cd7f6]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-mono text-xs text-[#4cd7f6] tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse" />
              División Formativa Oficial // Posadas Hub
            </div>

            <button
              onClick={() => onSelectView('student-report')}
              className="px-4 py-2 bg-[#a078ff] hover:bg-[#8B5CF6] text-white text-xs font-mono font-bold uppercase rounded-lg shadow-[0_0_14px_rgba(160,120,255,0.4)] flex items-center gap-2 transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Ver Boletín Alumno (TomiX)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-4xl space-y-2">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#e2e2eb] tracking-tight uppercase">
                Academia Zingaro <span className="text-[#d0bcff]">//</span>{' '}
                <span className="bg-gradient-to-r from-[#d0bcff] via-[#4cd7f6] to-[#4edea3] bg-clip-text text-transparent">
                  Alto Rendimiento CS2
                </span>
              </h1>
              <p className="text-sm text-[#cbc3d7] max-w-2xl leading-relaxed">
                Formación integral técnica, física y mental para competir en el circuito semiprofesional y profesional de Counter-Strike 2. Metodología de vanguardia basada en neuro-rendimiento, analítica GOTV y preparación física.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-[#191b22] border border-[#282a30] p-3 rounded-xl shadow-sm self-start md:self-auto">
              <div className="flex flex-col text-right">
                <span className="text-[10px] font-mono text-[#958ea0] uppercase">Ciclo Lectivo 2026</span>
                <span className="text-xs font-mono text-[#4edea3] font-bold uppercase">Inscripciones Abiertas</span>
              </div>
              <div className="w-10 h-10 rounded-lg bg-[#00a572]/20 text-[#4edea3] flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            <div className="bg-[#191b22] border border-[#282a30] p-3.5 rounded-xl flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#a078ff]/10 text-[#d0bcff] flex items-center justify-center shrink-0">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-bold font-mono text-white">128+</div>
                <div className="text-[10px] font-mono text-[#958ea0] uppercase">Horas Scrims / Mes</div>
              </div>
            </div>

            <div className="bg-[#191b22] border border-[#282a30] p-3.5 rounded-xl flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#03b5d3]/10 text-[#4cd7f6] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-bold font-mono text-white">168ms</div>
                <div className="text-[10px] font-mono text-[#958ea0] uppercase">Reaction Time Prom.</div>
              </div>
            </div>

            <div className="bg-[#191b22] border border-[#282a30] p-3.5 rounded-xl flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#00a572]/10 text-[#4edea3] flex items-center justify-center shrink-0">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-bold font-mono text-[#4edea3]">-18 BPM</div>
                <div className="text-[10px] font-mono text-[#958ea0] uppercase">Estrés en Clutch 1vX</div>
              </div>
            </div>

            <div className="bg-[#191b22] border border-[#282a30] p-3.5 rounded-xl flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#d0bcff]/10 text-[#d0bcff] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-bold font-mono text-white">3 Pro Teams</div>
                <div className="text-[10px] font-mono text-[#958ea0] uppercase">Egresados en Tier 2</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Pilares de la Metodología Zingaro */}
      <section className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 pb-2 border-b border-[#282a30]">
          <div>
            <div className="text-xs font-mono text-[#d0bcff] font-bold uppercase tracking-wider">
              Plan Académico Integral
            </div>
            <h2 className="text-2xl font-bold text-white uppercase mt-0.5">Los 5 Pilares Metodológicos</h2>
          </div>
          <p className="text-xs text-[#cbc3d7] max-w-md">
            Ecosistema holístico enfocado en la construcción de atletas de élite. La habilidad técnica es estéril sin resistencia física y claridad mental.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* Pilar 1: Técnico (Span 2) */}
          <div className="lg:col-span-2 bg-[#191b22] border border-[#282a30] p-5 rounded-xl flex flex-col justify-between shadow-md hover:border-[#a078ff]/40 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#d0bcff] uppercase font-bold tracking-widest">
                  Pilar 01
                </span>
                <span className="px-2 py-0.5 rounded bg-[#a078ff]/20 text-[#d0bcff] text-[10px] font-mono font-bold">
                  45% Carga
                </span>
              </div>
              <h3 className="text-base font-bold text-white uppercase">Entrenamiento Técnico CS2</h3>
              <p className="text-xs text-[#cbc3d7] leading-relaxed">
                Estrategia de ejecución profunda, setups por mapa activo (Mirage, Inferno, Nuke, Anubis, Ancient, Dust2), micro-drills de crosshair placement, mecánicas de counter-strafing y lineups sub-tick.
              </p>
            </div>
            <div className="pt-4 mt-3 border-t border-[#282a30] space-y-1 text-xs font-mono">
              <div className="flex justify-between text-[#958ea0]">
                <span>Volumen Semanal</span>
                <span className="text-white font-bold">16 Horas de Práctica Táctica</span>
              </div>
              <div className="w-full bg-[#0c0e14] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#a078ff] h-full rounded-full" style={{ width: '85%' }} />
              </div>
            </div>
          </div>

          {/* Pilar 2: Táctico & IGL (Span 2) */}
          <div className="lg:col-span-2 bg-[#191b22] border border-[#282a30] p-5 rounded-xl flex flex-col justify-between shadow-md hover:border-[#4cd7f6]/40 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#4cd7f6] uppercase font-bold tracking-widest">
                  Pilar 02
                </span>
                <span className="px-2 py-0.5 rounded bg-[#03b5d3]/20 text-[#4cd7f6] text-[10px] font-mono font-bold">
                  Estrategia
                </span>
              </div>
              <h3 className="text-base font-bold text-white uppercase">Juego, Estrategia & IGL</h3>
              <p className="text-xs text-[#cbc3d7] leading-relaxed">
                Optimización matemática de economía MR12, diagramas de árbol de toma de decisiones en post-plant y retake, comunicación concisa con protocolo zero-toxicity y desarrollo de capitanes.
              </p>
            </div>
            <div className="pt-4 mt-3 border-t border-[#282a30] space-y-1 text-xs font-mono">
              <div className="flex justify-between text-[#958ea0]">
                <span>Análisis GOTV</span>
                <span className="text-white font-bold">6 Horas Demo Review</span>
              </div>
              <div className="w-full bg-[#0c0e14] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#4cd7f6] h-full rounded-full" style={{ width: '70%' }} />
              </div>
            </div>
          </div>

          {/* Pilar 3: Físico & Postura (Span 2) */}
          <div className="lg:col-span-2 bg-[#191b22] border border-[#282a30] p-5 rounded-xl flex flex-col justify-between shadow-md hover:border-[#4edea3]/40 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#4edea3] uppercase font-bold tracking-widest">
                  Pilar 03
                </span>
                <span className="px-2 py-0.5 rounded bg-[#00a572]/20 text-[#4edea3] text-[10px] font-mono font-bold">
                  Salud Funcional
                </span>
              </div>
              <h3 className="text-base font-bold text-white uppercase">Preparación Física & Postura</h3>
              <p className="text-xs text-[#cbc3d7] leading-relaxed">
                Alineación ergonómica lumbar y cervical, prevención biomecánica de túnel carpiano y tendinitis cubital, protocolos de yoga kinésico y estimulación cardiovascular pre-partida.
              </p>
            </div>
            <div className="pt-4 mt-3 border-t border-[#282a30] space-y-1 text-xs font-mono">
              <div className="flex justify-between text-[#958ea0]">
                <span>Kinesiología</span>
                <span className="text-white font-bold">4 Sesiones Semanales</span>
              </div>
              <div className="w-full bg-[#0c0e14] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#4edea3] h-full rounded-full" style={{ width: '60%' }} />
              </div>
            </div>
          </div>

          {/* Pilar 4: Mindfulness (Span 3) */}
          <div className="lg:col-span-3 bg-[#191b22] border border-[#282a30] p-5 rounded-xl flex flex-col justify-between shadow-md hover:border-[#a078ff]/40 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#d0bcff] uppercase font-bold tracking-widest">
                  Pilar 04
                </span>
                <span className="px-2 py-0.5 rounded bg-[#a078ff]/20 text-[#d0bcff] text-[10px] font-mono font-bold">
                  Biofeedback
                </span>
              </div>
              <h3 className="text-base font-bold text-white uppercase">Meditación & Atención Plena</h3>
              <p className="text-xs text-[#cbc3d7] leading-relaxed">
                Técnicas de respiración diafragmática 4-7-8 para mitigación del tilt tras rondas perdidas por eco, gestión de la ansiedad en overtime y anclajes cognitivos para conservar el pulso cardíaco bajo en 1v2 y 1v1.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#282a30] flex items-center justify-between bg-[#0c0e14] p-3 rounded-lg text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#a078ff] animate-ping" />
                <span className="text-white uppercase font-bold">Índice Tilt-Resistant:</span>
              </div>
              <span className="text-[#d0bcff] font-bold">92.4% Estabilidad</span>
            </div>
          </div>

          {/* Pilar 5: Salud Mental & Equipo (Span 3) */}
          <div className="lg:col-span-3 bg-[#191b22] border border-[#282a30] p-5 rounded-xl flex flex-col justify-between shadow-md hover:border-[#4cd7f6]/40 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#4cd7f6] uppercase font-bold tracking-widest">
                  Pilar 05
                </span>
                <span className="px-2 py-0.5 rounded bg-[#03b5d3]/20 text-[#4cd7f6] text-[10px] font-mono font-bold">
                  Neuro-Psicología
                </span>
              </div>
              <h3 className="text-base font-bold text-white uppercase">Acompañamiento Emocional</h3>
              <p className="text-xs text-[#cbc3d7] leading-relaxed">
                Sesiones de psicología deportiva clínica y grupal. Protocolos de feedback asertivo pospartido, manejo de la frustración competitiva, cohesión de escuadra y erradicación de conflictos interpersonales.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#282a30] flex items-center justify-between bg-[#0c0e14] p-3 rounded-lg text-xs font-mono">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#4cd7f6]" />
                <span className="text-white uppercase font-bold">Dinámica de Escuadra:</span>
              </div>
              <span className="text-[#4cd7f6] font-bold">Sinergia Optimizada</span>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Técnico de Élite */}
      <section className="bg-[#111319] border border-[#282a30] rounded-2xl p-6 md:p-8 shadow-xl space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2 border-b border-[#282a30]">
          <div>
            <div className="text-xs font-mono text-[#4cd7f6] font-bold uppercase tracking-wider">
              Cuerpo Docente
            </div>
            <h2 className="text-2xl font-bold text-white uppercase mt-0.5">Staff Técnico de Élite</h2>
          </div>
          <span className="text-xs font-mono text-[#958ea0] uppercase tracking-widest">
            Credenciales Internacionales Verificadas
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Adniel */}
          <div className="bg-[#191b22] border border-[#282a30] p-4 rounded-xl flex flex-col justify-between shadow-md hover:border-[#a078ff]/50 transition-all group">
            <div className="space-y-3">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-[#282a30]">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                  alt="HeadCoach Adniel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-[#a078ff] text-white text-[10px] font-mono uppercase px-2 py-0.5 rounded font-bold">
                  Director Técnico
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-1.5">
                  <span>Adniel</span>
                  <ShieldCheck className="w-4 h-4 text-[#4cd7f6]" />
                </h4>
                <div className="text-xs font-mono text-[#4cd7f6] uppercase font-semibold">
                  HeadCoach Internacional CS2
                </div>
              </div>

              <p className="text-xs text-[#cbc3d7] leading-relaxed">
                Coach activo de Peek Gaming MX. Ex DT de NewIndians Esports y Malvinas Gaming. Dicta masterclasses internacionales exclusivas los días viernes.
              </p>
            </div>

            <div className="pt-3 mt-3 border-t border-[#282a30] bg-[#0c0e14] p-2 rounded text-[11px] font-mono text-[#d0bcff] flex items-center justify-between">
              <span className="uppercase text-[#958ea0]">Cátedra:</span>
              <span className="font-bold">Estrategia Macro & Tier 1</span>
            </div>
          </div>

          {/* Pacuno_CS */}
          <div className="bg-[#191b22] border border-[#282a30] p-4 rounded-xl flex flex-col justify-between shadow-md hover:border-[#4cd7f6]/50 transition-all group">
            <div className="space-y-3">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-[#282a30]">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                  alt="Coach Pacuno_CS"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-[#03b5d3] text-black text-[10px] font-mono uppercase px-2 py-0.5 rounded font-bold">
                  Competitive Analyst
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-1.5">
                  <span>Pacuno_CS</span>
                  <Award className="w-4 h-4 text-[#4edea3]" />
                </h4>
                <div className="text-xs font-mono text-[#4cd7f6] uppercase font-semibold">
                  Director de Escuadras & Demos
                </div>
              </div>

              <p className="text-xs text-[#cbc3d7] leading-relaxed">
                Especialista en desgloses 2D y 3D en software de análisis de rondas GOTV. Encargado de la supervisión de rosters y adaptaciones de default ofensivo.
              </p>
            </div>

            <div className="pt-3 mt-3 border-t border-[#282a30] bg-[#0c0e14] p-2 rounded text-[11px] font-mono text-[#4cd7f6] flex items-center justify-between">
              <span className="uppercase text-[#958ea0]">Cátedra:</span>
              <span className="font-bold">Análisis Táctico GOTV</span>
            </div>
          </div>

          {/* Coach Chicho */}
          <div className="bg-[#191b22] border border-[#282a30] p-4 rounded-xl flex flex-col justify-between shadow-md hover:border-[#4edea3]/50 transition-all group">
            <div className="space-y-3">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-[#282a30]">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
                  alt="Coach Chicho"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-[#00a572] text-white text-[10px] font-mono uppercase px-2 py-0.5 rounded font-bold">
                  Semillero & Junior
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-1.5">
                  <span>Coach Chicho</span>
                  <ShieldCheck className="w-4 h-4 text-[#4edea3]" />
                </h4>
                <div className="text-xs font-mono text-[#4edea3] uppercase font-semibold">
                  Formación Inicial & Scouting
                </div>
              </div>

              <p className="text-xs text-[#cbc3d7] leading-relaxed">
                Detección temprana de talentos, categorías Sub-18 y jóvenes promesas. Metodología pedagógica centrada en la disciplina y fundamentos limpios.
              </p>
            </div>

            <div className="pt-3 mt-3 border-t border-[#282a30] bg-[#0c0e14] p-2 rounded text-[11px] font-mono text-[#4edea3] flex items-center justify-between">
              <span className="uppercase text-[#958ea0]">Cátedra:</span>
              <span className="font-bold">Mecánicas Básicas & Éthos</span>
            </div>
          </div>

          {/* Lic. Psicología */}
          <div className="bg-[#191b22] border border-[#282a30] p-4 rounded-xl flex flex-col justify-between shadow-md hover:border-[#d0bcff]/50 transition-all group">
            <div className="space-y-3">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-[#282a30]">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                  alt="Lic. Psicología"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-[#d0bcff] text-black text-[10px] font-mono uppercase px-2 py-0.5 rounded font-bold">
                  Neuro-Rendimiento
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-1.5">
                  <span>Lic. Psicología</span>
                  <HeartPulse className="w-4 h-4 text-[#d0bcff]" />
                </h4>
                <div className="text-xs font-mono text-[#d0bcff] uppercase font-semibold">
                  Salud Mental Deportiva
                </div>
              </div>

              <p className="text-xs text-[#cbc3d7] leading-relaxed">
                Especialista en psicología de alto rendimiento en deportes electrónicos. Programas anti-burnout, manejo del síndrome del impostor y biofeedback EEG.
              </p>
            </div>

            <div className="pt-3 mt-3 border-t border-[#282a30] bg-[#0c0e14] p-2 rounded text-[11px] font-mono text-[#d0bcff] flex items-center justify-between">
              <span className="uppercase text-[#958ea0]">Cátedra:</span>
              <span className="font-bold">Salud Mental & Resiliencia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Planes de Formación & Becas */}
      <section className="space-y-5">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <div className="text-xs font-mono text-[#d0bcff] font-bold uppercase tracking-wider">
            Membresías & Programas 2026
          </div>
          <h2 className="text-2xl font-bold text-white uppercase">Planes de Formación Competitiva</h2>
          <p className="text-xs text-[#cbc3d7]">
            Acceso directo a las instalaciones físicas de la LAN Arena Posadas o conexión remota con infraestructura privada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Plan Plata */}
          <div className="bg-[#191b22] border border-[#282a30] p-6 rounded-2xl flex flex-col justify-between shadow-lg">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-[#282a30] text-[#cbc3d7] font-bold">
                  Programa Base
                </span>
                <ShieldCheck className="w-5 h-5 text-[#958ea0]" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white uppercase">Plan Socio Plata</h3>
                <p className="text-xs text-[#cbc3d7] mt-1">
                  Ideal para consolidar fundamentos tácticos e iniciarse en el circuito federado.
                </p>
              </div>

              <div className="flex items-baseline gap-1 py-1">
                <span className="text-3xl font-extrabold font-mono text-white">$45.000</span>
                <span className="text-xs font-mono text-[#958ea0] uppercase">/ mes</span>
              </div>

              <div className="space-y-2 text-xs text-[#cbc3d7] pt-2 border-t border-[#282a30]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] shrink-0" />
                  <span>2 clases por semana (L-M o M-J)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] shrink-0" />
                  <span>Bloques de 2 hs (Rango 14:00 a 19:00 hs)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] shrink-0" />
                  <span>Acceso a servidores de práctica 128 Tick</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] shrink-0" />
                  <span>Rutinas ergonómicas básicas en LAN Arena</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => alert('Solicitud de Plan Plata iniciada.')}
              className="mt-6 w-full py-2.5 rounded-xl bg-[#282a30] hover:bg-[#33343b] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors"
            >
              Solicitar Inscripción Plata
            </button>
          </div>

          {/* Plan Oro (Destacado) */}
          <div className="bg-[#191b22] border-2 border-[#a078ff] p-6 rounded-2xl flex flex-col justify-between shadow-2xl relative -mt-2">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#a078ff] to-[#4cd7f6] px-3 py-0.5 rounded-full text-[10px] font-mono text-black font-extrabold uppercase tracking-wider shadow-md">
              Más Elegido // Rendimiento Pro
            </div>

            <div className="space-y-4 pt-1">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-[#a078ff]/20 text-[#d0bcff] font-bold">
                  Programa Avanzado
                </span>
                <Sparkles className="w-5 h-5 text-[#d0bcff]" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white uppercase">Plan Socio Oro</h3>
                <p className="text-xs text-[#cbc3d7] mt-1">
                  Formación técnica y mental intensiva orientada a la competencia profesional.
                </p>
              </div>

              <div className="flex items-baseline gap-1 py-1">
                <span className="text-3xl font-extrabold font-mono text-[#d0bcff]">$55.000</span>
                <span className="text-xs font-mono text-[#958ea0] uppercase">/ mes</span>
              </div>

              <div className="space-y-2 text-xs text-white pt-2 border-t border-[#282a30]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0" />
                  <span><strong>3 clases por semana</strong> (Técnica + Táctica)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400 shrink-0 fill-amber-400" />
                  <span><strong>Masterclass internacional los viernes con Adniel</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0" />
                  <span>Kit Oficial: Mochila oficial Zingaro + Jersey</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0" />
                  <span>Talleres de Mindfulness y biofeedback cardíaco</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0" />
                  <span>Análisis de demos GOTV individualizado</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => alert('¡Bienvenido al Plan Socio Oro de Zingaro Gaming!')}
              className="mt-6 w-full py-2.5 rounded-xl bg-[#a078ff] hover:bg-[#8B5CF6] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-[0_0_14px_rgba(160,120,255,0.4)]"
            >
              Unirse a la Academia Oro
            </button>
          </div>

          {/* Becas Semillero Sub-18 */}
          <div className="bg-[#191b22] border border-[#282a30] p-6 rounded-2xl flex flex-col justify-between shadow-lg">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-[#00a572]/20 text-[#4edea3] font-bold">
                  100% Bonificado
                </span>
                <Award className="w-5 h-5 text-[#4edea3]" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white uppercase">Becas Semillero Sub-18</h3>
                <p className="text-xs text-[#cbc3d7] mt-1">
                  Programa de alto patrocinio para jugadores juveniles destacados.
                </p>
              </div>

              <div className="flex items-baseline gap-1 py-1">
                <span className="text-3xl font-extrabold font-mono text-[#4edea3]">$0</span>
                <span className="text-xs font-mono text-[#958ea0] uppercase">/ Beca Total</span>
              </div>

              <div className="space-y-2 text-xs text-[#cbc3d7] pt-2 border-t border-[#282a30]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] shrink-0" />
                  <span>Scouting y pruebas de admisión presenciales</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] shrink-0" />
                  <span>Ingreso directo a escuadra Zingaro Academy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] shrink-0" />
                  <span>Viajes, viáticos y bootcamps 100% costeados</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] shrink-0" />
                  <span>Acompañamiento psicológico y tutelaje de estudios</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => alert('Postulación al Scouting Sub-18 abierta. Coordinaremos prueba de admisión.')}
              className="mt-6 w-full py-2.5 rounded-xl bg-[#0c0e14] hover:bg-[#282a30] text-[#4edea3] text-xs font-mono font-bold uppercase tracking-wider transition-colors border border-[#00a572]/40"
            >
              Postular al Scouting Sub-18
            </button>
          </div>
        </div>
      </section>

      {/* Calendario Semanal & Telemetría del Alumno */}
      <section className="bg-[#0c0e14] border border-[#282a30] rounded-2xl p-6 md:p-8 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2 border-b border-[#282a30]">
          <div>
            <div className="text-xs font-mono text-[#4cd7f6] font-bold uppercase tracking-wider">
              Monitoreo Holístico
            </div>
            <h2 className="text-2xl font-bold text-white uppercase mt-0.5">
              Calendario & Telemetría del Alumno
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#958ea0]">
            <span className="w-2 h-2 rounded-full bg-[#4edea3]" />
            <span>Sincronizado con base de datos Zingaro OS</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Cronograma (7 cols) */}
          <div className="lg:col-span-7 bg-[#191b22] border border-[#282a30] p-5 rounded-xl shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white uppercase flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#d0bcff]" />
                <span>Cronograma de Actividades</span>
              </h3>
              <span className="text-[11px] font-mono text-[#958ea0] uppercase">Semana en Curso</span>
            </div>

            <div className="space-y-2.5">
              {/* Lun/Mie */}
              <div className="p-3 bg-[#0c0e14] rounded-lg border border-[#282a30] flex items-center justify-between hover:border-[#a078ff]/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-[#a078ff]/10 text-[#d0bcff] flex flex-col items-center justify-center text-xs font-mono font-bold shrink-0">
                    <span>LUN</span>
                    <span>MIE</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase">Entrenamiento Técnico & Drills</div>
                    <div className="text-[11px] text-[#cbc3d7]">Crosshair placement, micro-ajuste, setups Anubis y Mirage</div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-mono text-[#d0bcff] font-bold">14:00 - 16:00 HS</span>
                  <div className="text-[10px] font-mono text-[#958ea0] uppercase">Coach Pacuno</div>
                </div>
              </div>

              {/* Mar/Jue */}
              <div className="p-3 bg-[#0c0e14] rounded-lg border border-[#282a30] flex items-center justify-between hover:border-[#4cd7f6]/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-[#03b5d3]/10 text-[#4cd7f6] flex flex-col items-center justify-center text-xs font-mono font-bold shrink-0">
                    <span>MAR</span>
                    <span>JUE</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase">Táctica Colectiva & Scrims Dirigidos</div>
                    <div className="text-[11px] text-[#cbc3d7]">Práctica en servidor privado con detención en vivo y repetición</div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-mono text-[#4cd7f6] font-bold">16:30 - 18:30 HS</span>
                  <div className="text-[10px] font-mono text-[#958ea0] uppercase">Coach Chicho</div>
                </div>
              </div>

              {/* Viernes */}
              <div className="p-3 bg-[#0c0e14] rounded-lg border border-[#282a30] flex items-center justify-between hover:border-[#4edea3]/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-[#00a572]/10 text-[#4edea3] flex flex-col items-center justify-center text-xs font-mono font-bold shrink-0">
                    <span>VIE</span>
                    <span>ORO</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase">Masterclass Internacional & Análisis Tier 1</div>
                    <div className="text-[11px] text-[#cbc3d7]">Sesión magistral en vivo con Adniel, metagame mundial y rondas clave</div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-mono text-[#4edea3] font-bold">19:00 - 21:00 HS</span>
                  <div className="text-[10px] font-mono text-[#958ea0] uppercase">HeadCoach Adniel</div>
                </div>
              </div>

              {/* Sábado */}
              <div className="p-3 bg-[#0c0e14] rounded-lg border border-[#282a30] flex items-center justify-between hover:border-[#d0bcff]/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-[#282a30] text-[#d0bcff] flex flex-col items-center justify-center text-xs font-mono font-bold shrink-0">
                    <span>SAB</span>
                    <span>WELL</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase">Acondicionamiento Físico & Mindfulness</div>
                    <div className="text-[11px] text-[#cbc3d7]">Yoga kinésico de muñecas, respiración diafragmática y debate grupal</div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-mono text-[#d0bcff] font-bold">10:00 - 12:00 HS</span>
                  <div className="text-[10px] font-mono text-[#958ea0] uppercase">Dpto. Médico</div>
                </div>
              </div>
            </div>
          </div>

          {/* Test de Rendimiento Alumno (5 cols) */}
          <div className="lg:col-span-5 bg-[#191b22] border border-[#282a30] p-5 rounded-xl shadow-md flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-[#282a30]">
                <h3 className="text-base font-bold text-white uppercase flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#4cd7f6]" />
                  <span>Test de Rendimiento Alumno</span>
                </h3>
                <span className="px-2 py-0.5 rounded bg-[#03b5d3]/20 text-[#4cd7f6] text-[10px] font-mono font-bold">
                  Bimestre 1
                </span>
              </div>
              <p className="text-xs text-[#cbc3d7] mt-2">
                Métricas biomecánicas y neuro-cognitivas registradas en hardware del LAN Hub de Zingaro.
              </p>

              {/* Data Gauges */}
              <div className="space-y-3 mt-4">
                {/* Aim */}
                <div className="bg-[#0c0e14] p-3 rounded-lg border border-[#282a30] space-y-1 text-xs">
                  <div className="flex justify-between font-mono">
                    <span className="text-[#958ea0]">Evaluación Puntería (Aim_Botz 100 Kills KPM)</span>
                    <span className="text-[#d0bcff] font-bold">108.4 KPM (+14%)</span>
                  </div>
                  <div className="w-full bg-[#1e1f26] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#a078ff] h-full rounded-full" style={{ width: '88%' }} />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-[#958ea0]">
                    <span>Rango inicial: 75 KPM</span>
                    <span className="text-[#d0bcff]">Meta Pro: 115 KPM</span>
                  </div>
                </div>

                {/* Reaction Time */}
                <div className="bg-[#0c0e14] p-3 rounded-lg border border-[#282a30] space-y-1 text-xs">
                  <div className="flex justify-between font-mono">
                    <span className="text-[#958ea0]">Tiempo de Reacción Visual</span>
                    <span className="text-[#4cd7f6] font-bold">162 ms (-28ms)</span>
                  </div>
                  <div className="w-full bg-[#1e1f26] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#4cd7f6] h-full rounded-full" style={{ width: '92%' }} />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-[#958ea0]">
                    <span>Promedio Normal: 220 ms</span>
                    <span className="text-[#4cd7f6]">Percentil 98: 155 ms</span>
                  </div>
                </div>

                {/* Heart Stress */}
                <div className="bg-[#0c0e14] p-3 rounded-lg border border-[#282a30] space-y-1 text-xs">
                  <div className="flex justify-between font-mono">
                    <span className="text-[#958ea0]">Estrés Cardíaco en Clutch (BPM)</span>
                    <span className="text-[#4edea3] font-bold">78 BPM (Estable)</span>
                  </div>
                  <div className="w-full bg-[#1e1f26] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#4edea3] h-full rounded-full" style={{ width: '76%' }} />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-[#958ea0]">
                    <span>Pico previo: 118 BPM</span>
                    <span className="text-[#4edea3]">Disminución tilt: -34%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Link to TomiX Report */}
            <div className="pt-3 border-t border-[#282a30] flex items-center justify-between">
              <div className="text-xs">
                <span className="font-bold text-white block">Expediente Alumno #ZNG-088</span>
                <span className="text-[#4edea3] text-[11px] font-mono">Tomás "TomiX" Galeano (9.4 Sobresaliente)</span>
              </div>
              <button
                onClick={() => onSelectView('student-report')}
                className="px-3.5 py-1.5 rounded-lg bg-[#a078ff] hover:bg-[#8B5CF6] text-white text-xs font-mono font-bold uppercase transition-all shadow-sm flex items-center gap-1"
              >
                <span>Ver Boletín Completo</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
