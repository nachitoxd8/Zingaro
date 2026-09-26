import React, { useState } from 'react';
import { ViewType } from '../../types/esports';
import {
  Trophy,
  Calendar,
  DollarSign,
  Users,
  MapPin,
  ChevronRight,
  Shield,
  Clock,
  Sparkles,
  Play,
  CheckCircle2,
  ExternalLink,
  Award,
  Video,
  Download,
  Target,
  Flame,
  Swords,
  Timer
} from 'lucide-react';

interface TournamentsViewProps {
  onSelectView: (view: ViewType) => void;
}

export const TournamentsView: React.FC<TournamentsViewProps> = ({ onSelectView }) => {
  const [activeTab, setActiveTab] = useState<'bracket' | 'pickem' | 'tournaments-list' | 'live-deepdive'>('bracket');
  const [pickemSaved, setPickemSaved] = useState(false);

  return (
    <div className="space-y-6">
      {/* Top Banner Showcase */}
      <div className="relative rounded-2xl overflow-hidden bg-[#111319] border border-[#282a30] shadow-2xl p-6 md:p-8">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0e14] via-[#111319]/90 to-transparent z-10" />
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#d0bcff]/10 blur-3xl pointer-events-none" />

        <div className="relative z-20 flex flex-col xl:flex-row xl:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-[#1e1f26] border border-[#d0bcff]/30 text-[#d0bcff] font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-[#d0bcff]" /> OFICIAL ZINGARO
              </span>
              <span className="px-2.5 py-0.5 rounded bg-[#03b5d3]/20 text-[#4cd7f6] font-mono text-[10px] font-bold uppercase tracking-wider">
                TIER 2 PRO
              </span>
              <span className="px-2.5 py-0.5 rounded bg-[#00a572]/20 text-[#4edea3] font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse" />
                FASE FINAL EN VIVO • SEMIFINALES
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
              COPA ZINGARO FEST 2026 // BRACKET ELIMINATORIO
            </h1>
            <p className="text-xs md:text-sm text-[#cbc3d7] max-w-2xl leading-relaxed">
              Cuadro eliminatorio oficial de doble ala convergente. 8 escuadras de la región Litoral disputando el título de campeón, cupo al RMR Regional y $1.500.000 ARS en la Arena San Lorenzo.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 self-start xl:self-center">
            <button
              onClick={() => setActiveTab('live-deepdive')}
              className="px-4 py-2.5 rounded-xl bg-[#00a572] hover:bg-[#4edea3] text-black font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_14px_rgba(78,222,163,0.4)] flex items-center gap-2"
            >
              <Video className="w-4 h-4" />
              <span>Ver GOTV En Vivo (450 FPS)</span>
            </button>
            <button
              onClick={() => onSelectView('matchroom')}
              className="px-4 py-2.5 rounded-xl bg-[#1e1f26] hover:bg-[#282a30] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all border border-[#33343b] flex items-center gap-2"
            >
              <Play className="w-4 h-4 text-[#4cd7f6]" />
              <span>Entrar al Matchroom</span>
            </button>
          </div>
        </div>
      </div>

      {/* View Switcher Tabs */}
      <div className="flex items-center justify-between border-b border-[#282a30] pb-2 text-xs font-mono">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('bracket')}
            className={`px-4 py-2 rounded-lg font-bold transition-all ${
              activeTab === 'bracket'
                ? 'bg-[#a078ff] text-white shadow-[0_0_14px_rgba(160,120,255,0.4)]'
                : 'text-[#cbc3d7] hover:text-white'
            }`}
          >
            Cuadro Oficial (Ala Doble)
          </button>
          <button
            onClick={() => setActiveTab('pickem')}
            className={`px-4 py-2 rounded-lg font-bold transition-all ${
              activeTab === 'pickem'
                ? 'bg-[#a078ff] text-white shadow-[0_0_14px_rgba(160,120,255,0.4)]'
                : 'text-[#cbc3d7] hover:text-white'
            }`}
          >
            Mi Pick'em
          </button>
          <button
            onClick={() => setActiveTab('tournaments-list')}
            className={`px-4 py-2 rounded-lg font-bold transition-all ${
              activeTab === 'tournaments-list'
                ? 'bg-[#a078ff] text-white shadow-[0_0_14px_rgba(160,120,255,0.4)]'
                : 'text-[#cbc3d7] hover:text-white'
            }`}
          >
            Circuitos & Torneos (4)
          </button>
          <button
            onClick={() => setActiveTab('live-deepdive')}
            className={`px-4 py-2 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'live-deepdive'
                ? 'bg-[#00a572] text-black font-bold shadow-md'
                : 'text-[#4edea3] hover:text-white'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-ping" />
            <span>SF1 Telemetría En Vivo</span>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-3 text-xs text-[#958ea0]">
          <span className="text-[#4cd7f6] font-bold">128-Subtick CS2</span>
          <span>•</span>
          <span>Pozo: $1.500.000 ARS</span>
        </div>
      </div>

      {/* TAB 1: BRACKET CONVERGENTE MONUMENTAL */}
      {activeTab === 'bracket' && (
        <div className="space-y-6">
          {/* Main Bracket Grid */}
          <div className="bg-[#111319] border border-[#282a30] rounded-2xl p-6 shadow-2xl overflow-x-auto">
            <div className="min-w-[1200px] space-y-6">
              {/* Stage Headers */}
              <div className="grid grid-cols-12 gap-4 text-center font-mono text-xs uppercase tracking-widest text-[#958ea0]">
                <div className="col-span-3 text-left pl-2 text-[#4cd7f6] font-bold">Cuartos Ala Oeste (Bo3)</div>
                <div className="col-span-2 text-left pl-2 text-[#4edea3] font-bold">Semifinal 1 (En Vivo)</div>
                <div className="col-span-2 text-center text-[#d0bcff] font-bold">Gran Final Bo5</div>
                <div className="col-span-2 text-right pr-2 text-[#4cd7f6] font-bold">Semifinal 2 (Hoy 21:30)</div>
                <div className="col-span-3 text-right pr-2 text-[#4cd7f6] font-bold">Cuartos Ala Este (Bo3)</div>
              </div>

              {/* Symmetrical Wings Converging Grid */}
              <div className="grid grid-cols-12 gap-4 items-center">
                {/* LEFT WING: CUARTOS (3 cols) */}
                <div className="col-span-3 space-y-4">
                  {/* QF1 */}
                  <div className="p-3.5 rounded-xl bg-[#0c0e14] border border-[#282a30] space-y-2 hover:border-[#a078ff]/40 transition-colors">
                    <div className="flex justify-between text-[10px] font-mono text-[#958ea0]">
                      <span>QF-01 // BO3</span>
                      <span className="text-[#4edea3] font-bold">FINALIZADO (2-0)</span>
                    </div>
                    <div className="space-y-1 font-mono text-xs">
                      <div className="flex justify-between items-center p-2 rounded bg-[#191b22] text-white font-bold">
                        <span className="flex items-center gap-1.5">
                          <span className="text-[#d0bcff]">[ZGA]</span> Zingaro Academy
                        </span>
                        <span className="text-[#4edea3]">2</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded bg-[#111319] text-[#958ea0]">
                        <span>[FML] Formosa Legion</span>
                        <span>0</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#958ea0] block text-right">
                      Dust II (13-7) • Nuke (13-4)
                    </span>
                  </div>

                  {/* QF2 */}
                  <div className="p-3.5 rounded-xl bg-[#0c0e14] border border-[#282a30] space-y-2 hover:border-[#a078ff]/40 transition-colors">
                    <div className="flex justify-between text-[10px] font-mono text-[#958ea0]">
                      <span>QF-02 // BO3</span>
                      <span className="text-[#4edea3] font-bold">FINALIZADO (2-1)</span>
                    </div>
                    <div className="space-y-1 font-mono text-xs">
                      <div className="flex justify-between items-center p-2 rounded bg-[#191b22] text-white font-bold">
                        <span className="flex items-center gap-1.5">
                          <span className="text-[#4cd7f6]">[IGZ]</span> Iguazú Gaming
                        </span>
                        <span className="text-[#4edea3]">2</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded bg-[#111319] text-[#958ea0]">
                        <span>[OBR] Oberá Tactical Red</span>
                        <span>1</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#958ea0] block text-right">
                      Decider: Inferno OT (16-14)
                    </span>
                  </div>
                </div>

                {/* LEFT SEMIFINAL: SF1 (2 cols) */}
                <div className="col-span-2">
                  <div className="p-4 rounded-xl bg-[#191b22] border-2 border-[#4edea3] shadow-[0_0_20px_rgba(78,222,163,0.2)] space-y-3">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-[#d0bcff] font-bold">SF-01 // BO3</span>
                      <span className="px-2 py-0.5 rounded bg-[#00a572] text-black font-bold uppercase animate-pulse">
                        MAPA 3 EN VIVO
                      </span>
                    </div>

                    <div className="space-y-1.5 font-mono text-xs">
                      <div className="flex justify-between items-center p-2 rounded bg-[#0c0e14] text-white font-bold">
                        <span>[ZGA] Zingaro</span>
                        <span className="text-[#4edea3] text-sm">1</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded bg-[#0c0e14] text-white font-bold">
                        <span>[IGZ] Iguazú</span>
                        <span className="text-[#4edea3] text-sm">1</span>
                      </div>
                    </div>

                    <div className="p-2 rounded bg-[#0c0e14] text-center font-mono text-xs text-[#cbc3d7]">
                      <span className="text-[#958ea0] text-[10px] block uppercase">Ancient Decider</span>
                      <span className="font-bold text-[#4edea3]">Rondas: 7 - 5</span>
                    </div>

                    <button
                      onClick={() => setActiveTab('live-deepdive')}
                      className="w-full py-1.5 rounded bg-[#00a572] hover:bg-[#4edea3] text-black font-mono text-[11px] font-bold uppercase transition-all shadow-sm"
                    >
                      Ver Telemetría
                    </button>
                  </div>
                </div>

                {/* CENTER STAGE: MONUMENTAL GOLDEN TROPHY & GRAND FINAL (2 cols) */}
                <div className="col-span-2 flex flex-col items-center justify-center text-center space-y-3 py-2">
                  {/* Grand Champion Top Box */}
                  <div className="w-full rounded-xl bg-gradient-to-b from-[#a078ff]/20 to-[#191b22] border border-[#a078ff]/50 p-3 shadow-xl">
                    <span className="text-[10px] font-mono text-black font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#d0bcff] block mb-1">
                      World Champion
                    </span>
                    <span className="text-sm font-bold text-white block">Copa Zingaro Fest</span>
                    <span className="text-xs font-mono text-[#4edea3] font-bold">$1.000.000 ARS</span>
                  </div>

                  {/* Monumental Trophy Icon / Graphic */}
                  <div className="relative my-1 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-500/20 via-purple-500/20 to-cyan-500/20 blur-xl absolute" />
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400/30 to-amber-600/10 border-2 border-amber-400/60 flex items-center justify-center text-amber-300 shadow-2xl relative z-10">
                      <Trophy className="w-10 h-10" />
                    </div>
                  </div>

                  {/* Grand Final Match Box */}
                  <div className="w-full rounded-xl bg-[#0c0e14] border border-[#282a30] p-3 text-xs font-mono space-y-1.5">
                    <span className="text-[10px] text-[#4cd7f6] uppercase font-bold block">
                      Gran Final // BO5
                    </span>
                    <div className="text-[11px] text-white font-bold">Dom 18 • 20:00 ART</div>
                    <div className="grid grid-cols-2 gap-1 text-[10px] pt-1">
                      <span className="p-1 rounded bg-[#191b22] text-[#d0bcff] truncate">ZGA / IGZ</span>
                      <span className="p-1 rounded bg-[#191b22] text-[#4cd7f6] truncate">EDW / PS5</span>
                    </div>
                  </div>
                </div>

                {/* RIGHT SEMIFINAL: SF2 (2 cols) */}
                <div className="col-span-2">
                  <div className="p-4 rounded-xl bg-[#0c0e14] border border-[#282a30] space-y-3 hover:border-neutral-700 transition-colors">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-[#4cd7f6] font-bold">SF-02 // BO3</span>
                      <span className="px-2 py-0.5 rounded bg-[#1e1f26] text-[#958ea0] uppercase font-semibold">
                        HOY 21:30 ART
                      </span>
                    </div>

                    <div className="space-y-1.5 font-mono text-xs">
                      <div className="flex justify-between items-center p-2 rounded bg-[#191b22] text-white">
                        <span>[EDW] Eldorado</span>
                        <span className="text-[#958ea0]">-</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded bg-[#191b22] text-white">
                        <span>[P5] Posadas Five</span>
                        <span className="text-[#958ea0]">-</span>
                      </div>
                    </div>

                    <div className="p-2 rounded bg-[#191b22] text-center font-mono text-[10px] text-[#cbc3d7]">
                      <span>Veto de Mapas en 40 min</span>
                    </div>
                  </div>
                </div>

                {/* RIGHT WING: CUARTOS (3 cols) */}
                <div className="col-span-3 space-y-4">
                  {/* QF3 */}
                  <div className="p-3.5 rounded-xl bg-[#0c0e14] border border-[#282a30] space-y-2 hover:border-[#a078ff]/40 transition-colors">
                    <div className="flex justify-between text-[10px] font-mono text-[#958ea0]">
                      <span>QF-03 // BO3</span>
                      <span className="text-[#4edea3] font-bold">FINALIZADO (2-0)</span>
                    </div>
                    <div className="space-y-1 font-mono text-xs">
                      <div className="flex justify-between items-center p-2 rounded bg-[#191b22] text-white font-bold">
                        <span className="flex items-center gap-1.5">
                          <span className="text-[#d0bcff]">[EDW]</span> Eldorado Wolves
                        </span>
                        <span className="text-[#4edea3]">2</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded bg-[#111319] text-[#958ea0]">
                        <span>[CHA] Chaco Titans</span>
                        <span>0</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#958ea0] block text-right">
                      Mirage (13-5) • Dust2 (13-6)
                    </span>
                  </div>

                  {/* QF4 */}
                  <div className="p-3.5 rounded-xl bg-[#0c0e14] border border-[#282a30] space-y-2 hover:border-[#a078ff]/40 transition-colors">
                    <div className="flex justify-between text-[10px] font-mono text-[#958ea0]">
                      <span>QF-04 // BO3</span>
                      <span className="text-[#4edea3] font-bold">FINALIZADO (2-1)</span>
                    </div>
                    <div className="space-y-1 font-mono text-xs">
                      <div className="flex justify-between items-center p-2 rounded bg-[#191b22] text-white font-bold">
                        <span className="flex items-center gap-1.5">
                          <span className="text-[#4cd7f6]">[P5]</span> Posadas Five
                        </span>
                        <span className="text-[#4edea3]">2</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded bg-[#111319] text-[#958ea0]">
                        <span>[TGV] Taragüí Vipers</span>
                        <span>1</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#958ea0] block text-right">
                      Inferno (11-13) • Anubis (13-10) • Vertigo (13-11)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MI PICK'EM */}
      {activeTab === 'pickem' && (
        <div className="bg-[#111319] border border-[#282a30] rounded-2xl p-6 shadow-2xl space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#282a30]">
            <div>
              <h3 className="text-xl font-bold text-white uppercase">
                Desafío Pick'em: Copa Zingaro Fest 2026
              </h3>
              <p className="text-xs text-[#cbc3d7] mt-0.5">
                Predice a los finalistas y al campeón del torneo para sumar medallas virtuales y cajas de skins CS2.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded bg-[#00a572]/20 text-[#4edea3] font-mono text-xs font-bold">
                Puntos: 85 / 100
              </span>
              <button
                onClick={() => {
                  setPickemSaved(true);
                  setTimeout(() => setPickemSaved(false), 2500);
                }}
                className="px-4 py-2 bg-[#a078ff] hover:bg-[#8B5CF6] text-white font-mono text-xs font-bold uppercase rounded-lg shadow-sm"
              >
                {pickemSaved ? '¡Votos Guardados!' : 'Guardar Votos'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#0c0e14] border border-[#282a30] space-y-2">
              <span className="text-[10px] text-[#4cd7f6] uppercase font-bold block">Predicción Semifinal 1</span>
              <div className="text-sm font-bold text-white">Zingaro Academy (2 - 1)</div>
              <span className="text-[#4edea3] text-[11px] block">Voto Acertado Parcial (+25 pts)</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0c0e14] border border-[#282a30] space-y-2">
              <span className="text-[10px] text-[#4cd7f6] uppercase font-bold block">Predicción Semifinal 2</span>
              <div className="text-sm font-bold text-white">Eldorado Wolves (2 - 0)</div>
              <span className="text-[#958ea0] text-[11px] block">Pendiente de inicio</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0c0e14] border border-[#a078ff]/40 space-y-2">
              <span className="text-[10px] text-[#d0bcff] uppercase font-bold block">Campeón Elegido</span>
              <div className="text-sm font-bold text-[#d0bcff]">Zingaro Academy</div>
              <span className="text-[#4edea3] text-[11px] block">Multiplicador x2 Final (+50 pts)</span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: CIRCUITOS Y TORNEOS (4) */}
      {activeTab === 'tournaments-list' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              {
                title: 'Copa Zingaro Fest 2026',
                status: 'INSCRIPCIONES CERRADAS',
                statusColor: 'bg-[#a078ff]/20 text-[#d0bcff]',
                type: 'LAN Arena San Lorenzo',
                prize: '$1.500.000 ARS',
                teams: '12 / 16 Equipos',
                dates: '14 - 16 Diciembre',
                desc: 'Torneo presencial 5v5 con público en vivo, cabinas insonorizadas y setup de 240Hz.'
              },
              {
                title: 'Qualy Semillero Sub-18',
                status: 'ÚLTIMOS CUPOS',
                statusColor: 'bg-[#03b5d3]/20 text-[#4cd7f6]',
                type: 'Online 128T Subtick',
                prize: '100% Gratuito',
                teams: '28 / 32 Equipos',
                dates: '28 Noviembre',
                desc: 'Scouting oficial para Zingaro Academy con directores técnicos en GOTV.'
              },
              {
                title: '1v1 AWP & Aim King',
                status: 'MAÑANA 19:00',
                statusColor: 'bg-[#00a572]/20 text-[#4edea3]',
                type: 'LAN Arena 1v1',
                prize: '$250.000 + Zowie',
                teams: '4 Cupos Libres',
                dates: 'Viernes 20:00',
                desc: 'Duelos individuales por eliminación directa al mejor de 16 rondas.'
              },
              {
                title: 'Liga de Ascenso CS2',
                status: 'APERTURA 2027',
                statusColor: 'bg-[#282a30] text-[#958ea0]',
                type: 'Ascenso Directo',
                prize: '$800.000 + 2 Slots',
                teams: '18 / 24 Escuadras',
                dates: '15 Enero 2027',
                desc: 'Circuito federado de segunda división con ascenso directo al Clausura.'
              }
            ].map((tourney, idx) => (
              <div
                key={idx}
                className="bg-[#111319] border border-[#282a30] rounded-xl p-5 shadow-lg flex flex-col justify-between hover:border-[#a078ff]/40 transition-colors space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className={`px-2 py-0.5 rounded font-bold ${tourney.statusColor}`}>
                      {tourney.status}
                    </span>
                    <span className="text-[#958ea0]">{tourney.type}</span>
                  </div>
                  <h4 className="text-base font-bold text-white uppercase">{tourney.title}</h4>
                  <p className="text-xs text-[#cbc3d7] leading-relaxed line-clamp-2">{tourney.desc}</p>
                </div>

                <div className="pt-3 border-t border-[#282a30] space-y-1.5 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-[#958ea0]">Premio:</span>
                    <span className="text-[#4edea3] font-bold">{tourney.prize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#958ea0]">Equipos:</span>
                    <span className="text-white font-bold">{tourney.teams}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: LIVE SF1 TELEMETRÍA EN DIRECTO */}
      {activeTab === 'live-deepdive' && (
        <div className="bg-[#111319] border border-[#282a30] rounded-2xl p-6 shadow-2xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#282a30]">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4edea3] animate-ping" />
                <h2 className="text-xl font-bold text-white uppercase">
                  SF1: Zingaro Academy vs Iguazú Gaming
                </h2>
              </div>
              <p className="text-xs font-mono text-[#958ea0] mt-0.5">
                MAPA 3: ANCIENT • SERVIDOR OFICIAL BUE-CS2-01 (14ms) • 128 TICKRATE
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-white bg-[#0c0e14] px-3 py-1 rounded border border-[#282a30]">
                GOTV: connect 181.119.12.44:27020
              </span>
              <button
                onClick={() => onSelectView('matchroom')}
                className="px-4 py-2 bg-[#a078ff] hover:bg-[#8B5CF6] text-white text-xs font-mono font-bold uppercase rounded-lg"
              >
                Abrir Matchroom
              </button>
            </div>
          </div>

          {/* Ancient Score Bar */}
          <div className="p-4 rounded-xl bg-[#0c0e14] border border-[#282a30] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <span className="text-xs text-[#d0bcff] font-bold block">[ZGA] Zingaro (CT)</span>
                <span className="text-3xl font-extrabold text-white">7</span>
              </div>
              <span className="text-xl text-[#958ea0]">:</span>
              <div className="text-center">
                <span className="text-xs text-[#4cd7f6] font-bold block">[IGZ] Iguazú (T)</span>
                <span className="text-3xl font-extrabold text-white">5</span>
              </div>
            </div>

            <div className="flex-1 max-w-md">
              <span className="text-[10px] text-[#958ea0] block mb-1">PROGRESIÓN DE RONDAS ANCIENT</span>
              <div className="grid grid-cols-12 gap-1 h-4">
                {[1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0].map((win, i) => (
                  <div
                    key={i}
                    className={`rounded-sm ${win ? 'bg-[#4cd7f6]' : 'bg-[#4edea3]'}`}
                    title={`Ronda ${i + 1}: ${win ? 'Zingaro CT' : 'Iguazú T'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Live Player Table Zingaro Academy */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-white uppercase flex items-center justify-between">
              <span>[ZGA] Zingaro Academy Lineup</span>
              <span className="text-[#4edea3]">Economía CT: $14.250 (Full Buy)</span>
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border-collapse">
                <thead>
                  <tr className="bg-[#0c0e14] text-[#958ea0] uppercase">
                    <th className="p-2">Jugador</th>
                    <th className="p-2 text-center">K - D</th>
                    <th className="p-2 text-center">+/-</th>
                    <th className="p-2 text-center">ADR</th>
                    <th className="p-2 text-center">HS%</th>
                    <th className="p-2 text-right">Rating 2.0</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#282a30]">
                  <tr className="bg-[#191b22]/60 text-white font-bold">
                    <td className="p-2 text-[#d0bcff]">Pacuno_CS (IGL/Rifle)</td>
                    <td className="p-2 text-center">54 - 31</td>
                    <td className="p-2 text-center text-[#4edea3]">+23</td>
                    <td className="p-2 text-center">94.8</td>
                    <td className="p-2 text-center">58%</td>
                    <td className="p-2 text-right text-[#4edea3]">1.42</td>
                  </tr>
                  <tr className="bg-[#191b22]/30 text-white">
                    <td className="p-2">Chicho (Support)</td>
                    <td className="p-2 text-center">42 - 28</td>
                    <td className="p-2 text-center text-[#4edea3]">+14</td>
                    <td className="p-2 text-center">78.2</td>
                    <td className="p-2 text-center">32%</td>
                    <td className="p-2 text-right text-[#4edea3]">1.26</td>
                  </tr>
                  <tr className="bg-[#191b22]/60 text-white">
                    <td className="p-2">K1nder (Entry)</td>
                    <td className="p-2 text-center">39 - 36</td>
                    <td className="p-2 text-center text-[#4edea3]">+3</td>
                    <td className="p-2 text-center">76.4</td>
                    <td className="p-2 text-center">62%</td>
                    <td className="p-2 text-right">1.08</td>
                  </tr>
                  <tr className="bg-[#191b22]/30 text-white">
                    <td className="p-2">NeoX (Lurker)</td>
                    <td className="p-2 text-center">35 - 34</td>
                    <td className="p-2 text-center text-[#4edea3]">+1</td>
                    <td className="p-2 text-center">69.1</td>
                    <td className="p-2 text-center">54%</td>
                    <td className="p-2 text-right">1.01</td>
                  </tr>
                  <tr className="bg-[#191b22]/60 text-white">
                    <td className="p-2">B4stian (Stand-in)</td>
                    <td className="p-2 text-center">31 - 35</td>
                    <td className="p-2 text-center text-red-400">-4</td>
                    <td className="p-2 text-center">64.5</td>
                    <td className="p-2 text-center">48%</td>
                    <td className="p-2 text-right text-[#958ea0]">0.94</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
