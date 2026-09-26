import React, { useState } from 'react';
import { ViewType } from '../../types/esports';
import {
  ShieldAlert,
  Server,
  Play,
  Pause,
  RotateCcw,
  Radio,
  Sliders,
  AlertTriangle,
  CheckCircle2,
  Users,
  Terminal,
  Activity,
  ChevronRight,
  ExternalLink,
  Flame,
  Search,
  Bell,
  RefreshCw,
  FileCheck,
  Zap,
  Lock,
  MessageSquare
} from 'lucide-react';
import { SERVERS_LIST, DISPUTES_DATA } from '../../data/mockData';

interface MasterPanelViewProps {
  onSelectView: (view: ViewType) => void;
}

export const MasterPanelView: React.FC<MasterPanelViewProps> = ({ onSelectView }) => {
  const [activeServerFilter, setActiveServerFilter] = useState<'all' | 'live' | 'warmup' | 'idle'>('all');
  const [rconCmd, setRconCmd] = useState('');
  const [selectedServer, setSelectedServer] = useState(SERVERS_LIST[0]);
  const [logs, setLogs] = useState<string[]>([
    '[22:15:01] [MASTER-CORE] Comisario_Torres autenticado con privilegios L3.',
    '[22:15:10] [ZNG-CS2-01] Net tick telemetry: 128.0 ticks/s | 0% packet loss | ping stable 14ms.',
    '[22:15:22] [TRIBUNAL] Alerta de posible snap-aim en caso #DISP-2026-041 (Canal B de_anubis).',
    '[22:15:40] [ROSTER-GATEWAY] Lock activo para el torneo Apertura 2026.'
  ]);
  const [broadcastMessage, setBroadcastMessage] = useState('');
  const [broadcastSent, setBroadcastSent] = useState(false);
  const [emergencyActive, setEmergencyActive] = useState(false);

  const handleSendRcon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rconCmd.trim()) return;
    const time = new Date().toLocaleTimeString();
    setLogs((prev) => [
      `[${time}] [RCON@${selectedServer.nodeName}] > ${rconCmd}`,
      `[${time}] [RESPONSE] Comando '${rconCmd}' procesado exitosamente por el host.`,
      ...prev
    ]);
    setRconCmd('');
  };

  const handleBroadcast = (e: React.FormEvent) => {
    e.preventDefault();
    if (!broadcastMessage.trim()) return;
    setBroadcastSent(true);
    setLogs((prev) => [
      `[${new Date().toLocaleTimeString()}] [GLOBAL BROADCAST] "${broadcastMessage}" enviado a los 4 servidores de partido.`,
      ...prev
    ]);
    setTimeout(() => {
      setBroadcastSent(false);
      setBroadcastMessage('');
    }, 2500);
  };

  const handleQuickAction = (actionName: string, rconEquivalent: string) => {
    const time = new Date().toLocaleTimeString();
    setLogs((prev) => [
      `[${time}] [QUICK-ACTION] Ejecutando: ${actionName} en nodo ${selectedServer.nodeName}`,
      `[${time}] [RCON] rcon ${rconEquivalent} -> EXEC_OK (Status 200)`,
      ...prev
    ]);
  };

  return (
    <div className="space-y-6">
      {/* Top Header Card */}
      <div className="bg-gradient-to-r from-red-950/40 via-neutral-900 to-amber-950/20 border border-red-500/30 rounded-xl p-5 shadow-xl relative overflow-hidden backdrop-blur-md">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0 shadow-inner">
              <ShieldAlert className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-red-500/20 border border-red-500/40 text-[11px] font-mono text-red-300 font-semibold tracking-wide">
                  ACCESO RESTRINGIDO • NIVEL 3
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-[11px] font-mono text-amber-300">
                  COMISARIATO NACIONAL ZINGARO
                </span>
              </div>
              <h1 className="text-2xl font-bold text-white tracking-wide mt-1">
                Panel Maestro de Comisarios & Administración
              </h1>
              <p className="text-sm text-neutral-400 mt-0.5">
                Control central de servidores 128T, gestión en vivo de torneos, supervisión de árbitros y resolución de incidentes.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectView('disputes')}
              className="flex items-center gap-2 px-4 py-2.5 bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 hover:border-red-500 text-red-200 text-xs font-semibold rounded-lg transition-all shadow-sm"
            >
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span>Tribunal de Disputas (3 Activas)</span>
              <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            </button>

            <button
              onClick={() => setEmergencyActive(!emergencyActive)}
              className={`flex items-center gap-2 px-4 py-2.5 border text-xs font-semibold rounded-lg transition-all shadow-sm ${
                emergencyActive
                  ? 'bg-red-600 text-white border-red-400 animate-pulse'
                  : 'bg-neutral-800 hover:bg-neutral-700 border-neutral-700 text-neutral-200'
              }`}
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>{emergencyActive ? 'PROTOCOLO PAUSA GLOBAL ACTIVO' : 'Activar Protocolo Emergencia'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-neutral-400 text-xs">
            <span>Servidores en Red</span>
            <Server className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white font-mono">4 / 4</span>
            <span className="text-xs text-emerald-400 font-medium">100% Online</span>
          </div>
          <div className="text-[11px] text-neutral-500 mt-1">Nodos Buenos Aires & Posadas</div>
        </div>

        <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-neutral-400 text-xs">
            <span>Partidos en Curso</span>
            <Activity className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white font-mono">2</span>
            <span className="text-xs text-cyan-400 font-medium">18 jugadores live</span>
          </div>
          <div className="text-[11px] text-neutral-500 mt-1">ZGA vs MSE (MR12) • P5 vs GNG</div>
        </div>

        <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-neutral-400 text-xs">
            <span>Disputas Pendientes</span>
            <Flame className="w-4 h-4 text-amber-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-amber-300 font-mono">1 Crítica</span>
            <span className="text-xs text-neutral-400 font-medium">2 Moderadas</span>
          </div>
          <div className="text-[11px] text-neutral-500 mt-1">Caso #DISP-041 requiere fallo</div>
        </div>

        <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-neutral-400 text-xs">
            <span>Anti-Cheat Zingaro Shield</span>
            <ShieldAlert className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white font-mono">Kernel v4.8</span>
            <span className="text-xs text-emerald-400 font-medium">0 Inyecciones</span>
          </div>
          <div className="text-[11px] text-neutral-500 mt-1">Detección heurística activa</div>
        </div>
      </div>

      {/* Main Grid: Server Command Center + Live Logs & Broadcast */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Server Nodes & Controls (2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Server Selector Bar */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Server className="w-5 h-5 text-cyan-400" />
                <h2 className="text-base font-semibold text-white">Nodos Dedicados CS2 (128-Tick Sub-Tick)</h2>
              </div>
              <div className="flex items-center gap-1.5 bg-neutral-950 p-1 rounded-lg border border-neutral-800 text-xs">
                {(['all', 'live', 'warmup', 'idle'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveServerFilter(filter)}
                    className={`px-2.5 py-1 rounded text-xs capitalize transition-colors ${
                      activeServerFilter === filter
                        ? 'bg-neutral-800 text-white font-medium shadow-sm'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    {filter === 'all' ? 'Todos' : filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Server Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {SERVERS_LIST.filter(
                (s) => activeServerFilter === 'all' || s.status === activeServerFilter
              ).map((server) => {
                const isSelected = selectedServer.id === server.id;
                return (
                  <div
                    key={server.id}
                    onClick={() => setSelectedServer(server)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-neutral-800/90 border-cyan-500 shadow-md ring-1 ring-cyan-500/30'
                        : 'bg-neutral-950/60 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            server.status === 'live'
                              ? 'bg-emerald-400 animate-pulse'
                              : server.status === 'warmup'
                              ? 'bg-amber-400'
                              : 'bg-neutral-500'
                          }`}
                        />
                        <span className="font-mono text-sm font-bold text-white">{server.nodeName}</span>
                        <span className="text-xs text-neutral-400 font-mono">:{server.port}</span>
                      </div>
                      <span
                        className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                          server.status === 'live'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : server.status === 'warmup'
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            : 'bg-neutral-800 text-neutral-400'
                        }`}
                      >
                        {server.status}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-xs text-neutral-300">
                      <div>
                        <div className="font-medium text-white">{server.currentMap}</div>
                        <div className="text-[11px] text-neutral-400 truncate max-w-[200px]">
                          {server.matchInfo || 'Sin partido programado'}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-xs font-semibold text-neutral-200">
                          {server.playersConnected}/{server.maxPlayers} Jugadores
                        </span>
                        <div className="text-[11px] text-neutral-400 font-mono">Ping {server.ping}ms</div>
                      </div>
                    </div>

                    {/* Progress Bar for CPU/RAM */}
                    <div className="mt-3 pt-3 border-t border-neutral-800/80 grid grid-cols-2 gap-2 text-[10px] font-mono text-neutral-400">
                      <div>
                        <span>CPU: {server.cpu}%</span>
                        <div className="w-full bg-neutral-900 rounded-full h-1 mt-1 overflow-hidden">
                          <div
                            className={`h-full ${
                              server.cpu > 70 ? 'bg-red-500' : 'bg-cyan-500'
                            }`}
                            style={{ width: `${server.cpu}%` }}
                          />
                        </div>
                      </div>
                      <div>
                        <span>RAM: {server.ram} GB</span>
                        <div className="w-full bg-neutral-900 rounded-full h-1 mt-1 overflow-hidden">
                          <div
                            className="h-full bg-purple-500"
                            style={{ width: `${(server.ram / 16) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick RCON Match Actions for Selected Server */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-semibold text-white">
                  Controles de Árbitro / RCON Directo ({selectedServer.nodeName})
                </h3>
              </div>
              <span className="text-xs font-mono text-neutral-400 bg-neutral-950 px-2 py-1 rounded border border-neutral-800">
                Puerto {selectedServer.port} • Mapa actual {selectedServer.currentMap}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
              <button
                onClick={() => handleQuickAction('Pausa Técnica Arbitral', 'mp_pause_match')}
                className="flex items-center justify-center gap-2 p-3 bg-neutral-950 hover:bg-amber-950/40 border border-neutral-800 hover:border-amber-500/50 rounded-lg text-xs font-medium text-amber-200 transition-all"
              >
                <Pause className="w-4 h-4 text-amber-400" />
                <span>Pausa Técnica</span>
              </button>

              <button
                onClick={() => handleQuickAction('Reanudar Partido', 'mp_unpause_match')}
                className="flex items-center justify-center gap-2 p-3 bg-neutral-950 hover:bg-emerald-950/40 border border-neutral-800 hover:border-emerald-500/50 rounded-lg text-xs font-medium text-emerald-200 transition-all"
              >
                <Play className="w-4 h-4 text-emerald-400" />
                <span>Reanudar Match</span>
              </button>

              <button
                onClick={() => handleQuickAction('Round Restore (Ronda Anterior)', 'mp_backup_restore_load_autopause round_backup')}
                className="flex items-center justify-center gap-2 p-3 bg-neutral-950 hover:bg-cyan-950/40 border border-neutral-800 hover:border-cyan-500/50 rounded-lg text-xs font-medium text-cyan-200 transition-all"
              >
                <RotateCcw className="w-4 h-4 text-cyan-400" />
                <span>Round Restore</span>
              </button>

              <button
                onClick={() => handleQuickAction('Kick All Bots', 'bot_kick')}
                className="flex items-center justify-center gap-2 p-3 bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded-lg text-xs font-medium text-neutral-200 transition-all"
              >
                <Users className="w-4 h-4 text-neutral-400" />
                <span>Kick Bots</span>
              </button>

              <button
                onClick={() => handleQuickAction('Forzar Overtime (MR3)', 'mp_overtime_enable 1; mp_restartgame 1')}
                className="flex items-center justify-center gap-2 p-3 bg-neutral-950 hover:bg-purple-950/40 border border-neutral-800 hover:border-purple-500/50 rounded-lg text-xs font-medium text-purple-200 transition-all"
              >
                <Zap className="w-4 h-4 text-purple-400" />
                <span>Habilitar OT</span>
              </button>

              <button
                onClick={() => handleQuickAction('Descargar Demo GOTV', 'tv_record stop; tv_status')}
                className="flex items-center justify-center gap-2 p-3 bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded-lg text-xs font-medium text-neutral-200 transition-all"
              >
                <FileCheck className="w-4 h-4 text-cyan-400" />
                <span>Dump GOTV Demo</span>
              </button>

              <button
                onClick={() => handleQuickAction('Verificar Integrity Anti-Cheat', 'zingaro_shield_verify_all')}
                className="flex items-center justify-center gap-2 p-3 bg-neutral-950 hover:bg-emerald-950/40 border border-neutral-800 hover:border-emerald-500/50 rounded-lg text-xs font-medium text-emerald-200 transition-all"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Auditar Clientes</span>
              </button>

              <button
                onClick={() => handleQuickAction('Reinicio Completo del Nodo', 'quit')}
                className="flex items-center justify-center gap-2 p-3 bg-neutral-950 hover:bg-red-950/40 border border-neutral-800 hover:border-red-500/50 rounded-lg text-xs font-medium text-red-200 transition-all"
              >
                <RefreshCw className="w-4 h-4 text-red-400" />
                <span>Reiniciar Nodo</span>
              </button>
            </div>
          </div>

          {/* Broadcast Announcement Bar */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Radio className="w-5 h-5 text-red-400" />
                <h3 className="text-sm font-semibold text-white">Broadcast Oficial de Comisaría (In-Game HUD)</h3>
              </div>
              <span className="text-[11px] text-neutral-400">Se proyecta en el centro de la pantalla de todos los jugadores</span>
            </div>

            <form onSubmit={handleBroadcast} className="flex gap-2">
              <input
                type="text"
                value={broadcastMessage}
                onChange={(e) => setBroadcastMessage(e.target.value)}
                placeholder="Ej: [COMISIÓN ZINGARO] Pausa técnica por revisión de integridad de radar en ronda 11..."
                className="flex-1 bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-red-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
              >
                {broadcastSent ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>¡Enviado!</span>
                  </>
                ) : (
                  <>
                    <Radio className="w-4 h-4" />
                    <span>Emitir Aviso</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Console / Live Logs / Active Incidents (1 col) */}
        <div className="space-y-6">
          {/* Active Disputed Cases Quick Box */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-semibold text-white">Incidentes en Arbitraje</h3>
              </div>
              <button
                onClick={() => onSelectView('disputes')}
                className="text-xs text-amber-400 hover:underline flex items-center gap-1"
              >
                Ver todo <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-2.5">
              {DISPUTES_DATA.map((dispute) => (
                <div
                  key={dispute.id}
                  onClick={() => onSelectView('disputes')}
                  className="p-3 bg-neutral-950/80 hover:bg-neutral-800 border border-neutral-800/80 hover:border-amber-500/50 rounded-lg cursor-pointer transition-all"
                >
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-mono text-amber-400 font-bold">{dispute.code}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] uppercase font-mono ${
                        dispute.severity === 'critical'
                          ? 'bg-red-500/20 text-red-300'
                          : 'bg-amber-500/20 text-amber-300'
                      }`}
                    >
                      {dispute.severity}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-white mt-1 line-clamp-1">{dispute.matchTitle}</div>
                  <div className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1">{dispute.type}</div>
                  <div className="text-[10px] text-neutral-500 mt-2 flex items-center justify-between">
                    <span>Mapa: {dispute.map} (Ronda {dispute.round})</span>
                    <span>{dispute.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RCON Live Console */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 shadow-lg flex flex-col h-[400px]">
            <div className="flex items-center justify-between mb-2 pb-2 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-white font-mono uppercase">
                  Consola RCON [{selectedServer.nodeName}]
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                AUTH OK
              </span>
            </div>

            {/* Log Output Window */}
            <div className="flex-1 bg-black/80 rounded-lg p-3 font-mono text-[11px] text-neutral-300 overflow-y-auto space-y-1.5 border border-neutral-800/80">
              {logs.map((log, idx) => (
                <div
                  key={idx}
                  className={`leading-relaxed break-words ${
                    log.includes('CRITICAL') || log.includes('alerta')
                      ? 'text-red-400 font-semibold'
                      : log.includes('RCON')
                      ? 'text-emerald-300'
                      : log.includes('BROADCAST')
                      ? 'text-amber-300'
                      : 'text-neutral-400'
                  }`}
                >
                  {log}
                </div>
              ))}
            </div>

            {/* Prompt input */}
            <form onSubmit={handleSendRcon} className="mt-2.5 flex gap-1.5">
              <span className="font-mono text-neutral-500 text-xs self-center">{'>'}</span>
              <input
                type="text"
                value={rconCmd}
                onChange={(e) => setRconCmd(e.target.value)}
                placeholder="mp_restartgame 1 / sv_cheats 0 / status..."
                className="flex-1 bg-black border border-neutral-800 rounded px-2.5 py-1.5 text-xs text-emerald-300 font-mono focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-mono rounded"
              >
                Ejecutar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
