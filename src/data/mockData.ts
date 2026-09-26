import { Player, Team, MatchServer, DisputeCase, AuditRecord, SupportTicket, RconLog } from '../types/esports';

export const CURRENT_USER: Player = {
  id: 'pacuno-01',
  name: 'Pacuno_CS',
  realName: 'Franco "Pacuno" Valenzuela',
  role: 'In-Game Leader (IGL) & Rifler',
  steamId: '76561198042918821',
  elo: 2450,
  level: 10,
  kd: 1.38,
  hsRate: 54.2,
  adr: 88.6,
  avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&auto=format&fit=crop&q=80',
  isCaptain: true,
  status: 'active',
  tag: 'ZGA'
};

export const ZINGARO_ACADEMY_ROSTER: Player[] = [
  {
    id: 'p1',
    name: 'Pacuno_CS',
    realName: 'Franco Valenzuela',
    role: 'IN-GAME LEADER (IGL) & RIFLER',
    steamId: '76561198042918821',
    elo: 2450,
    level: 10,
    kd: 1.38,
    hsRate: 54.2,
    adr: 88.6,
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&auto=format&fit=crop&q=80',
    isCaptain: true,
    status: 'active',
    tag: 'ZGA'
  },
  {
    id: 'p2',
    name: 'Chicho',
    realName: 'Nahuel Cardozo',
    role: 'MAIN AWPER (Francotirador)',
    steamId: '765611988234120',
    elo: 2310,
    level: 9,
    kd: 1.29,
    hsRate: 46.0,
    adr: 84.2,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    status: 'active',
    tag: 'ZGA'
  },
  {
    id: 'p3',
    name: 'NeoX',
    realName: 'Matías Benítez',
    role: 'ENTRY FRAGGER / RIFLER',
    steamId: '765611977610238',
    elo: 2290,
    level: 9,
    kd: 1.24,
    hsRate: 61.0,
    adr: 82.5,
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80',
    status: 'active',
    tag: 'ZGA'
  },
  {
    id: 'p4',
    name: 'Vortex',
    realName: 'Lucas Da Silva',
    role: 'SUPPORT / RE-FRAGGER',
    steamId: '765611980776102',
    elo: 2180,
    level: 8,
    kd: 1.08,
    hsRate: 49.5,
    adr: 92.4,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    status: 'active',
    tag: 'ZGA'
  },
  {
    id: 'p5',
    name: 'K1nder',
    realName: 'Alejo Romero',
    role: 'LURKER / CLUTCH SPECIALIST',
    steamId: '765611985591024',
    elo: 2340,
    level: 9,
    kd: 1.21,
    hsRate: 52.8,
    adr: 81.0,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    status: 'active',
    tag: 'ZGA'
  }
];

export const STANDIN_PLAYER: Player = {
  id: 'p-sub',
  name: 'B4stian',
  realName: 'Sebastián Ruiz',
  role: 'Rifler Flex (Suplente Oficial)',
  steamId: '76561198440019231',
  elo: 2120,
  level: 8,
  kd: 1.14,
  hsRate: 51.0,
  adr: 78.4,
  avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
  status: 'stand-in',
  tag: 'ZGA'
};

export const MISIONES_ESPORTS_ROSTER: Player[] = [
  {
    id: 'm1',
    name: 'Draken_NEA',
    realName: 'Capitán Draken',
    role: 'In-Game Leader',
    steamId: '765611099482110',
    elo: 2340,
    level: 9,
    kd: 1.22,
    hsRate: 51.5,
    adr: 81.2,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    isCaptain: true,
    status: 'active',
    tag: 'MSE'
  },
  {
    id: 'm2',
    name: 'V1per',
    realName: 'Julián Ramos',
    role: 'AWP Sniper',
    steamId: '765611063219483',
    elo: 2280,
    level: 9,
    kd: 1.25,
    hsRate: 44.0,
    adr: 80.0,
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80',
    status: 'active',
    tag: 'MSE'
  },
  {
    id: 'm3',
    name: 'Bl4ck',
    realName: 'Tomás Silva',
    role: 'Entry Rifler',
    steamId: '765611110293847',
    elo: 2210,
    level: 8,
    kd: 1.15,
    hsRate: 56.0,
    adr: 83.5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
    status: 'active',
    tag: 'MSE'
  },
  {
    id: 'm4',
    name: 'Sh4dow',
    realName: 'Diego Mendoza',
    role: 'Support',
    steamId: '765611077491028',
    elo: 2190,
    level: 8,
    kd: 1.04,
    hsRate: 48.0,
    adr: 75.0,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    status: 'active',
    tag: 'MSE'
  },
  {
    id: 'm5',
    name: 'K0lor',
    realName: 'Marcos Benítez',
    role: 'Lurker',
    steamId: '765611099238123',
    elo: 2150,
    level: 8,
    kd: 1.10,
    hsRate: 49.0,
    adr: 77.0,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    status: 'inactive',
    tag: 'MSE'
  }
];

export const SERVERS_LIST: MatchServer[] = [
  {
    id: 'srv-01',
    nodeName: 'ZNG-CS2-01',
    port: 27015,
    status: 'live',
    statusLabel: 'EN PARTIDA (LIVE MR12)',
    currentMap: 'de_mirage',
    mapImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=80',
    matchInfo: 'MATCH #2841 (TORNEO PRO T1) • Zingaro Academy vs Misiones Esports',
    score: 'Marcador: ZGA 5 - 3 MES (CT/TR)',
    playersConnected: 10,
    maxPlayers: 10,
    cpu: 38,
    ram: 4.8,
    ping: 14,
    jitter: 0.003,
    mode: 'MR12 Sub-Tick 128'
  },
  {
    id: 'srv-02',
    nodeName: 'ZNG-CS2-02',
    port: 27025,
    status: 'warmup',
    statusLabel: 'WARMUP / ESPERANDO ROSTERS',
    currentMap: 'de_inferno',
    mapImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&auto=format&fit=crop&q=80',
    matchInfo: 'PARTIDA #2842 (SCRIM CLASIFICATORIO) • Posadas Five vs Guaraní Gaming',
    score: 'Veto completado • Calentamiento 03:45',
    playersConnected: 8,
    maxPlayers: 10,
    cpu: 24,
    ram: 3.6,
    ping: 18,
    jitter: 0.002,
    mode: 'MR12 Warmup'
  },
  {
    id: 'srv-03',
    nodeName: 'ZNG-CS2-03',
    port: 27035,
    status: 'idle',
    statusLabel: 'IDLE / ARENA RESERVA',
    currentMap: 'de_anubis',
    mapImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=500&auto=format&fit=crop&q=80',
    matchInfo: 'ARENA EN ESPERA • Asignación Dinámica. Capacidad inmediata de failover',
    score: 'En reposo (Standby)',
    playersConnected: 0,
    maxPlayers: 10,
    cpu: 4,
    ram: 1.2,
    ping: 11,
    jitter: 0.001,
    mode: 'Arena Reserva'
  },
  {
    id: 'srv-04',
    nodeName: 'ZNG-CS2-04',
    port: 27045,
    status: 'reserved',
    statusLabel: 'RESERVADO • ENTRENAMIENTO ACADEMY',
    currentMap: 'de_nuke',
    mapImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80',
    matchInfo: 'SESIÓN DE PRÁCTICAS ZINGARO • Setup Rutinas & Grenades. Coach Pacuno al mando',
    score: 'Tactics Practice Mode',
    playersConnected: 5,
    maxPlayers: 10,
    cpu: 19,
    ram: 2.9,
    ping: 15,
    jitter: 0.002,
    mode: 'Tactics Practice'
  }
];

export const INITIAL_RCON_LOGS: RconLog[] = [
  { id: '1', timestamp: '22:14:02', type: 'RCON', message: '[RCON:HANDSHAKE] TLS 1.3 socket established with ZNG-CS2-01 (190.137.45.101:27015)' },
  { id: '2', timestamp: '22:14:02', type: 'AUTH', message: '[RCON:AUTH] Autenticado como SUPER_ADMIN (Pacuno_Admin / IP: 190.137.89.24). Token TTL: 120m.' },
  { id: '3', timestamp: '22:14:15', type: 'SHIELD-AC', message: '[SHIELD-AC] Verificación de integridad CS2 Anti-Cheat completada: 10/10 clientes validados sin inyecciones de memoria.' },
  { id: '4', timestamp: '22:14:28', type: 'MATCH-CORE', message: '[MATCH-CORE] Fin de ronda 7: Zingaro Academy (CT) 4 - 3 Misiones Esports (TR). Round time: 01:42.' },
  { id: '5', timestamp: '22:14:30', type: 'MATCH-CORE', message: '[MATCH-CORE] Iniciando Ronda 8. Buy time finalizado.' },
  { id: '6', timestamp: '22:14:35', type: 'RCON', message: 'rcon_exec: status' },
  { id: '7', timestamp: '22:14:36', type: 'RCON', message: 'hostname: Zingaro Gaming Dedicated #01 - Mirage 128T SubTick\nversion : 1.40.1.2/14012 10052 insecure (secure enabled by Zingaro Shield Engine)' }
];

export const LEAGUE_TEAMS = [
  { rank: 1, name: 'Zingaro Academy', tag: 'ZGA', captain: 'Pacuno_CS', region: 'Roster NEA Tier 1', pj: 4, pg: 4, pp: 0, diff: '+28', elo: 2450, pts: 12, status: 'SEMIFINALES', statusType: 'playoffs-direct' },
  { rank: 2, name: 'Misiones Esports', tag: 'MSE', captain: 'Toruk_M', region: 'Oberá Gaming Club', pj: 4, pg: 3, pp: 1, diff: '+16', elo: 2340, pts: 9, status: 'PLAYOFFS', statusType: 'playoffs' },
  { rank: 3, name: 'Posadas Five', tag: 'P5', captain: 'DrakenCS', region: 'Posadas Capital', pj: 4, pg: 3, pp: 1, diff: '+12', elo: 2280, pts: 9, status: 'PLAYOFFS', statusType: 'playoffs' },
  { rank: 4, name: 'Guaraní Gaming', tag: 'GNG', captain: 'JaguarX', region: 'San Vicente', pj: 4, pg: 2, pp: 2, diff: '+4', elo: 2190, pts: 6, status: 'PLAYOFFS', statusType: 'playoffs' },
  { rank: 5, name: 'Iguazú Gaming', tag: 'IGZ', captain: 'CataratasAim', region: 'Pto. Iguazú', pj: 4, pg: 2, pp: 2, diff: '-6', elo: 2150, pts: 6, status: 'REPECHAJE', statusType: 'repechaje' },
  { rank: 6, name: 'Eldorado Wolves', tag: 'EDW', captain: 'Wolfy99', region: 'Eldorado Norte', pj: 4, pg: 1, pp: 3, diff: '-14', elo: 2080, pts: 3, status: 'REPECHAJE', statusType: 'repechaje' },
  { rank: 7, name: 'NEA Esports', tag: 'NEA', captain: 'ChacoStrike', region: 'Resistencia Invitado', pj: 4, pg: 1, pp: 3, diff: '-18', elo: 2020, pts: 3, status: 'DESCENSO', statusType: 'descenso' },
  { rank: 8, name: 'Misiones United', tag: 'MNU', captain: 'RedLine', region: 'Apóstoles Hub', pj: 4, pg: 0, pp: 4, diff: '-22', elo: 1940, pts: 0, status: 'DESCENSO', statusType: 'descenso' }
];

export const DISPUTES_DATA: DisputeCase[] = [
  {
    id: 'disp-01',
    code: '#DISP-2026-041',
    tournament: 'CS2 REGIONAL LEAGUE',
    group: 'GRUPO A',
    matchTitle: 'Posadas Five vs Taragüí Vipers',
    teamA: 'Posadas Five',
    teamB: 'Taragüí Vipers',
    accused: 'Mandioca [Taragüí Vipers]',
    type: 'SOSPECHA DE ASISTENCIA EXTERNA / RADAR HACK',
    description: 'Acusación de radar hack / asistencia externa no autorizada en de_anubis. Crosshair lock pre-fire a través de pared Canal B.',
    severity: 'critical',
    status: 'deliberation',
    map: 'de_anubis',
    round: 11,
    timestamp: 'Minuto 24:15',
    arbitrator: 'Comisario M. Varela [C-08]',
    telemetry: {
      reactionTimeMs: 42,
      vectorLinearity: '0.00% Lineal (Asistencia Robótica)',
      preVisibilityFrames: 0,
      recoilSpread: '100% Invariable (Script No-Recoil)',
      snapAngle: '0.18°'
    }
  },
  {
    id: 'disp-02',
    code: '#DISP-2026-039',
    tournament: 'TORNEO CLASIFICATORIO NEA',
    group: 'CUARTOS',
    matchTitle: 'Formosa Legion vs Oberá Heat',
    teamA: 'Formosa Legion',
    teamB: 'Oberá Heat',
    accused: 'Jugador Suplente Oberá Heat',
    type: 'USO DE STAND-IN NO AUTORIZADO (ROSTER LOCK)',
    description: 'Protesta formal por uso de jugador suplente (stand-in) no registrado antes del Roster Lock oficial.',
    severity: 'moderate',
    status: 'approved',
    map: 'de_inferno',
    round: 8,
    timestamp: 'Hace 1 hora',
    arbitrator: 'Comisario_Torres',
    telemetry: {
      reactionTimeMs: 165,
      vectorLinearity: 'Humana Orgánica',
      preVisibilityFrames: 14,
      recoilSpread: 'Normal',
      snapAngle: '3.40°'
    }
  },
  {
    id: 'disp-03',
    code: '#DISP-2026-035',
    tournament: 'LIGA REGIONAL CS2',
    group: 'JORNADA 2',
    matchTitle: 'Reporte Conductual In-Game',
    teamA: 'Taragüí Vipers',
    teamB: 'Zingaro Academy',
    accused: 'Mandioca_Shooter (STEAM_0:1:4490182)',
    type: 'CONDUCTA ANTIDEPORTIVA & REINCIDENCIA',
    description: 'Insultos denigrantes reiterados y acoso antideportivo mediante el chat general de partido oficial (Servidor CS2 Arg #02).',
    severity: 'critical',
    status: 'pending',
    map: 'de_mirage',
    round: 14,
    timestamp: 'Ayer',
    arbitrator: 'Tribunal Disciplinario ZINGARO',
    telemetry: {
      reactionTimeMs: 140,
      vectorLinearity: 'Normal',
      preVisibilityFrames: 8,
      recoilSpread: 'Normal',
      snapAngle: '1.20°'
    }
  }
];

export const AUDIT_LOGS_DATA: AuditRecord[] = [
  {
    id: 'LOG-99201-01',
    blockId: '#99201-BLK',
    timestamp: '18:45:12.890 UTC',
    severity: 'CRITICAL',
    operator: 'Comisario_Torres',
    action: 'RCON_WHITELIST_ADD',
    signatureValid: true,
    payload: {
      event_id: 'LOG-99201-01',
      severity: 'CRITICAL',
      operator: {
        handle: 'Comisario_Torres',
        role: 'COMMISSIONER_LEVEL_3',
        ip_address: '181.112.44.19',
        mfa_verified: true
      },
      action: {
        type: 'RCON_WHITELIST_ADD',
        target_server: 'ZNG-CS2-01.zingaro.gg',
        resolution_code: 'EX-2026-088'
      },
      target_entity: {
        steam_id64: '76561198440019231'
      }
    }
  },
  {
    id: 'LOG-99201-02',
    blockId: '#99201-BLK',
    timestamp: '18:45:12.895 UTC',
    severity: 'WARN',
    operator: 'Comisario_Torres',
    action: 'RCON_WHITELIST_REMOVE',
    signatureValid: true,
    payload: {
      event_id: 'LOG-99201-02',
      severity: 'WARN',
      operator: { handle: 'Comisario_Torres', role: 'COMMISSIONER_LEVEL_3' },
      action: { type: 'RCON_WHITELIST_REMOVE', target_server: 'ZNG-CS2-01.zingaro.gg' },
      target_entity: { steam_id64: '76561197761023849', reason: 'Medical Lock Temporario' }
    }
  },
  {
    id: 'LOG-99200-14',
    blockId: '#99200-BLK',
    timestamp: '18:22:04.112 UTC',
    severity: 'SEC_ALERT',
    operator: 'Zingaro_Shield_Core',
    action: 'MEMORY_HOOK_BLOCKED',
    signatureValid: true,
    payload: {
      event_id: 'LOG-99200-14',
      alert: 'Kernel DLL injection prevented',
      driver_hash: '0x7FA2_KERNEL_SIG',
      target_process: 'cs2.exe'
    }
  },
  {
    id: 'LOG-99199-08',
    blockId: '#99199-BLK',
    timestamp: '17:10:33.450 UTC',
    severity: 'INFO',
    operator: 'SuperAdmin_Root',
    action: 'RBAC_ROLE_ASSIGNED',
    signatureValid: true,
    payload: {
      user: 'Comisario_Torres',
      new_role: 'COMMISSIONER_CHIEF',
      mfa_method: 'FIDO2_HARDWARE'
    }
  },
  {
    id: 'LOG-99198-42',
    blockId: '#99198-BLK',
    timestamp: '16:05:19.200 UTC',
    severity: 'WARN',
    operator: 'Elo_Calculation_Engine',
    action: 'ELO_DECAY_APPLIED',
    signatureValid: true,
    payload: {
      season: 'Clausura 2026',
      teams_decayed: 2,
      reason: 'Inactividad de scrims > 14 días'
    }
  }
];

export const SUPPORT_TICKETS_DATA: SupportTicket[] = [
  {
    id: 'tk-1',
    code: '#TK-8492',
    title: 'Reclamo caída de servidor ZNG-CS2-01 en Ronda 14 Liga Regional',
    status: 'urgent',
    server: 'ZNG-SA-BUE-01:27015',
    matchroomId: '#MR-904 (De_Mirage)',
    reportTime: '19:42:10 UTC-3',
    arbitrator: 'Comisario_Torres [STF]',
    messages: [
      {
        sender: 'Pacuno_CS',
        role: 'Capitán Zingaro Academy',
        time: '19:42:15',
        content: 'Comisario, solicitamos pausa técnica urgente o rollback al inicio de la ronda 14. Cuando entramos al site de A, el servidor arrojó 95% choke packet drop masivo. Tres integrantes de nuestro roster sufrieron timeout instantáneo mientras el equipo rival continuaba conectado.\nRonda 13 terminada en 8-5 favor Zingaro. En la 14 se produjo el drop. Adjunto capturas de net_graph y el dump GOTV.',
        attachments: [
          { name: 'server_tick_drop.log', size: '48.2 KB' },
          { name: 'ping_netgraph_r14.png', size: '1.4 MB' }
        ]
      },
      {
        sender: 'Zingaro MatchBot',
        role: 'Sistema Automatizado',
        time: '19:43:00',
        content: '⚙️ ZINGARO MATCHBOT DETUVO EL RELOJ EN LA RONDA 14 (SCORE: 8-5) - RCON PAUSE SET'
      },
      {
        sender: 'Comisario_Torres',
        role: 'COMISARIO DEPORTIVO',
        time: '19:44:22',
        isArbitrator: true,
        content: 'Recibido Capitán Pacuno. Estoy verificando los logs de red del nodo de Buenos Aires ZNG-SA-BUE-01. Confirmamos un micro-corte del proveedor de hosting a nivel peering regional que afectó al enlace de tu equipo.\nConforme al Art. 8.4 del Reglamento Oficial (falla técnica del host comprobable por RCON), se procederá a ejecutar el comando de Round Restore a la Ronda 14 con economía reseteada.\nPor favor mantengan el roster en el servidor mientras inyecto el backup.'
      }
    ]
  },
  {
    id: 'tk-2',
    code: '#TK-8488',
    title: 'Solicitud de sustitución de jugador por desconexión prolongada vs Misiones Esports',
    status: 'resolved',
    server: 'ZNG-CS2-04:27045',
    matchroomId: '#MR-841',
    reportTime: 'Hace 2 horas',
    arbitrator: 'Referee_Valenzuela',
    messages: [
      {
        sender: 'Pacuno_CS',
        role: 'Capitán Zingaro',
        time: '17:30',
        content: 'Solicitamos habilitación del stand-in oficial B4stian por corte de fibra en domicilio de NeoX.'
      },
      {
        sender: 'Referee_Valenzuela',
        role: 'Tribunal de Arbitraje',
        time: '17:35',
        isArbitrator: true,
        content: 'Solicitud aprobada bajo Art. 8.3 de normativa de emergencia. Procedo a sincronizar whitelist SteamID.'
      }
    ]
  },
  {
    id: 'tk-3',
    code: '#TK-8470',
    title: 'Falso positivo / Verificación de integridad de driver anticheat',
    status: 'resolved',
    server: 'ZNG-CORE-01',
    matchroomId: 'General Client',
    reportTime: 'Ayer, 21:40',
    arbitrator: 'Zingaro Shield Support',
    messages: [
      {
        sender: 'Chicho',
        role: 'AWPer Zingaro',
        time: '21:40',
        content: 'Razer Synapse v3 bloquea arranque del cliente.'
      },
      {
        sender: 'Zingaro Shield Support',
        role: 'Seguridad',
        time: '21:45',
        isArbitrator: true,
        content: 'Excepción de firma de driver agregada en parche v4.81.'
      }
    ]
  }
];
