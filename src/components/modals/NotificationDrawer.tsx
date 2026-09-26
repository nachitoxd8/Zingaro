import React from 'react';
import {
  Bell,
  X,
  AlertTriangle,
  CheckCircle2,
  Server,
  Shield,
  ChevronRight,
  Clock
} from 'lucide-react';
import { ViewType } from '../../types/esports';

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectView: (view: ViewType) => void;
}

export const NotificationDrawer: React.FC<NotificationDrawerProps> = ({
  isOpen,
  onClose,
  onSelectView
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex justify-end backdrop-blur-xs animate-fadeIn">
      <div className="bg-neutral-900 border-l border-neutral-800 w-full max-w-sm h-full p-5 flex flex-col justify-between shadow-2xl">
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-amber-400" />
              <h3 className="text-base font-bold text-white">Centro de Notificaciones</h3>
            </div>
            <button onClick={onClose} className="text-neutral-400 hover:text-white p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-4 space-y-3 overflow-y-auto max-h-[calc(100vh-140px)]">
            {/* Urgent Notification 1 */}
            <div
              onClick={() => {
                onSelectView('matchroom');
                onClose();
              }}
              className="p-3.5 bg-neutral-950/80 hover:bg-neutral-800 border-l-4 border-red-500 rounded-r-xl border border-neutral-800 cursor-pointer transition-all space-y-1"
            >
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-mono text-red-400 font-bold">URGENTE • MATCH EN CURSO</span>
                <span className="text-neutral-500 font-mono">22:15</span>
              </div>
              <h4 className="text-xs font-bold text-white">Check-in y Veto Completados</h4>
              <p className="text-[11px] text-neutral-400">
                La sala del partido vs Misiones Esports se encuentra lista en el servidor ZNG-CS2-01.
              </p>
            </div>

            {/* Notification 2 */}
            <div
              onClick={() => {
                onSelectView('disputes');
                onClose();
              }}
              className="p-3.5 bg-neutral-950/80 hover:bg-neutral-800 border-l-4 border-amber-500 rounded-r-xl border border-neutral-800 cursor-pointer transition-all space-y-1"
            >
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-mono text-amber-400 font-bold">TRIBUNAL DISCIPLINARIO</span>
                <span className="text-neutral-500 font-mono">18:40</span>
              </div>
              <h4 className="text-xs font-bold text-white">Audiencia Caso #DISP-2026-041</h4>
              <p className="text-[11px] text-neutral-400">
                Se habilitó la descarga de demo GOTV con telemetría pericial de Canal B de_anubis.
              </p>
            </div>

            {/* Notification 3 */}
            <div
              onClick={() => {
                onSelectView('teams');
                onClose();
              }}
              className="p-3.5 bg-neutral-950/80 hover:bg-neutral-800 border-l-4 border-cyan-500 rounded-r-xl border border-neutral-800 cursor-pointer transition-all space-y-1"
            >
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-mono text-cyan-400 font-bold">ROSTER GATEWAY</span>
                <span className="text-neutral-500 font-mono">Ayer</span>
              </div>
              <h4 className="text-xs font-bold text-white">Roster Lock Oficial Activo</h4>
              <p className="text-[11px] text-neutral-400">
                Zingaro Academy confirmó la nómina de 5 titulares y suplente B4stian.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold rounded-lg transition-colors"
        >
          Cerrar Notificaciones
        </button>
      </div>
    </div>
  );
};
