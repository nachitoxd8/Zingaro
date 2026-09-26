import React, { useState } from 'react';
import { ViewType } from '../../types/esports';
import {
  BarChart3,
  TrendingUp,
  Award,
  Search,
  Shield,
  Star,
  ChevronRight,
  Flame,
  Zap
} from 'lucide-react';

interface RankingViewProps {
  onSelectView: (view: ViewType) => void;
}

interface RankedPlayer {
  rank: number;
  name: string;
  tag: string;
  elo: number;
  level: number;
  tier: string;
  winrate: number;
  kd: number;
  adr: number;
}

const TOP_RANKED_PLAYERS: RankedPlayer[] = [
  { rank: 1, name: 'Pacuno_CS', tag: 'ZGA', elo: 2450, level: 10, tier: 'Challenger Pro', winrate: 76.5, kd: 1.38, adr: 88.6 },
  { rank: 2, name: 'Chicho', tag: 'ZGA', elo: 2310, level: 9, tier: 'Premier Elite', winrate: 72.0, kd: 1.29, adr: 84.2 },
  { rank: 3, name: 'Draken_NEA', tag: 'MSE', elo: 2340, level: 9, tier: 'Premier Elite', winrate: 68.4, kd: 1.22, adr: 81.2 },
  { rank: 4, name: 'K1nder', tag: 'ZGA', elo: 2340, level: 9, tier: 'Premier Elite', winrate: 70.1, kd: 1.21, adr: 81.0 },
  { rank: 5, name: 'NeoX', tag: 'ZGA', elo: 2290, level: 9, tier: 'Premier Elite', winrate: 69.0, kd: 1.24, adr: 82.5 },
  { rank: 6, name: 'V1per', tag: 'MSE', elo: 2280, level: 9, tier: 'Premier Elite', winrate: 65.2, kd: 1.25, adr: 80.0 },
  { rank: 7, name: 'DrakenCS', tag: 'P5', elo: 2280, level: 9, tier: 'Premier Elite', winrate: 64.0, kd: 1.18, adr: 79.5 },
  { rank: 8, name: 'Bl4ck', tag: 'MSE', elo: 2210, level: 8, tier: 'Advanced Pro', winrate: 62.5, kd: 1.15, adr: 83.5 },
  { rank: 9, name: 'JaguarX', tag: 'GNG', elo: 2190, level: 8, tier: 'Advanced Pro', winrate: 58.0, kd: 1.12, adr: 78.0 },
  { rank: 10, name: 'Vortex', tag: 'ZGA', elo: 2180, level: 8, tier: 'Advanced Pro', winrate: 71.0, kd: 1.08, adr: 92.4 }
];

export const RankingView: React.FC<RankingViewProps> = ({ onSelectView }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = TOP_RANKED_PLAYERS.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <BarChart3 className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  SISTEMA DE ELO OFICIAL ZINGARO
                </span>
                <span className="text-xs font-mono text-cyan-400">TOP 50 JUGADORES REGIONALES</span>
              </div>
              <h1 className="text-2xl font-bold text-white tracking-wide mt-1">
                Clasificación & Ladder Individual CS2
              </h1>
              <p className="text-sm text-neutral-400 mt-0.5">
                Cálculo de MMR ponderado por rating HLTV 2.0, impacto en rondas decisivas y sub-tick telemetry.
              </p>
            </div>
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar jugador o clan..."
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>
      </div>

      {/* Tier Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-neutral-900 border border-amber-500/30 rounded-xl p-3.5 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono text-amber-400 font-bold block uppercase">Challenger Tier</span>
            <span className="text-sm font-bold text-white">2400+ ELO</span>
          </div>
          <Star className="w-5 h-5 text-amber-400" />
        </div>
        <div className="bg-neutral-900 border border-cyan-500/30 rounded-xl p-3.5 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono text-cyan-400 font-bold block uppercase">Premier Elite</span>
            <span className="text-sm font-bold text-white">2200 - 2399 ELO</span>
          </div>
          <Flame className="w-5 h-5 text-cyan-400" />
        </div>
        <div className="bg-neutral-900 border border-purple-500/30 rounded-xl p-3.5 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono text-purple-400 font-bold block uppercase">Advanced Pro</span>
            <span className="text-sm font-bold text-white">2000 - 2199 ELO</span>
          </div>
          <Award className="w-5 h-5 text-purple-400" />
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-3.5 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono text-neutral-400 font-bold block uppercase">Main Division</span>
            <span className="text-sm font-bold text-white">1800 - 1999 ELO</span>
          </div>
          <Shield className="w-5 h-5 text-neutral-400" />
        </div>
      </div>

      {/* Ranking Table */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-xl">
        <table className="w-full text-left text-xs">
          <thead className="bg-neutral-950/80 text-neutral-400 font-mono border-b border-neutral-800 text-[11px]">
            <tr>
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Jugador</th>
              <th className="py-3 px-4">Rango / División</th>
              <th className="py-3 px-4 text-center font-bold text-amber-400">ELO</th>
              <th className="py-3 px-4 text-center">Nivel</th>
              <th className="py-3 px-4 text-center">Winrate</th>
              <th className="py-3 px-4 text-center">K/D</th>
              <th className="py-3 px-4 text-center">ADR</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800/60">
            {filtered.map((player) => (
              <tr
                key={player.name}
                className={`hover:bg-neutral-800/40 transition-colors ${
                  player.name === 'Pacuno_CS' ? 'bg-amber-950/20 font-medium' : ''
                }`}
              >
                <td className="py-3.5 px-4 font-mono font-bold text-neutral-300">#{player.rank}</td>
                <td className="py-3.5 px-4 font-semibold text-white flex items-center gap-2">
                  <span className="font-mono text-cyan-400">[{player.tag}]</span>
                  <span>{player.name}</span>
                  {player.rank === 1 && (
                    <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[9px] font-mono border border-amber-500/30">
                      RANK 1
                    </span>
                  )}
                </td>
                <td className="py-3.5 px-4 text-neutral-300 font-mono">{player.tier}</td>
                <td className="py-3.5 px-4 text-center font-mono font-bold text-amber-300 text-sm">
                  {player.elo}
                </td>
                <td className="py-3.5 px-4 text-center font-mono text-neutral-400">{player.level}</td>
                <td className="py-3.5 px-4 text-center font-mono text-emerald-400">{player.winrate}%</td>
                <td className="py-3.5 px-4 text-center font-mono font-bold text-white">{player.kd}</td>
                <td className="py-3.5 px-4 text-center font-mono text-neutral-300">{player.adr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
