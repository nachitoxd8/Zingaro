import React, { useState } from 'react';
import { ViewType } from '../../types/esports';
import {
  ShieldCheck,
  Server,
  Copy,
  Check,
  Clock,
  Calendar,
  AlertTriangle,
  Play,
  Send,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Terminal,
  User,
  ShieldAlert
} from 'lucide-react';

interface MatchroomViewProps {
  onNavigate?: (view: ViewType) => void;
  onSelectView?: (view: ViewType) => void;
}

export const MatchroomView: React.FC<MatchroomViewProps> = ({ onNavigate: propNavigate, onSelectView }) => {
  const onNavigate = propNavigate || onSelectView || (() => {});
  const navigate = onNavigate;
  const [copiedIp, setCopiedIp] = useState(false);
  const [captainChecked, setCaptainChecked] = useState(true);
  const [serverConsoleLogs, setServerConsoleLogs] = useState<string[]>([
    '[21:45:02] [RCON] Map changed to de_mirage. Config \'esl_mr12.cfg\' loaded successfully.',
    '[21:45:10] [SHIELD-AC] Handshake active: 9 Steam IDs autorizados en whitelist. 1 slot en espera.',
    '[21:45:30] [MATCH-CORE] Warmup mode listo | Esperando 1 jugador de Misiones Esports (K0lor) para fase Knife Round.'
  ]);
  const [steamConnectModal, setSteamConnectModal] = useState(false);
  const [arbitratorCalled, setArbitratorCalled] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIp(true);
    setTimeout(() => setCopiedIp(false), 2000);
  };

  const handleCallArbitrator = () => {
    setArbitratorCalled(true);
    setServerConsoleLogs(prev => [
      ...prev,
      `[${new Date().toLocaleTimeString()}] [MATCH-CORE] ÁRBITRO DE TURNO NOTIFICADO: Comisario_Torres recibió alerta de sala #MR-2841.`
    ]);
  };

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Top Breadcrumb & Status */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1e2230] pb-3 text-xs font-mono-tech">
        <div className="flex items-center gap-2 text-[#94A3B8]">
          <span className="text-[#A855F7] font-bold">MATCH #2841</span>
          <span>•</span>
          <span>LIGA REGIONAL CS2</span>
          <span>•</span>
          <span className="text-white font-semibold">JORNADA 4 DE 9</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            CONFIRMADA Y LISTA PARA CHECK-IN
          </span>
          <span className="text-[#94A3B8] flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#A855F7]" />
            24 SEP • 22:00 ART
          </span>
        </div>
      </div>

      {/* Matchup Header Banner */}
      <div className="bg-[#121620] border border-[#8B5CF6]/30 rounded-xl p-6 relative overflow-hidden shadow-[0_0_25px_rgba(139,92,246,0.12)]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Team A: Zingaro Academy */}
          <div className="md:col-span-4 flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#8B5CF6]/30 to-[#6D28D9]/20 border border-[#8B5CF6] flex items-center justify-center font-extrabold text-white text-2xl font-mono-tech shadow-[0_0_20px_rgba(139,92,246,0.4)]">
              ZGA
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono-tech font-bold px-1.5 py-0.2 rounded bg-[#8B5CF6]/20 text-[#A855F7]">
                  ZGA
                </span>
                <span className="text-[11px] font-mono-tech text-[#10B981] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Local
                </span>
              </div>
              <h2 className="text-2xl font-black text-white tracking-tight font-mono-tech">
                Zingaro Academy
              </h2>
              <div className="flex items-center gap-3 text-xs font-mono-tech text-[#94A3B8] mt-1">
                <span>Capitán: <strong className="text-white">Pacuno_CS</strong></span>
                <span>•</span>
                <span className="text-[#A855F7] font-semibold">2,380 ELO</span>
              </div>
            </div>
          </div>

          {/* Center VS & Timers */}
          <div className="md:col-span-4 text-center space-y-2">
            <div className="text-[11px] font-mono-tech text-[#94A3B8]">
              BO1 COMPETITIVO MR12
            </div>
            <div className="inline-block px-4 py-1 rounded-full bg-[#181C28] border border-[#2a3045] text-lg font-black text-[#06B6D4] font-mono-tech">
              VS
            </div>
            <div>
              <div className="text-[10px] text-[#64748B] font-mono-tech uppercase">
                Tiempo para Check-In
              </div>
              <div className="text-2xl font-black text-white font-mono-tech tracking-widest text-[#EF4444]">
                00:27:37
              </div>
            </div>
          </div>

          {/* Team B: Misiones Esports */}
          <div className="md:col-span-4 flex items-center justify-end gap-4 text-right">
            <div>
              <div className="flex items-center justify-end gap-2">
                <span className="text-[11px] font-mono-tech text-[#94A3B8]">Visitante</span>
                <span className="text-[10px] font-mono-tech font-bold px-1.5 py-0.2 rounded bg-[#EF4444]/20 text-[#EF4444]">
                  MSE
                </span>
              </div>
              <h2 className="text-2xl font-black text-white tracking-tight font-mono-tech">
                Misiones Esports
              </h2>
              <div className="flex items-center justify-end gap-3 text-xs font-mono-tech text-[#94A3B8] mt-1">
                <span className="text-[#EF4444] font-semibold">2,340 ELO</span>
                <span>•</span>
                <span>Capitán: <strong className="text-white">Draken_NEA</strong></span>
              </div>
            </div>
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#EF4444]/20 to-[#991B1B]/10 border border-[#EF4444]/60 flex items-center justify-center font-extrabold text-white text-2xl font-mono-tech">
              MSE
            </div>
          </div>
        </div>

        {/* Server allocation strip & Action triggers */}
        <div className="mt-6 pt-4 border-t border-[#1e2230] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs font-mono-tech">
            <div className="flex items-center gap-2 text-[#94A3B8]">
              <Server className="w-4 h-4 text-[#06B6D4]" />
              <span>SERVIDOR ASIGNADO:</span>
              <span className="text-white font-bold">ZNG-CS2-04 (Posadas 128-Tick Dedicated Server)</span>
            </div>
            <span className="text-[#64748B]">|</span>
            <div className="text-[#10B981] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
              <span>LATENCIA ESTIMADA: <strong>8ms - 19ms (Región Litoral / NEA)</strong></span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCaptainChecked(!captainChecked)}
              className={`px-4 py-2 rounded-lg font-mono-tech text-xs font-bold transition-all flex items-center gap-2 ${
                captainChecked
                  ? 'bg-[#10B981] text-black hover:bg-[#059669]'
                  : 'bg-[#8B5CF6] text-white hover:bg-[#7C3AED]'
              }`}
            >
              <Check className="w-4 h-4" />
              <span>{captainChecked ? 'CHECK-IN CONFIRMADO (CAPITÁN)' : 'CONFIRMAR CHECK-IN'}</span>
            </button>

            <button
              onClick={() => copyToClipboard('connect cs2.zingarogaming.com.ar:27045; password zingaro')}
              className="px-4 py-2 rounded-lg bg-[#181C28] hover:bg-[#23293b] border border-[#2a3045] text-white font-mono-tech text-xs font-semibold flex items-center gap-2 transition-colors"
            >
              {copiedIp ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4 text-[#06B6D4]" />}
              <span>{copiedIp ? '¡IP COPIADA!' : 'COPIAR IP / PUERTO'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sistema Inteligente de Compatibilidad de Horarios */}
      <div className="bg-[#121620] border border-[#22283a] rounded-xl p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1e2230] pb-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#8B5CF6]/20 text-[#A855F7] flex items-center justify-center">
              <Calendar className="w-3.5 h-3.5" />
            </div>
            <div>
              <h3 className="font-bold text-white font-mono-tech text-sm">
                Sistema Inteligente de Compatibilidad de Horarios
              </h3>
              <span className="text-[10px] font-mono-tech text-[#64748B]">
                ALGORITMO NEA ENGINE V2.4 • Cruce predictivo entre agendas de Zingaro Academy vs Misiones Esports
              </span>
            </div>
          </div>

          <span className="px-2.5 py-1 rounded text-xs font-mono-tech font-bold bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5" />
            ESTADO: ACORDADO Y SELLADO
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Slots List */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-[11px] font-mono-tech text-[#94A3B8] uppercase flex items-center justify-between">
              <span>Cruce de Slots Semanales Registrados</span>
              <span className="text-[#64748B]">Ventana Oficial: Jornada 4</span>
            </div>

            {/* Slot 1 - Agreed */}
            <div className="p-3.5 rounded-lg bg-[#0e121a] border-2 border-[#10B981]/50 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 font-mono-tech text-xs">
                  <span className="px-2 py-0.5 rounded bg-[#10B981] text-black font-bold text-[11px]">
                    01
                  </span>
                  <span className="text-white font-bold text-sm">Jueves 24/09 • 22:00 ART</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#10B981]/20 text-[#10B981]">
                    SLOT DEFINITIVO
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono-tech text-[#10B981]">
                  <span>✓ ZGA (5/5 Libres)</span>
                  <span>✓ MSE (5/5 Libres)</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono-tech text-[#94A3B8] pt-1">
                <span className="text-[#10B981] font-semibold">🔒 ACEPTADO UNÁNIME</span>
                <span className="text-[#64748B]">Match Score: 100% de Quórum</span>
              </div>
            </div>

            {/* Slot 2 - Alternative */}
            <div className="p-3 rounded-lg bg-[#0b0d13] border border-[#1e2230] space-y-1 opacity-75">
              <div className="flex items-center justify-between text-xs font-mono-tech">
                <div className="flex items-center gap-2 text-[#94A3B8]">
                  <span className="px-1.5 py-0.2 rounded bg-[#1e2230] text-[#64748B] font-bold">02</span>
                  <span>Martes 22/09 • 21:00 ART</span>
                  <span className="text-[#64748B]">Alternativa</span>
                </div>
                <div className="text-[10px] text-[#64748B]">
                  ZGA: 5/5 OK • MSE: 4/5 OK (1 reserva) • Match Score: 92%
                </div>
              </div>
            </div>

            {/* Slot 3 - Alternative */}
            <div className="p-3 rounded-lg bg-[#0b0d13] border border-[#1e2230] space-y-1 opacity-60">
              <div className="flex items-center justify-between text-xs font-mono-tech">
                <div className="flex items-center gap-2 text-[#94A3B8]">
                  <span className="px-1.5 py-0.2 rounded bg-[#1e2230] text-[#64748B] font-bold">03</span>
                  <span>Miércoles 23/09 • 22:00 ART</span>
                  <span className="text-[#64748B]">Alternativa</span>
                </div>
                <div className="text-[10px] text-[#64748B]">
                  ZGA: 4/5 OK • MSE: 5/5 OK • Match Score: 88% • DESCARTADA
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded bg-[#141824] border border-[#22283a] text-xs font-mono-tech text-[#94A3B8] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#06B6D4] shrink-0" />
              <span>
                El motor cruzó <strong className="text-white">14 disponibilidades horarias</strong> con una compatibilidad máxima de <strong className="text-[#10B981]">99.4%</strong> para el día Jueves.
              </span>
            </div>
          </div>

          {/* Right Negotiation Log */}
          <div className="lg:col-span-5 bg-[#0b0d13] p-4 rounded-lg border border-[#1e2230] space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono-tech text-[#94A3B8] border-b border-[#1e2230] pb-2 mb-2">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#A855F7]" />
                  BITÁCORA DE NEGOCIACIÓN
                </span>
                <span className="text-[#10B981] font-bold">CONSENSO ALCANZADO</span>
              </div>

              <div className="space-y-2 text-xs font-mono-tech">
                <div className="flex items-start gap-2">
                  <span className="text-[#64748B] text-[10px]">20/09 18:30</span>
                  <div className="text-[#94A3B8]">
                    <strong className="text-[#A855F7]">Capitán Pacuno_CS (ZGA)</strong> propuso 3 opciones de cruce algorítmico al rival.
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-[#64748B] text-[10px]">20/09 19:15</span>
                  <div className="text-[#94A3B8]">
                    <strong className="text-[#EF4444]">Capitán Draken_NEA (MSE)</strong> examinó opciones y aceptó la opción 1 (Jueves 24/09 22:00 ART).
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-[#64748B] text-[10px]">20/09 19:16</span>
                  <div className="text-[#10B981]">
                    Sistema Zingaro Esports OS ratificó y reservó el servidor ZNG-CS2-04 automáticamente.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#1e2230] text-[11px] font-mono-tech text-[#64748B] space-y-1">
              <div className="text-[#F59E0B] font-bold flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                PROTOCOLO DE MEDIACIÓN Y CLÁUSULA DE DEFAULT
              </div>
              <p>
                En caso de desacuerdo, la liga activa el horario por defecto fijado para el Domingo a las 20:00 ART sin derecho a reclamo posterior.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rosters Check-in Grid (Side-by-side) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ZGA 5/5 Ready */}
        <div className="bg-[#121620] border border-[#22283a] rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-[#1e2230] pb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono-tech font-bold bg-[#8B5CF6]/20 text-[#A855F7]">
                ZGA
              </span>
              <span className="font-bold text-white font-mono-tech text-sm">Zingaro Academy</span>
            </div>
            <span className="text-xs font-mono-tech text-[#10B981] font-bold">
              5/5 JUGADORES LISTOS • CHECK-IN COMPLETO
            </span>
          </div>

          <div className="space-y-1.5">
            {[
              { id: 'C', name: 'Pacuno_CS', tag: 'CAP', steam: 'STEAM_1:0:19283741' },
              { id: '02', name: 'Chicho', tag: 'AWPer', steam: 'STEAM_1:1:88234120' },
              { id: '03', name: 'NeoX', tag: 'Rifler / Entry', steam: 'STEAM_1:0:44129033' },
              { id: '04', name: 'Vortex', tag: 'Support', steam: 'STEAM_1:0:77610238' },
              { id: '05', name: 'K1nder', tag: 'Lurker', steam: 'STEAM_1:1:55910244' },
            ].map((p, idx) => (
              <div key={idx} className="p-2.5 rounded bg-[#0b0d13] border border-[#1a1e2b] flex items-center justify-between text-xs font-mono-tech">
                <div className="flex items-center gap-3">
                  <span className="w-5 text-center text-[#64748B] font-bold">{p.id}</span>
                  <div>
                    <span className="text-white font-bold">{p.name}</span>
                    <span className="text-[#38BDF8] text-[10px] ml-1.5">{p.tag}</span>
                    <div className="text-[10px] text-[#64748B]">{p.steam}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                    AC OK
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#10B981] text-black flex items-center gap-1">
                    <Check className="w-3 h-3" /> Check-in
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MSE 4/5 Ready (1 Pending) */}
        <div className="bg-[#121620] border border-[#22283a] rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-[#1e2230] pb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono-tech font-bold bg-[#EF4444]/20 text-[#EF4444]">
                MSE
              </span>
              <span className="font-bold text-white font-mono-tech text-sm">Misiones Esports</span>
            </div>
            <span className="text-xs font-mono-tech text-[#F59E0B] font-bold">
              4/5 JUGADORES LISTOS • 1 PENDIENTE
            </span>
          </div>

          <div className="space-y-1.5">
            {[
              { id: 'C', name: 'Draken_NEA', tag: 'CAP', steam: 'STEAM_1:0:99482110', ready: true },
              { id: '02', name: 'V1per', tag: 'AWP', steam: 'STEAM_1:0:63219483', ready: true },
              { id: '03', name: 'Bl4ck', tag: 'Rifler', steam: 'STEAM_1:1:10293847', ready: true },
              { id: '04', name: 'Sh4dow', tag: 'Support', steam: 'STEAM_1:0:77491028', ready: true },
              { id: '!', name: 'K0lor', tag: 'Lurker', steam: 'Steam ID no sincronizado', ready: false },
            ].map((p, idx) => (
              <div key={idx} className="p-2.5 rounded bg-[#0b0d13] border border-[#1a1e2b] flex items-center justify-between text-xs font-mono-tech">
                <div className="flex items-center gap-3">
                  <span className={`w-5 text-center font-bold ${p.ready ? 'text-[#64748B]' : 'text-[#EF4444]'}`}>
                    {p.id}
                  </span>
                  <div>
                    <span className="text-white font-bold">{p.name}</span>
                    <span className="text-[#EF4444] text-[10px] ml-1.5">{p.tag}</span>
                    <div className={`text-[10px] ${p.ready ? 'text-[#64748B]' : 'text-[#EF4444] font-semibold'}`}>
                      {p.steam}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {p.ready ? (
                    <>
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                        AC OK
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#10B981] text-black flex items-center gap-1">
                        <Check className="w-3 h-3" /> Check-in
                      </span>
                    </>
                  ) : (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EF4444]/20 text-[#EF4444] border border-[#EF4444]/40 flex items-center gap-1">
                      ✕ Pendiente Check-in
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map Veto Oficial (BO1 Ban-Ban Pick) */}
      <div className="bg-[#121620] border border-[#22283a] rounded-xl p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1e2230] pb-3">
          <div>
            <h3 className="font-bold text-white font-mono-tech text-sm">
              Map Veto Oficial (BO1 Ban-Ban Pick)
            </h3>
            <span className="text-xs text-[#64748B] font-mono-tech">
              Secuencia de vetos ejecutada por capitanes Pacuno_CS y Draken_NEA según reglamento de la Liga Regional.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono-tech font-bold bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30">
              ✓ COMPLETADO
            </span>
            <span className="text-xs font-mono-tech text-white">
              Mapa resultante: <strong className="text-[#A855F7]">de_mirage</strong>
            </span>
          </div>
        </div>

        {/* 7 Maps Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {/* Mirage (PICKED) */}
          <div className="relative rounded-lg overflow-hidden border-2 border-[#10B981] bg-[#16201b] p-3 text-center shadow-[0_0_15px_rgba(16,185,129,0.25)]">
            <div className="absolute top-1.5 right-1.5 px-1.5 py-0.2 rounded bg-[#10B981] text-black font-mono-tech text-[9px] font-extrabold uppercase">
              PICKED
            </div>
            <div className="h-16 flex items-center justify-center font-bold text-white text-lg font-mono-tech">
              Mirage
            </div>
            <div className="text-[10px] font-mono-tech font-bold text-[#10B981]">
              MAPA DEL MATCH
            </div>
          </div>

          {/* Inferno (BAN ZGA) */}
          <div className="relative rounded-lg overflow-hidden border border-[#22283a] bg-[#0b0d13] p-3 text-center opacity-60">
            <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#EF4444]/20 text-[#EF4444] text-[10px] font-bold flex items-center justify-center">
              ✕
            </div>
            <div className="h-16 flex items-center justify-center font-bold text-[#94A3B8] text-base font-mono-tech line-through">
              Inferno
            </div>
            <div className="text-[10px] font-mono-tech text-[#EF4444]">
              BAN ZGA
            </div>
          </div>

          {/* Nuke (BAN MSE) */}
          <div className="relative rounded-lg overflow-hidden border border-[#22283a] bg-[#0b0d13] p-3 text-center opacity-60">
            <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#EF4444]/20 text-[#EF4444] text-[10px] font-bold flex items-center justify-center">
              ✕
            </div>
            <div className="h-16 flex items-center justify-center font-bold text-[#94A3B8] text-base font-mono-tech line-through">
              Nuke
            </div>
            <div className="text-[10px] font-mono-tech text-[#EF4444]">
              BAN MSE
            </div>
          </div>

          {/* Ancient (BAN ZGA) */}
          <div className="relative rounded-lg overflow-hidden border border-[#22283a] bg-[#0b0d13] p-3 text-center opacity-60">
            <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#EF4444]/20 text-[#EF4444] text-[10px] font-bold flex items-center justify-center">
              ✕
            </div>
            <div className="h-16 flex items-center justify-center font-bold text-[#94A3B8] text-base font-mono-tech line-through">
              Ancient
            </div>
            <div className="text-[10px] font-mono-tech text-[#EF4444]">
              BAN ZGA
            </div>
          </div>

          {/* Anubis (BAN MSE) */}
          <div className="relative rounded-lg overflow-hidden border border-[#22283a] bg-[#0b0d13] p-3 text-center opacity-60">
            <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#EF4444]/20 text-[#EF4444] text-[10px] font-bold flex items-center justify-center">
              ✕
            </div>
            <div className="h-16 flex items-center justify-center font-bold text-[#94A3B8] text-base font-mono-tech line-through">
              Anubis
            </div>
            <div className="text-[10px] font-mono-tech text-[#EF4444]">
              BAN MSE
            </div>
          </div>

          {/* Dust II (BAN ZGA) */}
          <div className="relative rounded-lg overflow-hidden border border-[#22283a] bg-[#0b0d13] p-3 text-center opacity-60">
            <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#EF4444]/20 text-[#EF4444] text-[10px] font-bold flex items-center justify-center">
              ✕
            </div>
            <div className="h-16 flex items-center justify-center font-bold text-[#94A3B8] text-base font-mono-tech line-through">
              Dust II
            </div>
            <div className="text-[10px] font-mono-tech text-[#EF4444]">
              BAN ZGA
            </div>
          </div>

          {/* Vertigo (BAN MSE) */}
          <div className="relative rounded-lg overflow-hidden border border-[#22283a] bg-[#0b0d13] p-3 text-center opacity-60">
            <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#EF4444]/20 text-[#EF4444] text-[10px] font-bold flex items-center justify-center">
              ✕
            </div>
            <div className="h-16 flex items-center justify-center font-bold text-[#94A3B8] text-base font-mono-tech line-through">
              Vertigo
            </div>
            <div className="text-[10px] font-mono-tech text-[#EF4444]">
              BAN MSE
            </div>
          </div>
        </div>
      </div>

      {/* Configuración y Credenciales del Servidor CS2 */}
      <div className="bg-[#121620] border border-[#22283a] rounded-xl p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-[#1e2230] pb-3">
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-[#06B6D4]" />
            <h3 className="font-bold text-white font-mono-tech text-sm">
              Configuración y Credenciales del Servidor CS2
            </h3>
          </div>
          <span className="text-xs font-mono-tech text-[#10B981] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
            WARMUP DISPONIBLE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* IP & Credentials */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-lg bg-[#0b0d13] border border-[#1e2230]">
              <div>
                <span className="text-[10px] text-[#64748B] font-mono-tech block">DIRECCIÓN IP Y PUERTO (GOTV & GAME)</span>
                <span className="text-sm font-bold text-white font-mono-tech">
                  cs2.zingarogaming.com.ar:27015
                </span>
              </div>
              <span className="px-2 py-1 rounded bg-[#1e2230] text-[10px] font-mono-tech text-[#38BDF8] border border-[#28324a]">
                [PWD ENCRIPTADO]
              </span>
            </div>

            <div className="text-xs font-mono-tech text-[#94A3B8] space-y-1">
              <div>
                <strong className="text-white">Nota de Seguridad:</strong> El password se transmite por socket seguro al cliente Steam cuando ambos equipos tienen 5/5 check-in.
              </div>
            </div>
          </div>

          {/* Steam One-Click Action */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <button
              onClick={() => setSteamConnectModal(true)}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#A855F7] hover:to-[#8B5CF6] text-white font-mono-tech font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all hover:scale-[1.01]"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>CONECTAR VÍA STEAM (ONE-CLICK)</span>
            </button>
            <span className="text-[10px] text-center font-mono-tech text-[#64748B] mt-2">
              Protocolo directo: steam://connect/cs2.zingarogaming.com.ar:27015
            </span>
          </div>
        </div>

        {/* Live Server Console */}
        <div className="mt-4 pt-4 border-t border-[#1e2230] space-y-2">
          <div className="flex items-center justify-between text-xs font-mono-tech">
            <span className="text-[#94A3B8] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping"></span>
              CONSOLA EN VIVO DE SERVIDOR ZNG-CS2-04
            </span>
            <span className="text-[#10B981]">Ping: 12ms</span>
          </div>

          <div className="bg-[#08090e] border border-[#191d29] rounded-lg p-3 font-mono-tech text-xs text-[#94A3B8] space-y-1 max-h-36 overflow-y-auto">
            {serverConsoleLogs.map((log, idx) => (
              <div key={idx} className="leading-relaxed">
                {log}
              </div>
            ))}
          </div>
        </div>

        {/* Referee Contact Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#1e2230] text-xs font-mono-tech">
          <div className="flex items-center gap-2">
            <span className="text-[#64748B]">Árbitro Oficial Asignado:</span>
            <strong className="text-white">Comisario_Torres</strong>
            <span className="px-1.5 py-0.2 rounded text-[10px] bg-[#10B981]/20 text-[#10B981]">
              (Online)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCallArbitrator}
              className={`px-3 py-1.5 rounded border text-xs font-mono-tech font-semibold transition-all ${
                arbitratorCalled
                  ? 'bg-[#10B981]/20 text-[#10B981] border-[#10B981]/40'
                  : 'bg-[#181C28] hover:bg-[#252c40] text-white border-[#2d3748]'
              }`}
            >
              {arbitratorCalled ? '✓ ÁRBITRO NOTIFICADO' : 'LLAMAR ÁRBITRO DE TURNO'}
            </button>

            <button
              onClick={() => onNavigate('disputes')}
              className="px-3 py-1.5 rounded bg-[#EF4444]/15 hover:bg-[#EF4444]/25 text-[#EF4444] border border-[#EF4444]/40 text-xs font-mono-tech font-bold transition-colors"
            >
              REPORTAR PROBLEMA / DISPUTA
            </button>
          </div>
        </div>
      </div>

      {/* Steam Connection Modal Confirmation */}
      {steamConnectModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#121620] border border-[#8B5CF6] rounded-xl max-w-md w-full p-6 space-y-4 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-white font-mono-tech text-base">
                Lanzando Counter-Strike 2
              </h4>
              <button
                onClick={() => setSteamConnectModal(false)}
                className="text-[#64748B] hover:text-white"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#94A3B8]">
              Se enviará la orden de ejecución a tu cliente Steam verificado para conectarte a <strong>ZNG-CS2-04</strong> con sub-tick 128 y Zingaro Shield.
            </p>

            <div className="p-3 bg-[#0b0d13] rounded border border-[#1e2230] font-mono-tech text-xs text-[#06B6D4] break-all">
              steam://connect/190.137.45.101:27045/zingaro_m12
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSteamConnectModal(false)}
                className="px-4 py-2 rounded bg-[#181C28] text-white text-xs font-mono-tech"
              >
                Cerrar
              </button>
              <button
                onClick={() => {
                  window.open('steam://connect/190.137.45.101:27045/zingaro_m12', '_self');
                  setSteamConnectModal(false);
                }}
                className="px-4 py-2 rounded bg-[#8B5CF6] text-white text-xs font-mono-tech font-bold"
              >
                Confirmar y Abrir CS2
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
