import React, { useState } from 'react';
import { ViewType } from '../../types/esports';
import {
  Calendar,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Send,
  Download,
  Server,
  Shield,
  Users,
  Lock,
  MessageSquare,
  History,
  Timer,
  Fingerprint,
  RefreshCw,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface MatchSchedulingViewProps {
  onSelectView: (view: ViewType) => void;
}

export const MatchSchedulingView: React.FC<MatchSchedulingViewProps> = ({ onSelectView }) => {
  const [activeTab, setActiveTab] = useState<'coordination' | 'captain-matrix'>('coordination');
  const [selectedDay, setSelectedDay] = useState<'vie' | 'jue' | 'sab' | 'dom'>('vie');
  const [selectedSlot, setSelectedSlot] = useState<string>('20:00 — 22:00 ART');
  const [captainRatified, setCaptainRatified] = useState(true);
  const [rivalRatified, setRivalRatified] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{ sender: string; team: string; text: string; time: string }>>([
    {
      sender: 'TomiX_23',
      team: 'P5',
      text: 'Nos queda perfecto el viernes a las 21hs. Hablo con el quinto para que confirme en la plataforma antes de las 18hs y ya queda firme.',
      time: '14:25'
    },
    {
      sender: 'Pacuno_CS',
      team: 'ZGA',
      text: 'Excelente Tomi. De nuestro lado los 5 ya están advertidos y el server queda lockeado en ZNG-01. Saludos.',
      time: '14:28'
    }
  ]);
  const [signingStatus, setSigningStatus] = useState<string | null>(null);

  const handleSendChat = (e?: React.FormEvent, cannedText?: string) => {
    if (e) e.preventDefault();
    const textToSend = cannedText || chatMessage;
    if (!textToSend.trim()) return;

    setChatMessages((prev) => [
      ...prev,
      {
        sender: 'Pacuno_CS',
        team: 'ZGA',
        text: textToSend,
        time: new Date().toLocaleTimeString().slice(0, 5)
      }
    ]);
    if (!cannedText) setChatMessage('');
  };

  const handleSignMatrix = () => {
    setSigningStatus('Firmando SHA-256...');
    setTimeout(() => {
      setSigningStatus('¡Matriz Firmada y Publicada!');
      setTimeout(() => setSigningStatus(null), 3000);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Sub-header Context Bar */}
      <div className="w-full px-5 py-3 bg-[#0c0e14] border border-[#282a30] rounded-xl flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="text-[#958ea0] uppercase">Liga Regional CS2</span>
          <span className="text-[#958ea0]">/</span>
          <span className="text-[#958ea0] uppercase">Fase de Grupos</span>
          <span className="text-[#958ea0]">/</span>
          <span className="text-[#4cd7f6] font-semibold uppercase">Fixture & Agendamiento</span>
          <span className="text-[#958ea0]">/</span>
          <span className="text-[#d0bcff] font-bold uppercase">Encuentro Jornada 4</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex rounded-lg bg-[#191b22] p-1 border border-[#282a30]">
            <button
              onClick={() => setActiveTab('coordination')}
              className={`px-3 py-1 rounded text-xs font-mono font-bold transition-all ${
                activeTab === 'coordination'
                  ? 'bg-[#a078ff] text-white shadow-sm'
                  : 'text-[#cbc3d7] hover:text-white'
              }`}
            >
              Negociación Bo3
            </button>
            <button
              onClick={() => setActiveTab('captain-matrix')}
              className={`px-3 py-1 rounded text-xs font-mono font-bold transition-all ${
                activeTab === 'captain-matrix'
                  ? 'bg-[#a078ff] text-white shadow-sm'
                  : 'text-[#cbc3d7] hover:text-white'
              }`}
            >
              Mi Matriz Semanal
            </button>
          </div>

          <button
            onClick={() => onSelectView('judicial-dossier')}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded bg-[#191b22] hover:bg-[#282a30] text-xs font-mono text-[#cbc3d7] border border-[#282a30] transition-colors"
          >
            <Shield className="w-3.5 h-3.5 text-[#4cd7f6]" />
            <span>Normativa Art. 6.2</span>
          </button>
        </div>
      </div>

      {activeTab === 'coordination' ? (
        <div className="space-y-6">
          {/* Section 1: Match Header & Lockout Telemetry */}
          <div className="relative rounded-2xl bg-[#191b22] border border-[#282a30] p-6 shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#4cd7f6] via-[#d0bcff] to-[#4cd7f6]" />
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-red-500/20 text-red-300 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
                    Pendiente de Acuerdo de Fecha
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-[#0c0e14] text-[#4cd7f6] font-mono text-xs uppercase border border-[#282a30]">
                    Lock Arbitral: 47h 38m restantes
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-[#0c0e14] text-[#958ea0] font-mono text-xs uppercase border border-[#282a30]">
                    Bo3 Decider • Match ID: #LRC-J04-M02
                  </span>
                </div>

                <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight uppercase">
                  Coordinación de Disponibilidad y Fijación de Fecha
                </h1>
                <p className="text-xs text-[#cbc3d7] max-w-3xl leading-relaxed">
                  Protocolo de consenso federativo CS2. Ambos capitanes deben ratificar un slot dentro de la ventana reglamentaria antes del domingo 19 de noviembre a las 23:59 ART para evitar asignación compulsiva por servidor central.
                </p>
              </div>

              {/* Deadline HUD Callout */}
              <div className="flex items-center gap-4 bg-[#0c0e14] p-4 rounded-xl border border-[#282a30] shadow-inner self-start xl:self-center shrink-0">
                <div className="w-12 h-12 rounded-xl bg-[#a078ff]/10 border border-[#a078ff]/30 flex items-center justify-center text-[#d0bcff]">
                  <Timer className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-[#958ea0] uppercase tracking-widest">
                    Límite Arbitral Oficial
                  </span>
                  <span className="text-base font-bold font-mono text-white">DOM 19 NOV • 23:59 ART</span>
                  <span className="text-[11px] font-mono text-[#4edea3] flex items-center gap-1">
                    <Lock className="w-3 h-3" /> Sanción W.O. tras deadline
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Teams & Assigned Infrastructure */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Team Alpha: Zingaro Academy */}
            <div className="lg:col-span-4 rounded-xl bg-[#191b22] border border-[#282a30] p-5 shadow-sm space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#a078ff]/10 border border-[#a078ff]/30 flex items-center justify-center text-[#d0bcff] font-bold font-mono text-lg">
                    ZGA
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-white text-base">Zingaro Academy</span>
                      <CheckCircle2 className="w-4 h-4 text-[#4edea3]" />
                    </div>
                    <span className="text-xs font-mono text-[#4cd7f6] uppercase font-semibold">
                      Local (Map Pick 1)
                    </span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#a078ff]/20 text-[#d0bcff] text-[10px] font-mono uppercase font-bold">
                  4 Slots Propuestos
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-[#cbc3d7] pt-2 border-t border-[#282a30]">
                <div className="flex justify-between">
                  <span>Capitán Titular:</span>
                  <span className="font-mono text-white font-bold flex items-center gap-1">
                    [ZGA] Pacuno_CS <span className="w-2 h-2 rounded-full bg-[#4edea3]" />
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Roster Bloqueado:</span>
                  <span className="font-mono text-white text-[11px]">Pacuno, King_ar, Viper99, Syc0, NeoX</span>
                </div>
                <div className="flex justify-between">
                  <span>Firma Criptográfica:</span>
                  <span className="font-mono text-[#4edea3] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Firmado 14:20 ART
                  </span>
                </div>
              </div>
            </div>

            {/* Server Telemetry */}
            <div className="lg:col-span-4 rounded-xl bg-[#0c0e14] border border-[#282a30] p-5 flex flex-col justify-between shadow-inner text-center space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#958ea0]">
                <span className="flex items-center gap-1.5 uppercase">
                  <Server className="w-3.5 h-3.5 text-[#4cd7f6]" /> Servidor CS2
                </span>
                <span className="px-2 py-0.5 rounded bg-[#00a572]/20 text-[#4edea3] font-bold uppercase">
                  Reservado
                </span>
              </div>

              <div>
                <div className="text-base font-bold font-mono text-white uppercase tracking-wide">
                  ZNG-CS2-01 • BUENOS AIRES
                </div>
                <div className="flex items-center justify-center gap-3 text-xs text-[#cbc3d7] font-mono mt-1">
                  <span className="text-[#4edea3]">128-Tick Subtick</span>
                  <span>•</span>
                  <span className="text-[#4cd7f6]">Ping Avg: 21ms</span>
                  <span>•</span>
                  <span>Guard v4.9</span>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-[#191b22] text-xs font-mono text-white flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse" />
                <span>Emparejamiento en fase de agenda activa</span>
              </div>
            </div>

            {/* Team Bravo: Posadas Five */}
            <div className="lg:col-span-4 rounded-xl bg-[#191b22] border border-[#282a30] p-5 shadow-sm space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#03b5d3]/10 border border-[#03b5d3]/30 flex items-center justify-center text-[#4cd7f6] font-bold font-mono text-lg">
                    P5
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-white text-base">Posadas Five</span>
                      <CheckCircle2 className="w-4 h-4 text-[#4edea3]" />
                    </div>
                    <span className="text-xs font-mono text-[#958ea0] uppercase font-semibold">
                      Visitante (Map Pick 2)
                    </span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#1e1f26] text-[#958ea0] text-[10px] font-mono uppercase font-bold">
                  3 Slots Propuestos
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-[#cbc3d7] pt-2 border-t border-[#282a30]">
                <div className="flex justify-between">
                  <span>Capitán Titular:</span>
                  <span className="font-mono text-white font-bold flex items-center gap-1">
                    [P5] TomiX_23 <span className="w-2 h-2 rounded-full bg-[#4edea3]" />
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Roster Bloqueado:</span>
                  <span className="font-mono text-white text-[11px]">TomiX, lukk1, FranK, k4rn, TorinO</span>
                </div>
                <div className="flex justify-between">
                  <span>Firma Criptográfica:</span>
                  <span className="font-mono text-amber-400 flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" /> Pendiente de Firma Final
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Dual-Availability Matrix */}
          <div className="rounded-2xl bg-[#191b22] border border-[#282a30] p-6 shadow-xl space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-2 border-b border-[#282a30]">
              <div>
                <h2 className="text-lg font-bold text-white uppercase flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#d0bcff]" />
                  <span>Matriz Comparativa de Disponibilidad</span>
                </h2>
                <p className="text-xs text-[#cbc3d7] mt-0.5">
                  Cruza en tiempo real las franjas horarias configuradas por cada capitán y validadas con sus 5 titulares.
                </p>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                <span className="flex items-center gap-1.5 text-[#4edea3] font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4edea3] animate-ping" /> Coincidencia Óptima
                </span>
                <span className="flex items-center gap-1.5 text-[#d0bcff]">
                  <span className="w-2.5 h-2.5 rounded bg-[#a078ff]" /> Zingaro
                </span>
                <span className="flex items-center gap-1.5 text-[#4cd7f6]">
                  <span className="w-2.5 h-2.5 rounded bg-[#4cd7f6]" /> Posadas Five
                </span>
              </div>
            </div>

            {/* Algorithm Match Callout Banner */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#00a572]/20 via-[#1e1f26] to-[#1e1f26] border border-[#00a572]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#00a572] flex items-center justify-center text-white shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#4edea3] font-bold uppercase tracking-wider">
                    Coincidencia Directa Encontrada por el Sistema | Roster 100% Disponible
                  </div>
                  <div className="text-lg font-bold text-white mt-0.5">
                    Viernes 17 de Noviembre — 21:00 hs ART
                  </div>
                  <span className="text-xs text-[#cbc3d7]">
                    Ambos equipos y sus 10 jugadores han marcado viabilidad de 21:00 a 23:30 hs.
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedSlot('20:00 — 22:00 ART')}
                className="px-4 py-2 rounded-lg bg-[#4edea3] hover:bg-[#00a572] text-black font-mono text-xs font-bold uppercase transition-all shadow-md shrink-0 self-end md:self-center"
              >
                Seleccionar Slot Viernes 21:00
              </button>
            </div>

            {/* Day Selector Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
              <button
                onClick={() => setSelectedDay('jue')}
                className={`p-3 rounded-xl border text-left transition-colors ${
                  selectedDay === 'jue'
                    ? 'bg-[#1e1f26] border-[#a078ff]'
                    : 'bg-[#0c0e14] border-[#282a30] hover:border-neutral-700'
                }`}
              >
                <span className="text-[#958ea0] uppercase text-[10px] block">Jue 16 Nov</span>
                <span className="text-white font-bold block">Jornada I</span>
                <span className="text-red-400 text-[10px] block mt-1">Sin coincidencia</span>
              </button>

              <button
                onClick={() => setSelectedDay('vie')}
                className={`p-3 rounded-xl border text-left transition-colors ${
                  selectedDay === 'vie'
                    ? 'bg-[#a078ff]/20 border-[#a078ff] ring-1 ring-[#a078ff]'
                    : 'bg-[#0c0e14] border-[#282a30] hover:border-neutral-700'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-[#d0bcff] uppercase text-[10px] font-bold block">Vie 17 Nov</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4edea3]" />
                </div>
                <span className="text-white font-bold block">Jornada II</span>
                <span className="text-[#4edea3] text-[10px] block mt-1 font-bold">1 Franja Óptima (21:00)</span>
              </button>

              <button
                onClick={() => setSelectedDay('sab')}
                className={`p-3 rounded-xl border text-left transition-colors ${
                  selectedDay === 'sab'
                    ? 'bg-[#1e1f26] border-[#a078ff]'
                    : 'bg-[#0c0e14] border-[#282a30] hover:border-neutral-700'
                }`}
              >
                <span className="text-[#958ea0] uppercase text-[10px] block">Sáb 18 Nov</span>
                <span className="text-white font-bold block">Jornada III</span>
                <span className="text-[#4cd7f6] text-[10px] block mt-1">1 Franja parcial</span>
              </button>

              <button
                onClick={() => setSelectedDay('dom')}
                className={`p-3 rounded-xl border text-left transition-colors ${
                  selectedDay === 'dom'
                    ? 'bg-[#1e1f26] border-[#a078ff]'
                    : 'bg-[#0c0e14] border-[#282a30] hover:border-neutral-700'
                }`}
              >
                <span className="text-[#958ea0] uppercase text-[10px] block">Dom 19 Nov</span>
                <span className="text-white font-bold block">Deadline Final</span>
                <span className="text-amber-400 text-[10px] block mt-1">2 Franjas abiertas</span>
              </button>
            </div>

            {/* Matrix Slots */}
            <div className="space-y-2.5">
              {/* Slot 1 */}
              <div className="p-3.5 rounded-xl bg-[#0c0e14] border border-[#282a30] flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-3 min-w-[190px]">
                  <Clock className="w-4 h-4 text-[#958ea0]" />
                  <div>
                    <span className="font-bold text-white block">18:00 — 20:00 ART</span>
                    <span className="text-[10px] text-[#958ea0]">Franja Temprana</span>
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-[#191b22] flex items-center justify-between">
                    <span className="text-[#cbc3d7]">[ZGA] Zingaro:</span>
                    <span className="text-red-400">No Disp. (Viper99)</span>
                  </div>
                  <div className="p-2 rounded bg-[#03b5d3]/10 flex items-center justify-between text-[#4cd7f6]">
                    <span>[P5] Posadas Five:</span>
                    <span>Disponible (5/5)</span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded bg-[#191b22] text-[#958ea0] text-center shrink-0">
                  Conflicto
                </span>
              </div>

              {/* Slot 2: BEST MATCH */}
              <div className="p-3.5 rounded-xl bg-[#1e1f26] border-2 border-[#4edea3] shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-3 min-w-[190px]">
                  <CheckCircle2 className="w-5 h-5 text-[#4edea3]" />
                  <div>
                    <span className="font-bold text-white block">20:00 — 22:00 ART</span>
                    <span className="text-[10px] text-[#4edea3] font-bold">COINCIDENCIA EXACTA (21:00)</span>
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-[#a078ff]/20 text-[#d0bcff] flex items-center justify-between font-bold">
                    <span>[ZGA] Zingaro:</span>
                    <span>5/5 Confirmados</span>
                  </div>
                  <div className="p-2 rounded bg-[#00a572]/20 text-[#4edea3] flex items-center justify-between font-bold">
                    <span>[P5] Posadas Five:</span>
                    <span>5/5 Confirmados</span>
                  </div>
                </div>

                <button
                  onClick={() => alert('¡Horario del Viernes a las 21:00 fijado y firmado con Pacuno_CS!')}
                  className="px-4 py-2 rounded-lg bg-[#4edea3] hover:bg-[#00a572] text-black font-bold uppercase transition-all shadow-md shrink-0"
                >
                  Fijar 21:00 ART
                </button>
              </div>

              {/* Slot 3 */}
              <div className="p-3.5 rounded-xl bg-[#0c0e14] border border-[#282a30] flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-3 min-w-[190px]">
                  <Clock className="w-4 h-4 text-[#958ea0]" />
                  <div>
                    <span className="font-bold text-white block">22:00 — 00:00 ART</span>
                    <span className="text-[10px] text-[#958ea0]">Franja Nocturna</span>
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-[#a078ff]/20 text-[#d0bcff] flex items-center justify-between">
                    <span>[ZGA] Zingaro:</span>
                    <span>Disponible (5/5)</span>
                  </div>
                  <div className="p-2 rounded bg-[#191b22] text-[#cbc3d7] flex items-center justify-between">
                    <span>[P5] Posadas Five:</span>
                    <span className="text-red-400">Scrim Privado</span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded bg-[#191b22] text-[#958ea0] text-center shrink-0">
                  Conflicto
                </span>
              </div>
            </div>
          </div>

          {/* Section 4: Negotiation History & Captains Live Chat */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Negotiation History (6 cols) */}
            <div className="lg:col-span-6 rounded-2xl bg-[#191b22] border border-[#282a30] p-5 shadow-xl space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#282a30]">
                <div className="flex items-center gap-2">
                  <History className="w-4 h-4 text-[#4cd7f6]" />
                  <h3 className="text-xs font-bold text-white uppercase font-mono">
                    Historial Inmutable de Negociación
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-[#958ea0]">Log ID: #AG-7712</span>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-[#0c0e14] border border-[#282a30] flex items-start gap-2.5">
                  <span className="text-[#958ea0] mt-0.5">12:00</span>
                  <div>
                    <span className="text-[#4cd7f6] font-bold">[SISTEMA]</span>{' '}
                    <span className="text-[#cbc3d7]">Comisario abrió ventana de concertación de fecha J4.</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#0c0e14] border border-[#282a30] flex items-start gap-2.5">
                  <span className="text-[#958ea0] mt-0.5">12:30</span>
                  <div>
                    <span className="text-[#d0bcff] font-bold">[ZGA - Pacuno_CS]</span>{' '}
                    <span className="text-[#cbc3d7]">Propuso Jueves 16 a las 22:00 hs ART.</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#0c0e14] border border-[#282a30] flex items-start gap-2.5">
                  <span className="text-[#958ea0] mt-0.5">13:10</span>
                  <div>
                    <span className="text-[#4cd7f6] font-bold">[P5 - TomiX_23]</span>{' '}
                    <span className="text-red-400 font-medium">Rechazó propuesta Jueves (Qualy Scrim Tier 2).</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#0c0e14] border border-[#282a30] flex items-start gap-2.5">
                  <span className="text-[#958ea0] mt-0.5">13:45</span>
                  <div>
                    <span className="text-[#4cd7f6] font-bold">[P5 - TomiX_23]</span>{' '}
                    <span className="text-[#cbc3d7]">Contraoferta: Viernes 17 a las 21:00 hs ART.</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#00a572]/10 border border-[#00a572]/30 flex items-start gap-2.5">
                  <span className="text-[#4edea3] mt-0.5">14:20</span>
                  <div>
                    <span className="text-[#d0bcff] font-bold">[ZGA - Pacuno_CS]</span>{' '}
                    <span className="text-[#4edea3] font-bold">Aceptó y firmó fecha Viernes 17 a las 21:00 hs.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Captains Live Chat (6 cols) */}
            <div className="lg:col-span-6 rounded-2xl bg-[#191b22] border border-[#282a30] p-5 shadow-xl flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-[#282a30]">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#d0bcff]" />
                    <h3 className="text-xs font-bold text-white uppercase font-mono">
                      Canal Oficial de Capitanes
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-[#4edea3] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]" /> Moderado por Admin
                  </span>
                </div>

                {/* Messages stream */}
                <div className="space-y-2 max-h-48 overflow-y-auto py-2">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-lg text-xs ${
                        msg.team === 'ZGA'
                          ? 'bg-[#a078ff]/15 border border-[#a078ff]/30 text-white ml-6'
                          : 'bg-[#0c0e14] border border-[#282a30] text-[#cbc3d7] mr-6'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                        <span className={msg.team === 'ZGA' ? 'text-[#d0bcff] font-bold' : 'text-[#4cd7f6] font-bold'}>
                          [{msg.team}] {msg.sender}:
                        </span>
                        <span className="text-[#958ea0]">{msg.time}</span>
                      </div>
                      <p className="leading-relaxed">{msg.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Canned Phrases */}
              <div className="space-y-2 pt-2 border-t border-[#282a30]">
                <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
                  <button
                    onClick={() => handleSendChat(undefined, '¿Podemos correr 30 min más tarde?')}
                    className="px-2 py-1 rounded bg-[#0c0e14] hover:bg-[#282a30] text-[#cbc3d7] transition-colors"
                  >
                    "¿Podemos correr 30 min más tarde?"
                  </button>
                  <button
                    onClick={() => handleSendChat(undefined, 'Confirmado por acá 100%')}
                    className="px-2 py-1 rounded bg-[#0c0e14] hover:bg-[#282a30] text-[#cbc3d7] transition-colors"
                  >
                    "Confirmado por acá"
                  </button>
                </div>

                <form onSubmit={(e) => handleSendChat(e)} className="flex gap-2">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Escribe un mensaje oficial para el capitán rival..."
                    className="flex-1 bg-[#0c0e14] border border-[#282a30] rounded-lg px-3 py-2 text-xs text-white placeholder-[#958ea0] focus:outline-none focus:border-[#a078ff]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-[#a078ff] hover:bg-[#8B5CF6] text-white text-xs font-mono font-bold uppercase transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* TAB 2: Captain's Weekly Availability Configuration */
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#191b22] border border-[#282a30] shadow-xl space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-3 border-b border-[#282a30]">
              <div>
                <span className="text-[11px] font-mono text-[#d0bcff] uppercase font-bold tracking-wider">
                  Zingaro Academy // Capitanía [ZGA]
                </span>
                <h2 className="text-xl font-bold text-white uppercase mt-0.5">
                  Configuración de Disponibilidad y Franjas Horarias
                </h2>
                <p className="text-xs text-[#cbc3d7] mt-1">
                  Define los días y bloques horarios en que tu quinteto titular está habilitado para disputar partidos oficiales y scrims.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleSignMatrix}
                  className="px-4 py-2 bg-[#a078ff] hover:bg-[#8B5CF6] text-white text-xs font-mono font-bold uppercase rounded-lg shadow-[0_0_14px_rgba(160,120,255,0.4)] flex items-center gap-2 transition-all"
                >
                  <Fingerprint className="w-4 h-4" />
                  <span>{signingStatus || 'Publicar y Firmar (SHA-256)'}</span>
                </button>
              </div>
            </div>

            {/* Roster Readiness Bar */}
            <div className="p-4 rounded-xl bg-[#0c0e14] border border-[#282a30] flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#a078ff]/10 flex items-center justify-center text-[#d0bcff]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white uppercase">Estado de Alineación Titular</span>
                    <span className="px-2 py-0.5 rounded bg-[#00a572]/20 text-[#4edea3] text-[10px] font-mono font-bold">
                      4/5 ÓPTIMO
                    </span>
                  </div>
                  <span className="text-xs text-[#958ea0]">Sincronización Steam Guard & Discord Bot activa</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="text-[#4edea3] flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse" /> BOT_PING: 14ms
                </span>
                <span className="text-[#cbc3d7]">Canal #horarios-lineup</span>
              </div>
            </div>

            {/* Weekly Calendar Table Matrix */}
            <div className="bg-[#0c0e14] rounded-xl border border-[#282a30] p-4 overflow-x-auto">
              <div className="min-w-[700px] space-y-3">
                <div className="grid grid-cols-8 gap-2 text-center text-xs font-mono text-[#958ea0] uppercase">
                  <div className="text-left pl-2">Franja</div>
                  <div className="p-2 bg-[#191b22] rounded text-white font-bold">Lun 13</div>
                  <div className="p-2 bg-[#191b22] rounded text-white font-bold">Mar 14</div>
                  <div className="p-2 bg-[#191b22] rounded text-white font-bold">Mié 15</div>
                  <div className="p-2 bg-[#191b22] rounded text-white font-bold">Jue 16</div>
                  <div className="p-2 bg-[#a078ff]/30 text-[#d0bcff] rounded font-bold">Vie 17 ★</div>
                  <div className="p-2 bg-[#191b22] rounded text-[#4cd7f6] font-bold">Sáb 18</div>
                  <div className="p-2 bg-[#191b22] rounded text-[#4cd7f6] font-bold">Dom 19</div>
                </div>

                {/* Slot 16-18 */}
                <div className="grid grid-cols-8 gap-2 items-center text-xs font-mono">
                  <div className="text-white font-bold pl-2">16:00 - 18:00</div>
                  {['Bloq', 'Bloq', 'Bloq', 'Bloq', '4/5', '5/5', '5/5'].map((status, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded text-center font-bold ${
                        status === '5/5'
                          ? 'bg-[#00a572]/20 text-[#4edea3] border border-[#00a572]/40'
                          : status === '4/5'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'bg-[#191b22] text-[#958ea0]'
                      }`}
                    >
                      {status}
                    </div>
                  ))}
                </div>

                {/* Slot 18-20 */}
                <div className="grid grid-cols-8 gap-2 items-center text-xs font-mono">
                  <div className="text-white font-bold pl-2">18:00 - 20:00</div>
                  {['4/5', '4/5', '4/5', 'Bloq', '5/5', '5/5', '5/5'].map((status, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded text-center font-bold ${
                        status === '5/5'
                          ? 'bg-[#00a572]/20 text-[#4edea3] border border-[#00a572]/40'
                          : status === '4/5'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'bg-[#191b22] text-[#958ea0]'
                      }`}
                    >
                      {status}
                    </div>
                  ))}
                </div>

                {/* Slot 20-22 Prime */}
                <div className="grid grid-cols-8 gap-2 items-center text-xs font-mono">
                  <div className="text-[#4cd7f6] font-bold pl-2">20:00 - 22:00 ★</div>
                  {['5/5', '5/5', '5/5', '5/5', 'PREF ★', '5/5', '5/5'].map((status, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded text-center font-bold ${
                        status === 'PREF ★'
                          ? 'bg-[#a078ff] text-white shadow-md'
                          : 'bg-[#00a572]/20 text-[#4edea3] border border-[#00a572]/40'
                      }`}
                    >
                      {status}
                    </div>
                  ))}
                </div>

                {/* Slot 22-00 */}
                <div className="grid grid-cols-8 gap-2 items-center text-xs font-mono">
                  <div className="text-white font-bold pl-2">22:00 - 00:00</div>
                  {['Bloq', '5/5', 'Bloq', '5/5', '5/5', '5/5', 'Bloq'].map((status, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded text-center font-bold ${
                        status === '5/5'
                          ? 'bg-[#00a572]/20 text-[#4edea3] border border-[#00a572]/40'
                          : 'bg-[#191b22] text-[#958ea0]'
                      }`}
                    >
                      {status}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SHA Signature Verification */}
            <div className="p-4 rounded-xl bg-[#0c0e14] border border-[#282a30] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
              <div>
                <span className="text-[#958ea0] block text-[10px] uppercase">Hash de Integridad Reglamentaria</span>
                <span className="text-[#4cd7f6] font-bold">
                  SHA256: 0x7b4ae891f7c0042a9b34c26ef55d91e1498b3c419fa7110904d9b62c12f91d
                </span>
              </div>
              <span className="px-3 py-1 rounded bg-[#00a572]/20 text-[#4edea3] font-bold uppercase flex items-center gap-1 self-start sm:self-auto">
                <CheckCircle2 className="w-3.5 h-3.5" /> Válido para Árbitro
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
