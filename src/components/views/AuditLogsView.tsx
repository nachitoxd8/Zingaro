import React, { useState } from 'react';
import { ViewType, AuditRecord } from '../../types/esports';
import {
  ShieldAlert,
  Search,
  Filter,
  Download,
  CheckCircle,
  AlertTriangle,
  Info,
  Lock,
  Copy,
  Check,
  Code,
  FileText,
  Calendar,
  Layers,
  Sparkles
} from 'lucide-react';
import { AUDIT_LOGS_DATA } from '../../data/mockData';

interface AuditLogsViewProps {
  onSelectView: (view: ViewType) => void;
}

export const AuditLogsView: React.FC<AuditLogsViewProps> = ({ onSelectView }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('ALL');
  const [selectedRecord, setSelectedRecord] = useState<AuditRecord>(AUDIT_LOGS_DATA[0]);
  const [copied, setCopied] = useState(false);

  const filteredLogs = AUDIT_LOGS_DATA.filter((log) => {
    const matchesSearch =
      log.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.operator.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.blockId.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSeverity = selectedSeverity === 'ALL' || log.severity === selectedSeverity;
    return matchesSearch && matchesSeverity;
  });

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(selectedRecord.payload, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  REGISTRO FORENSE CRIPTOGRÁFICO
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  CADENA DE BLOQUES ÍNTEGRA
                </span>
              </div>
              <h1 className="text-2xl font-bold text-white tracking-wide mt-1">
                Auditoría Inmutable & Trazabilidad de Acciones
              </h1>
              <p className="text-sm text-neutral-400 mt-0.5">
                Bitácora de seguridad con firmas criptográficas de cada comando RCON, asignación de roles y modificaciones en rosters.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => alert('Exportando registro en formato JSON sellado criptográficamente...')}
              className="px-3.5 py-2 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-200 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Exportar JSON</span>
            </button>
            <button
              onClick={() => alert('Generando informe forense CSV auditado por Zingaro Comisaría...')}
              className="px-3.5 py-2 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-200 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-purple-400" />
              <span>Exportar CSV</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between bg-neutral-900/90 border border-neutral-800 p-3.5 rounded-xl">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por ID, operador, acción, bloque..."
            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
          {['ALL', 'CRITICAL', 'WARN', 'SEC_ALERT', 'INFO'].map((sev) => (
            <button
              key={sev}
              onClick={() => setSelectedSeverity(sev)}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-colors ${
                selectedSeverity === sev
                  ? 'bg-purple-600/30 text-purple-200 border border-purple-500/50'
                  : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {sev}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Log List + Raw Payload Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Logs Table (7 cols) */}
        <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-lg">
          <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-white">Eventos Registrados ({filteredLogs.length})</h2>
            <span className="text-[11px] font-mono text-neutral-500">Hash SHA-256 Sincronizado</span>
          </div>

          <div className="divide-y divide-neutral-800/80 max-h-[580px] overflow-y-auto">
            {filteredLogs.map((log) => {
              const isSelected = selectedRecord.id === log.id;
              return (
                <div
                  key={log.id}
                  onClick={() => setSelectedRecord(log)}
                  className={`p-4 cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-neutral-800/90 border-l-4 border-purple-500'
                      : 'hover:bg-neutral-800/40 bg-neutral-900'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                          log.severity === 'CRITICAL'
                            ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                            : log.severity === 'SEC_ALERT'
                            ? 'bg-pink-500/20 text-pink-300 border border-pink-500/30'
                            : log.severity === 'WARN'
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            : 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20'
                        }`}
                      >
                        {log.severity}
                      </span>
                      <span className="font-mono text-xs text-neutral-300 font-semibold">{log.action}</span>
                    </div>
                    <span className="text-[11px] font-mono text-neutral-500">{log.timestamp}</span>
                  </div>

                  <div className="mt-2 flex items-center justify-between text-xs">
                    <span className="text-neutral-400">
                      Operador: <span className="text-white font-mono">{log.operator}</span>
                    </span>
                    <span className="font-mono text-[11px] text-purple-400 bg-purple-950/40 px-1.5 py-0.5 rounded">
                      {log.blockId}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Payload / Detail Viewer (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 shadow-lg flex flex-col h-[640px]">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-bold text-white font-mono uppercase">
                  Inspección de Bloque ({selectedRecord.id})
                </span>
              </div>
              <button
                onClick={handleCopyJson}
                className="flex items-center gap-1 text-[11px] text-neutral-400 hover:text-white transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copiado' : 'Copiar JSON'}</span>
              </button>
            </div>

            {/* Block Metadata */}
            <div className="my-3 space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-neutral-800/60">
                <span className="text-neutral-400">Firma Criptográfica:</span>
                <span className="text-emerald-400 font-mono flex items-center gap-1 text-[11px]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  VERIFICADA VÁLIDA
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-800/60">
                <span className="text-neutral-400">Timestamp UTC:</span>
                <span className="text-neutral-200 font-mono text-[11px]">{selectedRecord.timestamp}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-800/60">
                <span className="text-neutral-400">Hash Raíz Merkle:</span>
                <span className="text-purple-300 font-mono text-[11px] truncate max-w-[200px]">
                  0x9a83f12c...7b14d890
                </span>
              </div>
            </div>

            {/* JSON Code Window */}
            <div className="flex-1 bg-black/90 rounded-lg p-3.5 font-mono text-xs text-purple-200 overflow-y-auto border border-neutral-800/80">
              <pre>{JSON.stringify(selectedRecord.payload, null, 2)}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
