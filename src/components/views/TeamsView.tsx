import React, { useState } from 'react';
import { ViewType, Player } from '../../types/esports';
import {
  Users,
  Shield,
  Lock,
  Unlock,
  AlertTriangle,
  UserPlus,
  RefreshCw,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  Clock,
  Award,
  Zap,
  Flame,
  FileText
} from 'lucide-react';
import { ZINGARO_ACADEMY_ROSTER, STANDIN_PLAYER, MISIONES_ESPORTS_ROSTER } from '../../data/mockData';

interface TeamsViewProps {
  onSelectView: (view: ViewType) => void;
  onRequestRosterLockModal: () => void;
}

export const TeamsView: React.FC<TeamsViewProps> = ({
  onSelectView,
  onRequestRosterLockModal
}) => {
  const [activeRoster, setActiveRoster] = useState<Player[]>(ZINGARO_ACADEMY_ROSTER);
  const [standinPlayer, setStandinPlayer] = useState<Player>(STANDIN_PLAYER);
  const [swappedPlayerName, setSwappedPlayerName] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState<'roster' | 'stats' | 'scrim-records'>('roster');

  const handleSwapStandin = (starterIndex: number) => {
    const target = activeRoster[starterIndex];
    const newRoster = [...activeRoster];
    newRoster[starterIndex] = {
      ...standinPlayer,
      role: `STAND-IN (Reemplaza a ${target.name})`
    };
    setActiveRoster(newRoster);
    setStandinPlayer({
      ...target,
      status: 'stand-in'
    });
    setSwappedPlayerName(target.name);
    setTimeout(() => setSwappedPlayerName(null), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  EQUIPO OFICIAL ZINGARO
                </span>
                <span className="text-xs font-mono text-amber-400 flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5" />
                  ROSTER LOCK ACTIVO
                </span>
              </div>
              <h1 className="text-2xl font-bold text-white tracking-wide mt-1">
                Zingaro Academy [ZGA]
              </h1>
              <p className="text-sm text-neutral-400 mt-0.5">
                División Challenger NEA • Clasificado a Semifinales • Cap: Franco "Pacuno" Valenzuela.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onRequestRosterLockModal}
              className="px-4 py-2.5 bg-amber-600/20 hover:bg-amber-600/30 border border-amber-500/40 text-amber-300 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-sm"
            >
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>Solicitar Excepción de Roster Lock</span>
            </button>
            <button
              onClick={() => onSelectView('matchroom')}
              className="px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-200 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Ir a Sala de Partido</span>
            </button>
          </div>
        </div>
      </div>

      {/* Roster Lock Notice Bar */}
      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <Lock className="w-5 h-5 text-amber-400 shrink-0" />
          <div>
            <span className="font-bold text-amber-300">Roster Lock Oficial de Temporada:</span>
            <span className="text-neutral-300 ml-1">
              Las alineaciones se encuentran blindadas bajo el Art. 1.2 del Reglamento. Solo se autorizan
              sustituciones de emergencia médica o corte de fibra con validación de un Comisario.
            </span>
          </div>
        </div>

        <button
          onClick={() => onSelectView('judicial-dossier')}
          className="text-amber-400 font-semibold hover:underline flex items-center gap-1 shrink-0"
        >
          <span>Leer Normativa</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Swapped Notification */}
      {swappedPlayerName && (
        <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>
            Sustitución en borrador efectuada: B4stian ingresa temporalmente en lugar de {swappedPlayerName}.
            Recuerde enviar solicitud al Comisario para autorizar en servidor RCON.
          </span>
        </div>
      )}

      {/* Main Roster Grid (5 Starters) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-cyan-400" />
            <span>Alineación Titular Registrada (5/5 Jugadores)</span>
          </h2>
          <span className="text-xs font-mono text-neutral-400">Promedio ELO: 2314 • Nivel 9-10</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeRoster.map((player, idx) => (
            <div
              key={player.id}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 shadow-lg hover:border-neutral-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={player.avatar}
                      alt={player.name}
                      className="w-12 h-12 rounded-xl object-cover border border-neutral-700"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-white text-sm">{player.name}</span>
                        {player.isCaptain && (
                          <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[9px] border border-amber-500/30">
                            CAPITÁN
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-neutral-400">{player.realName}</div>
                      <div className="text-[10px] font-mono text-cyan-400 font-semibold mt-0.5">
                        {player.role}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-mono text-sm font-bold text-white">{player.elo}</span>
                    <span className="block text-[10px] text-neutral-500 font-mono">ELO (LVL {player.level})</span>
                  </div>
                </div>

                {/* Player Stats Pills */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-neutral-800/80 text-center text-xs">
                  <div className="bg-neutral-950 p-1.5 rounded-lg border border-neutral-800">
                    <span className="text-[10px] text-neutral-500 block">K/D</span>
                    <span className="font-mono font-bold text-white">{player.kd}</span>
                  </div>
                  <div className="bg-neutral-950 p-1.5 rounded-lg border border-neutral-800">
                    <span className="text-[10px] text-neutral-500 block">HS%</span>
                    <span className="font-mono font-bold text-white">{player.hsRate}%</span>
                  </div>
                  <div className="bg-neutral-950 p-1.5 rounded-lg border border-neutral-800">
                    <span className="text-[10px] text-neutral-500 block">ADR</span>
                    <span className="font-mono font-bold text-white">{player.adr}</span>
                  </div>
                </div>
              </div>

              {/* Action Button: Replace with Stand-in */}
              <div className="mt-3 pt-2.5 border-t border-neutral-800/60 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-neutral-500 truncate max-w-[130px]">
                  SteamID: {player.steamId}
                </span>
                <button
                  onClick={() => handleSwapStandin(idx)}
                  className="text-xs text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Sustituir por Stand-in</span>
                </button>
              </div>
            </div>
          ))}

          {/* Stand-in Card */}
          <div className="bg-neutral-950/80 border border-dashed border-neutral-700 rounded-xl p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                  SUPLENTE OFICIAL (STAND-IN 1)
                </span>
                <span className="text-[11px] font-mono text-neutral-500">HABILITADO EN REGLAMENTO</span>
              </div>

              <div className="flex items-center gap-3 mt-3">
                <img
                  src={standinPlayer.avatar}
                  alt={standinPlayer.name}
                  className="w-12 h-12 rounded-xl object-cover border border-neutral-700"
                />
                <div>
                  <div className="font-bold text-white text-sm">{standinPlayer.name}</div>
                  <div className="text-[11px] text-neutral-400">{standinPlayer.realName}</div>
                  <div className="text-[10px] font-mono text-neutral-400 mt-0.5">{standinPlayer.role}</div>
                </div>
              </div>

              <p className="text-xs text-neutral-400 mt-3">
                Para activar a {standinPlayer.name} en la whitelist del servidor oficial durante el partido de hoy,
                haga click en sustituir en cualquiera de los 5 titulares.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>ELO: {standinPlayer.elo}</span>
              <span>K/D: {standinPlayer.kd}</span>
              <span>HS: {standinPlayer.hsRate}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
