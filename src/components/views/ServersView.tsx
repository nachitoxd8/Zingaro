import React, { useState } from 'react';
import { ViewType, MatchServer } from '../../types/esports';
import {
  Server,
  Activity,
  Terminal,
  Play,
  Pause,
  RotateCcw,
  Copy,
  Check,
  ExternalLink,
  Shield,
  Zap,
  Globe,
  Sliders,
  ChevronRight,
  Sparkles,
  Wifi,
  HardDrive
} from 'lucide-react';
import { SERVERS_LIST, INITIAL_RCON_LOGS } from '../../data/mockData';

interface ServersViewProps {
  onSelectView: (view: ViewType) => void;
}

export const ServersView: React.FC<ServersViewProps> = ({ onSelectView }) => {
  const [selectedServer, setSelectedServer] = useState<MatchServer>(SERVERS_LIST[0]);
  const [copiedConnect, setCopiedConnect] = useState<string | null>(null);
  const [rconCmd, setRconCmd] = useState('');
  const [rconLogs, setRconLogs] = useState(INITIAL_RCON_LOGS);

  const handleCopyConnect = (srv: MatchServer) => {
    const connectCmd = `connect 190.137.45.101:${srv.port}; password zingaropro2026`;
    navigator.clipboard.writeText(connectCmd);
    setCopiedConnect(srv.id);
    setTimeout(() => setCopiedConnect(null), 2500);
  };

  const handleExecuteRcon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rconCmd.trim()) return;
    const now = new Date();
    const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    
    setRconLogs((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        timestamp: timeStr,
        type: 'RCON',
        message: `> ${rconCmd}`
      },
      {
        id: String(Date.now() + 1),
        timestamp: timeStr,
        type: 'MATCH-CORE',
        message: `[${selectedServer.nodeName}] Executed: ${rconCmd} (200 OK)`
      }
    ]);
    setRconCmd('');
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  INFRAESTRUCTURA DE DEDICADOS CS2
                </span>
                <span className="text-xs font-mono text-emerald-400">128-TICK SUB-TICK HIGH PRECISION</span>
              </div>
              <h1 className="text-2xl font-bold text-white tracking-wide mt-1">
                Servidores Oficiales & Telemetría en Vivo
              </h1>
              <p className="text-sm text-neutral-400 mt-0.5">
                Nodos con baja latencia regional, motor Zingaro Shield Kernel e integración directa con Matchbot RCON.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectView('master-panel')}
              className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-200 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <Sliders className="w-4 h-4 text-amber-400" />
              <span>Controles de Árbitro</span>
            </button>
          </div>
        </div>
      </div>

      {/* Network Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
          <span className="text-xs text-neutral-400 flex items-center justify-between">
            Tickrate Global <Zap className="w-4 h-4 text-cyan-400" />
          </span>
          <div className="text-2xl font-mono font-bold text-white mt-1">128.0</div>
          <span className="text-[11px] text-emerald-400">0.00% Packet Loss</span>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
          <span className="text-xs text-neutral-400 flex items-center justify-between">
            Latencia Promedio <Wifi className="w-4 h-4 text-emerald-400" />
          </span>
          <div className="text-2xl font-mono font-bold text-emerald-400 mt-1">14 ms</div>
          <span className="text-[11px] text-neutral-400">Nodo Buenos Aires Fiber</span>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
          <span className="text-xs text-neutral-400 flex items-center justify-between">
            Anti-Cheat Status <Shield className="w-4 h-4 text-cyan-400" />
          </span>
          <div className="text-2xl font-mono font-bold text-cyan-300 mt-1">Activo</div>
          <span className="text-[11px] text-neutral-400">Zingaro Shield v4.81</span>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
          <span className="text-xs text-neutral-400 flex items-center justify-between">
            Capacidad Usada <HardDrive className="w-4 h-4 text-purple-400" />
          </span>
          <div className="text-2xl font-mono font-bold text-white mt-1">23 / 40</div>
          <span className="text-[11px] text-purple-400">4 Nodos Desplegados</span>
        </div>
      </div>

      {/* Server Nodes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SERVERS_LIST.map((server) => {
          const isSelected = selectedServer.id === server.id;
          return (
            <div
              key={server.id}
              onClick={() => setSelectedServer(server)}
              className={`rounded-xl border p-5 transition-all cursor-pointer relative overflow-hidden ${
                isSelected
                  ? 'bg-neutral-800/90 border-cyan-500 shadow-xl ring-1 ring-cyan-500/30'
                  : 'bg-neutral-900/90 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      server.status === 'live'
                        ? 'bg-emerald-400 animate-pulse'
                        : server.status === 'warmup'
                        ? 'bg-amber-400'
                        : 'bg-neutral-500'
                    }`}
                  />
                  <h3 className="font-mono text-base font-bold text-white">{server.nodeName}</h3>
                  <span className="text-xs text-neutral-400 font-mono">:{server.port}</span>
                </div>

                <span
                  className={`text-[11px] font-mono uppercase px-2.5 py-0.5 rounded font-semibold ${
                    server.status === 'live'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : server.status === 'warmup'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'bg-neutral-800 text-neutral-400 border border-neutral-700'
                  }`}
                >
                  {server.statusLabel}
                </span>
              </div>

              <div className="mt-4 flex gap-4">
                <img
                  src={server.mapImage}
                  alt={server.currentMap}
                  className="w-24 h-20 rounded-lg object-cover border border-neutral-800 shrink-0"
                />

                <div className="flex-1 space-y-1">
                  <div className="text-sm font-bold text-white flex items-center justify-between">
                    <span>Mapa: {server.currentMap}</span>
                    <span className="text-xs font-mono text-cyan-400">{server.mode}</span>
                  </div>
                  <p className="text-xs text-neutral-300 line-clamp-1">{server.matchInfo}</p>
                  <p className="text-xs text-amber-300/90 font-mono">{server.score}</p>
                </div>
              </div>

              {/* Progress & Connection Actions */}
              <div className="mt-4 pt-3 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
                  <span>Jugadores: {server.playersConnected}/{server.maxPlayers}</span>
                  <span>Ping: {server.ping}ms</span>
                  <span>CPU: {server.cpu}%</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopyConnect(server);
                    }}
                    className="px-3 py-1.5 bg-neutral-950 hover:bg-neutral-800 border border-neutral-700 rounded-lg text-xs font-mono text-neutral-200 transition-colors flex items-center gap-1.5"
                  >
                    {copiedConnect === server.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-300">¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-neutral-400" />
                        <span>Copiar IP:Port</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectView('matchroom');
                    }}
                    className="px-3 py-1.5 bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500/40 text-cyan-300 rounded-lg text-xs font-medium transition-colors flex items-center gap-1"
                  >
                    <span>Matchroom</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* RCON Console Stream for Selected Server */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 shadow-lg space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold text-white">
              Consola Interactiva RCON [{selectedServer.nodeName}]
            </h3>
          </div>
          <span className="text-xs font-mono text-neutral-400">
            190.137.45.101:{selectedServer.port} • Zingaro Sub-Tick Engine
          </span>
        </div>

        <div className="bg-black/90 border border-neutral-800 rounded-xl p-4 font-mono text-xs text-neutral-300 h-64 overflow-y-auto space-y-2">
          {rconLogs.map((log) => (
            <div key={log.id} className="flex gap-2">
              <span className="text-neutral-500">[{log.timestamp}]</span>
              <span
                className={`font-semibold ${
                  log.type === 'AUTH'
                    ? 'text-purple-400'
                    : log.type === 'SHIELD-AC'
                    ? 'text-cyan-400'
                    : log.type === 'WARN'
                    ? 'text-amber-400'
                    : 'text-emerald-400'
                }`}
              >
                [{log.type}]
              </span>
              <span className="text-neutral-300 whitespace-pre-wrap">{log.message}</span>
            </div>
          ))}
        </div>

        {/* Command Input Form */}
        <form onSubmit={handleExecuteRcon} className="flex gap-2">
          <input
            type="text"
            value={rconCmd}
            onChange={(e) => setRconCmd(e.target.value)}
            placeholder="Escriba un comando RCON (ej: mp_pause_match, changelevel de_mirage, status, bot_kick)..."
            className="flex-1 bg-black border border-neutral-800 rounded-lg px-3 py-2 text-xs font-mono text-emerald-300 focus:outline-none focus:border-emerald-500"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold font-mono rounded-lg transition-colors"
          >
            Ejecutar
          </button>
        </form>
      </div>
    </div>
  );
};
