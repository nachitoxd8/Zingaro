import React from 'react';
import { ViewType } from '../../types/esports';
import {
  FileText,
  Download,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Play,
  Award,
  ShieldCheck,
  TrendingUp,
  Brain,
  Activity,
  User,
  HeartPulse,
  Users,
  Crosshair,
  Dumbbell,
  ChevronRight,
  ArrowLeft
} from 'lucide-react';

interface StudentReportViewProps {
  onSelectView: (view: ViewType) => void;
}

export const StudentReportView: React.FC<StudentReportViewProps> = ({ onSelectView }) => {
  return (
    <div className="space-y-6">
      {/* Sub-header Breadcrumb & Operational Alert */}
      <div className="w-full px-5 py-2.5 bg-[#0c0e14] border border-[#282a30] rounded-xl flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-mono">
          <button
            onClick={() => onSelectView('academia')}
            className="text-[#4cd7f6] hover:underline uppercase tracking-wider flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Academia Zingaro</span>
          </button>
          <span className="text-[#958ea0]">/</span>
          <span className="text-[#cbc3d7]">Alto Rendimiento</span>
          <span className="text-[#958ea0]">/</span>
          <span className="text-[#d0bcff] font-bold">Boletín de Rendimiento & Telemetría</span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-1.5 bg-[#191b22] px-2.5 py-1 rounded border border-[#282a30]">
            <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse" />
            <span className="text-white">CICLO: <strong className="text-[#4edea3]">BIMESTRE 1 - CLAUSURA 2026</strong></span>
          </div>
          <div className="flex items-center gap-1 text-[#958ea0]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#4edea3]" />
            <span>ID ESTUDIANTE: #ZNG-2026-088</span>
          </div>
        </div>
      </div>

      {/* STUDENT PROFILE HERO CARD (BENTO TOP) */}
      <div className="relative overflow-hidden rounded-2xl bg-[#191b22] border border-[#282a30] p-6 shadow-2xl">
        <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-[#a078ff]/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full bg-[#4cd7f6]/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-6">
          {/* Identity */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 min-w-0">
            <div className="relative shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-[#282a30] border-2 border-[#a078ff]/40 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80"
                  alt="Tomás Galeano TomiX"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded bg-[#00a572] text-white text-[10px] font-mono uppercase font-bold shadow-md">
                TIER 2 READY
              </div>
            </div>

            <div className="space-y-1.5 min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                <span className="px-2 py-0.5 rounded bg-[#282a30] text-[#4cd7f6] uppercase font-bold">
                  PLAN SOCIO ORO
                </span>
                <span className="px-2 py-0.5 rounded bg-[#0c0e14] text-[#958ea0] uppercase">
                  COMISIÓN B (L-M-V 14:00 - 16:00 HS)
                </span>
                <span className="px-2 py-0.5 rounded bg-[#00a572]/20 text-[#4edea3] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-ping" />
                  APTO SCRIMS & TORNEOS
                </span>
              </div>

              <div className="flex flex-wrap items-baseline gap-2 pt-0.5">
                <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Tomás Galeano</h1>
                <span className="text-xl font-bold text-[#d0bcff]">"TomiX"</span>
                <span className="text-xs font-mono text-[#4cd7f6] font-semibold">[RIFLER ENTRY / 2ND CALLER]</span>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#cbc3d7] pt-1 font-mono">
                <div className="flex items-center gap-1">
                  <Crosshair className="w-3.5 h-3.5 text-[#d0bcff]" />
                  <span>Tutor CS2: <strong className="text-white">Pacuno_CS</strong></span>
                </div>
                <div className="flex items-center gap-1">
                  <Brain className="w-3.5 h-3.5 text-[#4cd7f6]" />
                  <span>Masterclass: <strong className="text-white">Adniel</strong></span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#4edea3]">●</span>
                  <span>Sede: <strong className="text-white">Posadas Arena Hub</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Grade Summary & Action Trigger */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-5 xl:border-l xl:border-[#282a30] xl:pl-6">
            <div className="flex items-center gap-4 bg-[#0c0e14] px-4 py-3 rounded-2xl border border-[#282a30]">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-[#282a30]"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                  />
                  <path
                    className="text-[#4edea3]"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeDasharray="94, 100"
                    strokeLinecap="round"
                    strokeWidth="3.5"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-lg font-bold font-mono text-[#4edea3] leading-none">9.4</span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-[#958ea0] uppercase tracking-wider">Promedio Global</span>
                <span className="text-sm font-bold text-white uppercase font-mono">SOBRESALIENTE</span>
                <span className="text-[11px] font-mono text-[#4cd7f6]">Proyección Tier 1 / Pro</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <button
                onClick={() => alert('Generando y descargando Boletín Oficial PDF firmado criptográficamente...')}
                className="px-4 py-2 bg-[#a078ff] text-white font-mono text-xs uppercase font-bold rounded-lg hover:bg-[#8B5CF6] transition-all flex items-center justify-center gap-1.5 shadow-[0_0_14px_rgba(160,120,255,0.4)]"
              >
                <Download className="w-4 h-4" />
                <span>Boletín Oficial PDF</span>
              </button>
              <button
                onClick={() => alert('Abriendo agenda para 1-on-1 con Coach Pacuno_CS')}
                className="px-4 py-2 bg-[#1e1f26] hover:bg-[#282a30] text-white font-mono text-xs uppercase rounded-lg transition-colors flex items-center justify-center gap-1.5 border border-[#33343b]"
              >
                <Calendar className="w-4 h-4 text-[#4cd7f6]" />
                <span>Agendar 1-on-1 Coach</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 5 METHODOLOGICAL PILLARS: INTERACTIVE CARDS */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <span className="text-xs font-mono text-[#4cd7f6] uppercase tracking-widest">// METODOLOGÍA INTEGRAL ZINGARO</span>
            <h2 className="text-xl font-bold text-white uppercase mt-0.5">Evaluación por los 5 Pilares Deportivos</h2>
          </div>
          <div className="flex items-center gap-2 text-[#958ea0] font-mono text-xs">
            <span>Escala: 1.0 a 10.0</span>
            <span>•</span>
            <span className="text-[#4edea3]">Mínimo Promocional: 7.5</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
          {/* Pilar 1: Técnico */}
          <div className="bg-[#191b22] border border-[#282a30] rounded-xl p-4 flex flex-col justify-between hover:border-[#a078ff]/40 transition-all space-y-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded bg-[#a078ff]/10 text-[#d0bcff] flex items-center justify-center">
                  <Crosshair className="w-4 h-4" />
                </span>
                <span className="text-lg font-bold font-mono text-[#4edea3]">9.6 <span className="text-xs text-[#958ea0]">/10</span></span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#d0bcff] uppercase font-bold">Pilar 01</span>
                <h3 className="text-sm font-bold text-white uppercase">Técnico & Mecánicas</h3>
              </div>
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-[#cbc3d7]">
                  <span>Crosshair Placement</span>
                  <span className="text-[#4edea3] font-bold">94%</span>
                </div>
                <div className="w-full h-1.5 bg-[#0c0e14] rounded-full overflow-hidden">
                  <div className="h-full bg-[#4edea3]" style={{ width: '94%' }} />
                </div>
                <div className="flex justify-between text-[#cbc3d7] pt-1">
                  <span>Time to Damage (TTD)</span>
                  <span className="text-[#4cd7f6] font-bold">182 ms</span>
                </div>
                <div className="w-full h-1.5 bg-[#0c0e14] rounded-full overflow-hidden">
                  <div className="h-full bg-[#4cd7f6]" style={{ width: '88%' }} />
                </div>
              </div>
            </div>
            <div className="p-2.5 rounded bg-[#0c0e14] border border-[#282a30] text-[11px] text-[#cbc3d7] italic">
              "Excelente micro-ajuste de mira en retakes de B. Mantener el pre-fire sin sobreexponer el hombro." - Pacuno
            </div>
          </div>

          {/* Pilar 2: Táctica */}
          <div className="bg-[#191b22] border border-[#282a30] rounded-xl p-4 flex flex-col justify-between hover:border-[#4cd7f6]/40 transition-all space-y-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded bg-[#03b5d3]/10 text-[#4cd7f6] flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </span>
                <span className="text-lg font-bold font-mono text-[#4edea3]">9.1 <span className="text-xs text-[#958ea0]">/10</span></span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#4cd7f6] uppercase font-bold">Pilar 02</span>
                <h3 className="text-sm font-bold text-white uppercase">Estrategia & Macro MR12</h3>
              </div>
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-[#cbc3d7]">
                  <span>Winrate Post-Plant</span>
                  <span className="text-[#4edea3] font-bold">71%</span>
                </div>
                <div className="w-full h-1.5 bg-[#0c0e14] rounded-full overflow-hidden">
                  <div className="h-full bg-[#4edea3]" style={{ width: '71%' }} />
                </div>
                <div className="flex justify-between text-[#cbc3d7] pt-1">
                  <span>Eficacia Eco / Half</span>
                  <span className="text-[#4cd7f6] font-bold">34% (Top 5%)</span>
                </div>
                <div className="w-full h-1.5 bg-[#0c0e14] rounded-full overflow-hidden">
                  <div className="h-full bg-[#4cd7f6]" style={{ width: '68%' }} />
                </div>
              </div>
            </div>
            <div className="p-2.5 rounded bg-[#0c0e14] border border-[#282a30] text-[11px] text-[#cbc3d7] italic">
              "Gran lectura del timing en banana. Mejorar el reseteo económico cuando el rival fuerza segunda ronda." - Adniel
            </div>
          </div>

          {/* Pilar 3: Físico & Kine */}
          <div className="bg-[#191b22] border border-[#282a30] rounded-xl p-4 flex flex-col justify-between hover:border-[#4edea3]/40 transition-all space-y-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded bg-[#00a572]/10 text-[#4edea3] flex items-center justify-center">
                  <Dumbbell className="w-4 h-4" />
                </span>
                <span className="text-lg font-bold font-mono text-[#4edea3]">9.8 <span className="text-xs text-[#958ea0]">/10</span></span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#4edea3] uppercase font-bold">Pilar 03</span>
                <h3 className="text-sm font-bold text-white uppercase">Físico & Ergonomía</h3>
              </div>
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-[#cbc3d7]">
                  <span>Pausas Activas LAN</span>
                  <span className="text-[#4edea3] font-bold">100% (24/24)</span>
                </div>
                <div className="w-full h-1.5 bg-[#0c0e14] rounded-full overflow-hidden">
                  <div className="h-full bg-[#4edea3]" style={{ width: '100%' }} />
                </div>
                <div className="flex justify-between text-[#cbc3d7] pt-1">
                  <span>Tensión Antebrazo</span>
                  <span className="text-[#4edea3] font-bold">0% (Limpio)</span>
                </div>
                <div className="w-full h-1.5 bg-[#0c0e14] rounded-full overflow-hidden">
                  <div className="h-full bg-[#4edea3]" style={{ width: '10%' }} />
                </div>
              </div>
            </div>
            <div className="p-2.5 rounded bg-[#0c0e14] border border-[#282a30] text-[11px] text-[#cbc3d7] italic">
              "Postura lumbar de libro. Ángulo de antebrazo 90° perfecto, sin tensión en pronador redondo." - Dpto. Kine
            </div>
          </div>

          {/* Pilar 4: Biofeedback */}
          <div className="bg-[#191b22] border border-[#282a30] rounded-xl p-4 flex flex-col justify-between hover:border-[#a078ff]/40 transition-all space-y-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded bg-[#a078ff]/10 text-[#d0bcff] flex items-center justify-center">
                  <HeartPulse className="w-4 h-4" />
                </span>
                <span className="text-lg font-bold font-mono text-[#d0bcff]">8.9 <span className="text-xs text-[#958ea0]">/10</span></span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#d0bcff] uppercase font-bold">Pilar 04</span>
                <h3 className="text-sm font-bold text-white uppercase">Biofeedback & Calma</h3>
              </div>
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-[#cbc3d7]">
                  <span>BPM Máx en Clutch</span>
                  <span className="text-[#4cd7f6] font-bold">108 BPM</span>
                </div>
                <div className="w-full h-1.5 bg-[#0c0e14] rounded-full overflow-hidden">
                  <div className="h-full bg-[#4cd7f6]" style={{ width: '78%' }} />
                </div>
                <div className="flex justify-between text-[#cbc3d7] pt-1">
                  <span>Recuperación Post-Tilt</span>
                  <span className="text-[#4edea3] font-bold">24 seg</span>
                </div>
                <div className="w-full h-1.5 bg-[#0c0e14] rounded-full overflow-hidden">
                  <div className="h-full bg-[#4edea3]" style={{ width: '85%' }} />
                </div>
              </div>
            </div>
            <div className="p-2.5 rounded bg-[#0c0e14] border border-[#282a30] text-[11px] text-[#cbc3d7] italic">
              "Baja de pulso notable tras perder la ronda 11 contra anti-eco. El anclaje 4-7-8 funcionó de inmediato."
            </div>
          </div>

          {/* Pilar 5: Comunicación */}
          <div className="bg-[#191b22] border border-[#282a30] rounded-xl p-4 flex flex-col justify-between hover:border-[#4cd7f6]/40 transition-all space-y-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded bg-[#03b5d3]/10 text-[#4cd7f6] flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </span>
                <span className="text-lg font-bold font-mono text-[#4edea3]">9.5 <span className="text-xs text-[#958ea0]">/10</span></span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#4cd7f6] uppercase font-bold">Pilar 05</span>
                <h3 className="text-sm font-bold text-white uppercase">Comunicación & Equipo</h3>
              </div>
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-[#cbc3d7]">
                  <span>Zero-Toxic Protocol</span>
                  <span className="text-[#4edea3] font-bold">0 Faltas</span>
                </div>
                <div className="w-full h-1.5 bg-[#0c0e14] rounded-full overflow-hidden">
                  <div className="h-full bg-[#4edea3]" style={{ width: '100%' }} />
                </div>
                <div className="flex justify-between text-[#cbc3d7] pt-1">
                  <span>Peer Review</span>
                  <span className="text-[#4edea3] font-bold">4.9 / 5.0 ★</span>
                </div>
                <div className="w-full h-1.5 bg-[#0c0e14] rounded-full overflow-hidden">
                  <div className="h-full bg-[#4edea3]" style={{ width: '98%' }} />
                </div>
              </div>
            </div>
            <div className="p-2.5 rounded bg-[#0c0e14] border border-[#282a30] text-[11px] text-[#cbc3d7] italic">
              "Voz de calma y soporte cuando la escuadra va 2-8 abajo. Valiosa madurez competitiva." - Lic. Psicología
            </div>
          </div>
        </div>
      </div>

      {/* RADAR POLIGONAL & EVOLUCIÓN CRONOLÓGICA (BENTO MIDDLE) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Radar Poligonal (5 cols) */}
        <div className="xl:col-span-5 bg-[#191b22] border border-[#282a30] rounded-xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-[#d0bcff] uppercase tracking-widest">// RADAR DIAGNÓSTICO</span>
              <span className="text-xs font-mono text-[#958ea0]">5 Dimensiones</span>
            </div>
            <h3 className="text-lg font-bold text-white">Perfil Poligonal del Atleta</h3>
            <p className="text-xs text-[#cbc3d7] mt-1">
              Comparativa de TomiX frente a la media académica y el umbral Tier 1 Profesional.
            </p>

            {/* Radar SVG */}
            <div className="relative w-full aspect-square max-w-[280px] mx-auto flex items-center justify-center my-4">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 200 200">
                {/* Polygons Grid */}
                <polygon
                  className="text-[#33343b]"
                  fill="none"
                  points="100,20 176,75 147,165 53,165 24,75"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <polygon
                  className="text-[#33343b]"
                  fill="none"
                  points="100,45 153,84 133,145 67,145 47,84"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <polygon
                  className="text-[#33343b]"
                  fill="none"
                  points="100,70 130,92 119,127 81,127 70,92"
                  stroke="currentColor"
                  strokeWidth="1"
                />

                {/* Axes */}
                <line x1="100" y1="100" x2="100" y2="20" stroke="#33343b" strokeDasharray="2 2" />
                <line x1="100" y1="100" x2="176" y2="75" stroke="#33343b" strokeDasharray="2 2" />
                <line x1="100" y1="100" x2="147" y2="165" stroke="#33343b" strokeDasharray="2 2" />
                <line x1="100" y1="100" x2="53" y2="165" stroke="#33343b" strokeDasharray="2 2" />
                <line x1="100" y1="100" x2="24" y2="75" stroke="#33343b" strokeDasharray="2 2" />

                {/* Media Academia (Dark gray polygon) */}
                <polygon
                  points="100,50 145,88 128,140 72,140 55,88"
                  fill="rgba(149, 142, 160, 0.2)"
                  stroke="#958ea0"
                  strokeWidth="1.5"
                />

                {/* Tier 1 Target (Cyan dashed) */}
                <polygon
                  points="100,24 172,78 144,161 56,161 28,78"
                  fill="none"
                  stroke="#4cd7f6"
                  strokeDasharray="3 3"
                  strokeWidth="1.5"
                />

                {/* TomiX Profile (Purple glow & fill) */}
                <polygon
                  points="100,23 170,80 146,163 58,157 26,79"
                  fill="rgba(160, 120, 255, 0.35)"
                  stroke="#a078ff"
                  strokeWidth="2.5"
                />

                {/* Data Nodes */}
                <circle cx="100" cy="23" r="3.5" fill="#4edea3" />
                <circle cx="170" cy="80" r="3.5" fill="#4cd7f6" />
                <circle cx="146" cy="163" r="3.5" fill="#4edea3" />
                <circle cx="58" cy="157" r="3.5" fill="#a078ff" />
                <circle cx="26" cy="79" r="3.5" fill="#4cd7f6" />

                {/* Labels */}
                <text x="100" y="10" textAnchor="middle" className="fill-white font-mono text-[9px] font-bold">MECÁNICAS (9.6)</text>
                <text x="182" y="80" textAnchor="start" className="fill-white font-mono text-[9px] font-bold">TÁCTICA (9.1)</text>
                <text x="155" y="180" textAnchor="middle" className="fill-white font-mono text-[9px] font-bold">POSTURA (9.8)</text>
                <text x="45" y="180" textAnchor="middle" className="fill-white font-mono text-[9px] font-bold">CALMA (8.9)</text>
                <text x="18" y="80" textAnchor="end" className="fill-white font-mono text-[9px] font-bold">TEAMPLAY (9.5)</text>
              </svg>
            </div>
          </div>

          <div className="bg-[#0c0e14] border border-[#282a30] rounded-xl p-3 flex items-center justify-around text-center text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-[#a078ff]" />
              <span className="text-white font-bold">TomiX (9.4)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-1 rounded-sm bg-[#4cd7f6]" />
              <span className="text-[#4cd7f6]">Tier 1 Target</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-[#958ea0]" />
              <span className="text-[#958ea0]">Media (7.8)</span>
            </div>
          </div>
        </div>

        {/* Evolución Cronológica Semanas 1 a 8 (7 cols) */}
        <div className="xl:col-span-7 bg-[#191b22] border border-[#282a30] rounded-xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono text-[#4edea3] uppercase tracking-widest">// TELEMETRÍA TEMPORAL</span>
              <div className="flex items-center gap-1.5 bg-[#00a572]/20 border border-[#00a572]/40 px-2.5 py-1 rounded text-xs font-mono text-[#4edea3] font-bold">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+28.4% PROGRESO NETO</span>
              </div>
            </div>

            <h3 className="text-lg font-bold text-white">Curva de Rendimiento Bimestral (Semana 1 - 8)</h3>
            <p className="text-xs text-[#cbc3d7] mt-1">
              Seguimiento semanal de Rating HLTV 2.0 en scrims oficiales y efectividad en rondas de apertura.
            </p>

            {/* SVG Timeline Curve */}
            <div className="h-44 w-full relative flex items-end pt-4 pb-2 my-2">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 700 160">
                <defs>
                  <linearGradient id="curveGradient2" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#4edea3" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#4edea3" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="40" x2="700" y2="40" stroke="#33343b" strokeWidth="1" />
                <line x1="0" y1="80" x2="700" y2="80" stroke="#33343b" strokeWidth="1" />
                <line x1="0" y1="120" x2="700" y2="120" stroke="#33343b" strokeWidth="1" />

                <path
                  d="M 30,135 Q 120,120 210,95 T 390,70 T 570,45 L 670,30 L 670,160 L 30,160 Z"
                  fill="url(#curveGradient2)"
                />
                <path
                  d="M 30,135 Q 120,120 210,95 T 390,70 T 570,45 L 670,30"
                  fill="none"
                  stroke="#4edea3"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
                <path
                  d="M 30,110 L 670,55"
                  fill="none"
                  stroke="#4cd7f6"
                  strokeDasharray="4 4"
                  strokeWidth="1.5"
                  opacity="0.6"
                />

                <circle cx="30" cy="135" r="4" fill="#0c0e14" stroke="#4edea3" strokeWidth="2" />
                <circle cx="120" cy="120" r="4" fill="#0c0e14" stroke="#4edea3" strokeWidth="2" />
                <circle cx="210" cy="95" r="4" fill="#0c0e14" stroke="#4edea3" strokeWidth="2" />
                <circle cx="300" cy="85" r="4" fill="#0c0e14" stroke="#4edea3" strokeWidth="2" />
                <circle cx="390" cy="70" r="4" fill="#0c0e14" stroke="#4edea3" strokeWidth="2" />
                <circle cx="480" cy="60" r="4" fill="#0c0e14" stroke="#4edea3" strokeWidth="2" />
                <circle cx="570" cy="45" r="4" fill="#0c0e14" stroke="#4edea3" strokeWidth="2" />
                <circle cx="670" cy="30" r="5" fill="#4edea3" stroke="#0c0e14" strokeWidth="2" />
              </svg>
            </div>

            {/* X-axis week steps */}
            <div className="grid grid-cols-8 gap-1 pt-2 border-t border-[#282a30] text-center font-mono text-[11px]">
              <div><span className="text-[#958ea0] block text-[9px]">SEM 1</span><span className="text-white font-bold">1.02 R</span></div>
              <div><span className="text-[#958ea0] block text-[9px]">SEM 2</span><span className="text-white font-bold">1.09 R</span></div>
              <div><span className="text-[#958ea0] block text-[9px]">SEM 3</span><span className="text-white font-bold">1.18 R</span></div>
              <div><span className="text-[#958ea0] block text-[9px]">SEM 4</span><span className="text-white font-bold">1.22 R</span></div>
              <div><span className="text-[#958ea0] block text-[9px]">SEM 5</span><span className="text-white font-bold">1.30 R</span></div>
              <div><span className="text-[#958ea0] block text-[9px]">SEM 6</span><span className="text-white font-bold">1.34 R</span></div>
              <div><span className="text-[#958ea0] block text-[9px]">SEM 7</span><span className="text-white font-bold">1.41 R</span></div>
              <div className="bg-[#a078ff]/20 rounded py-0.5"><span className="text-[#4edea3] block text-[9px] font-bold">SEM 8</span><span className="text-[#4edea3] font-bold">1.48 R</span></div>
            </div>
          </div>

          <div className="mt-4 pt-3 bg-[#0c0e14] border border-[#282a30] rounded-xl p-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <span className="text-[10px] font-mono text-[#958ea0] uppercase block">K/D RATIO EN SCRIMS</span>
              <span className="text-xl font-bold font-mono text-white">1.54 <span className="text-xs text-[#4edea3] font-semibold">+0.38</span></span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#958ea0] uppercase block">ENTRY FRAG SUCCESS</span>
              <span className="text-xl font-bold font-mono text-[#4cd7f6]">64.2% <span className="text-xs text-[#4edea3] font-semibold">+14%</span></span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#958ea0] uppercase block">ASISTENCIAS CON FLASH</span>
              <span className="text-xl font-bold font-mono text-[#d0bcff]">0.82 <span className="text-xs text-[#958ea0] font-normal">/ ronda</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* GOTV FEEDBACK LOG & CERTIFICATION ROADMAP (SPLIT 7/5) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Left: GOTV Feedback Log (7 cols) */}
        <div className="xl:col-span-7 bg-[#191b22] border border-[#282a30] rounded-xl p-6 shadow-xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono text-[#4cd7f6] uppercase tracking-widest">// FEEDBACK TÁCTICO INDIVIDUAL</span>
              <h3 className="text-lg font-bold text-white">Registro de Demos Evaluadas (GOTV Log)</h3>
            </div>
            <button
              onClick={() => onSelectView('servers')}
              className="px-3 py-1 bg-[#0c0e14] hover:bg-neutral-800 rounded border border-[#282a30] text-xs font-mono text-white flex items-center gap-1.5 transition-colors"
            >
              <Play className="w-3.5 h-3.5 text-[#4cd7f6]" />
              <span>Ver Servidor Demos</span>
            </button>
          </div>

          <div className="space-y-3">
            {/* Demo 1 */}
            <div className="bg-[#0c0e14] border border-[#282a30] rounded-xl p-4 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-[#00a572]/20 text-[#4edea3] font-bold">
                    VICTORIA 13-9
                  </span>
                  <span className="font-bold text-white">Partida #ZNG-ACAD-402</span>
                  <span className="text-[#958ea0]">• Mapa: <strong className="text-white">de_mirage</strong></span>
                </div>
                <span className="text-[#958ea0]">vs Formosa Legion</span>
              </div>

              <div className="p-3 rounded-lg bg-[#191b22] flex items-start gap-3">
                <span className="px-2 py-0.5 rounded bg-[#03b5d3]/20 text-[#4cd7f6] font-mono text-[10px] font-bold shrink-0 mt-0.5">
                  MIN 14:22
                </span>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5 text-xs font-mono">
                    <span className="text-[#d0bcff] font-bold">Pacuno_CS (Director de Escuadras):</span>
                    <span className="text-[#4edea3] font-semibold">[PUNTUACIÓN 10/10]</span>
                  </div>
                  <p className="text-xs text-[#cbc3d7] leading-relaxed">
                    "Excelente flashbang profunda de soporte para el AWP en nido de medio. Habilitó el first-pick limpio sin recibir tag. Coordinación de audio perfecta."
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-[#958ea0] pt-1">
                <span>Timestamp GOTV Tick: #148920</span>
                <button
                  onClick={() => alert('Lanzando reproductor GOTV en tick #148920')}
                  className="text-[#4cd7f6] hover:underline flex items-center gap-1"
                >
                  <span>Reproducir Tick en CS2</span>
                  <Play className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Demo 2 */}
            <div className="bg-[#0c0e14] border border-[#282a30] rounded-xl p-4 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-bold">
                    DERROTA 11-13
                  </span>
                  <span className="font-bold text-white">Partida #ZNG-ACAD-389</span>
                  <span className="text-[#958ea0]">• Mapa: <strong className="text-white">de_anubis</strong></span>
                </div>
                <span className="text-[#958ea0]">vs Posadas Five Junior</span>
              </div>

              <div className="p-3 rounded-lg bg-[#191b22] flex items-start gap-3">
                <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px] font-bold shrink-0 mt-0.5">
                  MIN 21:05
                </span>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5 text-xs font-mono">
                    <span className="text-[#4cd7f6] font-bold">Adniel (HeadCoach):</span>
                    <span className="text-red-400 font-semibold">[PUNTO DE CORRECCIÓN]</span>
                  </div>
                  <p className="text-xs text-[#cbc3d7] leading-relaxed">
                    "Sobreextensión innecesaria en bombsite B con ventaja numérica de 3v2. Buscaste el duelo individual por conector cuando la bomba ya estaba plantada. Mantener crossfire pasivo con el compañero."
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-[#958ea0] pt-1">
                <span>Timestamp GOTV Tick: #220194</span>
                <button
                  onClick={() => alert('Lanzando reproductor GOTV en tick #220194')}
                  className="text-[#4cd7f6] hover:underline flex items-center gap-1"
                >
                  <span>Reproducir Tick en CS2</span>
                  <Play className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Objetivos de Certificación (5 cols) */}
        <div className="xl:col-span-5 bg-[#191b22] border border-[#282a30] rounded-xl p-6 shadow-xl flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono text-[#d0bcff] uppercase tracking-widest">// PLAN DE ASCENSO</span>
              <Award className="w-5 h-5 text-[#d0bcff]" />
            </div>
            <h3 className="text-lg font-bold text-white">Objetivos de Certificación</h3>
            <p className="text-xs text-[#cbc3d7] mt-1 mb-4">
              Requisitos obligatorios antes del cierre de bimestre para postular al Draft Oficial Sub-18 Zingaro.
            </p>

            <div className="space-y-3">
              {/* Goal 1 */}
              <div className="bg-[#0c0e14] border border-[#282a30] p-3 rounded-lg space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4edea3]" />
                    <span className="font-semibold text-white">Lineups Profundos: de_ancient</span>
                  </div>
                  <span className="font-mono text-[#4cd7f6] font-bold">3 / 5 HUMOS</span>
                </div>
                <div className="w-full h-1.5 bg-[#191b22] rounded-full overflow-hidden">
                  <div className="h-full bg-[#4cd7f6]" style={{ width: '60%' }} />
                </div>
                <span className="text-[11px] font-mono text-[#958ea0] block">
                  Faltan: Humo Cueva B desde T-Spawn y Split Medio.
                </span>
              </div>

              {/* Goal 2 */}
              <div className="bg-[#0c0e14] border border-[#282a30] p-3 rounded-lg space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Dumbbell className="w-4 h-4 text-[#d0bcff]" />
                    <span className="font-semibold text-white">Test de Aim_Botz (100 Kills)</span>
                  </div>
                  <span className="font-mono text-[#4edea3] font-bold">104 / 110 KPM</span>
                </div>
                <div className="w-full h-1.5 bg-[#191b22] rounded-full overflow-hidden">
                  <div className="h-full bg-[#a078ff]" style={{ width: '94%' }} />
                </div>
                <span className="text-[11px] font-mono text-[#958ea0] block">
                  Meta requerida: 110 Kills Por Minuto (Desafío a 6 KPM).
                </span>
              </div>

              {/* Goal 3 */}
              <div className="bg-[#0c0e14] border border-[#282a30] p-3 rounded-lg space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-[#4cd7f6]" />
                    <span className="font-semibold text-white">Respiración 4-7-8 Semifinal</span>
                  </div>
                  <span className="font-mono text-[#4edea3] font-bold">PROGRAMADO</span>
                </div>
                <span className="text-[11px] font-mono text-[#958ea0] block">
                  Sesión de 10 min previa a la semifinal del Torneo Regional.
                </span>
              </div>
            </div>
          </div>

          {/* Reward Banner */}
          <div className="rounded-xl bg-[#0c0e14] border border-[#a078ff]/30 p-3.5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#a078ff]/20 flex items-center justify-center text-[#d0bcff] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <span className="font-mono text-[10px] text-[#d0bcff] font-bold uppercase tracking-wider block">
                RECOMPENSA DE GRADUACIÓN
              </span>
              <p className="text-white mt-0.5 leading-snug">
                Pase prioritario directo al <strong className="text-[#4edea3]">Draft Scouting Zingaro Academy Sub-18</strong> con contrato formativo y equipamiento LAN bonificado.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER CERTIFICATION / ARBITRATION SIGN-OFF */}
      <div className="w-full bg-[#0c0e14] border border-[#282a30] rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#191b22] border border-[#282a30] flex items-center justify-center text-[#4edea3] shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono text-[#4cd7f6] uppercase tracking-wider block font-bold">
              DOCUMENTO DEPORTIVO VERIFICADO POR ZINGARO OS
            </span>
            <p className="text-xs text-[#958ea0] mt-0.5">
              Firma digital y registro en servidor de telemetría: <strong className="text-[#cbc3d7] font-mono">SHA256: 9b88a7c29e4d5f1023a</strong> • Emisión 2026 Posadas, Misiones.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 self-end md:self-auto">
          <div className="text-right hidden sm:block text-xs font-mono">
            <span className="text-[#958ea0] block text-[10px]">DIRECTOR DEPORTIVO</span>
            <span className="font-bold text-white">Lic. Facundo "Pacuno" Molina</span>
          </div>
          <div className="w-9 h-9 rounded-full bg-[#a078ff]/20 text-[#d0bcff] flex items-center justify-center font-bold font-mono">
            FM
          </div>
        </div>
      </div>
    </div>
  );
};
