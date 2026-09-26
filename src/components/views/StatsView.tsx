import React from 'react';
import { ViewType } from '../../types/esports';
import {
  BarChart3,
  TrendingUp,
  Crosshair,
  Flame,
  Award,
  Zap,
  Clock,
  Layers,
  Shield,
  Activity,
  Download,
  Play
} from 'lucide-react';

interface StatsViewProps {
  onSelectView: (view: ViewType) => void;
}

export const StatsView: React.FC<StatsViewProps> = ({ onSelectView }) => {
  return (
    <div className="space-y-6">
      {/* Sub-header Bar */}
      <div className="w-full px-6 py-4 bg-[#111319] border border-[#282a30] rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 font-mono text-xs text-[#958ea0]">
            <span>Zingaro OS</span>
            <span>/</span>
            <span className="text-[#4cd7f6] font-bold">Telemetría Sub-Tick v2.4</span>
            <span>/</span>
            <span className="text-[#4edea3]">Datos Validados</span>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-white uppercase tracking-tight">
              Metajuego & Analítica Global CS2
            </h1>
            <span className="px-2 py-0.5 rounded bg-[#00a572]/20 text-[#4edea3] text-xs font-mono font-bold uppercase">
              En Vivo
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 bg-[#0c0e14] p-1 rounded-xl border border-[#282a30]">
          <span className="px-3 py-1.5 rounded text-white text-xs font-mono uppercase bg-[#1e1f26] font-bold shadow-sm">
            Temporada Clausura 2026
          </span>
          <button
            onClick={() => alert('Exportando analítica de telemetría en formato JSON...')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#a078ff] text-white text-xs font-mono font-bold uppercase transition-all hover:bg-[#8B5CF6]"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Exportar JSON</span>
          </button>
        </div>
      </div>

      {/* Platform KPI Radar Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <div className="bg-[#111319] border border-[#282a30] p-4 rounded-xl flex flex-col justify-between shadow-sm">
          <span className="text-[10px] font-mono text-[#958ea0] uppercase">Partidas Oficiales</span>
          <div className="my-2">
            <div className="text-2xl font-extrabold text-white font-mono">1,482</div>
            <div className="text-[11px] font-mono text-[#4edea3] mt-0.5">+14.2% vs Apertura</div>
          </div>
          <span className="text-[10px] font-mono text-[#cbc3d7]">100% 128-Tick Tickrate</span>
        </div>

        <div className="bg-[#111319] border border-[#282a30] p-4 rounded-xl flex flex-col justify-between shadow-sm">
          <span className="text-[10px] font-mono text-[#958ea0] uppercase">Rondas Analizadas</span>
          <div className="my-2">
            <div className="text-2xl font-extrabold text-white font-mono">34,920</div>
            <div className="text-[11px] font-mono text-[#4cd7f6] mt-0.5">Sub-Tick Telemetry</div>
          </div>
          <span className="text-[10px] font-mono text-[#cbc3d7]">23.5 Rondas / Mapa</span>
        </div>

        <div className="bg-[#111319] border border-[#282a30] p-4 rounded-xl flex flex-col justify-between shadow-sm">
          <span className="text-[10px] font-mono text-[#958ea0] uppercase">Balance CT vs T</span>
          <div className="my-2">
            <div className="flex items-baseline justify-between font-mono font-bold text-lg">
              <span className="text-[#4cd7f6]">52.4%</span>
              <span className="text-red-400">47.6%</span>
            </div>
            <div className="w-full h-1.5 bg-[#0c0e14] rounded-full mt-1.5 overflow-hidden flex">
              <div className="h-full bg-[#4cd7f6]" style={{ width: '52.4%' }} />
              <div className="h-full bg-red-400" style={{ width: '47.6%' }} />
            </div>
          </div>
          <span className="text-[10px] font-mono text-[#4cd7f6]">CT Side Bias (+4.8%)</span>
        </div>

        <div className="bg-[#111319] border border-[#282a30] p-4 rounded-xl flex flex-col justify-between shadow-sm">
          <span className="text-[10px] font-mono text-[#958ea0] uppercase">HS Ratio Global</span>
          <div className="my-2">
            <div className="text-2xl font-extrabold text-[#4edea3] font-mono">44.8%</div>
            <div className="text-[11px] font-mono text-[#958ea0] mt-0.5">Tier Pro: 48-55%</div>
          </div>
          <span className="text-[10px] font-mono text-[#d0bcff]">Top: Pacuno (68.2%)</span>
        </div>

        <div className="bg-[#111319] border border-[#282a30] p-4 rounded-xl flex flex-col justify-between shadow-sm">
          <span className="text-[10px] font-mono text-[#958ea0] uppercase">Resolución Media</span>
          <div className="my-2">
            <div className="text-2xl font-extrabold text-white font-mono">1m 38s</div>
            <div className="text-[11px] font-mono text-[#4edea3] mt-0.5">-7s vs CS:GO</div>
          </div>
          <span className="text-[10px] font-mono text-[#cbc3d7]">Pico Defuse: 34.1s</span>
        </div>
      </div>

      {/* Main Dual Grid: Maps Metagame (7 cols) + Arsenal (5 cols) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Left: Map Pool Metagame (7 cols) */}
        <div className="xl:col-span-7 bg-[#111319] border border-[#282a30] p-6 rounded-2xl shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#282a30]">
            <div>
              <span className="text-xs font-mono text-[#4cd7f6] uppercase font-bold tracking-wider">
                Mapeo Competitivo
              </span>
              <h2 className="text-lg font-bold text-white uppercase mt-0.5">
                Pick & Ban Rate del Circuito Oficial
              </h2>
            </div>
            <span className="text-xs font-mono text-[#958ea0] bg-[#0c0e14] px-2.5 py-1 rounded border border-[#282a30]">
              5 Mapas Activos
            </span>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {/* Mirage */}
            <div className="bg-[#191b22] border border-[#282a30] p-4 rounded-xl space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded bg-[#0c0e14] flex items-center justify-center font-bold text-[#d0bcff]">
                    01
                  </span>
                  <div>
                    <span className="font-bold text-white text-sm">de_mirage</span>
                    <span className="text-[10px] text-[#958ea0] block">563 Partidas</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-[#d0bcff]">Pick 38%</span>
                  <span className="text-[10px] text-red-400 block">Ban 12%</span>
                </div>
              </div>
              <div className="w-full h-2 bg-[#0c0e14] rounded overflow-hidden flex">
                <div className="h-full bg-[#4cd7f6]" style={{ width: '51%' }} />
                <div className="h-full bg-red-400" style={{ width: '49%' }} />
              </div>
              <div className="flex justify-between text-[11px] text-[#cbc3d7]">
                <span>CT Winrate: 51.0%</span>
                <span>T Winrate: 49.0%</span>
              </div>
            </div>

            {/* Inferno */}
            <div className="bg-[#191b22] border border-[#282a30] p-4 rounded-xl space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded bg-[#0c0e14] flex items-center justify-center font-bold text-[#d0bcff]">
                    02
                  </span>
                  <div>
                    <span className="font-bold text-white text-sm">de_inferno</span>
                    <span className="text-[10px] text-[#958ea0] block">355 Partidas</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-[#d0bcff]">Pick 24%</span>
                  <span className="text-[10px] text-red-400 block">Ban 21%</span>
                </div>
              </div>
              <div className="w-full h-2 bg-[#0c0e14] rounded overflow-hidden flex">
                <div className="h-full bg-[#4cd7f6]" style={{ width: '54%' }} />
                <div className="h-full bg-red-400" style={{ width: '46%' }} />
              </div>
              <div className="flex justify-between text-[11px] text-[#cbc3d7]">
                <span>CT Winrate: 54.0%</span>
                <span>T Winrate: 46.0%</span>
              </div>
            </div>

            {/* Nuke */}
            <div className="bg-[#191b22] border border-[#282a30] p-4 rounded-xl space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded bg-[#0c0e14] flex items-center justify-center font-bold text-[#d0bcff]">
                    03
                  </span>
                  <div>
                    <span className="font-bold text-white text-sm">de_nuke</span>
                    <span className="text-[10px] text-[#958ea0] block">267 Partidas</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-[#d0bcff]">Pick 18%</span>
                  <span className="text-[10px] text-red-400 block">Ban 32%</span>
                </div>
              </div>
              <div className="w-full h-2 bg-[#0c0e14] rounded overflow-hidden flex">
                <div className="h-full bg-[#4cd7f6]" style={{ width: '56%' }} />
                <div className="h-full bg-red-400" style={{ width: '44%' }} />
              </div>
              <div className="flex justify-between text-[11px] text-[#cbc3d7]">
                <span>CT Winrate: 56.0%</span>
                <span>T Winrate: 44.0%</span>
              </div>
            </div>

            {/* Ancient & Anubis grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-[#191b22] border border-[#282a30] space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-white">
                  <span>de_ancient</span>
                  <span className="text-[#d0bcff]">178 M</span>
                </div>
                <div className="w-full h-1.5 bg-[#0c0e14] rounded overflow-hidden flex">
                  <div className="h-full bg-[#4cd7f6]" style={{ width: '53%' }} />
                  <div className="h-full bg-red-400" style={{ width: '47%' }} />
                </div>
                <span className="text-[10px] text-[#958ea0] block">CT 53% • T 47%</span>
              </div>

              <div className="p-3 rounded-xl bg-[#191b22] border border-[#282a30] space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-white">
                  <span>de_anubis</span>
                  <span className="text-[#d0bcff]">119 M</span>
                </div>
                <div className="w-full h-1.5 bg-[#0c0e14] rounded overflow-hidden flex">
                  <div className="h-full bg-[#4cd7f6]" style={{ width: '48%' }} />
                  <div className="h-full bg-red-400" style={{ width: '52%' }} />
                </div>
                <span className="text-[10px] text-[#4edea3] block">T-Fav (T 52%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Arsenal & Letalidad (5 cols) */}
        <div className="xl:col-span-5 bg-[#111319] border border-[#282a30] p-6 rounded-2xl shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#282a30]">
            <div>
              <span className="text-xs font-mono text-[#4cd7f6] uppercase font-bold tracking-wider">
                Arsenal y Letalidad
              </span>
              <h2 className="text-lg font-bold text-white uppercase mt-0.5">Distribución de Armas</h2>
            </div>
            <Crosshair className="w-4 h-4 text-[#958ea0]" />
          </div>

          <div className="space-y-3 font-mono text-xs">
            {/* AK-47 */}
            <div className="bg-[#191b22] border border-[#282a30] p-3.5 rounded-xl space-y-1.5">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-sm">AK-47</span>
                  <span className="px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 text-[10px]">T RIFLE</span>
                </div>
                <span className="text-sm font-bold text-[#d0bcff]">41.0% KILLS</span>
              </div>
              <div className="w-full h-2 bg-[#0c0e14] rounded overflow-hidden">
                <div className="h-full bg-[#a078ff]" style={{ width: '41%' }} />
              </div>
              <div className="flex justify-between text-[11px] text-[#cbc3d7]">
                <span>Precisión HS: <strong className="text-[#4edea3]">64.2%</strong></span>
                <span>Damage/Hit: <strong className="text-white">36.1 HP</strong></span>
              </div>
            </div>

            {/* M4A1-S */}
            <div className="bg-[#191b22] border border-[#282a30] p-3.5 rounded-xl space-y-1.5">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-sm">M4A1-S</span>
                  <span className="px-1.5 py-0.5 rounded bg-[#03b5d3]/20 text-[#4cd7f6] text-[10px]">CT SILENCED</span>
                </div>
                <span className="text-sm font-bold text-[#4cd7f6]">28.0% KILLS</span>
              </div>
              <div className="w-full h-2 bg-[#0c0e14] rounded overflow-hidden">
                <div className="h-full bg-[#4cd7f6]" style={{ width: '28%' }} />
              </div>
              <div className="flex justify-between text-[11px] text-[#cbc3d7]">
                <span>Precisión HS: <strong className="text-[#4edea3]">51.4%</strong></span>
                <span>Costo Eficiencia: <strong className="text-white">$2,900</strong></span>
              </div>
            </div>

            {/* AWP */}
            <div className="bg-[#191b22] border border-[#282a30] p-3.5 rounded-xl space-y-1.5">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-sm">AWP</span>
                  <span className="px-1.5 py-0.5 rounded bg-[#00a572]/20 text-[#4edea3] text-[10px]">SNIPER</span>
                </div>
                <span className="text-sm font-bold text-[#4edea3]">14.0% KILLS</span>
              </div>
              <div className="w-full h-2 bg-[#0c0e14] rounded overflow-hidden">
                <div className="h-full bg-[#4edea3]" style={{ width: '14%' }} />
              </div>
              <div className="flex justify-between text-[11px] text-[#cbc3d7]">
                <span>1st Pick Winrate: <strong className="text-[#4edea3]">82.3%</strong></span>
                <span>Opening Duels: <strong className="text-white">3,204</strong></span>
              </div>
            </div>

            {/* Sub-weapons */}
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2.5 rounded-lg bg-[#191b22] border border-[#282a30]">
                <span className="font-bold text-white block">Desert Eagle</span>
                <span className="text-[#d0bcff] font-bold">9.2% Kills (61% HS)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#191b22] border border-[#282a30]">
                <span className="font-bold text-white block">MP9 / Galil</span>
                <span className="text-[#4cd7f6] font-bold">7.8% Kills (Eco Buy)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Season Records Table */}
      <div className="bg-[#111319] border border-[#282a30] rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#282a30]">
          <div>
            <span className="text-xs font-mono text-[#4edea3] uppercase font-bold tracking-wider">
              Hitos Competitivos
            </span>
            <h2 className="text-lg font-bold text-white uppercase mt-0.5">
              Récords Oficiales de Temporada (Clausura 2026)
            </h2>
          </div>
          <span className="text-xs font-mono text-[#958ea0]">Filtro: Servidores Oficiales</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono border-collapse">
            <thead>
              <tr className="bg-[#0c0e14] text-[#958ea0] uppercase border-b border-[#282a30]">
                <th className="py-3 px-4">Categoría del Récord</th>
                <th className="py-3 px-4">Jugador / Escuadra</th>
                <th className="py-3 px-4">Valor Registrado</th>
                <th className="py-3 px-4">Mapa & Fecha</th>
                <th className="py-3 px-4 text-right">Demo / VOD</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#282a30]">
              <tr className="hover:bg-[#191b22] transition-colors">
                <td className="py-3 px-4 font-bold text-white">Mayor Cantidad de Frags</td>
                <td className="py-3 px-4 text-[#4cd7f6]">[ZGA] Pacuno_CS</td>
                <td className="py-3 px-4 text-[#4edea3] font-bold">42 Frags (142.6 ADR)</td>
                <td className="py-3 px-4 text-[#cbc3d7]">de_inferno • 18 Oct</td>
                <td className="py-3 px-4 text-right">
                  <button className="text-xs text-[#a078ff] hover:underline">DEMO #ZGA-8821</button>
                </td>
              </tr>
              <tr className="hover:bg-[#191b22] transition-colors">
                <td className="py-3 px-4 font-bold text-white">Clutch 1v4 Más Veloz</td>
                <td className="py-3 px-4 text-[#cbc3d7]">[K1NG] vortex_99</td>
                <td className="py-3 px-4 text-[#4cd7f6] font-bold">5.2 Segundos (4 Deagle HS)</td>
                <td className="py-3 px-4 text-[#cbc3d7]">de_mirage • 02 Nov</td>
                <td className="py-3 px-4 text-right">
                  <button className="text-xs text-[#a078ff] hover:underline">DEMO #ZGA-9104</button>
                </td>
              </tr>
              <tr className="hover:bg-[#191b22] transition-colors">
                <td className="py-3 px-4 font-bold text-white">Racha de Victorias</td>
                <td className="py-3 px-4 text-[#d0bcff]">Zingaro White Squad</td>
                <td className="py-3 px-4 text-[#4edea3] font-bold">19 Matches Invictos</td>
                <td className="py-3 px-4 text-[#cbc3d7]">Multi-mapa • Sep-Oct</td>
                <td className="py-3 px-4 text-right">
                  <button className="text-xs text-[#a078ff] hover:underline">LOG #STK-09</button>
                </td>
              </tr>
              <tr className="hover:bg-[#191b22] transition-colors">
                <td className="py-3 px-4 font-bold text-white">Mayor Precisión Disparo</td>
                <td className="py-3 px-4 text-[#4cd7f6]">[AND] ScreaM_Clone</td>
                <td className="py-3 px-4 text-[#4edea3] font-bold">86.4% Headshots</td>
                <td className="py-3 px-4 text-[#cbc3d7]">de_nuke • 12 Nov</td>
                <td className="py-3 px-4 text-right">
                  <button className="text-xs text-[#a078ff] hover:underline">DEMO #ZGA-9442</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
