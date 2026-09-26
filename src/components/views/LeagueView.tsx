import React, { useState } from 'react';
import { ViewType } from '../../types/esports';
import {
  Trophy,
  Flame,
  Award,
  Calendar,
  ChevronRight,
  TrendingUp,
  Shield,
  Zap,
  Users,
  ExternalLink
} from 'lucide-react';
import { LEAGUE_TEAMS } from '../../data/mockData';

interface LeagueViewProps {
  onSelectView: (view: ViewType) => void;
}

export const LeagueView: React.FC<LeagueViewProps> = ({ onSelectView }) => {
  const [activeTab, setActiveTab] = useState<'standings' | 'mvp' | 'fixture'>('standings');

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Shield className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  CIRCUITO PROFESIONAL REGIONAL NEA
                </span>
                <span className="text-xs font-mono text-emerald-400">TEMPORADA 1 (CLAUSURA 2026)</span>
              </div>
              <h1 className="text-2xl font-bold text-white tracking-wide mt-1">
                Liga Regional CS2 Zingaro
              </h1>
              <p className="text-sm text-neutral-400 mt-0.5">
                8 organizaciones compitiendo por 2 plazas a la Liga Nacional y $2.000.000 ARS en premios.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectView('matchroom')}
              className="px-4 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-sm"
            >
              <Zap className="w-4 h-4" />
              <span>Ver Matchroom Activo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-neutral-800 pb-2">
        <button
          onClick={() => setActiveTab('standings')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
            activeTab === 'standings'
              ? 'bg-neutral-800 text-white border border-neutral-700'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          Tabla de Posiciones
        </button>
        <button
          onClick={() => setActiveTab('mvp')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
            activeTab === 'mvp'
              ? 'bg-neutral-800 text-white border border-neutral-700'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          Líderes Individuales (MVP / ADR)
        </button>
        <button
          onClick={() => setActiveTab('fixture')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
            activeTab === 'fixture'
              ? 'bg-neutral-800 text-white border border-neutral-700'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          Calendario de Jornadas (Fixture)
        </button>
      </div>

      {/* TAB CONTENT: STANDINGS */}
      {activeTab === 'standings' && (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-xl">
          <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              <h2 className="text-sm font-bold text-white">Clasificación Fase Regular (MR12)</h2>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-emerald-500" />
                Semifinales Directas
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-cyan-500" />
                Playoffs
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-red-500" />
                Descenso
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-950/80 text-neutral-400 font-mono border-b border-neutral-800 text-[11px]">
                <tr>
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4">Equipo / Tag</th>
                  <th className="py-3 px-4">Capitán / Región</th>
                  <th className="py-3 px-4 text-center">PJ</th>
                  <th className="py-3 px-4 text-center">PG</th>
                  <th className="py-3 px-4 text-center">PP</th>
                  <th className="py-3 px-4 text-center">Dif. Rondas</th>
                  <th className="py-3 px-4 text-center">ELO</th>
                  <th className="py-3 px-4 text-center font-bold text-white">PTS</th>
                  <th className="py-3 px-4 text-center">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60 font-sans">
                {LEAGUE_TEAMS.map((team) => (
                  <tr
                    key={team.tag}
                    className={`hover:bg-neutral-800/40 transition-colors ${
                      team.tag === 'ZGA' ? 'bg-cyan-950/20 font-medium' : ''
                    }`}
                  >
                    <td className="py-3.5 px-4 font-mono font-bold text-neutral-300">{team.rank}</td>
                    <td className="py-3.5 px-4 font-semibold text-white flex items-center gap-2">
                      <span className="font-mono text-cyan-400">[{team.tag}]</span>
                      <span>{team.name}</span>
                    </td>
                    <td className="py-3.5 px-4 text-neutral-400">
                      <span className="text-neutral-200 font-medium">{team.captain}</span>
                      <span className="block text-[10px] text-neutral-500">{team.region}</span>
                    </td>
                    <td className="py-3.5 px-4 text-center font-mono">{team.pj}</td>
                    <td className="py-3.5 px-4 text-center font-mono text-emerald-400 font-bold">{team.pg}</td>
                    <td className="py-3.5 px-4 text-center font-mono text-red-400">{team.pp}</td>
                    <td className="py-3.5 px-4 text-center font-mono text-neutral-300">{team.diff}</td>
                    <td className="py-3.5 px-4 text-center font-mono text-neutral-300">{team.elo}</td>
                    <td className="py-3.5 px-4 text-center font-mono text-base font-bold text-white">
                      {team.pts}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                          team.statusType === 'playoffs-direct'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : team.statusType === 'playoffs'
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                            : team.statusType === 'repechaje'
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            : 'bg-red-500/20 text-red-300 border border-red-500/30'
                        }`}
                      >
                        {team.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB CONTENT: MVP LEADERS */}
      {activeTab === 'mvp' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 shadow-lg space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <span className="text-xs font-bold text-cyan-400 font-mono">TOP RATING 2.0</span>
              <Flame className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white">1. Pacuno_CS [ZGA]</span>
                <span className="font-mono text-emerald-400 font-bold">1.38</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-300">2. Chicho [ZGA]</span>
                <span className="font-mono text-neutral-200">1.29</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-300">3. V1per [MSE]</span>
                <span className="font-mono text-neutral-200">1.25</span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 shadow-lg space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <span className="text-xs font-bold text-amber-400 font-mono">TOP DAÑO PROMEDIO (ADR)</span>
              <Award className="w-4 h-4 text-amber-400" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white">1. Vortex [ZGA]</span>
                <span className="font-mono text-amber-300 font-bold">92.4</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-300">2. Pacuno_CS [ZGA]</span>
                <span className="font-mono text-neutral-200">88.6</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-300">3. Chicho [ZGA]</span>
                <span className="font-mono text-neutral-200">84.2</span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 shadow-lg space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <span className="text-xs font-bold text-purple-400 font-mono">TOP HEADSHOT RATIO (HS%)</span>
              <Award className="w-4 h-4 text-purple-400" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white">1. NeoX [ZGA]</span>
                <span className="font-mono text-purple-300 font-bold">61.0%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-300">2. Bl4ck [MSE]</span>
                <span className="font-mono text-neutral-200">56.0%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-300">3. Pacuno_CS [ZGA]</span>
                <span className="font-mono text-neutral-200">54.2%</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: FIXTURE */}
      {activeTab === 'fixture' && (
        <div className="space-y-3">
          <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-between">
            <div>
              <span className="text-xs font-mono text-neutral-400">Jornada 5 • Sábado 27</span>
              <div className="text-sm font-bold text-white mt-0.5">Zingaro Academy vs Posadas Five</div>
            </div>
            <span className="text-xs font-mono text-cyan-400">21:00 hs • ZNG-CS2-01</span>
          </div>

          <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-between">
            <div>
              <span className="text-xs font-mono text-neutral-400">Jornada 5 • Sábado 27</span>
              <div className="text-sm font-bold text-white mt-0.5">Misiones Esports vs Guaraní Gaming</div>
            </div>
            <span className="text-xs font-mono text-neutral-400">22:30 hs • ZNG-CS2-02</span>
          </div>
        </div>
      )}
    </div>
  );
};
