import React from 'react';
import { ViewType, Player } from '../../types/esports';
import { ChevronDown, Bell, CheckCircle2, Shield } from 'lucide-react';

interface HeaderProps {
  user: Player;
  onSelectView: (view: ViewType) => void;
  openNotifications?: () => void;
  openNotificationDrawer?: () => void;
  unreadNotifications?: number;
  unreadCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  onSelectView,
  openNotifications,
  openNotificationDrawer,
  unreadNotifications = 3,
  unreadCount
}) => {
  const handleOpenNotifs = openNotificationDrawer || openNotifications || (() => {});
  const badgeCount = unreadCount !== undefined ? unreadCount : unreadNotifications;
  return (
    <header className="h-14 border-b border-[#1e2230] bg-[#0c0e14] px-6 flex items-center justify-between z-20 shrink-0">
      {/* Left: Active Competition Dropdown */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#131620] border border-[#22283a] text-xs cursor-pointer hover:border-[#8B5CF6]/50 transition-colors">
          <div className="w-5 h-5 rounded bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 flex items-center justify-center text-[#A855F7]">
            <Shield className="w-3 h-3" />
          </div>
          <div>
            <div className="text-[9px] text-[#64748B] font-mono-tech leading-none uppercase">
              Competición Activa
            </div>
            <div className="font-semibold text-[#E2E8F0] flex items-center gap-1.5 font-mono-tech">
              <span>Counter-Strike 2: Regional League S1</span>
              <ChevronDown className="w-3 h-3 text-[#64748B]" />
            </div>
          </div>
        </div>

        {/* Server Telemetry Badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded bg-[#10B981]/10 border border-[#10B981]/30 text-xs font-mono-tech text-[#10B981]">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
          <span className="font-semibold">CS2 SERVERS: 4/4 OPERACIONALES</span>
          <span className="text-[#64748B]">|</span>
          <span className="text-[#94A3B8]">PING <strong className="text-white">24ms</strong></span>
        </div>
      </div>

      {/* Right: Notifications & User profile */}
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <button
          onClick={handleOpenNotifs}
          className="relative p-2 rounded-lg bg-[#131620] border border-[#22283a] text-[#94A3B8] hover:text-white hover:border-[#8B5CF6]/40 transition-colors"
          title="Centro de Notificaciones"
        >
          <Bell className="w-4 h-4" />
          {badgeCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#06B6D4] text-black font-mono-tech text-[10px] font-bold rounded-full flex items-center justify-center">
              {badgeCount}
            </span>
          )}
        </button>

        {/* User Badge */}
        <div
          onClick={() => onSelectView('profile')}
          className="flex items-center gap-3 pl-3 pr-2 py-1 rounded-lg bg-[#131620] border border-[#22283a] hover:border-[#8B5CF6]/50 cursor-pointer transition-all group"
        >
          <div className="relative">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-8 h-8 rounded-md object-cover border border-[#8B5CF6]/40 group-hover:border-[#A855F7]"
            />
            <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#10B981] border border-[#0B0D13]"></span>
          </div>

          <div className="text-left">
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold text-white font-mono-tech group-hover:text-[#A855F7] transition-colors">
                [{user.tag}] {user.name}
              </span>
              <CheckCircle2 className="w-3.5 h-3.5 text-[#06B6D4]" />
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono-tech text-[#94A3B8]">
              <span className="text-[#A855F7] font-semibold">{user.elo} ELO</span>
              <span>•</span>
              <span>Nv. {user.level} Maestro</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
