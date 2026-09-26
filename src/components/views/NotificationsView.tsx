import React, { useState } from 'react';
import { ViewType } from '../../types/esports';
import {
  Bell,
  CheckCheck,
  Webhook,
  Gavel,
  Server,
  ShieldCheck,
  Radar,
  AlertCircle,
  ExternalLink,
  ChevronRight,
  UserCheck,
  Send,
  Radio,
  Smartphone,
  MessageSquare,
  Trophy,
  Swords,
  CheckCircle2
} from 'lucide-react';

interface NotificationsViewProps {
  onSelectView: (view: ViewType) => void;
}

export const NotificationsView: React.FC<NotificationsViewProps> = ({ onSelectView }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'arbitraje' | 'matchroom' | 'roster' | 'sistema'>('all');
  const [allRead, setAllRead] = useState(false);
  const [readItems, setReadItems] = useState<Record<string, boolean>>({});

  const handleMarkAllRead = () => {
    setAllRead(true);
  };

  const handleMarkSingle = (id: string) => {
    setReadItems((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="space-y-6">
      {/* Header / Context Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex flex-col space-y-1">
          <div className="flex items-center gap-2 font-mono text-xs text-[#958ea0]">
            <span className="text-[#4cd7f6] uppercase tracking-widest font-semibold">Auditoría Operativa & Despachos</span>
            <span className="w-1 h-1 rounded-full bg-[#958ea0]" />
            <span className="text-[#4edea3] uppercase">Feed En Vivo • 128 Tick Sync</span>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight">
              Centro de Notificaciones
            </h1>
            <span className="px-2 py-0.5 rounded bg-[#1e1f26] border border-[#a078ff]/40 text-[#d0bcff] font-mono text-xs font-bold">
              {allRead ? '0 PENDIENTES' : '5 PENDIENTES'}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleMarkAllRead}
            disabled={allRead}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#191b22] hover:bg-[#282a30] text-[#cbc3d7] hover:text-white transition-all text-xs font-mono font-semibold uppercase border border-[#282a30] disabled:opacity-50"
          >
            <CheckCheck className="w-4 h-4 text-[#4edea3]" />
            <span>{allRead ? 'Todas Leídas' : 'Marcar todas leídas'}</span>
          </button>
          <button
            onClick={() => alert('Abriendo configuración de Webhooks para Discord y alertas push de navegador.')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#a078ff] text-white font-mono text-xs font-bold uppercase hover:bg-[#8B5CF6] transition-all shadow-[0_0_14px_rgba(160,120,255,0.4)]"
          >
            <Webhook className="w-4 h-4" />
            <span>Configurar Webhook/Discord</span>
          </button>
        </div>
      </div>

      {/* Telemetry Overview Ticker */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-xl bg-[#111319] border border-[#282a30] shadow-sm flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-[#958ea0] uppercase">Resoluciones Arbitrales</span>
            <span className="text-lg font-bold font-mono text-[#4cd7f6]">01 ACTIVA</span>
          </div>
          <div className="w-9 h-9 rounded-lg bg-[#03b5d3]/10 border border-[#03b5d3]/30 flex items-center justify-center text-[#4cd7f6]">
            <Gavel className="w-4 h-4" />
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#111319] border border-[#282a30] shadow-sm flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-[#958ea0] uppercase">Matchroom Status</span>
            <span className="text-lg font-bold font-mono text-[#4edea3]">CHECK-IN OPEN</span>
          </div>
          <div className="w-9 h-9 rounded-lg bg-[#00a572]/10 border border-[#00a572]/30 flex items-center justify-center text-[#4edea3]">
            <Server className="w-4 h-4" />
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#111319] border border-[#282a30] shadow-sm flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-[#958ea0] uppercase">Integridad Shield</span>
            <span className="text-lg font-bold font-mono text-[#4edea3]">100% LIMPIO</span>
          </div>
          <div className="w-9 h-9 rounded-lg bg-[#00a572]/10 border border-[#00a572]/30 flex items-center justify-center text-[#4edea3]">
            <ShieldCheck className="w-4 h-4" />
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#111319] border border-[#282a30] shadow-sm flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-[#958ea0] uppercase">Latencia Despachos</span>
            <span className="text-lg font-bold font-mono text-[#d0bcff]">14ms RTS</span>
          </div>
          <div className="w-9 h-9 rounded-lg bg-[#a078ff]/10 border border-[#a078ff]/30 flex items-center justify-center text-[#d0bcff]">
            <Radar className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Main Grid: Feed (8 cols) + Channels/Dossier (4 cols) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Left: Feed (8 cols) */}
        <div className="xl:col-span-8 space-y-4 min-w-0">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0c0e14] border border-[#282a30] overflow-x-auto text-xs font-mono">
            {[
              { id: 'all', label: 'Todas (5)' },
              { id: 'arbitraje', label: 'Arbitraje & Comisaría' },
              { id: 'matchroom', label: 'Matchroom & Partidas' },
              { id: 'roster', label: 'Roster & Escuadra' },
              { id: 'sistema', label: 'Sistema & Anti-Cheat' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors uppercase font-medium ${
                  activeCategory === tab.id
                    ? 'bg-[#1e1f26] text-white font-bold border border-[#33343b]'
                    : 'text-[#958ea0] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Notification List */}
          <div className="space-y-3">
            {/* NOTIF 1: Arbitraje / Stand-in */}
            {(activeCategory === 'all' || activeCategory === 'arbitraje' || activeCategory === 'roster') && (
              <div
                className={`p-4 rounded-xl border transition-all shadow-sm flex flex-col md:flex-row gap-4 items-start justify-between ${
                  allRead || readItems['notif-1']
                    ? 'bg-[#111319]/80 border-[#282a30] opacity-75'
                    : 'bg-[#191b22] border-red-500/50 hover:border-red-400'
                }`}
              >
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5 border border-red-500/30">
                    <Gavel className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-300 font-mono text-[10px] font-bold uppercase tracking-wider">
                        URGENTE / ARBITRAJE
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
                      <span className="text-[11px] font-mono text-[#958ea0]">Hace 12 min</span>
                      <span className="text-[11px] font-mono text-[#4cd7f6]">#EX-2026-088</span>
                    </div>
                    <h2 className="text-base font-bold text-white">Dictamen de Excepción de Roster Autorizado</h2>
                    <p className="text-xs text-[#cbc3d7] leading-relaxed">
                      Dictamen de Excepción de Roster #EX-2026-088 aprobado con éxito. El jugador <strong className="text-[#4cd7f6] font-mono">B4stian</strong> está debidamente autorizado como stand-in para la <strong className="text-white">Jornada 4 vs Misiones Esports</strong> en Servidor ZNG-CS2-01.
                    </p>
                    <div className="flex items-center gap-3 pt-1 text-[11px] font-mono text-[#958ea0]">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4edea3]" />
                        <span>Firmado: Comisario_Torres</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4edea3]" />
                        <span>Referee_Valenzuela</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex md:flex-col gap-2 shrink-0 self-end md:self-center">
                  <button
                    onClick={() => {
                      handleMarkSingle('notif-1');
                      onSelectView('teams');
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-[#1e1f26] hover:bg-[#03b5d3] hover:text-black text-[#4cd7f6] font-mono text-xs font-bold uppercase transition-colors flex items-center gap-1 border border-[#33343b]"
                  >
                    <span>Ver Roster</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* NOTIF 2: Matchroom Aperturado */}
            {(activeCategory === 'all' || activeCategory === 'matchroom') && (
              <div
                className={`p-4 rounded-xl border transition-all shadow-sm flex flex-col md:flex-row gap-4 items-start justify-between ${
                  allRead || readItems['notif-2']
                    ? 'bg-[#111319]/80 border-[#282a30] opacity-75'
                    : 'bg-[#191b22] border-[#4cd7f6]/50 hover:border-[#4cd7f6]'
                }`}
              >
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#03b5d3]/20 text-[#4cd7f6] flex items-center justify-center shrink-0 mt-0.5 border border-[#03b5d3]/30">
                    <Server className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-[#03b5d3]/20 text-[#4cd7f6] font-mono text-[10px] font-bold uppercase tracking-wider">
                        MATCHROOM / PARTIDA
                      </span>
                      <span className="text-[11px] font-mono text-[#958ea0]">Hace 24 min</span>
                      <span className="text-[11px] font-mono text-[#4edea3] font-bold">LOBBY EN VIVO</span>
                    </div>
                    <h2 className="text-base font-bold text-white">Matchroom Aperturado: Jornada 4 Liga Regional</h2>
                    <p className="text-xs text-[#cbc3d7] leading-relaxed">
                      Matchroom Jornada 4 aperturado. Sala asignada: <strong className="text-white font-mono">Servidor CS2 Dedicado #01</strong> (Buenos Aires, Ping 24ms). Check-in requerido antes de las <strong className="text-red-400 font-mono">21:45 hs</strong> para evitar walkover técnico.
                    </p>
                    <div className="flex items-center gap-3 pt-1 text-xs font-mono">
                      <span className="text-[#4cd7f6]">Roster Zingaro: 4/5 Listos</span>
                      <div className="w-24 h-1.5 rounded-full bg-[#0c0e14] overflow-hidden">
                        <div className="w-4/5 h-full bg-[#4edea3]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex md:flex-col gap-2 shrink-0 self-end md:self-center">
                  <button
                    onClick={() => {
                      handleMarkSingle('notif-2');
                      onSelectView('matchroom');
                    }}
                    className="px-4 py-2 rounded-lg bg-[#03b5d3] hover:bg-[#4cd7f6] text-black font-mono text-xs font-bold uppercase transition-all shadow-md flex items-center gap-1"
                  >
                    <span>Entrar a Sala</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* NOTIF 3: Shield Integrity */}
            {(activeCategory === 'all' || activeCategory === 'sistema') && (
              <div
                className={`p-4 rounded-xl border transition-all shadow-sm flex flex-col md:flex-row gap-4 items-start justify-between ${
                  allRead || readItems['notif-3']
                    ? 'bg-[#111319]/80 border-[#282a30] opacity-75'
                    : 'bg-[#191b22] border-[#00a572]/40 hover:border-[#00a572]'
                }`}
              >
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#00a572]/20 text-[#4edea3] flex items-center justify-center shrink-0 mt-0.5 border border-[#00a572]/30">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-[#00a572]/20 text-[#4edea3] font-mono text-[10px] font-bold uppercase tracking-wider">
                        INTEGRIDAD / ANTI-CHEAT
                      </span>
                      <span className="text-[11px] font-mono text-[#958ea0]">Hace 1 hora</span>
                      <span className="text-[11px] font-mono text-[#4edea3]">BUILD 4.19-SEC</span>
                    </div>
                    <h2 className="text-base font-bold text-white">Zingaro Shield: Telemetría de Integridad Validada</h2>
                    <p className="text-xs text-[#cbc3d7] leading-relaxed">
                      Telemetría de integridad del cliente validada para los 5 integrantes de <strong className="text-white">Zingaro Academy</strong>. 0 firmas anómalas detectadas en memoria. Registro SHA-256 certificado en nodo comisaría.
                    </p>
                    <div className="flex items-center gap-2 pt-1 text-[11px] font-mono text-[#958ea0] flex-wrap">
                      <span>Pacuno (OK)</span> • <span>Chicho (OK)</span> • <span>K1nder (OK)</span> • <span>NeoX (OK)</span> • <span>B4stian (OK)</span>
                    </div>
                  </div>
                </div>

                <div className="flex md:flex-col gap-2 shrink-0 self-end md:self-center">
                  <span className="px-3 py-1 rounded bg-[#1e1f26] text-[#4edea3] font-mono text-xs font-bold uppercase flex items-center gap-1 border border-[#00a572]/40">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Auditoría OK
                  </span>
                </div>
              </div>
            )}

            {/* NOTIF 4: Torneo Inscripción */}
            {(activeCategory === 'all' || activeCategory === 'arbitraje') && (
              <div
                className={`p-4 rounded-xl border transition-all shadow-sm flex flex-col md:flex-row gap-4 items-start justify-between ${
                  allRead || readItems['notif-4']
                    ? 'bg-[#111319]/80 border-[#282a30] opacity-75'
                    : 'bg-[#191b22] border-[#a078ff]/40 hover:border-[#a078ff]'
                }`}
              >
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#a078ff]/20 text-[#d0bcff] flex items-center justify-center shrink-0 mt-0.5 border border-[#a078ff]/30">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-[#a078ff]/20 text-[#d0bcff] font-mono text-[10px] font-bold uppercase tracking-wider">
                        TORNEO / INSCRIPCIÓN
                      </span>
                      <span className="text-[11px] font-mono text-[#958ea0]">Hace 3 horas</span>
                      <span className="text-[11px] font-mono text-[#d0bcff] uppercase">LAN PRESENCIAL</span>
                    </div>
                    <h2 className="text-base font-bold text-white">Inscripción Acreditada: Zingaro Gaming Fest 2026</h2>
                    <p className="text-xs text-[#cbc3d7] leading-relaxed">
                      Inscripción confirmada para el certamen presencial de invierno. Se ha asignado formalmente el <strong className="text-white">Slot de Headliner #1</strong> a la división <strong className="text-[#d0bcff] font-mono">Zingaro Academy</strong>.
                    </p>
                    <div className="text-[11px] font-mono text-[#958ea0] pt-1">
                      Arena Central Posadas • 16-18 Julio 2026
                    </div>
                  </div>
                </div>

                <div className="flex md:flex-col gap-2 shrink-0 self-end md:self-center">
                  <button
                    onClick={() => {
                      handleMarkSingle('notif-4');
                      onSelectView('tournaments');
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-[#1e1f26] hover:bg-[#282a30] text-white font-mono text-xs font-bold uppercase transition-colors border border-[#33343b]"
                  >
                    Ver Torneo
                  </button>
                </div>
              </div>
            )}

            {/* NOTIF 5: Scrim Reto */}
            {(activeCategory === 'all' || activeCategory === 'matchroom') && (
              <div
                className={`p-4 rounded-xl border transition-all shadow-sm flex flex-col md:flex-row gap-4 items-start justify-between ${
                  allRead || readItems['notif-5']
                    ? 'bg-[#111319]/80 border-[#282a30] opacity-75'
                    : 'bg-[#191b22] border-[#282a30] hover:border-neutral-700'
                }`}
              >
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#1e1f26] text-[#4cd7f6] flex items-center justify-center shrink-0 mt-0.5 border border-[#33343b]">
                    <Swords className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-[#1e1f26] text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                        DESAFÍO / SCRIM TÁCTICO
                      </span>
                      <span className="text-[11px] font-mono text-[#958ea0]">Hace 4 horas</span>
                      <span className="text-[11px] font-mono text-[#4cd7f6]">MR12 • SERVER 128T</span>
                    </div>
                    <h2 className="text-base font-bold text-white">Reto Privado Recibido: Posadas Five</h2>
                    <p className="text-xs text-[#cbc3d7] leading-relaxed">
                      Desafío de Scrim privado recibido de la escuadra <strong className="text-white">Posadas Five</strong> para el <strong className="text-white">Miércoles a las 20:30 hs</strong> en mapa pactado <strong className="text-[#4cd7f6] font-mono">de_mirage</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row md:flex-col gap-2 shrink-0 self-end md:self-center w-full md:w-auto">
                  <button
                    onClick={() => alert('¡Reto de scrim de Posadas Five aceptado!')}
                    className="flex-1 md:flex-none px-3.5 py-1.5 rounded-lg bg-[#00a572] hover:bg-[#4edea3] text-black font-mono text-xs font-bold uppercase transition-all shadow-sm text-center"
                  >
                    Aceptar
                  </button>
                  <button
                    onClick={() => onSelectView('match-scheduling')}
                    className="flex-1 md:flex-none px-3.5 py-1.5 rounded-lg bg-[#1e1f26] hover:bg-[#282a30] text-white font-mono text-xs uppercase transition-colors text-center border border-[#33343b]"
                  >
                    Reprogramar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Channels & Dossier (4 cols) */}
        <div className="xl:col-span-4 space-y-5">
          {/* Canales de Alerta */}
          <div className="p-5 rounded-2xl bg-[#111319] border border-[#282a30] space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-2 border-b border-[#282a30]">
              <div>
                <span className="text-[10px] font-mono text-[#4cd7f6] uppercase tracking-widest block">
                  Infraestructura
                </span>
                <h3 className="text-base font-bold text-white uppercase mt-0.5">Canales de Alerta</h3>
              </div>
              <Radio className="w-5 h-5 text-[#958ea0]" />
            </div>

            <div className="space-y-2.5 text-xs font-mono">
              <div className="p-3 rounded-xl bg-[#191b22] border border-[#282a30] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#5865F2]/20 text-[#5865F2] flex items-center justify-center">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Bot Discord Zingaro</span>
                    <span className="text-[#958ea0] text-[11px]">#alertas-competitivas</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#00a572]/20 text-[#4edea3] text-[10px] font-bold uppercase">
                  Activo
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#191b22] border border-[#282a30] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#03b5d3]/20 text-[#4cd7f6] flex items-center justify-center">
                    <Bell className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Push de Navegador</span>
                    <span className="text-[#958ea0] text-[11px]">ServiceWorker Activo</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#00a572]/20 text-[#4edea3] text-[10px] font-bold uppercase">
                  Habilitado
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#191b22] border border-[#282a30] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Línea Crítica IGL</span>
                    <span className="text-[#958ea0] text-[11px]">+54 9 376 ••• 882 (Pacuno)</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#00a572]/20 text-[#4edea3] text-[10px] font-bold uppercase">
                  Verificado
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#0c0e14] border border-[#282a30] space-y-1">
              <span className="text-[10px] font-mono text-[#958ea0] uppercase tracking-wider block">
                Latencia Media de Entrega
              </span>
              <div className="flex items-baseline justify-between font-mono">
                <span className="text-xl font-bold text-white">182 ms</span>
                <span className="text-xs text-[#4edea3] font-bold">SLA 99.98%</span>
              </div>
              <div className="w-full bg-[#1e1f26] h-1.5 rounded-full overflow-hidden mt-1">
                <div className="bg-[#a078ff] h-full rounded-full" style={{ width: '84%' }} />
              </div>
            </div>
          </div>

          {/* Stand-In Dossier Preview */}
          <div className="p-5 rounded-2xl bg-[#111319] border border-[#282a30] space-y-3 shadow-xl">
            <div className="flex items-center justify-between pb-2 border-b border-[#282a30]">
              <span className="text-[10px] font-mono text-[#958ea0] uppercase tracking-wider">
                Acreditación Stand-in #EX-2026-088
              </span>
              <span className="px-2 py-0.5 rounded bg-[#00a572] text-black font-mono text-[10px] font-bold uppercase">
                HABILITADO
              </span>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#191b22] border border-[#282a30]">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                alt="B4stian"
                className="w-12 h-12 rounded-xl object-cover border border-[#33343b] shrink-0"
              />
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-white font-mono truncate">B4stian (Bautista Vera)</span>
                <span className="text-xs font-mono text-[#4cd7f6]">STEAM_1:0:49210084</span>
                <span className="text-[10px] font-mono text-[#958ea0]">Rol: Rifler / Entry Fragger</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
