import React, { useState, useEffect } from 'react';
import { ViewType, Player } from '../../types/esports';
import { CURRENT_USER } from '../../data/mockData';
import {
  ShieldCheck,
  Trophy,
  Users,
  Gamepad2,
  TrendingUp,
  ExternalLink,
  ChevronRight,
  Sparkles,
  CheckCircle,
  AlertTriangle,
  Clock,
  Swords,
  Download,
  Flame,
  Award,
  Crosshair,
  Server
} from 'lucide-react';

interface DashboardViewProps {
  user?: Player;
  onNavigate?: (view: ViewType) => void;
  onSelectView?: (view: ViewType) => void;
  onOpenRosterModal?: () => void;
  onRequestRosterModal?: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  user = CURRENT_USER,
  onNavigate: propNavigate,
  onSelectView,
  onOpenRosterModal,
  onRequestRosterModal
}) => {
  const onNavigate = propNavigate || onSelectView || (() => {});
  const openRoster = onRequestRosterModal || onOpenRosterModal || (() => {});
  // Countdown timer simulation for next critical match (2h 45m 10s)
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 10 });
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (h: number, m: number, s: number) => {
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${pad(h)}:${pad(m)}:${pad(s)}`;
  };

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Top Banner / Welcome & Critical Match Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Player Status & Welcome */}
        <div className="lg:col-span-7 bg-gradient-to-r from-[#121622] via-[#161a29] to-[#121622] border border-[#22283a] rounded-xl p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl pointer-events-none"></div>

          <div>
            <div className="flex items-center gap-3 text-[11px] font-mono-tech text-[#94A3B8] mb-2">
              <span className="text-[#A855F7] font-bold">TEMPORADA 2026 CS2</span>
              <span>•</span>
              <span className="text-[#10B981] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                CONEXIÓN SEGURA
              </span>
            </div>

            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              Bienvenido de nuevo,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#06B6D4]">
                {user.name}
              </span>
            </h1>

            <p className="text-sm text-[#94A3B8] mt-1 max-w-xl">
              Capitán de Zingaro Academy • Liderando el semillero táctico de Misiones hacia la máxima división regional.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-4">
              <div className="px-3 py-1.5 rounded-lg bg-[#0c0e14] border border-[#22283a] text-xs font-mono-tech flex items-center gap-2">
                <span className="text-[#64748B]">Steam ID:</span>
                <span className="text-white font-semibold">{user.steamId.slice(0, 10)}...</span>
                <span className="text-[#10B981] text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#10B981]/15">
                  VERIFICADO
                </span>
              </div>

              <div className="px-3 py-1.5 rounded-lg bg-[#0c0e14] border border-[#22283a] text-xs font-mono-tech flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span className="text-[#64748B]">Anti-Cheat CS2:</span>
                <span className="text-[#10B981] font-bold">ACTIVO & BLINDADO</span>
                <span className="text-[#64748B] text-[10px]">(sinc hace 14s)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Próxima Partida Crítica */}
        <div className="lg:col-span-5 bg-[#121620] border border-[#8B5CF6]/30 rounded-xl p-5 relative overflow-hidden shadow-[0_0_20px_rgba(139,92,246,0.1)] flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-[#22283a] pb-3 mb-3">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#A855F7] font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PRÓXIMA PARTIDA CRÍTICA</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono-tech font-bold bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
              ● CONFIRMADA
            </span>
          </div>

          {/* Teams face-off */}
          <div className="flex items-center justify-between my-2">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/20 border border-[#8B5CF6]/50 flex items-center justify-center font-bold font-mono-tech text-white text-sm">
                ZGA
              </div>
              <div>
                <div className="text-xs font-bold text-white font-mono-tech">ZINGARO</div>
                <div className="text-[10px] text-[#A855F7] font-mono-tech">ACADEMY</div>
              </div>
            </div>

            <div className="text-center px-3">
              <div className="text-xs font-extrabold text-[#06B6D4] font-mono-tech">VS</div>
              <div className="text-[9px] text-[#64748B] font-mono-tech">BO1 • VETO EN VIVO</div>
            </div>

            <div className="flex items-center gap-2.5 flex-row-reverse text-right">
              <div className="w-10 h-10 rounded-lg bg-[#EF4444]/20 border border-[#EF4444]/50 flex items-center justify-center font-bold font-mono-tech text-white text-sm">
                MSE
              </div>
              <div>
                <div className="text-xs font-bold text-white font-mono-tech">MISIONES</div>
                <div className="text-[10px] text-[#EF4444] font-mono-tech">ESPORTS</div>
              </div>
            </div>
          </div>

          {/* Competition & Server info */}
          <div className="bg-[#0b0d13] p-3 rounded-lg border border-[#1e2230] space-y-1.5 my-2 text-xs font-mono-tech">
            <div className="flex items-center justify-between text-[#94A3B8]">
              <span>COMPETICIÓN</span>
              <span className="text-white font-semibold">Liga Regional CS2 • J4</span>
            </div>
            <div className="flex items-center justify-between text-[#94A3B8]">
              <span>HORARIO OFICIAL</span>
              <span className="text-[#F59E0B] font-semibold">Jueves 24 Sept • 22:00 ART</span>
            </div>
            <div className="flex items-center justify-between text-[#94A3B8]">
              <span className="flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-[#06B6D4]" />
                Servidor: ZNG-CS2-04 (Posadas DC)
              </span>
              <span className="text-[#10B981] font-bold">18ms PING</span>
            </div>
            <div className="flex items-center justify-between text-[#94A3B8] border-t border-[#1e2230] pt-1.5">
              <span>Check-In Capitanes</span>
              <span className="text-[#38BDF8] font-bold">
                Abre en {formatTimer(timeLeft.hours, timeLeft.minutes, timeLeft.seconds)}
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-2 gap-2 mt-2">
            <button
              onClick={() => onNavigate('matchroom')}
              className="py-2.5 px-3 rounded-lg bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-mono-tech font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:scale-[1.01]"
            >
              <Gamepad2 className="w-4 h-4" />
              <span>ENTRAR A MATCHROOM</span>
            </button>

            <button
              onClick={() => onNavigate('matches')}
              className="py-2.5 px-3 rounded-lg bg-[#181C28] hover:bg-[#22283a] border border-[#2d3748] text-white font-mono-tech font-medium text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
            >
              <Swords className="w-4 h-4 text-[#06B6D4]" />
              <span>VER SCOUTING RIVAL</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Performance Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Rating ELO Personal */}
        <div className="bg-[#121620] border border-[#22283a] rounded-xl p-4 relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono-tech text-[#94A3B8] uppercase">Rating ELO Personal</span>
            <div className="w-7 h-7 rounded bg-[#8B5CF6]/20 text-[#A855F7] flex items-center justify-center">
              <Trophy className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-white font-mono-tech">{user.elo}</span>
            <span className="text-xs font-mono-tech font-semibold text-[#10B981]">+65 ELO 7D</span>
          </div>
          <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#1e2230] text-[11px] font-mono-tech">
            <span className="text-[#A855F7] font-semibold">NIVEL 10 MAESTRO</span>
            <span className="text-[#64748B]">Top #3 Regional NEA</span>
          </div>
        </div>

        {/* Tasa de Victorias */}
        <div className="bg-[#121620] border border-[#22283a] rounded-xl p-4 relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono-tech text-[#94A3B8] uppercase">Tasa de Victorias</span>
            <div className="w-7 h-7 rounded bg-[#10B981]/20 text-[#10B981] flex items-center justify-center">
              <Award className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-[#10B981] font-mono-tech">68.4%</span>
            <span className="text-xs font-mono-tech text-[#64748B]">56 Matches</span>
          </div>
          {/* Progress bar */}
          <div className="w-full bg-[#1e2230] h-1.5 rounded-full mt-3 overflow-hidden flex">
            <div className="bg-[#10B981] h-full" style={{ width: '68.4%' }}></div>
            <div className="bg-[#EF4444] h-full" style={{ width: '31.6%' }}></div>
          </div>
          <div className="flex items-center justify-between mt-2 text-[10px] font-mono-tech text-[#94A3B8]">
            <span>38 Victorias</span>
            <span>18 Derrotas</span>
          </div>
        </div>

        {/* Impacto de Combate */}
        <div className="bg-[#121620] border border-[#22283a] rounded-xl p-4 relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono-tech text-[#94A3B8] uppercase">Impacto de Combate</span>
            <div className="w-7 h-7 rounded bg-[#06B6D4]/20 text-[#06B6D4] flex items-center justify-center">
              <Crosshair className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-white font-mono-tech">{user.kd}</span>
            <span className="text-xs font-mono-tech text-[#94A3B8]">K/D Ratio</span>
          </div>
          <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#1e2230] text-[11px] font-mono-tech">
            <span className="text-[#94A3B8]">PRECISIÓN HEADSHOT: <strong className="text-white">54.2%</strong></span>
            <span className="px-1.5 py-0.2 rounded bg-[#06B6D4]/20 text-[#06B6D4] font-bold text-[10px]">
              TIER S
            </span>
          </div>
        </div>

        {/* Condecoraciones MVP */}
        <div className="bg-[#121620] border border-[#22283a] rounded-xl p-4 relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono-tech text-[#94A3B8] uppercase">Condecoraciones MVP</span>
            <div className="w-7 h-7 rounded bg-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center">
              <Flame className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-[#F59E0B] font-mono-tech">24</span>
            <span className="text-xs font-mono-tech text-[#94A3B8]">Estrellas de Ronda</span>
          </div>
          <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#1e2230] text-[11px] font-mono-tech">
            <span className="text-[#94A3B8]">ROL: <strong className="text-white">Capitán / IGL</strong></span>
            <span className="text-[#10B981] font-semibold">42.8% Clutches</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Tournaments & Matches vs Team & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (8 cols): Torneos Activos & Historial */}
        <div className="lg:col-span-8 space-y-6">
          {/* Torneos Activos & Próximos */}
          <div className="bg-[#121620] border border-[#22283a] rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-[#1e2230] pb-3">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-[#A855F7]" />
                <h3 className="font-bold text-white font-mono-tech text-sm">TORNEOS ACTIVOS & PRÓXIMOS</h3>
              </div>
              <button
                onClick={() => onNavigate('tournaments')}
                className="text-xs font-mono-tech text-[#A855F7] hover:underline flex items-center gap-1"
              >
                <span>VER CIRCUITO COMPLETO</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Featured Tournament Banner */}
            <div className="relative rounded-xl overflow-hidden border border-[#8B5CF6]/40 bg-gradient-to-r from-[#17142b] via-[#241a45] to-[#121622] p-5 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono-tech font-bold bg-[#A855F7]/20 text-[#A855F7] border border-[#A855F7]/30">
                      MAJOR REGIONAL
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono-tech font-bold bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30">
                      ● INSCRIPCIONES ABIERTAS
                    </span>
                  </div>
                  <h4 className="text-2xl font-black text-white tracking-tight font-mono-tech">
                    Zingaro Gaming Fest CS2 Cup
                  </h4>
                  <p className="text-xs text-[#94A3B8] mt-1 max-w-lg">
                    El festival presencial y online más trascendente de la región con servidores 128-tick y gran final en Posadas.
                  </p>

                  <div className="flex items-center gap-6 mt-4 text-xs font-mono-tech text-[#94A3B8]">
                    <div>
                      <span className="text-[#64748B] block text-[10px]">CUPOS DISPONIBLES</span>
                      <span className="text-white font-bold">28 / 32 Equipos</span>
                    </div>
                    <div>
                      <span className="text-[#64748B] block text-[10px]">FORMATO</span>
                      <span className="text-white font-bold">GSL Doble Eliminación</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end justify-between self-stretch shrink-0">
                  <div className="text-left md:text-right">
                    <span className="text-[10px] text-[#A855F7] font-mono-tech font-bold uppercase tracking-wider block">
                      Bolsa de Premios
                    </span>
                    <span className="text-2xl font-black text-[#10B981] font-mono-tech">
                      $6.000.000 <span className="text-xs text-white">ARS</span>
                    </span>
                  </div>

                  <button
                    onClick={() => setRegistered(!registered)}
                    className={`mt-4 px-4 py-2 rounded-lg font-mono-tech text-xs font-bold transition-all shadow-md ${
                      registered
                        ? 'bg-[#10B981] text-black hover:bg-[#059669]'
                        : 'bg-[#06B6D4] text-black hover:bg-[#22D3EE]'
                    }`}
                  >
                    {registered ? '✓ ESCUADRA INSCRIPTA' : 'INSCRIBIR A ZGA'}
                  </button>
                </div>
              </div>
            </div>

            {/* Second Tournament Item: Liga Regional de CS2 Clausura */}
            <div className="p-4 rounded-lg bg-[#0e111a] border border-[#1e2230] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#181C28] border border-[#2a3044] flex items-center justify-center text-[#94A3B8]">
                  <ShieldCheck className="w-5 h-5 text-[#A855F7]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm font-mono-tech">
                      Liga Regional de CS2 Clausura
                    </span>
                    <span className="px-1.5 py-0.2 rounded text-[10px] font-mono-tech bg-[#10B981]/15 text-[#10B981]">
                      EN CURSO
                    </span>
                  </div>
                  <div className="text-xs text-[#64748B] font-mono-tech mt-0.5">
                    Jornada 4 de 14 • Fase Regular de Puntos • Premio $2.500.000 ARS
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right font-mono-tech text-xs">
                  <div className="text-[#94A3B8] text-[10px]">POSICIÓN ZGA</div>
                  <div className="text-[#10B981] font-bold">2° Lugar (3-0)</div>
                </div>
                <button
                  onClick={() => onNavigate('league')}
                  className="px-3 py-1.5 rounded bg-[#1c2233] hover:bg-[#262f47] text-white text-xs font-mono-tech font-semibold transition-colors"
                >
                  TABLA
                </button>
              </div>
            </div>
          </div>

          {/* Historial Reciente de Partidas */}
          <div className="bg-[#121620] border border-[#22283a] rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-[#1e2230] pb-3">
              <div className="flex items-center gap-2">
                <Gamepad2 className="w-4 h-4 text-[#06B6D4]" />
                <h3 className="font-bold text-white font-mono-tech text-sm">HISTORIAL RECIENTE DE PARTIDAS</h3>
              </div>
              <span className="text-xs font-mono-tech text-[#64748B]">ÚLTIMAS 4 DISPUTADAS</span>
            </div>

            <div className="space-y-2">
              {/* Match 1 */}
              <div className="p-3 rounded-lg bg-[#0e111a] border border-[#1e2230] flex flex-wrap items-center justify-between gap-3 hover:border-[#8B5CF6]/30 transition-all">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono-tech font-bold bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                    ● VICTORIA
                  </span>
                  <div>
                    <div className="font-bold text-white text-xs font-mono-tech">Posadas Five</div>
                    <div className="text-[10px] text-[#64748B] font-mono-tech">Liga Regional J3</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono-tech">
                  <span className="text-[#06B6D4] font-semibold">DE_MIRAGE</span>
                  <span className="text-white font-bold text-sm bg-[#161b29] px-2 py-0.5 rounded border border-[#22283a]">
                    13 : 9
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right font-mono-tech text-xs">
                    <span className="px-1.5 py-0.2 rounded bg-[#F59E0B]/20 text-[#F59E0B] font-bold text-[10px] mr-2">
                      MVP
                    </span>
                    <span className="text-white font-semibold">26K - 11D</span>
                    <span className="text-[#64748B] text-[10px] ml-1">(1.82 ADR)</span>
                  </div>
                  <button 
                    onClick={() => onNavigate('matches')}
                    className="px-2.5 py-1 rounded bg-[#181d2a] hover:bg-[#252c40] text-xs font-mono-tech text-[#38BDF8] border border-[#28324a]"
                  >
                    DEMO & STATS
                  </button>
                </div>
              </div>

              {/* Match 2 */}
              <div className="p-3 rounded-lg bg-[#0e111a] border border-[#1e2230] flex flex-wrap items-center justify-between gap-3 hover:border-[#8B5CF6]/30 transition-all">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono-tech font-bold bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                    ● VICTORIA
                  </span>
                  <div>
                    <div className="font-bold text-white text-xs font-mono-tech">Eldorado Wolves</div>
                    <div className="text-[10px] text-[#64748B] font-mono-tech">Liga Regional J2</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono-tech">
                  <span className="text-[#06B6D4] font-semibold">DE_INFERNO</span>
                  <span className="text-white font-bold text-sm bg-[#161b29] px-2 py-0.5 rounded border border-[#22283a]">
                    13 : 11
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right font-mono-tech text-xs">
                    <span className="text-white font-semibold">19K - 14D</span>
                    <span className="text-[#64748B] text-[10px] ml-1">(1.18 ADR)</span>
                  </div>
                  <button 
                    onClick={() => onNavigate('matches')}
                    className="px-2.5 py-1 rounded bg-[#181d2a] hover:bg-[#252c40] text-xs font-mono-tech text-[#38BDF8] border border-[#28324a]"
                  >
                    DEMO & STATS
                  </button>
                </div>
              </div>

              {/* Match 3 */}
              <div className="p-3 rounded-lg bg-[#0e111a] border border-[#1e2230] flex flex-wrap items-center justify-between gap-3 hover:border-[#8B5CF6]/30 transition-all">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono-tech font-bold bg-[#EF4444]/15 text-[#EF4444] border border-[#EF4444]/30">
                    ● DERROTA
                  </span>
                  <div>
                    <div className="font-bold text-white text-xs font-mono-tech">Guaraní Gaming</div>
                    <div className="text-[10px] text-[#64748B] font-mono-tech">Scrim Matchmaking</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono-tech">
                  <span className="text-[#06B6D4] font-semibold">DE_ANUBIS</span>
                  <span className="text-white font-bold text-sm bg-[#161b29] px-2 py-0.5 rounded border border-[#22283a]">
                    10 : 13
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right font-mono-tech text-xs">
                    <span className="text-white font-semibold">16K - 17D</span>
                    <span className="text-[#64748B] text-[10px] ml-1">(0.94 ADR)</span>
                  </div>
                  <button 
                    onClick={() => onNavigate('matches')}
                    className="px-2.5 py-1 rounded bg-[#181d2a] hover:bg-[#252c40] text-xs font-mono-tech text-[#38BDF8] border border-[#28324a]"
                  >
                    DEMO & STATS
                  </button>
                </div>
              </div>

              {/* Match 4 */}
              <div className="p-3 rounded-lg bg-[#0e111a] border border-[#1e2230] flex flex-wrap items-center justify-between gap-3 hover:border-[#8B5CF6]/30 transition-all">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono-tech font-bold bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                    ● VICTORIA
                  </span>
                  <div>
                    <div className="font-bold text-white text-xs font-mono-tech">Iguazú Gaming</div>
                    <div className="text-[10px] text-[#64748B] font-mono-tech">Liga Regional J1</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono-tech">
                  <span className="text-[#06B6D4] font-semibold">DE_ANCIENT</span>
                  <span className="text-white font-bold text-sm bg-[#161b29] px-2 py-0.5 rounded border border-[#22283a]">
                    13 : 7
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right font-mono-tech text-xs">
                    <span className="text-white font-semibold">21K - 10D</span>
                    <span className="text-[#64748B] text-[10px] ml-1">(1.45 ADR)</span>
                  </div>
                  <button 
                    onClick={() => onNavigate('matches')}
                    className="px-2.5 py-1 rounded bg-[#181d2a] hover:bg-[#252c40] text-xs font-mono-tech text-[#38BDF8] border border-[#28324a]"
                  >
                    DEMO & STATS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (4 cols): Mi Equipo & Centro de Alertas */}
        <div className="lg:col-span-4 space-y-6">
          {/* Mi Equipo Widget */}
          <div className="bg-[#121620] border border-[#22283a] rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-[#1e2230] pb-3">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#A855F7]" />
                <h3 className="font-bold text-white font-mono-tech text-sm">MI EQUIPO</h3>
              </div>
              <span className="text-[11px] font-mono-tech text-[#A855F7] font-semibold">
                ZINGARO ACADEMY [ZGA]
              </span>
            </div>

            {/* Roster lock notice */}
            <div className="p-2.5 rounded bg-[#161a26] border border-[#22283a] flex items-center justify-between text-xs font-mono-tech">
              <span className="text-[#94A3B8] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                ROSTER LOCK REGIONAL
              </span>
              <span className="text-white font-semibold">Fase Regular</span>
            </div>

            {/* Players list */}
            <div className="space-y-2">
              {[
                { initial: 'P', name: 'Pacuno', role: 'In-Game Leader / IGL', status: 'ACTIVO', color: 'bg-[#8B5CF6]' },
                { initial: 'C', name: 'Chicho', role: 'Sniper / Main AWPer', status: 'ACTIVO', color: 'bg-[#06B6D4]' },
                { initial: 'N', name: 'NeoX', role: 'Entry Fragger', status: 'ACTIVO', color: 'bg-[#10B981]' },
                { initial: 'V', name: 'Vortex', role: 'Rifler / Lurker', status: 'ACTIVO', color: 'bg-[#6366F1]' },
                { initial: 'K', name: 'K1nder', role: 'Support / Anchor', status: 'ACTIVO', color: 'bg-[#EC4899]' },
                { initial: 'B', name: 'B4stian', role: 'Suplente Oficial', status: 'STAND-IN', color: 'bg-[#64748B]' },
              ].map((p, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 rounded bg-[#0b0d13] border border-[#1a1e2b] text-xs font-mono-tech"
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-6 h-6 rounded flex items-center justify-center font-bold text-white text-[11px] ${p.color}`}>
                      {p.initial}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{p.name}</div>
                      <div className="text-[10px] text-[#64748B]">{p.role}</div>
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    p.status === 'ACTIVO' ? 'text-[#10B981] bg-[#10B981]/15' : 'text-[#F59E0B] bg-[#F59E0B]/15'
                  }`}>
                    {p.status}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('teams')}
              className="w-full py-2 rounded-lg bg-[#181C28] hover:bg-[#22283a] border border-[#2d3748] text-white font-mono-tech font-semibold text-xs transition-colors flex items-center justify-center gap-2"
            >
              <Users className="w-3.5 h-3.5 text-[#A855F7]" />
              <span>GESTIONAR EQUIPO</span>
            </button>
          </div>

          {/* Centro de Alertas */}
          <div className="bg-[#121620] border border-[#22283a] rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-[#1e2230] pb-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#06B6D4]" />
                <h3 className="font-bold text-white font-mono-tech text-sm">CENTRO DE ALERTAS</h3>
              </div>
              <span className="text-[10px] font-mono-tech font-bold px-1.5 py-0.5 rounded bg-[#06B6D4]/20 text-[#06B6D4]">
                3 NUEVAS
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-[#0b0d13] border border-[#1e2230] space-y-1">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Misiones Esports confirmó el horario propuesto para la Jornada 4.
                    </div>
                    <div className="text-[10px] text-[#64748B] font-mono-tech">
                      Hace 24 min • Liga Regional
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#0b0d13] border border-[#1e2230] space-y-1">
                <div className="flex items-start gap-2">
                  <Download className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Actualización obligatoria de CS2 detectada en servidores dedicados.
                    </div>
                    <div className="text-[10px] text-[#64748B] font-mono-tech">
                      Hace 1 hora • Infraestructura
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#0b0d13] border border-[#1e2230] space-y-1">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Nueva disputa de árbitro resuelta en Grupo B (de_vertigo).
                    </div>
                    <div className="text-[10px] text-[#64748B] font-mono-tech">
                      Hace 3 horas • Comisarios
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('disputes')}
              className="w-full text-center text-xs font-mono-tech text-[#64748B] hover:text-white transition-colors pt-2 block"
            >
              VER TODAS LAS NOTIFICACIONES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
