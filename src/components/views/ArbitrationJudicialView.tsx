import React, { useState } from 'react';
import { ViewType } from '../../types/esports';
import {
  BookOpen,
  Search,
  Scale,
  ShieldAlert,
  FileCheck,
  Download,
  AlertTriangle,
  ChevronRight,
  CheckCircle2,
  Clock,
  ExternalLink,
  HelpCircle,
  Calculator
} from 'lucide-react';

interface ArbitrationJudicialViewProps {
  onSelectView: (view: ViewType) => void;
}

interface RuleArticle {
  number: string;
  title: string;
  category: 'Roster' | 'Anti-Cheat' | 'Puntualidad' | 'Servidores' | 'Sanciones';
  summary: string;
  details: string[];
  sanctionScale: string;
}

const OFFICIAL_RULES: RuleArticle[] = [
  {
    number: 'Art. 1',
    title: 'Elegibilidad de Roster, Sustituciones & Roster Lock',
    category: 'Roster',
    summary: 'Condiciones de registro de los 5 titulares y hasta 2 suplentes oficiales para la temporada.',
    details: [
      'El Roster Lock entra en vigencia a las 23:59 hs (UTC-3) previas al inicio de la Jornada 1.',
      'Solo se permite 1 stand-in simultáneo en servidor por partido oficial.',
      'El stand-in no puede pertenecer ni haber jugado para otro equipo en la misma división de la liga durante la temporada en curso.',
      'Toda solicitud de sustitución de emergencia médica o de conectividad debe elevarse al Comisario con al menos 30 minutos de antelación.'
    ],
    sanctionScale: 'Descalificación del partido (Forfeit 0-13) y apercibimiento formal al capitán.'
  },
  {
    number: 'Art. 2',
    title: 'Zingaro Shield Anti-Cheat & Verificación de Integridad',
    category: 'Anti-Cheat',
    summary: 'Obligatoriedad de ejecución del cliente kernel y validación de SteamID64.',
    details: [
      'Todo jugador debe iniciar el cliente Zingaro Shield en su ordenador antes de ingresar a la IP del servidor.',
      'Los parámetros de lanzamiento de CS2 no deben incluir comandos de manipulación de memoria o renderizado externo.',
      'Las grabaciones GOTV 128-tick y los logs de net_graph son prueba forense inmutable y vinculante.'
    ],
    sanctionScale: 'Baneo permanente de 2 a 5 años de todo el circuito competitivo Zingaro Esports.'
  },
  {
    number: 'Art. 3',
    title: 'Tiempos de Tolerancia, Check-in & Incomparecencia (W.O.)',
    category: 'Puntualidad',
    summary: 'Márgenes de tiempo reglamentarios para el ingreso al servidor de partido.',
    details: [
      'Tolerancia máxima de 15 minutos exactos a partir de la hora fijada en el Matchroom.',
      'Si un equipo presenta 4 jugadores al minuto 15:01, el árbitro declarará Forfeit automático.',
      'Si ambos equipos incurren en retraso no justificado, el match se registrará como empate técnico sin asignación de puntos.'
    ],
    sanctionScale: 'Pérdida del partido por W.O. y deducción de 25 puntos de Fair Play institucional.'
  },
  {
    number: 'Art. 4',
    title: 'Pausas Tácticas, Pausas Técnicas & Round Restore',
    category: 'Servidores',
    summary: 'Uso de tiempos muertos y protocolos ante caídas imprevistas de red o hardware.',
    details: [
      'Cada equipo dispone de 4 pausas tácticas de 30 segundos mediante comando in-game.',
      'Las pausas técnicas arbitrales solo pueden ser ordenadas por el árbitro asignado (máximo 10 minutos por mapa).',
      'Si un jugador cae antes del primer daño/kill de la ronda, la ronda se reiniciará inmediatamente (Round Restart).',
      'Si el drop ocurre luego del primer daño, la ronda se juega hasta el final y se evalúa Round Restore al tick previo.'
    ],
    sanctionScale: 'Penalización con pérdida de una pausa táctica adicional en caso de abuso no justificado.'
  },
  {
    number: 'Art. 5',
    title: 'Conducta Antideportiva, Chat & Toxicidad In-Game',
    category: 'Sanciones',
    summary: 'Respeto recíproco en comunicaciones durante la transmisión y partido oficial.',
    details: [
      'El uso del comando "say" (chat global) está terminantemente prohibido excepto para avisos de pausa técnica (GH, HF, PAUSE, READY).',
      'Cualquier manifestación denigrante, xenófoba, racista o de acoso será sancionada sin necesidad de advertencia previa.'
    ],
    sanctionScale: 'Suspensión de 1 a 6 jornadas competitivas y multa económica al premio del equipo.'
  }
];

export const ArbitrationJudicialView: React.FC<ArbitrationJudicialViewProps> = ({ onSelectView }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedArticle, setSelectedArticle] = useState<RuleArticle>(OFFICIAL_RULES[0]);
  
  // Interactive Sanction Calculator State
  const [incidentType, setIncidentType] = useState('unauthorized_standin');
  const [isRepeatOffender, setIsRepeatOffender] = useState(false);

  const filteredRules = OFFICIAL_RULES.filter((rule) => {
    const matchesSearch =
      rule.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rule.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rule.number.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'ALL' || rule.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const calculateSanction = () => {
    switch (incidentType) {
      case 'unauthorized_standin':
        return isRepeatOffender
          ? 'Descalificación de la Temporada + Descenso de División + 6 meses sin competir.'
          : 'Pérdida del partido en disputa (0-13) + Pérdida de 3 puntos en tabla general.';
      case 'unpunctuality_wo':
        return isRepeatOffender
          ? 'Eliminación del torneo en curso + Pérdida de fianza de inscripción.'
          : 'Forfeit automático (0-13) + Advertencia disciplinaria formal.';
      case 'toxicity_chat':
        return isRepeatOffender
          ? 'Baneo de 3 a 5 jornadas oficiales para el jugador infractor.'
          : 'Apercibimiento + Silenciamiento obligatorio en partidos oficiales por 1 fecha.';
      case 'external_cheat':
        return 'Baneo permanente de por vida de la plataforma Zingaro Esports + Comunicación a VALVE y circuitos asociados.';
      default:
        return 'Evaluación caso por caso en Tribunal Disciplinario.';
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  MARCO REGULATORIO OFICIAL CS2
                </span>
                <span className="text-xs font-mono text-neutral-400">EDICIÓN TEMPORADA 2026</span>
              </div>
              <h1 className="text-2xl font-bold text-white tracking-wide mt-1">
                Jurisprudencia Arbitral & Manual Reglamentario
              </h1>
              <p className="text-sm text-neutral-400 mt-0.5">
                Cuerpo normativo unificado para competencias oficiales, baremos de sanción y jurisprudencia del Tribunal de Ética.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => alert('Descargando PDF Oficial del Reglamento Zingaro CS2 v2.4...')}
              className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-200 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Descargar PDF Oficial</span>
            </button>
            <button
              onClick={() => onSelectView('disputes')}
              className="px-4 py-2 bg-amber-600/20 hover:bg-amber-600/30 border border-amber-500/40 text-amber-300 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <Scale className="w-4 h-4" />
              <span>Ver Casos Activos</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between bg-neutral-900 border border-neutral-800 p-3.5 rounded-xl">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por artículo, tema, stand-in, ping..."
            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
          />
        </div>

        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
          {['ALL', 'Roster', 'Anti-Cheat', 'Puntualidad', 'Servidores', 'Sanciones'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                selectedCategory === cat
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                  : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {cat === 'ALL' ? 'Todos' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Articles Browser + Article Detail & Interactive Calculator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Rules List (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          <h2 className="text-sm font-semibold text-white px-1">Artículos Tipificados ({filteredRules.length})</h2>

          <div className="space-y-2.5">
            {filteredRules.map((rule) => {
              const isSelected = selectedArticle.number === rule.number;
              return (
                <div
                  key={rule.number}
                  onClick={() => setSelectedArticle(rule)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-neutral-800 border-amber-500 shadow-md ring-1 ring-amber-500/30'
                      : 'bg-neutral-900 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-amber-400">{rule.number}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-950 text-neutral-300 border border-neutral-800">
                      {rule.category}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold text-white mt-1.5">{rule.title}</h3>
                  <p className="text-[11px] text-neutral-400 mt-1 line-clamp-2">{rule.summary}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Article Full Details & Calculator (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Article Full Detail View */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-lg space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div>
                <span className="font-mono text-sm font-bold text-amber-400">{selectedArticle.number}</span>
                <h3 className="text-lg font-bold text-white mt-0.5">{selectedArticle.title}</h3>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                {selectedArticle.category}
              </span>
            </div>

            <p className="text-xs text-neutral-300 font-medium leading-relaxed">
              {selectedArticle.summary}
            </p>

            <div className="space-y-2 mt-4">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
                Disposiciones Reglamentarias:
              </span>
              <ul className="space-y-2 text-xs text-neutral-300">
                {selectedArticle.details.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-neutral-950/60 p-3 rounded-lg border border-neutral-800/60">
                    <ChevronRight className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-red-950/20 border border-red-500/30">
              <span className="text-xs font-mono text-red-400 font-bold block mb-1">
                Sanción Tipificada Aplicable:
              </span>
              <p className="text-xs text-neutral-300">{selectedArticle.sanctionScale}</p>
            </div>
          </div>

          {/* Interactive Sanction Calculator */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-lg space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-neutral-800">
              <Calculator className="w-5 h-5 text-cyan-400" />
              <h3 className="text-sm font-bold text-white">
                Simulador & Baremo de Sanciones Disciplinarias
              </h3>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs text-neutral-400 block mb-1.5">Naturaleza de la Falta Comprobada:</label>
                <select
                  value={incidentType}
                  onChange={(e) => setIncidentType(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="unauthorized_standin">Uso de Stand-in no autorizado o fuera de Roster Lock</option>
                  <option value="unpunctuality_wo">Incomparecencia / Superación de 15 min de tolerancia</option>
                  <option value="toxicity_chat">Conducta antideportiva o insultos en chat oficial</option>
                  <option value="external_cheat">Detección de trampa externa / Asistencia robótica</option>
                </select>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="repeatOffender"
                  checked={isRepeatOffender}
                  onChange={(e) => setIsRepeatOffender(e.target.checked)}
                  className="rounded border-neutral-700 text-cyan-500 focus:ring-0"
                />
                <label htmlFor="repeatOffender" className="text-xs text-neutral-300 cursor-pointer">
                  Agravante: ¿Existe reincidencia en la misma temporada?
                </label>
              </div>

              {/* Result Box */}
              <div className="mt-3 p-4 rounded-xl bg-neutral-950 border border-cyan-500/40">
                <span className="text-[11px] font-mono text-cyan-400 font-bold block mb-1">
                  DICTAMEN SUGERIDO POR JURISPRUDENCIA:
                </span>
                <p className="text-xs font-semibold text-white leading-relaxed">
                  {calculateSanction()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
