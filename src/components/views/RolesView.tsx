import React, { useState } from 'react';
import { ViewType } from '../../types/esports';
import {
  Users,
  Shield,
  Lock,
  Check,
  X,
  Sliders,
  AlertCircle,
  Sparkles,
  Info,
  ChevronRight,
  UserCheck,
  KeyRound
} from 'lucide-react';

interface RolesViewProps {
  onSelectView: (view: ViewType) => void;
}

interface RoleConfig {
  id: string;
  name: string;
  badge: string;
  badgeColor: string;
  assignedUsersCount: number;
  description: string;
}

interface PermissionItem {
  id: string;
  label: string;
  category: string;
}

const COMPETITIVE_ROLES: RoleConfig[] = [
  {
    id: 'super_admin',
    name: 'Super Administrador (OS Master)',
    badge: 'ROOT L4',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/40',
    assignedUsersCount: 2,
    description: 'Acceso irrestricto a la infraestructura de servidores, llaves RCON y claves maestras.'
  },
  {
    id: 'commissioner_chief',
    name: 'Comisario Deportivo Jefe',
    badge: 'CHIEF L3',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    assignedUsersCount: 4,
    description: 'Firma resoluciones disciplinarias, aprueba excepciones de Roster Lock y arbitra partidos de Playoffs.'
  },
  {
    id: 'match_referee',
    name: 'Árbitro de Partida (Referee)',
    badge: 'REF L2',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    assignedUsersCount: 8,
    description: 'Gestión en vivo de salas de partido, pausas técnicas, round restore y control de check-in.'
  },
  {
    id: 'disciplinary_tribunal',
    name: 'Tribunal Disciplinario',
    badge: 'JURY L2',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    assignedUsersCount: 5,
    description: 'Revisión pericial de demos GOTV, detección de trampas y aplicación de jurisprudencia.'
  },
  {
    id: 'team_captain',
    name: 'Capitán de Equipo (IGL)',
    badge: 'CAPTAIN',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    assignedUsersCount: 32,
    description: 'Veto de mapas, solicitud de pausas tácticas, presentación de reclamos y control de line-up.'
  },
  {
    id: 'verified_player',
    name: 'Jugador Titular Verificado',
    badge: 'PLAYER',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    assignedUsersCount: 160,
    description: 'Acceso a servidores competitivos con Zingaro Shield Anti-Cheat y estadísticas oficiales.'
  },
  {
    id: 'standin_player',
    name: 'Suplente Oficial (Stand-in)',
    badge: 'STAND-IN',
    badgeColor: 'bg-neutral-800 text-neutral-300 border-neutral-700',
    assignedUsersCount: 45,
    description: 'Habilitado exclusivamente previa autorización de comisario o ventana de sustitución.'
  },
  {
    id: 'caster_observer',
    name: 'Caster & Observador GOTV',
    badge: 'OBSERVER',
    badgeColor: 'bg-pink-500/20 text-pink-300 border-pink-500/40',
    assignedUsersCount: 12,
    description: 'Slot de espectador con delay configurable para transmisiones oficiales de streaming.'
  }
];

const PERMISSIONS_LIST: PermissionItem[] = [
  { id: 'rcon_raw', label: 'Acceso a Consola RCON Directa', category: 'Servidores' },
  { id: 'match_pause', label: 'Activar Pausa Técnica Arbitral', category: 'Partidos' },
  { id: 'round_restore', label: 'Ejecutar Round Restore en Vivo', category: 'Partidos' },
  { id: 'veto_override', label: 'Sobrescribir Veto de Mapas', category: 'Partidos' },
  { id: 'roster_lock_bypass', label: 'Autorizar Excepciones de Roster Lock', category: 'Equipos' },
  { id: 'tribunal_vote', label: 'Emitir Voto / Fallo Disciplinario', category: 'Arbitraje' },
  { id: 'gotv_private_demo', label: 'Descarga de Demos GOTV Inéditas', category: 'Arbitraje' },
  { id: 'audit_crypto_view', label: 'Inspeccionar Bloques de Auditoría', category: 'Seguridad' },
  { id: 'emergency_broadcast', label: 'Emitir Anuncios Globales HUD', category: 'Seguridad' }
];

export const RolesView: React.FC<RolesViewProps> = ({ onSelectView }) => {
  const [selectedRole, setSelectedRole] = useState<RoleConfig>(COMPETITIVE_ROLES[1]);
  
  // Matrix of roleId -> permissionId -> boolean
  const [rolePermissions, setRolePermissions] = useState<Record<string, Record<string, boolean>>>({
    super_admin: {
      rcon_raw: true, match_pause: true, round_restore: true, veto_override: true,
      roster_lock_bypass: true, tribunal_vote: true, gotv_private_demo: true, audit_crypto_view: true, emergency_broadcast: true
    },
    commissioner_chief: {
      rcon_raw: true, match_pause: true, round_restore: true, veto_override: true,
      roster_lock_bypass: true, tribunal_vote: true, gotv_private_demo: true, audit_crypto_view: true, emergency_broadcast: true
    },
    match_referee: {
      rcon_raw: false, match_pause: true, round_restore: true, veto_override: false,
      roster_lock_bypass: false, tribunal_vote: false, gotv_private_demo: true, audit_crypto_view: false, emergency_broadcast: false
    },
    disciplinary_tribunal: {
      rcon_raw: false, match_pause: false, round_restore: false, veto_override: false,
      roster_lock_bypass: false, tribunal_vote: true, gotv_private_demo: true, audit_crypto_view: true, emergency_broadcast: false
    },
    team_captain: {
      rcon_raw: false, match_pause: false, round_restore: false, veto_override: false,
      roster_lock_bypass: false, tribunal_vote: false, gotv_private_demo: false, audit_crypto_view: false, emergency_broadcast: false
    },
    verified_player: {
      rcon_raw: false, match_pause: false, round_restore: false, veto_override: false,
      roster_lock_bypass: false, tribunal_vote: false, gotv_private_demo: false, audit_crypto_view: false, emergency_broadcast: false
    },
    standin_player: {
      rcon_raw: false, match_pause: false, round_restore: false, veto_override: false,
      roster_lock_bypass: false, tribunal_vote: false, gotv_private_demo: false, audit_crypto_view: false, emergency_broadcast: false
    },
    caster_observer: {
      rcon_raw: false, match_pause: false, round_restore: false, veto_override: false,
      roster_lock_bypass: false, tribunal_vote: false, gotv_private_demo: true, audit_crypto_view: false, emergency_broadcast: false
    }
  });

  const togglePermission = (roleId: string, permId: string) => {
    setRolePermissions(prev => ({
      ...prev,
      [roleId]: {
        ...prev[roleId],
        [permId]: !prev[roleId]?.[permId]
      }
    }));
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <KeyRound className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  CONTROL DE ACCESO BASADO EN ROLES (RBAC)
                </span>
                <span className="text-xs font-mono text-neutral-400">MATRIZ DINÁMICA DE SEGURIDAD</span>
              </div>
              <h1 className="text-2xl font-bold text-white tracking-wide mt-1">
                Roles, Privilegios & Jerarquía Operativa
              </h1>
              <p className="text-sm text-neutral-400 mt-0.5">
                Definición granular de capacidades técnicas para capitanes, jugadores, árbitros y comisarios del circuito Zingaro CS2.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectView('audit-logs')}
              className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-200 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <Shield className="w-4 h-4 text-cyan-400" />
              <span>Ver Auditoría de Permisos</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Roles List + Granular Permissions Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Roles List (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <h2 className="text-sm font-semibold text-white px-1">Jerarquía de Roles Activos ({COMPETITIVE_ROLES.length})</h2>

          <div className="space-y-2">
            {COMPETITIVE_ROLES.map((role) => {
              const isSelected = selectedRole.id === role.id;
              return (
                <div
                  key={role.id}
                  onClick={() => setSelectedRole(role)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-neutral-800 border-cyan-500 shadow-md ring-1 ring-cyan-500/30'
                      : 'bg-neutral-900 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-white">{role.name}</span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${role.badgeColor}`}>
                      {role.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-1 line-clamp-2">{role.description}</p>
                  <div className="mt-2 text-[10px] text-neutral-500 font-mono flex items-center gap-1">
                    <UserCheck className="w-3 h-3 text-cyan-400" />
                    <span>{role.assignedUsersCount} usuarios asignados</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Permissions Configuration Matrix (8 cols) */}
        <div className="lg:col-span-8 bg-neutral-900 border border-neutral-800 rounded-xl p-5 shadow-lg space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-neutral-800 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-mono px-2 py-0.5 rounded border ${selectedRole.badgeColor}`}>
                  {selectedRole.badge}
                </span>
                <h3 className="text-base font-bold text-white">{selectedRole.name}</h3>
              </div>
              <p className="text-xs text-neutral-400 mt-1">{selectedRole.description}</p>
            </div>
            <div className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1.5 rounded-lg flex items-center gap-1.5 self-start sm:self-auto">
              <Check className="w-4 h-4" />
              <span>Sincronización en Tiempo Real</span>
            </div>
          </div>

          {/* Interactive Toggle Switch Table */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
              Permisos Técnicos de la Plataforma
            </h4>

            <div className="divide-y divide-neutral-800/80 border border-neutral-800 rounded-xl overflow-hidden bg-neutral-950/60">
              {PERMISSIONS_LIST.map((perm) => {
                const isEnabled = !!rolePermissions[selectedRole.id]?.[perm.id];
                return (
                  <div
                    key={perm.id}
                    className="p-3.5 flex items-center justify-between hover:bg-neutral-900/60 transition-colors"
                  >
                    <div>
                      <div className="text-xs font-medium text-white flex items-center gap-2">
                        <span>{perm.label}</span>
                        <span className="text-[10px] font-mono text-neutral-500 bg-neutral-900 px-1.5 py-0.5 rounded border border-neutral-800">
                          {perm.category}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-neutral-400 mt-0.5 block">
                        ID: perm.{perm.id}
                      </span>
                    </div>

                    {/* Toggle Switch */}
                    <button
                      onClick={() => togglePermission(selectedRole.id, perm.id)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                        isEnabled ? 'bg-cyan-600' : 'bg-neutral-800'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          isEnabled ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl flex items-start gap-3 text-xs text-amber-200">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-amber-300">Auditoría Automática de Cambios:</span>
              <p className="text-neutral-400 mt-0.5">
                Cualquier modificación a la matriz de permisos de roles emitirá inmediatamente una transacción de seguridad
                en el bloque de auditoría forense con la firma de tu credencial actual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
