import React from 'react';
import { ViewType, Player } from '../../types/esports';
import {
  User,
  ShieldCheck,
  Trophy,
  Award,
  Crosshair,
  TrendingUp,
  Activity,
  CheckCircle2,
  ExternalLink,
  Flame,
  Zap,
  Calendar
} from 'lucide-react';
import { CURRENT_USER } from '../../data/mockData';

interface ProfileViewProps {
  onSelectView: (view: ViewType) => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ onSelectView }) => {
  return (
    <div className="space-y-6">
      {/* Profile Header Card */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="relative">
              <img
                src={CURRENT_USER.avatar}
                alt={CURRENT_USER.name}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-amber-500 shadow-xl"
              />
              <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-neutral-900 flex items-center justify-center text-[10px] font-bold text-white">
                10
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-cyan-400 font-bold text-sm">[{CURRENT_USER.tag}]</span>
                <h1 className="text-2xl font-bold text-white">{CURRENT_USER.name}</h1>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-xs border border-amber-500/30">
                  CAPITÁN & IGL
                </span>
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">{CURRENT_USER.realName}</div>
              <div className="flex items-center gap-3 mt-2 text-xs font-mono text-neutral-400">
                <span>SteamID64: {CURRENT_USER.steamId}</span>
                <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Anti-Cheat Integridad OK
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-neutral-950 p-4 rounded-xl border border-neutral-800 self-start md:self-auto">
            <div className="text-center px-3 border-r border-neutral-800">
              <span className="text-[10px] font-mono text-neutral-500 block uppercase">Nivel Zingaro</span>
              <span className="text-xl font-mono font-bold text-white">LVL 10</span>
            </div>
            <div className="text-center px-3 border-r border-neutral-800">
              <span className="text-[10px] font-mono text-neutral-500 block uppercase">Rating ELO</span>
              <span className="text-xl font-mono font-bold text-amber-400">2450</span>
            </div>
            <div className="text-center px-3">
              <span className="text-[10px] font-mono text-neutral-500 block uppercase">Winrate</span>
              <span className="text-xl font-mono font-bold text-emerald-400">76.5%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Breakdown */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
          <span className="text-xs text-neutral-400 block">K/D Ratio</span>
          <span className="text-2xl font-mono font-bold text-white mt-1">1.38</span>
          <span className="text-[11px] text-emerald-400 mt-1 block">+0.12 vs temporada previa</span>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
          <span className="text-xs text-neutral-400 block">Headshot %</span>
          <span className="text-2xl font-mono font-bold text-cyan-400 mt-1">54.2%</span>
          <span className="text-[11px] text-neutral-400 mt-1 block">Rifler High Precision</span>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
          <span className="text-xs text-neutral-400 block">Daño por Ronda (ADR)</span>
          <span className="text-2xl font-mono font-bold text-amber-300 mt-1">88.6</span>
          <span className="text-[11px] text-neutral-400 mt-1 block">Tier Challenger Average: 78</span>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
          <span className="text-xs text-neutral-400 block">Clutch Winrate (1vX)</span>
          <span className="text-2xl font-mono font-bold text-purple-400 mt-1">68.0%</span>
          <span className="text-[11px] text-emerald-400 mt-1 block">17/25 clutches ganados</span>
        </div>
      </div>

      {/* Weapons & Recent History */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weapon Mastery */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 shadow-lg space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Crosshair className="w-4 h-4 text-cyan-400" />
            <span>Dominio de Armas en Servidores Oficiales</span>
          </h3>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs text-neutral-300 mb-1">
                <span className="font-semibold">AK-47</span>
                <span className="font-mono text-cyan-400">62% de kills • 58% HS</span>
              </div>
              <div className="w-full bg-neutral-950 rounded-full h-2 overflow-hidden border border-neutral-800">
                <div className="bg-cyan-500 h-full rounded-full" style={{ width: '62%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-neutral-300 mb-1">
                <span className="font-semibold">M4A1-S</span>
                <span className="font-mono text-cyan-400">24% de kills • 52% HS</span>
              </div>
              <div className="w-full bg-neutral-950 rounded-full h-2 overflow-hidden border border-neutral-800">
                <div className="bg-cyan-600 h-full rounded-full" style={{ width: '24%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-neutral-300 mb-1">
                <span className="font-semibold">Desert Eagle</span>
                <span className="font-mono text-cyan-400">10% de kills • 74% HS</span>
              </div>
              <div className="w-full bg-neutral-950 rounded-full h-2 overflow-hidden border border-neutral-800">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: '10%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Matches */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 shadow-lg space-y-3">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>Historial Reciente de Competiciones</span>
          </h3>

          <div className="space-y-2 text-xs">
            <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 flex items-center justify-between">
              <div>
                <span className="font-bold text-white">Victoria 13 - 7 vs Posadas Five</span>
                <span className="text-[11px] text-neutral-400 block">de_mirage • Rating 1.45 (24-11-4)</span>
              </div>
              <span className="text-emerald-400 font-mono font-bold">+28 ELO</span>
            </div>

            <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 flex items-center justify-between">
              <div>
                <span className="font-bold text-white">Victoria 13 - 10 vs Oberá Heat</span>
                <span className="text-[11px] text-neutral-400 block">de_inferno • Rating 1.32 (21-14-3)</span>
              </div>
              <span className="text-emerald-400 font-mono font-bold">+24 ELO</span>
            </div>

            <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 flex items-center justify-between">
              <div>
                <span className="font-bold text-white">Victoria 13 - 5 vs Guaraní Gaming</span>
                <span className="text-[11px] text-neutral-400 block">de_anubis • Rating 1.50 (19-8-6)</span>
              </div>
              <span className="text-emerald-400 font-mono font-bold">+31 ELO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
