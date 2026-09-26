import React from 'react';
import { ViewType, Player } from '../../types/esports';
import {
  LayoutGrid,
  Trophy,
  Shield,
  Users,
  Gamepad2,
  Server,
  BarChart3,
  TrendingUp,
  Bell,
  Headphones,
  Lock,
  LayoutTemplate,
  Terminal,
  Scale,
  FileText,
  ShieldCheck,
  UserCheck,
  Monitor,
  GraduationCap,
  CalendarClock,
  Sparkles,
  BookOpen
} from 'lucide-react';

interface SidebarProps {
  currentView: ViewType;
  onSelectView: (view: ViewType) => void;
  user?: Player;
  unreadNotifications?: number;
  openNotifications?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  onSelectView,
  user,
  unreadNotifications = 3,
  openNotifications = () => {}
}) => {
  const mainNav = [
    { id: 'dashboard' as ViewType, label: 'DASHBOARD', icon: LayoutGrid },
    { id: 'tournaments' as ViewType, label: 'TORNEOS', icon: Trophy },
    { id: 'league' as ViewType, label: 'LIGA REGIONAL', icon: Shield },
    { id: 'match-scheduling' as ViewType, label: 'COORDINACIÓN / PACTO', icon: CalendarClock },
    { id: 'teams' as ViewType, label: 'MIS EQUIPOS', icon: Users },
    { id: 'matches' as ViewType, label: 'PARTIDAS & SCRIMS', icon: Gamepad2 },
    { id: 'servers' as ViewType, label: 'SERVIDORES CS2', icon: Server },
    { id: 'ranking' as ViewType, label: 'RANKING ELO', icon: BarChart3 },
    { id: 'stats' as ViewType, label: 'ESTADÍSTICAS & META', icon: TrendingUp },
  ];

  const venueAcademyNav = [
    { id: 'arena-lan' as ViewType, label: 'ARENA LAN POSADAS', icon: Monitor, tag: 'SEDE HQ' },
    { id: 'academia' as ViewType, label: 'ACADEMIA ZINGARO', icon: GraduationCap, tag: 'ESPORTS' },
    { id: 'student-report' as ViewType, label: 'BOLETÍN ALUMNO', icon: FileText, tag: 'PRO-PERF' },
  ];

  const adminNav = [
    { id: 'master-panel' as ViewType, label: 'PANEL MAESTRO', icon: LayoutTemplate },
    { id: 'disputes' as ViewType, label: 'DISPUTAS & REPORTES', icon: Scale, badge: 2 },
    { id: 'judicial-dossier' as ViewType, label: 'JURISPRUDENCIA ARBITRAL', icon: BookOpen },
    { id: 'audit-logs' as ViewType, label: 'LOGS DE AUDITORÍA', icon: FileText },
    { id: 'roles' as ViewType, label: 'ROLES & PERMISOS', icon: UserCheck },
    { id: 'notifications' as ViewType, label: 'CENTRO DESPACHOS', icon: Bell, badge: unreadNotifications },
    { id: 'ai-studio-export' as ViewType, label: 'EXPORT HUB AI STUDIO', icon: Sparkles, tag: 'API 3.1' },
  ];

  return (
    <aside className="w-64 bg-[#0e1017] border-r border-[#1e2230] flex flex-col h-screen select-none shrink-0 z-30">
      {/* Brand Header */}
      <div className="p-4 border-b border-[#1e2230] flex items-center justify-between">
        <div 
          onClick={() => onSelectView('dashboard')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          {/* Tactical Elephant Emblem */}
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8B5CF6]/30 via-[#6D28D9]/20 to-[#121620] border border-[#8B5CF6]/50 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:border-[#A855F7] transition-all">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#A855F7]" fill="currentColor">
              <path d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V10C20 12.2091 18.2091 14 16 14H15V19C15 19.5523 14.5523 20 14 20H13C12.4477 20 12 19.5523 12 19V14H10V18C10 18.5523 9.55228 19 9 19H8C7.44772 19 7 18.5523 7 18V13H6C4.89543 13 4 12.1046 4 11V6Z" opacity="0.3" />
              <path d="M12 3L14.5 7.5L19.5 8.2L16 11.5L16.8 16.5L12 14L7.2 16.5L8 11.5L4.5 8.2L9.5 7.5L12 3Z" />
              <circle cx="9" cy="9" r="1.5" fill="#22D3EE" />
              <circle cx="15" cy="9" r="1.5" fill="#22D3EE" />
              <path d="M10 13C10 14.5 11 16 12 16C13 16 14 14.5 14 13V10H10V13Z" fill="#F8FAFC" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-white tracking-wider text-base font-mono">ZINGARO</span>
            </div>
            <span className="text-[10px] tracking-widest text-[#8B5CF6] font-semibold block font-mono">
              ESPORTS OS v2.4
            </span>
          </div>
        </div>

        {/* CS2 Badge */}
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
          CS2
        </span>
      </div>

      {/* Nav List */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6 scrollbar-thin scrollbar-thumb-neutral-800">
        {/* Main Section */}
        <div>
          <div className="px-3 mb-2 text-[10px] font-bold tracking-wider text-[#64748B] font-mono uppercase">
            Sección Principal
          </div>
          <div className="space-y-1">
            {mainNav.map((item, idx) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={`${item.id}-${idx}`}
                  onClick={() => onSelectView(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-[#8B5CF6]/15 text-white border-l-2 border-[#8B5CF6] shadow-[0_0_15px_rgba(139,92,246,0.15)]'
                      : 'text-[#94A3B8] hover:text-white hover:bg-[#181C28]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#8B5CF6]' : 'text-[#64748B]'}`} />
                    <span className="font-mono">{item.label}</span>
                  </div>
                </button>
              );
            })}

            {/* Quick Drawer trigger */}
            <button
              onClick={openNotifications}
              className="w-full flex items-center justify-between px-3 py-2 rounded text-xs font-semibold tracking-wide text-[#94A3B8] hover:text-white hover:bg-[#181C28] transition-all"
            >
              <div className="flex items-center gap-3">
                <Bell className="w-4 h-4 text-[#64748B]" />
                <span className="font-mono">PANEL NOTIFICACIONES</span>
              </div>
              {unreadNotifications > 0 && (
                <span className="px-1.5 py-0.2 rounded text-[10px] font-mono font-bold bg-[#06B6D4] text-black">
                  {unreadNotifications}
                </span>
              )}
            </button>

            {/* Support */}
            <button
              onClick={() => onSelectView('support')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded text-xs font-semibold tracking-wide transition-all ${
                currentView === 'support'
                  ? 'bg-[#8B5CF6]/15 text-white border-l-2 border-[#8B5CF6]'
                  : 'text-[#94A3B8] hover:text-white hover:bg-[#181C28]'
              }`}
            >
              <div className="flex items-center gap-3">
                <Headphones className={`w-4 h-4 ${currentView === 'support' ? 'text-[#8B5CF6]' : 'text-[#64748B]'}`} />
                <span className="font-mono">SOPORTE & TICKETS</span>
              </div>
            </button>
          </div>
        </div>

        {/* Sede Posadas & Formación */}
        <div>
          <div className="px-3 mb-2 flex items-center justify-between text-[10px] font-bold tracking-wider text-[#A855F7] font-mono uppercase">
            <span>Sede Posadas & Academia</span>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300">LAN</span>
          </div>
          <div className="space-y-1">
            {venueAcademyNav.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectView(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-[#8B5CF6]/20 text-white border-l-2 border-[#A855F7] shadow-[0_0_12px_rgba(168,85,247,0.2)]'
                      : 'text-[#94A3B8] hover:text-white hover:bg-[#181C28]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#A855F7]' : 'text-[#64748B]'}`} />
                    <span className="font-mono">{item.label}</span>
                  </div>
                  {item.tag && (
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-[#A855F7]/20 text-[#D8B4FE] border border-[#A855F7]/30">
                      {item.tag}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Commissioners / Admin Section */}
        <div>
          <div className="px-3 mb-2 flex items-center justify-between text-[10px] font-bold tracking-wider text-[#64748B] font-mono uppercase">
            <span className="text-[#38BDF8]">Comisarios & Autoridad</span>
            <Lock className="w-3 h-3 text-[#38BDF8]" />
          </div>
          <div className="space-y-1">
            {adminNav.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectView(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-[#38BDF8]/15 text-white border-l-2 border-[#38BDF8]'
                      : 'text-[#94A3B8] hover:text-white hover:bg-[#181C28]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#38BDF8]' : 'text-[#64748B]'}`} />
                    <span className="font-mono text-[11px] truncate">{item.label}</span>
                  </div>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="px-1.5 py-0.2 rounded text-[10px] font-mono font-bold bg-[#EF4444] text-white">
                      {item.badge}
                    </span>
                  )}
                  {item.tag && (
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-[#0284C7]/20 text-[#38BDF8] border border-[#38BDF8]/30">
                      {item.tag}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Anti-Cheat Status */}
      <div className="p-3 border-t border-[#1e2230] bg-[#090b10]">
        <div className="text-[10px] text-[#64748B] font-mono uppercase mb-1">
          Anti-Cheat Engine
        </div>
        <div className="flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-[#10B981]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping"></span>
            <span className="font-medium text-[11px]">Activo & Blindado</span>
          </div>
          <ShieldCheck className="w-4 h-4 text-[#10B981]" />
        </div>
      </div>
    </aside>
  );
};
