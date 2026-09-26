import React, { useState } from 'react';
import { ViewType, DisputeCase } from '../../types/esports';
import {
  Scale,
  ShieldAlert,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  FileText,
  Search,
  ChevronRight,
  Eye,
  Sliders,
  Sparkles,
  Info,
  Clock,
  Layers,
  Crosshair,
  UserX,
  FileCheck
} from 'lucide-react';
import { DISPUTES_DATA } from '../../data/mockData';

interface DisputesViewProps {
  onSelectView: (view: ViewType) => void;
}

export const DisputesView: React.FC<DisputesViewProps> = ({ onSelectView }) => {
  const [selectedCase, setSelectedCase] = useState<DisputeCase>(DISPUTES_DATA[0]);
  const [isPlayingRadar, setIsPlayingRadar] = useState(false);
  const [tickProgress, setTickProgress] = useState(64);
  const [verdictStatus, setVerdictStatus] = useState<'pending' | 'sanctioned' | 'dismissed'>('pending');
  const [sanctionNote, setSanctionNote] = useState('');
  const [activeTab, setActiveTab] = useState<'forensics' | 'evidence' | 'jurisprudence'>('forensics');

  const handleApplySanction = (type: 'sanctioned' | 'dismissed') => {
    setVerdictStatus(type);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  TRIBUNAL DISCIPLINARIO & INTEGRIDAD DEPORTIVA
                </span>
                <span className="text-xs font-mono text-neutral-400">GOTV 2D FORENSIC SYSTEM</span>
              </div>
              <h1 className="text-2xl font-bold text-white tracking-wide mt-1">
                Disputas & Peritaje Forense Arbitral
              </h1>
              <p className="text-sm text-neutral-400 mt-0.5">
                Evaluación técnica de denuncias con telemetría sub-tick, vectorización de mira y jurisprudencia reglamentaria.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectView('judicial-dossier')}
              className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-200 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Manual Reglamentario</span>
            </button>
            <button
              onClick={() => onSelectView('audit-logs')}
              className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-200 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <ShieldAlert className="w-4 h-4 text-red-400" />
              <span>Ver Audit Logs</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Cases List / Right Forensics & Resolution */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Cases Column (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-white">Expedientes en Trámite</h2>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30">
                {DISPUTES_DATA.length} Casos
              </span>
            </div>

            <div className="space-y-3">
              {DISPUTES_DATA.map((dispute) => {
                const isSelected = selectedCase.id === dispute.id;
                return (
                  <div
                    key={dispute.id}
                    onClick={() => {
                      setSelectedCase(dispute);
                      setVerdictStatus('pending');
                    }}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-neutral-800 border-amber-500 shadow-md ring-1 ring-amber-500/20'
                        : 'bg-neutral-950/70 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-amber-400">{dispute.code}</span>
                      <span
                        className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded ${
                          dispute.severity === 'critical'
                            ? 'bg-red-500/20 text-red-300 border border-red-500/30 font-bold'
                            : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                        }`}
                      >
                        {dispute.severity}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-white mt-1.5 line-clamp-1">{dispute.matchTitle}</div>
                    <div className="text-[11px] text-neutral-400 mt-1 line-clamp-2">{dispute.description}</div>

                    <div className="mt-3 pt-2.5 border-t border-neutral-800/60 flex items-center justify-between text-[10px] text-neutral-500">
                      <span>{dispute.map} • R{dispute.round}</span>
                      <span className="font-mono text-neutral-400">{dispute.timestamp}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Referee Assistance Guide */}
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-4 text-xs text-neutral-400 space-y-2">
            <div className="flex items-center gap-2 text-neutral-300 font-semibold">
              <Info className="w-4 h-4 text-cyan-400" />
              <span>Estándar Probatorio Zingaro v2.4</span>
            </div>
            <p className="leading-relaxed text-[11px]">
              Toda sanción de expulsión o baneo permanente por software externo requiere una probabilidad mayor al 98.5%
              verificada mediante GOTV Tick Log y análisis de curva de mira.
            </p>
          </div>
        </div>

        {/* Detail Column (8 cols): Forensic 2D Radar & Telemetry + Decision Verdict */}
        <div className="lg:col-span-8 space-y-6">
          {/* Active Case Header */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-neutral-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold text-amber-400">{selectedCase.code}</span>
                  <span className="text-xs text-neutral-400">• {selectedCase.tournament}</span>
                </div>
                <h2 className="text-lg font-bold text-white mt-0.5">{selectedCase.type}</h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-neutral-400">Árbitro Instructor:</span>
                <span className="text-xs font-mono text-neutral-200 bg-neutral-950 px-2 py-1 rounded border border-neutral-800">
                  {selectedCase.arbitrator}
                </span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 mt-4">
              <button
                onClick={() => setActiveTab('forensics')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  activeTab === 'forensics'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Crosshair className="w-3.5 h-3.5" />
                <span>Radar Forense 2D & Telemetría</span>
              </button>
              <button
                onClick={() => setActiveTab('evidence')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  activeTab === 'evidence'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Pruebas Multimedia (Demos/VOD)</span>
              </button>
              <button
                onClick={() => setActiveTab('jurisprudence')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  activeTab === 'jurisprudence'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <FileCheck className="w-3.5 h-3.5" />
                <span>Artículos Aplicables</span>
              </button>
            </div>

            {/* TAB CONTENT: FORENSICS */}
            {activeTab === 'forensics' && (
              <div className="mt-4 space-y-4">
                {/* 2D Forensic Radar Simulator */}
                <div className="bg-black/90 border border-neutral-800 rounded-xl p-4 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-cyan-400" />
                      <span className="font-mono text-cyan-300 font-semibold">
                        GOTV 2D REPLAY • {selectedCase.map.toUpperCase()} (TICK {tickProgress * 128})
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-neutral-400 text-[11px]">Interpolación: Sub-Tick Real</span>
                      <button
                        onClick={() => setIsPlayingRadar(!isPlayingRadar)}
                        className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 text-white rounded text-[11px] font-mono flex items-center gap-1"
                      >
                        {isPlayingRadar ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                        <span>{isPlayingRadar ? 'Pausa' : 'Play'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Radar Canvas Mockup */}
                  <div className="h-64 w-full bg-neutral-950 rounded-lg relative flex items-center justify-center border border-neutral-800/80 overflow-hidden">
                    {/* Grid lines */}
                    <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

                    {/* Map Blueprint outlines */}
                    <div className="absolute w-72 h-44 border border-dashed border-neutral-700 rounded-lg pointer-events-none flex items-center justify-center">
                      <span className="text-[10px] font-mono text-neutral-600">B SITE CANAL / ANUBIS</span>
                    </div>

                    {/* Suspect Token (Red Dot with FOV cone) */}
                    <div className="absolute left-[38%] top-[45%] flex flex-col items-center">
                      {/* FOV Cone */}
                      <div className="w-20 h-20 bg-red-500/10 border-l border-r border-red-500/30 rounded-t-full -rotate-45 transform origin-bottom" />
                      <div className="w-5 h-5 rounded-full bg-red-600 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white shadow-lg animate-pulse">
                        T
                      </div>
                      <span className="text-[10px] font-mono text-red-400 font-bold mt-1 bg-black/70 px-1 rounded">
                        Mandioca (Lock 0.18°)
                      </span>
                    </div>

                    {/* Victim Token (Blue Dot through wall) */}
                    <div className="absolute left-[62%] top-[40%] flex flex-col items-center">
                      <div className="w-5 h-5 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white shadow-lg">
                        CT
                      </div>
                      <span className="text-[10px] font-mono text-blue-300 font-semibold mt-1 bg-black/70 px-1 rounded">
                        Defensor (Sin Visión)
                      </span>
                    </div>

                    {/* Trajectory Vector line */}
                    <div className="absolute left-[40%] top-[48%] w-[22%] h-[1px] bg-red-500 border-b border-dashed border-red-400 rotate-[-12deg] pointer-events-none" />

                    {/* Pre-fire warning banner on radar */}
                    <div className="absolute bottom-2 left-2 bg-red-950/80 border border-red-500/50 px-2 py-1 rounded text-[10px] font-mono text-red-200">
                      Snap Angle: {selectedCase.telemetry.snapAngle} • Pre-fire: {selectedCase.telemetry.reactionTimeMs}ms
                    </div>
                  </div>

                  {/* Scrubber slider */}
                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-[11px] font-mono text-neutral-400">Tick 0</span>
                    <input
                      type="range"
                      min={0}
                      max={128}
                      value={tickProgress}
                      onChange={(e) => setTickProgress(Number(e.target.value))}
                      className="flex-1 accent-amber-500 cursor-pointer"
                    />
                    <span className="text-[11px] font-mono text-neutral-400">Tick 128</span>
                  </div>
                </div>

                {/* Telemetry Breakdown Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-3">
                    <span className="text-[10px] text-neutral-400 block">Tiempo de Reacción</span>
                    <span className="text-lg font-mono font-bold text-red-400">
                      {selectedCase.telemetry.reactionTimeMs} ms
                    </span>
                    <span className="text-[10px] text-neutral-500 block">Humano Promedio: ~160ms</span>
                  </div>

                  <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-3">
                    <span className="text-[10px] text-neutral-400 block">Linealidad Vectorial</span>
                    <span className="text-sm font-mono font-bold text-amber-300">
                      {selectedCase.telemetry.vectorLinearity}
                    </span>
                    <span className="text-[10px] text-neutral-500 block">Desvío &lt; 0.05%</span>
                  </div>

                  <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-3">
                    <span className="text-[10px] text-neutral-400 block">Pre-Visibilidad Frames</span>
                    <span className="text-lg font-mono font-bold text-red-400">
                      {selectedCase.telemetry.preVisibilityFrames} f
                    </span>
                    <span className="text-[10px] text-neutral-500 block">Disparo ciego previo</span>
                  </div>

                  <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-3">
                    <span className="text-[10px] text-neutral-400 block">Patrón de Recoil</span>
                    <span className="text-xs font-mono font-bold text-cyan-300">
                      {selectedCase.telemetry.recoilSpread}
                    </span>
                    <span className="text-[10px] text-neutral-500 block">Zingaro Shield Engine</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: EVIDENCE */}
            {activeTab === 'evidence' && (
              <div className="mt-4 space-y-3">
                <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white font-mono">DUMP GOTV DEMO OFICIAL (.DEM)</span>
                    <button className="text-xs text-cyan-400 hover:underline">Descargar Raw File (420 MB)</button>
                  </div>
                  <p className="text-xs text-neutral-400">
                    Archivo íntegro registrado con clave criptográfica SHA-256 en el servidor dedicado ZNG-CS2-01. Hash:
                    <span className="font-mono text-neutral-300 ml-1">
                      7f9c2d89b14e9f345876a100dcba98317e
                    </span>
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-3">
                    <span className="text-xs font-bold text-white block mb-1">Clip 01: Pre-aim Canal B</span>
                    <div className="h-32 bg-neutral-900 rounded border border-neutral-800 flex items-center justify-center text-neutral-500 text-xs">
                      [Reproductor de Video Clip GOTV]
                    </div>
                  </div>
                  <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-3">
                    <span className="text-xs font-bold text-white block mb-1">Clip 02: Flick instantáneo Tick 8490</span>
                    <div className="h-32 bg-neutral-900 rounded border border-neutral-800 flex items-center justify-center text-neutral-500 text-xs">
                      [Reproductor de Video Clip GOTV]
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: JURISPRUDENCE */}
            {activeTab === 'jurisprudence' && (
              <div className="mt-4 bg-neutral-950 border border-neutral-800 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                  <Scale className="w-4 h-4" />
                  <span>Artículos Aplicables del Reglamento de Competición CS2 Zingaro:</span>
                </div>
                <div className="space-y-2 text-xs text-neutral-300">
                  <div className="p-2.5 bg-neutral-900 rounded border border-neutral-800">
                    <span className="font-bold text-white font-mono">Art. 12.1 - Asistencia Externa No Autorizada:</span>
                    <p className="text-neutral-400 mt-1">
                      El uso comprobado de cualquier software de asistencia, scripts de recoil no nativos o visualización de radar
                      de terceros conlleva la descalificación inmediata del equipo y un baneo de 2 años al jugador infractor.
                    </p>
                  </div>
                  <div className="p-2.5 bg-neutral-900 rounded border border-neutral-800">
                    <span className="font-bold text-white font-mono">Art. 9.4 - Pérdida de Puntos (Forfeit Retroactivo):</span>
                    <p className="text-neutral-400 mt-1">
                      Se adjudicará la victoria 13-0 al equipo denunciante si la infracción ocurrió durante un partido de fase regular.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tribunal Resolution & Verdict Form */}
            <div className="mt-6 pt-5 border-t border-neutral-800 bg-neutral-950/60 -mx-5 -mb-5 p-5 rounded-b-xl">
              <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-emerald-400" />
                <span>Dictamen & Emisión de Fallo Arbitral</span>
              </h3>

              {verdictStatus === 'pending' ? (
                <div className="space-y-3">
                  <textarea
                    rows={2}
                    value={sanctionNote}
                    onChange={(e) => setSanctionNote(e.target.value)}
                    placeholder="Fundamentación jurídica del fallo. Ej: Se comprueba asistencia externa tras corroborar vector lineal en Canal B..."
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                  />

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleApplySanction('sanctioned')}
                        className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                      >
                        <UserX className="w-4 h-4" />
                        <span>Sancionar & Descalificar (Fallo Condenatorio)</span>
                      </button>

                      <button
                        onClick={() => handleApplySanction('dismissed')}
                        className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-200 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Desestimar por Prueba Insuficiente</span>
                      </button>
                    </div>

                    <span className="text-[11px] text-neutral-500">
                      La resolución se firmará y registrará en el bloque de Auditoría Inmutable.
                    </span>
                  </div>
                </div>
              ) : (
                <div
                  className={`p-4 rounded-xl border flex items-center justify-between ${
                    verdictStatus === 'sanctioned'
                      ? 'bg-red-950/40 border-red-500/40 text-red-200'
                      : 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {verdictStatus === 'sanctioned' ? (
                      <XCircle className="w-6 h-6 text-red-400" />
                    ) : (
                      <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                    )}
                    <div>
                      <div className="font-bold text-sm">
                        {verdictStatus === 'sanctioned'
                          ? 'FALLO CONDENATORIO PUBLICADO Y NOTIFICADO'
                          : 'CASO DESESTIMADO Y ARCHIVADO'}
                      </div>
                      <div className="text-xs opacity-80 mt-0.5">
                        Registrado por Comisario en funciones. Código de resolución #RES-2026-041.
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setVerdictStatus('pending')}
                    className="px-3 py-1 bg-black/40 hover:bg-black/60 border border-neutral-700 text-xs rounded text-neutral-200"
                  >
                    Reabrir Expediente
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
