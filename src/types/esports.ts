export type ViewType =
  | 'dashboard'
  | 'tournaments'
  | 'league'
  | 'teams'
  | 'matches'
  | 'matchroom'
  | 'servers'
  | 'ranking'
  | 'stats'
  | 'profile'
  | 'support'
  | 'notifications'
  | 'arena-lan'
  | 'academia'
  | 'student-report'
  | 'match-scheduling'
  | 'scheduling'
  | 'ai-studio-export'
  | 'export-ai'
  | 'master-panel'
  | 'disputes'
  | 'audit-logs'
  | 'roles'
  | 'judicial-dossier';

export interface Player {
  id: string;
  name: string;
  realName: string;
  role: string;
  steamId: string;
  elo: number;
  level: number;
  kd: number;
  hsRate: number;
  adr: number;
  avatar: string;
  isCaptain?: boolean;
  status: 'active' | 'stand-in' | 'inactive';
  tag: string;
}

export interface Team {
  id: string;
  name: string;
  tag: string;
  logo: string;
  seed: number;
  division: string;
  location: string;
  avgElo: number;
  wins: number;
  losses: number;
  winrate: number;
  streak: number;
  rosterLock: boolean;
  captain: Player;
  roster: Player[];
  standin?: Player;
  coach?: string;
  psychologist?: string;
}

export interface MatchServer {
  id: string;
  nodeName: string;
  port: number;
  status: 'live' | 'warmup' | 'idle' | 'reserved';
  statusLabel: string;
  currentMap: string;
  mapImage: string;
  matchInfo?: string;
  score?: string;
  playersConnected: number;
  maxPlayers: number;
  cpu: number;
  ram: number;
  ping: number;
  jitter: number;
  mode: string;
}

export interface RconLog {
  id: string;
  timestamp: string;
  type: 'RCON' | 'SHIELD-AC' | 'MATCH-CORE' | 'AUTH' | 'WARN';
  message: string;
  status?: string;
}

export interface DisputeCase {
  id: string;
  code: string;
  tournament: string;
  group: string;
  matchTitle: string;
  teamA: string;
  teamB: string;
  accused: string;
  type: string;
  description: string;
  severity: 'critical' | 'moderate' | 'low';
  status: 'deliberation' | 'approved' | 'resolved' | 'pending';
  map: string;
  round: number;
  timestamp: string;
  arbitrator: string;
  telemetry: {
    reactionTimeMs: number;
    vectorLinearity: string;
    preVisibilityFrames: number;
    recoilSpread: string;
    snapAngle: string;
  };
}

export interface AuditRecord {
  id: string;
  blockId: string;
  timestamp: string;
  severity: 'CRITICAL' | 'WARN' | 'INFO' | 'SEC_ALERT';
  operator: string;
  action: string;
  payload: Record<string, any>;
  signatureValid: boolean;
}

export interface SupportTicket {
  id: string;
  code: string;
  title: string;
  status: 'urgent' | 'pending' | 'resolved';
  server: string;
  matchroomId: string;
  reportTime: string;
  arbitrator: string;
  messages: {
    sender: string;
    role: string;
    avatar?: string;
    time: string;
    content: string;
    isArbitrator?: boolean;
    attachments?: { name: string; size: string }[];
  }[];
}
