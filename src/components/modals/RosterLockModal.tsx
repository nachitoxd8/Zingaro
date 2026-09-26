import React, { useState } from 'react';
import {
  Lock,
  AlertTriangle,
  Upload,
  CheckCircle2,
  X,
  FileText,
  User,
  ShieldAlert
} from 'lucide-react';
import { STANDIN_PLAYER } from '../../data/mockData';

interface RosterLockModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: () => void;
}

export const RosterLockModal: React.FC<RosterLockModalProps> = ({
  isOpen,
  onClose,
  onSubmitSuccess
}) => {
  const [reason, setReason] = useState('fiber_cut');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onSubmitSuccess();
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Solicitud de Excepción de Roster Lock</h3>
              <p className="text-xs text-neutral-400">Expediente de Sustitución de Emergencia Art. 1.2</p>
            </div>
          </div>
          <button onClick={onClose} className="text-neutral-400 hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-6 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
            <h4 className="text-base font-bold text-white">¡Solicitud Elevada a Comisaría!</h4>
            <p className="text-xs text-neutral-400">
              El Comisario de guardia (#C-08) ha recibido la notificación en su panel de control.
              Se habilitará a {STANDIN_PLAYER.name} en la whitelist del servidor RCON en cuanto sea validado el comprobante.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-200">
              <span className="font-bold">Advertencia Reglamentaria:</span> Todo pedido falso o sin justificación médica / técnica comprobable conlleva la pérdida automática de los puntos del partido y sanción deportiva.
            </div>

            <div>
              <label className="text-xs font-semibold text-neutral-300 block mb-1">
                Motivo Justificado de Sustitución:
              </label>
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
              >
                <option value="fiber_cut">Corte intempestivo de suministro eléctrico / Fibra óptica</option>
                <option value="medical_emergency">Emergencia médica acreditada del titular</option>
                <option value="hw_failure">Falla crítica insalvable de hardware en servidor local</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-neutral-300 block mb-1">
                Jugador Suplente Solicitado:
              </label>
              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-white">{STANDIN_PLAYER.name}</span>
                  <span className="text-neutral-400 block text-[11px]">{STANDIN_PLAYER.realName}</span>
                </div>
                <span className="font-mono text-cyan-400 font-bold">SteamID: {STANDIN_PLAYER.steamId}</span>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-neutral-300 block mb-1">
                Explicación Circunstancial para el Comisario:
              </label>
              <textarea
                rows={3}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Indique hora de desconexión, intentos de reconexión y datos de contacto de emergencia..."
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-neutral-800">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs rounded-lg font-medium"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
              >
                Firmar & Enviar a Comisaría
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
