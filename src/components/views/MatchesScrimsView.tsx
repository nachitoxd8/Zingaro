import React, { useState } from 'react';
import { ViewType } from '../../types/esports';
import {
  Gamepad2,
  Calendar,
  Clock,
  Swords,
  Shield,
  ChevronRight,
  Play,
  CheckCircle2,
  Sparkles,
  Zap,
  RotateCcw
} from 'lucide-react';

interface MatchesScrimsViewProps {
  onSelectView: (view: ViewType) => void;
}

const MAP_POOL = ['de_mirage', 'de_inferno', 'de_nuke', 'de_anubis', 'de_ancient', 'de_dust2', 'de_vertigo'];

export const MatchesScrimsView: React.FC<MatchesScrimsViewProps> = ({ onSelectView }) => {
  const [activeTab, setActiveTab] = useState<'matches' | 'scrims' | 'veto'>('matches');

  // Interactive Map Veto Simulation State
  const [bannedMaps, setBannedMaps] = useState<string[]>(['de_vertigo', 'de_dust2']);
  const [pickedMap, setPickedMap] = useState<string | null>('de_mirage');

  const handleBanMap = (mapName: string) => {
    if (bannedMaps.includes(mapName)) return;
    setBannedMaps([...bannedMaps, mapName]);
  };

  const handleResetVeto = () => {
    setBannedMaps([]);
    setPickedMap(null);
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Gamepad2 className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  COMPETICIONES & MATCHMAKING
                </span>
                <span className="text-xs font-mono text-emerald-400">SERVIDORES DEDICADOS AUTOMATIZADOS</span>
              </div>
              <h1 className="text-2xl font-bold text-white tracking-wide mt-1">
                Partidos Oficiales & Scrims de Entrenamiento
              </h1>
              <p className="text-sm text-neutral-400 mt-0.5">
                Organización de partidas, reserva de servidores 128T, sistema de veto de mapas y búsqueda de rivales.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectView('matchroom')}
              className="px-4 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-sm"
            >
              <Play className="w-4 h-4" />
              <span>Entrar al Matchroom #2841</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-neutral-800 pb-2">
        <button
          onClick={() => setActiveTab('matches')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
            activeTab === 'matches'
              ? 'bg-neutral-800 text-white border border-neutral-700'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          Partidos Oficiales
        </button>
        <button
          onClick={() => setActiveTab('scrims')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
            activeTab === 'scrims'
              ? 'bg-neutral-800 text-white border border-neutral-700'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          Buscador de Scrims (Prácticas)
        </button>
        <button
          onClick={() => setActiveTab('veto')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
            activeTab === 'veto'
              ? 'bg-neutral-800 text-white border border-neutral-700'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          Simulador de Veto de Mapas
        </button>
      </div>

      {/* TAB CONTENT: MATCHES */}
      {activeTab === 'matches' && (
        <div className="space-y-4">
          {/* Live Match Card */}
          <div
            onClick={() => onSelectView('matchroom')}
            className="p-5 rounded-xl bg-gradient-to-r from-cyan-950/30 via-neutral-900 to-neutral-900 border border-cyan-500/50 hover:border-cyan-400 cursor-pointer shadow-xl transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 animate-pulse">
                EN VIVO • SEMIFINAL LAN
              </span>
              <span className="text-xs font-mono text-neutral-400">Servidor ZNG-CS2-01 (14ms)</span>
            </div>

            <div className="mt-3 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="text-lg font-bold text-white">Zingaro Academy vs Misiones Esports</div>
                <div className="text-xs text-neutral-400 mt-0.5">
                  Mapa: de_mirage • Ronda 8 • Marcador parcial: 5 - 3 (CT/TR)
                </div>
              </div>

              <button className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 self-start md:self-auto">
                <span>Acceder a la Sala</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Upcoming Matches */}
          <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
            <div>
              <span className="text-xs font-mono text-neutral-500">PRÓXIMO ENCUENTRO • MAÑANA 21:00 HS</span>
              <div className="text-sm font-bold text-white mt-1">Posadas Five vs Guaraní Gaming</div>
              <div className="text-xs text-neutral-400">Liga Regional CS2 - Fase de Grupos B</div>
            </div>
            <span className="text-xs font-mono text-cyan-400 bg-neutral-950 px-3 py-1.5 rounded-lg border border-neutral-800">
              Check-in abre en 18h
            </span>
          </div>
        </div>
      )}

      {/* TAB CONTENT: SCRIMS */}
      {activeTab === 'scrims' && (
        <div className="space-y-4">
          <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-bold text-white">Publicar Oferta de Scrim</h3>
              <p className="text-xs text-neutral-400">
                Reserva automática de servidor 128T configurado con matchbot MR12 y demos GOTV.
              </p>
            </div>
            <button
              onClick={() => alert('Creando lobby de Scrim para Zingaro Academy en nodo ZNG-CS2-03...')}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2"
            >
              <Swords className="w-4 h-4" />
              <span>Crear Reto de Scrim</span>
            </button>
          </div>

          {/* Scrim Lobby List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Posadas Five [P5]</span>
                <span className="text-xs font-mono text-cyan-400">ELO 2280</span>
              </div>
              <p className="text-xs text-neutral-400">Buscan BO1/BO3 en de_inferno o de_anubis. Hoy 23:30hs.</p>
              <button
                onClick={() => alert('Desafío enviado a Posadas Five!')}
                className="w-full py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold rounded-lg border border-neutral-700 transition-colors"
              >
                Aceptar Reto
              </button>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Formosa Legion [FML]</span>
                <span className="text-xs font-mono text-cyan-400">ELO 2190</span>
              </div>
              <p className="text-xs text-neutral-400">Practicar tácticas en de_nuke. Servidor 128-tick.</p>
              <button
                onClick={() => alert('Desafío enviado a Formosa Legion!')}
                className="w-full py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold rounded-lg border border-neutral-700 transition-colors"
              >
                Aceptar Reto
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: VETO SIMULATOR */}
      {activeTab === 'veto' && (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-xl space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
            <div>
              <h3 className="text-base font-bold text-white">Simulador Interactivo de Veto (BO1 / BO3)</h3>
              <p className="text-xs text-neutral-400">Haga click en los mapas para banearlos alternadamente.</p>
            </div>
            <button
              onClick={handleResetVeto}
              className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-mono rounded flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar Veto</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {MAP_POOL.map((map) => {
              const isBanned = bannedMaps.includes(map);
              const isSelected = pickedMap === map;
              return (
                <div
                  key={map}
                  onClick={() => !isBanned && handleBanMap(map)}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    isBanned
                      ? 'bg-red-950/20 border-red-500/30 opacity-50 line-through'
                      : isSelected
                      ? 'bg-cyan-950/40 border-cyan-500 shadow-md ring-1 ring-cyan-500'
                      : 'bg-neutral-950 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <span className="text-xs font-mono font-bold text-white block capitalize">
                    {map.replace('de_', '')}
                  </span>
                  <span
                    className={`text-[10px] font-mono mt-1 block ${
                      isBanned ? 'text-red-400' : isSelected ? 'text-cyan-300 font-bold' : 'text-neutral-500'
                    }`}
                  >
                    {isBanned ? 'BANEADO' : isSelected ? 'MAPA ELEGIDO' : 'DISPONIBLE'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
