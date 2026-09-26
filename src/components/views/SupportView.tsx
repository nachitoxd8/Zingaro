import React, { useState } from 'react';
import { ViewType, SupportTicket } from '../../types/esports';
import {
  Headphones,
  Send,
  Paperclip,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Server,
  FileText,
  User,
  Shield,
  Plus
} from 'lucide-react';
import { SUPPORT_TICKETS_DATA } from '../../data/mockData';

interface SupportViewProps {
  onSelectView: (view: ViewType) => void;
}

export const SupportView: React.FC<SupportViewProps> = ({ onSelectView }) => {
  const [tickets, setTickets] = useState<SupportTicket[]>(SUPPORT_TICKETS_DATA);
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket>(tickets[0]);
  const [replyMessage, setReplyMessage] = useState('');
  const [showNewModal, setShowNewModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyMessage.trim()) return;

    const newMsg = {
      sender: 'Pacuno_CS',
      role: 'Capitán Zingaro Academy',
      time: new Date().toLocaleTimeString().slice(0, 5),
      content: replyMessage
    };

    const updated = {
      ...selectedTicket,
      messages: [...selectedTicket.messages, newMsg]
    };

    setSelectedTicket(updated);
    setTickets(tickets.map((t) => (t.id === updated.id ? updated : t)));
    setReplyMessage('');
  };

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newTicket: SupportTicket = {
      id: `tk-${Date.now()}`,
      code: `#TK-${Math.floor(1000 + Math.random() * 9000)}`,
      title: newTitle,
      status: 'urgent',
      server: 'ZNG-CS2-01:27015',
      matchroomId: '#MR-2841',
      reportTime: 'Recién',
      arbitrator: 'Comisaría de Guardia',
      messages: [
        {
          sender: 'Pacuno_CS',
          role: 'Capitán Zingaro Academy',
          time: 'Recién',
          content: newDesc || newTitle
        }
      ]
    };

    setTickets([newTicket, ...tickets]);
    setSelectedTicket(newTicket);
    setShowNewModal(false);
    setNewTitle('');
    setNewDesc('');
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Headphones className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  CENTRAL DE SOPORTE & INCIDENCIAS EN VIVO
                </span>
                <span className="text-xs font-mono text-emerald-400">ÁRBITROS DISPONIBLES EN TURNO</span>
              </div>
              <h1 className="text-2xl font-bold text-white tracking-wide mt-1">
                Soporte Técnico, Reclamos & Mesa de Ayuda
              </h1>
              <p className="text-sm text-neutral-400 mt-0.5">
                Canal directo con comisarios oficiales para pausas técnicas, revisión de choke/loss y asistencia de matchrooms.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowNewModal(true)}
            className="px-4 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2 self-start md:self-auto shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Abrir Nuevo Ticket</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Ticket List (4 cols) + Active Chat Thread (8 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Ticket List */}
        <div className="lg:col-span-4 bg-neutral-900 border border-neutral-800 rounded-xl p-4 shadow-lg space-y-3">
          <h2 className="text-xs font-bold text-neutral-400 uppercase tracking-wider px-1">
            Mis Tickets de Competición ({tickets.length})
          </h2>

          <div className="space-y-2.5">
            {tickets.map((ticket) => {
              const isSelected = selectedTicket.id === ticket.id;
              return (
                <div
                  key={ticket.id}
                  onClick={() => setSelectedTicket(ticket)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-neutral-800 border-cyan-500 shadow-md ring-1 ring-cyan-500/30'
                      : 'bg-neutral-950/70 border-neutral-800/80 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-cyan-400">{ticket.code}</span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase font-semibold ${
                        ticket.status === 'urgent'
                          ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                          : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      }`}
                    >
                      {ticket.status}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold text-white mt-1.5 line-clamp-1">{ticket.title}</h3>
                  <div className="text-[11px] text-neutral-400 mt-1 flex items-center justify-between">
                    <span>{ticket.server}</span>
                    <span className="font-mono text-neutral-500">{ticket.reportTime}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Ticket Thread */}
        <div className="lg:col-span-8 bg-neutral-900 border border-neutral-800 rounded-xl p-5 shadow-lg flex flex-col h-[600px]">
          {/* Header */}
          <div className="pb-3 border-b border-neutral-800 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-cyan-400">{selectedTicket.code}</span>
                <span className="text-xs text-neutral-400">• Matchroom {selectedTicket.matchroomId}</span>
              </div>
              <h2 className="text-sm font-bold text-white mt-0.5">{selectedTicket.title}</h2>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-neutral-400 block">Comisario Responsable:</span>
              <span className="text-xs font-mono font-bold text-amber-300">{selectedTicket.arbitrator}</span>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto py-4 space-y-3 pr-2">
            {selectedTicket.messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-xl text-xs max-w-[85%] ${
                  msg.isArbitrator
                    ? 'bg-amber-950/20 border border-amber-500/40 text-neutral-200 ml-auto'
                    : msg.sender.includes('MatchBot')
                    ? 'bg-neutral-950 border border-neutral-800 text-cyan-300 text-center mx-auto w-full max-w-full font-mono'
                    : 'bg-neutral-950 border border-neutral-800 text-neutral-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1 pb-1 border-b border-neutral-800/60 text-[11px]">
                  <span className={`font-bold ${msg.isArbitrator ? 'text-amber-300' : 'text-cyan-400'}`}>
                    {msg.sender} ({msg.role})
                  </span>
                  <span className="font-mono text-neutral-500">{msg.time}</span>
                </div>
                <p className="leading-relaxed whitespace-pre-wrap">{msg.content}</p>

                {msg.attachments && (
                  <div className="mt-2 pt-2 border-t border-neutral-800/80 flex flex-wrap gap-2">
                    {msg.attachments.map((att, aIdx) => (
                      <span
                        key={aIdx}
                        className="px-2 py-1 bg-black/60 rounded border border-neutral-700 text-[10px] font-mono text-neutral-300 flex items-center gap-1"
                      >
                        <FileText className="w-3 h-3 text-cyan-400" />
                        <span>{att.name} ({att.size})</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Reply Form */}
          <form onSubmit={handleSendReply} className="pt-3 border-t border-neutral-800 flex gap-2">
            <input
              type="text"
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
              placeholder="Escribe una respuesta para el Comisario..."
              className="flex-1 bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Enviar</span>
            </button>
          </form>
        </div>
      </div>

      {/* New Ticket Modal */}
      {showNewModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <h3 className="text-base font-bold text-white">Nuevo Reclamo a Comisaría</h3>
              <button
                onClick={() => setShowNewModal(false)}
                className="text-neutral-400 hover:text-white text-xs"
              >
                Cerrar
              </button>
            </div>

            <form onSubmit={handleCreateTicket} className="space-y-3">
              <div>
                <label className="text-xs text-neutral-400 block mb-1">Título del Reclamo:</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Ej: Problemas de ruteo / Pérdida de paquetes en ZNG-CS2-01"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="text-xs text-neutral-400 block mb-1">Detalle de la Incidencia:</label>
                <textarea
                  rows={3}
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Explique lo ocurrido, número de ronda y jugadores afectados..."
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowNewModal(false)}
                  className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs rounded-lg"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold rounded-lg"
                >
                  Crear Ticket Oficial
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
