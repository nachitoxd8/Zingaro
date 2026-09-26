import React, { useState } from 'react';
import { ViewType } from '../../types/esports';
import {
  Code,
  Copy,
  Check,
  Download,
  Terminal,
  Play,
  Cpu,
  Shield,
  Layers,
  Sparkles,
  Send,
  Zap,
  CheckCircle2,
  FileCode,
  Braces
} from 'lucide-react';

interface ExportAiStudioViewProps {
  onSelectView: (view: ViewType) => void;
}

export const ExportAiStudioView: React.FC<ExportAiStudioViewProps> = ({ onSelectView }) => {
  const [copiedSpec, setCopiedSpec] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'instructions' | 'tools' | 'playground'>('preview');
  const [playgroundPrompt, setPlaygroundPrompt] = useState(
    'Simular cambio de mapa a de_anubis mediante execute_rcon_command...'
  );
  const [playgroundLog, setPlaygroundLog] = useState<Array<{ role: 'user' | 'model'; content: string; toolCall?: string }>>([
    {
      role: 'user',
      content: 'Comisario Gemini, verificar si el jugador Pacuno_CS tiene autorización de Roster Lock para el partido SF1 vs Iguazú Gaming.'
    },
    {
      role: 'model',
      toolCall: 'TOOL_CALL: verify_roster_lock_status({\n  "team_id": "ZGA-PRO-2026",\n  "steam_id": "76561198012345678"\n})',
      content: 'El jugador Pacuno_CS (SteamID: ...5678) se encuentra HABILITADO para la Semifinal 01. Cumple con la regla de 72 horas de inscripción previa y no posee sanciones vigentes de VAC ni reportes de Anti-Cheat abiertos.'
    }
  ]);

  const handleCopySpec = () => {
    setCopiedSpec(true);
    navigator.clipboard.writeText(JSON.stringify({
      model: 'models/gemini-2.5-pro',
      systemInstruction: 'Eres el Comisario Táctico y Copiloto Operativo de Zingaro Gaming CS2. Supervisar el cumplimiento del reglamento oficial (Veto de Mapas, Pausas Técnicas, Roster Locks de 72hs y validez de cuentas SteamID64 vinculadas)...',
      tools: [
        { name: 'get_match_telemetry', parameters: { match_id: 'string' } },
        { name: 'execute_rcon_command', parameters: { server_id: 'string', cmd: 'string' } },
        { name: 'verify_roster_lock_status', parameters: { team_id: 'string', steam_id: 'string' } },
        { name: 'sync_discord_availability', parameters: { captain_id: 'string' } }
      ]
    }, null, 2));
    setTimeout(() => setCopiedSpec(false), 2500);
  };

  const handleCopyCode = () => {
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleSendPrompt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!playgroundPrompt.trim()) return;

    setPlaygroundLog((prev) => [
      ...prev,
      { role: 'user', content: playgroundPrompt },
      {
        role: 'model',
        toolCall: 'TOOL_CALL: execute_rcon_command({\n  "server_id": "ZNG-CS2-01",\n  "cmd": "changelevel de_anubis"\n})',
        content: 'Comando RCON enviado exitosamente al host ZNG-CS2-01. El mapa cambiará al término del warmup o por orden de árbitro.'
      }
    ]);
    setPlaygroundPrompt('');
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-[#111319] border border-[#282a30] rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-[#d0bcff]/5 blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 -bottom-20 w-64 h-64 rounded-full bg-[#4cd7f6]/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#958ea0] uppercase tracking-widest">
              <span className="text-[#4cd7f6] font-bold">DEV & ARCHITECTURE</span>
              <span>//</span>
              <span>EXPORT HUB</span>
              <span>//</span>
              <span className="text-[#d0bcff] font-bold">GOOGLE AI STUDIO PLAYGROUND</span>
            </div>

            <h1 className="text-2xl font-bold text-white uppercase tracking-tight flex items-center gap-3 flex-wrap">
              <span>Centro de Exportación & AI Studio Integration</span>
              <span className="px-2.5 py-0.5 rounded bg-[#a078ff] text-white text-xs font-mono font-bold">
                GEMINI 2.5 PRO
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#191b22] text-[#4edea3]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse" />
                Gemini 2.5 Pro Ready
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#191b22] text-[#4cd7f6]">
                <Braces className="w-3.5 h-3.5" />
                Schema OpenAPI 3.1 Válido
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#191b22] text-[#cbc3d7]">
                <Terminal className="w-3.5 h-3.5 text-[#d0bcff]" />
                System Instructions Compiladas
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#191b22] text-[#d0bcff]">
                Context Window: 18.4k / 1M Tokens (1.8%)
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCopySpec}
              className="px-4 py-2 rounded-lg bg-[#a078ff] hover:bg-[#8B5CF6] text-white text-xs font-mono font-bold uppercase transition-all shadow-[0_0_14px_rgba(160,120,255,0.4)] flex items-center gap-1.5"
            >
              {copiedSpec ? <Check className="w-4 h-4 text-[#4edea3]" /> : <Copy className="w-4 h-4" />}
              <span>{copiedSpec ? '¡Spec Copiada!' : 'Copiar Spec AI Studio'}</span>
            </button>
            <button
              onClick={() => alert('Descargando bundle JSON compatible con Google AI Studio...')}
              className="px-3.5 py-2 rounded-lg bg-[#191b22] hover:bg-[#282a30] text-white text-xs font-mono transition-colors flex items-center gap-1.5 border border-[#282a30]"
            >
              <Download className="w-4 h-4 text-[#4cd7f6]" />
              <span>Bundle JSON</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-[#282a30] pb-2 text-xs font-mono">
        <button
          onClick={() => setActiveTab('preview')}
          className={`px-4 py-2 rounded-lg font-bold transition-colors ${
            activeTab === 'preview'
              ? 'bg-[#1e1f26] text-[#d0bcff] border border-[#a078ff]/40 shadow-sm'
              : 'text-[#cbc3d7] hover:text-white'
          }`}
        >
          Vista Previa UI & Componentes
        </button>
        <button
          onClick={() => setActiveTab('instructions')}
          className={`px-4 py-2 rounded-lg font-bold transition-colors ${
            activeTab === 'instructions'
              ? 'bg-[#1e1f26] text-[#d0bcff] border border-[#a078ff]/40 shadow-sm'
              : 'text-[#cbc3d7] hover:text-white'
          }`}
        >
          System Instructions & Context
        </button>
        <button
          onClick={() => setActiveTab('tools')}
          className={`px-4 py-2 rounded-lg font-bold transition-colors ${
            activeTab === 'tools'
              ? 'bg-[#1e1f26] text-[#d0bcff] border border-[#a078ff]/40 shadow-sm'
              : 'text-[#cbc3d7] hover:text-white'
          }`}
        >
          Tool Declarations (CS2 APIs)
        </button>
        <button
          onClick={() => setActiveTab('playground')}
          className={`px-4 py-2 rounded-lg font-bold transition-colors ${
            activeTab === 'playground'
              ? 'bg-[#1e1f26] text-[#d0bcff] border border-[#a078ff]/40 shadow-sm'
              : 'text-[#cbc3d7] hover:text-white'
          }`}
        >
          Gemini Test Playground
        </button>
      </div>

      {/* Main Dual Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Left Column (7 cols): Live Component / Code / Tokens */}
        <div className="xl:col-span-7 space-y-5">
          {/* Visual Component Preview */}
          <div className="bg-[#111319] border border-[#282a30] rounded-2xl p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-white font-bold uppercase">
                Component Target: Matchroom & RCON Widget
              </span>
              <span className="text-[#4cd7f6]">1920x1080 Viewport</span>
            </div>

            {/* Simulated Component Card */}
            <div className="bg-[#0c0e14] border border-[#282a30] rounded-xl p-4 space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-[#282a30] text-xs font-mono">
                <span className="flex items-center gap-1.5 text-red-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" /> EN VIVO • SEMIFINAL 01
                </span>
                <span className="text-[#4cd7f6]">GOTV: 128 TICK • ZINGARO SHIELD OK</span>
              </div>

              <div className="grid grid-cols-11 items-center py-2">
                <div className="col-span-4 flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-[#03b5d3]/20 flex items-center justify-center font-bold font-mono text-[#4cd7f6]">
                    ZGA
                  </div>
                  <div>
                    <span className="font-bold text-white text-sm block">Zingaro Pro</span>
                    <span className="text-[10px] font-mono text-[#4edea3]">CT Side // $14,250 Def</span>
                  </div>
                </div>

                <div className="col-span-3 text-center">
                  <div className="text-2xl font-bold font-mono text-white">11 : 09</div>
                  <span className="text-[10px] font-mono text-[#d0bcff]">Ronda 21 de 24</span>
                </div>

                <div className="col-span-4 flex items-center justify-end gap-2.5 text-right">
                  <div>
                    <span className="font-bold text-white text-sm block">Iguazú Clan</span>
                    <span className="text-[10px] font-mono text-red-400">T Side // $3,100 Plant</span>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[#191b22] flex items-center justify-center font-bold font-mono text-[#958ea0]">
                    IGZ
                  </div>
                </div>
              </div>

              <div className="p-2 rounded bg-[#191b22] text-[11px] font-mono text-[#958ea0] flex items-center justify-between">
                <span>RCON: BUE-CS2-04</span>
                <span>ADR Líder: Pacuno (114.2)</span>
                <span className="text-[#4edea3]">Integridad AI OK</span>
              </div>
            </div>
          </div>

          {/* Code Inspection Block */}
          <div className="bg-[#111319] border border-[#282a30] rounded-2xl p-5 shadow-xl space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-white font-bold">React / Tailwind Component Snippet</span>
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1 text-[#d0bcff] hover:underline"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Copiado' : 'Copiar Código'}</span>
              </button>
            </div>

            <div className="bg-[#0c0e14] border border-[#282a30] rounded-xl p-4 overflow-x-auto text-[11px] leading-relaxed text-[#cbc3d7]">
              <pre>{`export const ZingaroMatchroomWidget = ({ matchId, telemetry }: MatchProps) => {
  // Gemini 2.5 Function Calling Hook for Realtime State
  const { executeRconCommand, refereeAnalysis } = useGeminiCommissar(matchId);

  return (
    <div className="bg-surface-container rounded-lg p-4 shadow-md">
      <MatchHeader phase="SEMIFINAL 01" map="de_inferno" live />
      <VersusRoster 
        teamA="Zingaro Pro" scoreA={11} 
        teamB="Iguazú Clan" scoreB={9} 
      />
      <RconTelemetryBar rconStatus="READY" ping={24} />
    </div>
  );
};`}</pre>
            </div>
          </div>

          {/* Context Consumption */}
          <div className="bg-[#111319] border border-[#282a30] rounded-2xl p-4 shadow-xl flex items-center justify-between gap-4 font-mono text-xs">
            <div>
              <span className="text-[10px] text-[#958ea0] uppercase block">
                Consumo de Contexto y Tokenización
              </span>
              <span className="text-lg font-bold text-white">18,412 Tokens Compilados</span>
              <p className="text-[11px] text-[#cbc3d7] mt-0.5">
                System prompt + 4 Function schemas + Estado actual del bracket eliminatorio CS2.
              </p>
            </div>

            <div className="w-16 h-16 rounded-full border-4 border-[#a078ff] flex items-center justify-center text-sm font-bold text-white shrink-0">
              1.8%
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): System Instructions, Declared Tools & Playground */}
        <div className="xl:col-span-5 space-y-5 font-mono text-xs">
          {/* System Instructions */}
          <div className="bg-[#111319] border border-[#282a30] rounded-2xl p-5 shadow-xl space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#282a30]">
              <span className="font-bold text-white uppercase">System Instructions (Gemini 2.5)</span>
              <span className="text-[#4cd7f6]">temp: 0.20</span>
            </div>
            <div className="bg-[#0c0e14] border border-[#282a30] rounded-xl p-3.5 space-y-2 text-[#cbc3d7] text-[11px] leading-relaxed max-h-40 overflow-y-auto">
              <p className="text-[#d0bcff] font-bold">
                "Eres el Comisario Táctico y Copiloto Operativo de Zingaro Gaming CS2..."
              </p>
              <p>
                1. Supervisar el cumplimiento del reglamento oficial (Veto de Mapas, Pausas Técnicas, Roster Locks de 72hs y validez de cuentas SteamID64 vinculadas).
              </p>
              <p>
                2. Priorizar el uso de llamadas a funciones nativas declaradas (`execute_rcon_command`, `get_match_telemetry`) antes de emitir un fallo de comisariato.
              </p>
              <p>
                3. Mantener neutralidad deportiva absoluta, utilizando respuestas concisas y terminología estándar de Counter-Strike 2.
              </p>
            </div>
          </div>

          {/* Declared Tools */}
          <div className="bg-[#111319] border border-[#282a30] rounded-2xl p-5 shadow-xl space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#282a30]">
              <span className="font-bold text-white uppercase">Declared Tools // CS2 Integration</span>
              <span className="px-2 py-0.5 rounded bg-[#03b5d3]/20 text-[#4cd7f6] font-bold text-[10px]">
                4 Funciones Activas
              </span>
            </div>

            <div className="space-y-2">
              {[
                { name: 'get_match_telemetry', arg: '(match_id: string)', type: 'READ', color: 'text-[#4edea3]' },
                { name: 'execute_rcon_command', arg: '(server_id, cmd)', type: 'EXEC', color: 'text-red-400' },
                { name: 'verify_roster_lock_status', arg: '(team_id, steam_id)', type: 'AUTH', color: 'text-[#4cd7f6]' },
                { name: 'sync_discord_availability', arg: '(captain_id)', type: 'CRON', color: 'text-[#d0bcff]' }
              ].map((tool, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-[#0c0e14] border border-[#282a30] flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a078ff]" />
                    <span className="font-bold text-white">{tool.name}</span>
                    <span className="text-[#958ea0]">{tool.arg}</span>
                  </div>
                  <span className={`font-bold ${tool.color}`}>{tool.type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Playground */}
          <div className="bg-[#111319] border border-[#282a30] rounded-2xl p-5 shadow-xl space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#282a30]">
              <span className="font-bold text-white uppercase">Test Playground Simulator</span>
              <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse" />
            </div>

            {/* Conversation Log */}
            <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
              {playgroundLog.map((log, idx) => (
                <div key={idx} className="space-y-1">
                  {log.role === 'user' ? (
                    <div className="p-2.5 rounded-lg bg-[#191b22] border border-[#282a30] space-y-1">
                      <span className="text-[10px] text-[#4cd7f6] font-bold block">
                        USER // COMISARIO TOURNAMENT
                      </span>
                      <p className="text-white">{log.content}</p>
                    </div>
                  ) : (
                    <div className="space-y-1.5 pl-2 border-l-2 border-[#a078ff]">
                      {log.toolCall && (
                        <div className="p-2 rounded bg-[#0c0e14] border border-[#282a30] text-[#4edea3] text-[10px]">
                          <pre className="whitespace-pre-wrap">{log.toolCall}</pre>
                        </div>
                      )}
                      <div className="p-2.5 rounded-lg bg-[#1e1f26] border border-[#33343b] space-y-1">
                        <span className="text-[10px] text-[#d0bcff] font-bold block">
                          GEMINI 2.5 PRO (200 OK)
                        </span>
                        <p className="text-[#cbc3d7]">{log.content}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendPrompt} className="flex gap-2 pt-2 border-t border-[#282a30]">
              <input
                type="text"
                value={playgroundPrompt}
                onChange={(e) => setPlaygroundPrompt(e.target.value)}
                placeholder="Escribe un prompt para probar function calling..."
                className="flex-1 bg-[#0c0e14] border border-[#282a30] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#a078ff]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#a078ff] hover:bg-[#8B5CF6] text-white rounded-lg font-bold uppercase transition-all shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
