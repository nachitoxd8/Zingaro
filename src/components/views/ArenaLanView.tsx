import React, { useState } from 'react';
import { ViewType } from '../../types/esports';
import {
  Monitor,
  Headphones,
  Gamepad2,
  Zap,
  MapPin,
  Clock,
  Calendar,
  CheckCircle2,
  Store,
  ShoppingCart,
  Users,
  Shield,
  Star,
  Award,
  ChevronRight,
  Flame,
  Plus
} from 'lucide-react';

interface ArenaLanViewProps {
  onSelectView: (view: ViewType) => void;
}

export const ArenaLanView: React.FC<ArenaLanViewProps> = ({ onSelectView }) => {
  const [selectedSector, setSelectedSector] = useState<'all' | 'sec-a' | 'sec-b' | 'sec-c'>('all');
  const [selectedSeat, setSelectedSeat] = useState<{
    id: string;
    label: string;
    specs: string;
    status: string;
  }>({
    id: 'B-06',
    label: 'Cabina Bravo (Sector A) // Libre',
    specs: 'Zowie XL2546K 240Hz • RTX 4070 Ti',
    status: 'Disponible Inmediato'
  });

  const [bookingMode, setBookingMode] = useState<'team' | 'solo'>('team');
  const [coachAddon, setCoachAddon] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [selectedBlock, setSelectedBlock] = useState('18:00 - 20:00 (2hs)');

  const calculateTotal = () => {
    let base = bookingMode === 'team' ? 60000 : 8000;
    if (coachAddon) {
      base += 4000;
    }
    return base;
  };

  const handleSeatClick = (id: string, label: string, specs: string, status: string) => {
    setSelectedSeat({ id, label, specs, status });
  };

  const handleConfirmBooking = () => {
    setBookingConfirmed(true);
    setTimeout(() => setBookingConfirmed(false), 3500);
  };

  return (
    <div className="space-y-6">
      {/* Hero Banner Section */}
      <div className="relative rounded-2xl overflow-hidden bg-[#111319] border border-[#282a30] shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0e14] via-[#111319]/90 to-transparent z-10" />
        <div
          className="absolute top-0 right-0 w-2/3 h-full opacity-25 mix-blend-screen z-0 pointer-events-none bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80')"
          }}
        />

        <div className="relative z-20 p-6 md:p-8 flex flex-col xl:flex-row xl:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#03b5d3]/20 text-[#4cd7f6] text-[11px] font-mono uppercase tracking-wider font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6] animate-pulse" />
                Posadas HQ // Sede Central
              </span>
              <span className="px-2.5 py-0.5 rounded bg-[#1e1f26] text-[#cbc3d7] text-[11px] font-mono">
                San Lorenzo 2170, Posadas, Misiones
              </span>
              <span className="px-2.5 py-0.5 rounded bg-[#00a572]/20 text-[#4edea3] text-[11px] font-mono font-semibold flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" /> PSS-BUE BACKBONE 5MS
              </span>
            </div>

            <div className="flex flex-col">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#e2e2eb] tracking-tight uppercase">
                Zingaro Gaming Arena
              </h1>
              <p className="text-xs md:text-sm font-mono text-[#d0bcff] tracking-widest uppercase mt-0.5">
                Infraestructura Competitiva Tier-1 & Centro de Entrenamiento CS2
              </p>
            </div>

            <p className="text-sm text-[#cbc3d7] max-w-2xl leading-relaxed">
              Centro de alto rendimiento equipado para scrims oficiales, bootcamp de franquicias y torneos presenciales. Red de fibra simétrica ultra-low-latency dedicada con backup redundante dual.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 xl:min-w-[480px]">
            <div className="p-3.5 rounded-xl bg-[#1e1f26]/90 border border-[#33343b] backdrop-blur flex flex-col justify-between">
              <div className="flex items-center justify-between text-[#958ea0]">
                <span className="text-[10px] font-mono uppercase">Puestos Pro</span>
                <Monitor className="w-4 h-4 text-[#4cd7f6]" />
              </div>
              <div className="mt-2">
                <span className="text-xl font-bold text-white font-mono">14/14</span>
                <span className="block text-[11px] font-mono text-[#4edea3]">100% Calibrados</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#1e1f26]/90 border border-[#33343b] backdrop-blur flex flex-col justify-between">
              <div className="flex items-center justify-between text-[#958ea0]">
                <span className="text-[10px] font-mono uppercase">Cabinas 5v5</span>
                <Users className="w-4 h-4 text-[#d0bcff]" />
              </div>
              <div className="mt-2">
                <span className="text-xl font-bold text-white font-mono">2 Salas</span>
                <span className="block text-[11px] font-mono text-[#4cd7f6]">Insonorizadas</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#1e1f26]/90 border border-[#33343b] backdrop-blur flex flex-col justify-between">
              <div className="flex items-center justify-between text-[#958ea0]">
                <span className="text-[10px] font-mono uppercase">Sim & Consola</span>
                <Gamepad2 className="w-4 h-4 text-[#4edea3]" />
              </div>
              <div className="mt-2">
                <span className="text-xl font-bold text-white font-mono">4 Sets</span>
                <span className="block text-[11px] font-mono text-[#958ea0]">Fanatec + PS5 Pro</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#1e1f26]/90 border border-[#33343b] backdrop-blur flex flex-col justify-between">
              <div className="flex items-center justify-between text-[#958ea0]">
                <span className="text-[10px] font-mono uppercase">Frecuencia LAN</span>
                <Zap className="w-4 h-4 text-[#4cd7f6]" />
              </div>
              <div className="mt-2">
                <span className="text-xl font-bold text-white font-mono">360 Hz</span>
                <span className="block text-[11px] font-mono text-[#4cd7f6]">Zowie DyAc+ 2</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Spatial Map & Shop (8 cols) + Right Terminal Booking & Memberships (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Spatial Mapping Card */}
          <div className="p-6 rounded-2xl bg-[#191b22] border border-[#282a30] shadow-xl space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#282a30]">
              <div>
                <span className="text-[11px] font-mono text-[#d0bcff] uppercase font-bold tracking-wider">
                  Mapeo Táctico Espacial
                </span>
                <h2 className="text-xl font-bold text-white tracking-wide mt-0.5">
                  Distribución & Telemetría de Puestos
                </h2>
              </div>
              <div className="flex items-center gap-1 bg-[#0c0e14] p-1 rounded-lg border border-[#282a30]">
                {[
                  { id: 'all', label: 'Vista Global' },
                  { id: 'sec-a', label: 'Sector A (Bootcamps)' },
                  { id: 'sec-b', label: 'Sector B (Puestos)' },
                  { id: 'sec-c', label: 'Sector C (Sim/PS5)' }
                ].map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => setSelectedSector(sec.id as any)}
                    className={`px-3 py-1.5 rounded text-xs font-mono font-medium transition-all ${
                      selectedSector === sec.id
                        ? 'bg-[#a078ff] text-white font-bold shadow-[0_0_12px_rgba(160,120,255,0.4)]'
                        : 'text-[#cbc3d7] hover:text-white'
                    }`}
                  >
                    {sec.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tactical Grid Visualization */}
            <div className="relative bg-[#0c0e14] rounded-xl p-5 border border-[#282a30] space-y-4">
              {/* Sector A: Bootcamps */}
              {(selectedSector === 'all' || selectedSector === 'sec-a') && (
                <div className="p-4 rounded-xl bg-[#282a30]/40 border border-[#33343b] space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#d0bcff] animate-ping" />
                      <span className="font-mono text-xs font-bold text-white uppercase">
                        Sector A // Bootcamp Rooms Insonorizadas (5v5 Pro)
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#4cd7f6] uppercase bg-[#03b5d3]/20 px-2 py-0.5 rounded">
                      Zowie 360Hz • RTX 4070 Ti • i7-14700KF
                    </span>
                  </div>

                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
                    {/* Cabina Alpha */}
                    <div className="p-3 rounded-lg bg-[#0c0e14] border border-[#282a30]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold font-mono text-[#d0bcff] uppercase">
                          Cabina Alpha (5v5 Squad)
                        </span>
                        <span className="text-[10px] font-mono text-red-400 bg-red-500/20 px-2 py-0.5 rounded">
                          OCUPADO • SCRIM TIER 1
                        </span>
                      </div>
                      <div className="grid grid-cols-5 gap-1.5">
                        {['P-01', 'P-02', 'P-03', 'P-04', 'P-05'].map((seat) => (
                          <div
                            key={seat}
                            onClick={() =>
                              handleSeatClick(
                                seat,
                                'Cabina Alpha // Ocupado (Scrim Pro)',
                                'Zowie XL2566K 360Hz • RTX 4070 Ti',
                                'Ocupado hasta 20:30'
                              )
                            }
                            className="p-2 rounded bg-[#1e1f26] text-center cursor-pointer hover:bg-neutral-800 transition-colors border border-transparent hover:border-red-500/40"
                          >
                            <span className="block text-[10px] font-mono text-[#958ea0]">{seat}</span>
                            <Monitor className="w-4 h-4 mx-auto text-red-400 my-1" />
                            <span className="block text-[9px] font-mono text-neutral-400 truncate">42m rest</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Cabina Bravo */}
                    <div className="p-3 rounded-lg bg-[#0c0e14] border border-[#282a30]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold font-mono text-[#4cd7f6] uppercase">
                          Cabina Bravo (5v5 Academy)
                        </span>
                        <span className="text-[10px] font-mono text-[#4edea3] bg-[#00a572]/20 px-2 py-0.5 rounded font-bold">
                          DISPONIBLE AHORA
                        </span>
                      </div>
                      <div className="grid grid-cols-5 gap-1.5">
                        {['P-06', 'P-07', 'P-08', 'P-09', 'P-10'].map((seat) => (
                          <div
                            key={seat}
                            onClick={() =>
                              handleSeatClick(
                                seat,
                                'Cabina Bravo // Puesto ' + seat,
                                'Zowie XL2546K 240Hz • RTX 4070 Ti',
                                'Disponible Inmediato'
                              )
                            }
                            className={`p-2 rounded text-center cursor-pointer transition-colors border ${
                              selectedSeat.id === seat
                                ? 'bg-[#a078ff]/20 border-[#a078ff] ring-1 ring-[#a078ff]'
                                : 'bg-[#1e1f26] border-[#282a30] hover:bg-neutral-800'
                            }`}
                          >
                            <span className="block text-[10px] font-mono text-[#958ea0]">{seat}</span>
                            <CheckCircle2 className="w-4 h-4 mx-auto text-[#4edea3] my-1" />
                            <span className="block text-[9px] font-mono text-[#4edea3] font-bold">LIBRE</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Sector B & C Row */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                {/* Sector B: Individuales */}
                {(selectedSector === 'all' || selectedSector === 'sec-b') && (
                  <div
                    className={`${
                      selectedSector === 'sec-b' ? 'md:col-span-12' : 'md:col-span-8'
                    } p-4 rounded-xl bg-[#282a30]/40 border border-[#33343b] space-y-3`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-white uppercase">
                        Sector B // Puestos Individuales & Combos
                      </span>
                      <span className="text-[11px] font-mono text-[#4edea3]">$8.000 / hora base</span>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { id: 'IND-11', free: true },
                        { id: 'IND-12', free: false, rest: '18m rest' },
                        { id: 'IND-13', free: true },
                        { id: 'IND-14', free: true }
                      ].map((seat) => (
                        <div
                          key={seat.id}
                          onClick={() =>
                            handleSeatClick(
                              seat.id,
                              'Puesto Individual ' + seat.id,
                              '240Hz IPS • Ryzen 7 7800X3D • RTX 4070 Super',
                              seat.free ? 'Disponible Inmediato' : 'Ocupado hasta 17:30'
                            )
                          }
                          className={`p-3 rounded-lg text-center cursor-pointer transition-colors border ${
                            selectedSeat.id === seat.id
                              ? 'bg-[#a078ff]/20 border-[#a078ff] ring-1 ring-[#a078ff]'
                              : 'bg-[#0c0e14] border-[#282a30] hover:bg-neutral-800'
                          }`}
                        >
                          <span className="text-[10px] font-mono text-[#958ea0] block">{seat.id}</span>
                          <Monitor
                            className={`w-5 h-5 mx-auto my-1 ${
                              seat.free ? 'text-[#4edea3]' : 'text-red-400'
                            }`}
                          />
                          <span
                            className={`text-[10px] font-mono block font-bold ${
                              seat.free ? 'text-[#4edea3]' : 'text-red-400'
                            }`}
                          >
                            {seat.free ? 'LIBRE' : seat.rest}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sector C: Sim & Consolas */}
                {(selectedSector === 'all' || selectedSector === 'sec-c') && (
                  <div
                    className={`${
                      selectedSector === 'sec-c' ? 'md:col-span-12' : 'md:col-span-4'
                    } p-4 rounded-xl bg-[#282a30]/40 border border-[#33343b] space-y-3`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-white uppercase">
                        Sector C // Sim & Consolas
                      </span>
                      <span className="text-[10px] font-mono text-[#4cd7f6]">4K 144Hz</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div
                        onClick={() =>
                          handleSeatClick(
                            'SIM-01',
                            'Cockpit Fanatec DirectDrive FFB 8Nm',
                            'Fanatec CSL DD + Cockpit aluminio + Tri-Monitor 144Hz',
                            'Disponible'
                          )
                        }
                        className={`p-3 rounded-lg text-center cursor-pointer transition-colors border ${
                          selectedSeat.id === 'SIM-01'
                            ? 'bg-[#a078ff]/20 border-[#a078ff]'
                            : 'bg-[#0c0e14] border-[#282a30] hover:bg-neutral-800'
                        }`}
                      >
                        <span className="text-[10px] font-mono text-[#958ea0] block">SIM-01</span>
                        <Gamepad2 className="w-5 h-5 mx-auto my-1 text-[#4edea3]" />
                        <span className="text-[10px] font-mono text-[#4edea3] block font-bold">LIBRE</span>
                      </div>

                      <div
                        onClick={() =>
                          handleSeatClick(
                            'PS5-01',
                            'PS5 Pro Tournament Station',
                            'PS5 Pro + Sony Inzone M9 4K 144Hz + DualSense Edge',
                            'Disponible'
                          )
                        }
                        className={`p-3 rounded-lg text-center cursor-pointer transition-colors border ${
                          selectedSeat.id === 'PS5-01'
                            ? 'bg-[#a078ff]/20 border-[#a078ff]'
                            : 'bg-[#0c0e14] border-[#282a30] hover:bg-neutral-800'
                        }`}
                      >
                        <span className="text-[10px] font-mono text-[#958ea0] block">PS5-01</span>
                        <Gamepad2 className="w-5 h-5 mx-auto my-1 text-[#4cd7f6]" />
                        <span className="text-[10px] font-mono text-[#4cd7f6] block font-bold">LIBRE</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Selected Seat Indicator Banner */}
            <div className="p-3.5 rounded-xl bg-[#1e1f26] border border-[#33343b] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#03b5d3]/20 flex items-center justify-center text-[#4cd7f6] shrink-0">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#958ea0] uppercase block">
                    Estación Seleccionada:
                  </span>
                  <span className="text-xs font-bold text-white font-mono">{selectedSeat.label}</span>
                  <span className="text-[11px] font-mono text-[#cbc3d7] block mt-0.5">
                    {selectedSeat.specs}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  const bookingEl = document.getElementById('booking-panel');
                  bookingEl?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-lg bg-[#a078ff] hover:bg-[#8B5CF6] text-white text-xs font-mono font-bold uppercase transition-all shadow-[0_0_12px_rgba(160,120,255,0.4)] self-start sm:self-auto"
              >
                Cargar en Formulario
              </button>
            </div>

            {/* Tarifa Combos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-[#0c0e14] border border-[#282a30] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#958ea0] uppercase block">Puesto 1 Hora</span>
                  <span className="text-lg font-mono font-bold text-white">$8.000</span>
                </div>
                <Clock className="w-5 h-5 text-[#958ea0]" />
              </div>
              <div className="p-3 rounded-xl bg-[#0c0e14] border border-[#03b5d3]/40 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#4cd7f6] uppercase block font-bold">
                    Combo Táctico 2hs
                  </span>
                  <span className="text-lg font-mono font-bold text-[#4cd7f6]">$15.000</span>
                </div>
                <span className="text-[10px] font-mono text-[#4cd7f6] font-bold bg-[#03b5d3]/20 px-2 py-0.5 rounded">
                  Ahorro $1.000
                </span>
              </div>
              <div className="p-3 rounded-xl bg-[#0c0e14] border border-[#00a572]/40 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#4edea3] uppercase block font-bold">
                    Combo Maratón 3hs
                  </span>
                  <span className="text-lg font-mono font-bold text-[#4edea3]">$20.000</span>
                </div>
                <span className="text-[10px] font-mono text-[#4edea3] font-bold bg-[#00a572]/20 px-2 py-0.5 rounded">
                  Ahorro $4.000
                </span>
              </div>
            </div>
          </div>

          {/* Pro Shop Posadas Card */}
          <div className="p-6 rounded-2xl bg-[#191b22] border border-[#282a30] shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#03b5d3]/10 border border-[#03b5d3]/30 flex items-center justify-center text-[#4cd7f6]">
                  <Store className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#d0bcff] uppercase font-bold tracking-wider">
                    Pro Shop Posadas
                  </span>
                  <h3 className="text-lg font-bold text-white">Venta de Hardware & Periféricos In-Situ</h3>
                </div>
              </div>
              <span className="text-xs font-mono text-[#958ea0] bg-[#0c0e14] px-2.5 py-1 rounded border border-[#282a30]">
                Stock en mostrador
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                {
                  tag: 'CONTROL SURFACE',
                  title: 'Mousepad Artisan Zero FX Soft',
                  detail: 'XL (490x420x4mm) Negro',
                  price: '$82.000'
                },
                {
                  tag: 'ERGONOMÍA PRO',
                  title: 'Manga de Compresión Esports',
                  detail: 'Fibra PTFE fricción cero',
                  price: '$18.500'
                },
                {
                  tag: 'CALIBRACIÓN',
                  title: 'Grips Pre-cortados Pulsar',
                  detail: 'Supergrip G Pro / Viper',
                  price: '$14.000'
                },
                {
                  tag: 'KEYBOARDS',
                  title: 'Switches Hall Effect Jade',
                  detail: 'Gateron Magnetic (x35)',
                  price: '$34.900'
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#0c0e14] border border-[#282a30] flex flex-col justify-between hover:border-[#a078ff]/40 transition-colors"
                >
                  <div className="space-y-1">
                    <span className="px-1.5 py-0.5 rounded bg-[#1e1f26] text-[9px] font-mono text-[#4cd7f6] uppercase">
                      {item.tag}
                    </span>
                    <p className="text-xs font-bold text-white mt-1 line-clamp-1">{item.title}</p>
                    <span className="text-[10px] font-mono text-[#958ea0] block">{item.detail}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#d0bcff]">{item.price}</span>
                    <button
                      onClick={() => alert(`Añadido ${item.title} al carrito de mostrador.`)}
                      className="p-1.5 rounded bg-[#1e1f26] hover:bg-[#a078ff] text-white transition-colors"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Terminal Operativo: Reserva Inmediata & Turnos */}
          <div
            id="booking-panel"
            className="p-6 rounded-2xl bg-[#191b22] border border-[#282a30] shadow-xl space-y-4"
          >
            <div>
              <span className="text-[11px] font-mono text-[#4cd7f6] uppercase font-bold tracking-wider">
                Terminal Operativo
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">Reserva Inmediata & Turnos</h3>
              <p className="text-xs text-[#cbc3d7]">Sede Posadas • Horario: 14:00 a 00:00 hs</p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-[11px] font-mono text-[#958ea0] uppercase mb-1.5">
                  Modalidad de Sesión
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setBookingMode('team')}
                    className={`py-2 px-3 rounded-lg text-xs font-mono font-bold uppercase transition-all ${
                      bookingMode === 'team'
                        ? 'bg-[#a078ff] text-white shadow-[0_0_12px_rgba(160,120,255,0.4)]'
                        : 'bg-[#0c0e14] text-[#cbc3d7] border border-[#282a30]'
                    }`}
                  >
                    Escuadra 5v5
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingMode('solo')}
                    className={`py-2 px-3 rounded-lg text-xs font-mono font-bold uppercase transition-all ${
                      bookingMode === 'solo'
                        ? 'bg-[#a078ff] text-white shadow-[0_0_12px_rgba(160,120,255,0.4)]'
                        : 'bg-[#0c0e14] text-[#cbc3d7] border border-[#282a30]'
                    }`}
                  >
                    Puesto Solo
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-mono text-[#958ea0] uppercase mb-1">Fecha</label>
                  <div className="p-2.5 rounded-lg bg-[#0c0e14] border border-[#282a30] flex items-center justify-between text-xs font-mono text-white">
                    <span>HOY 28 OCT</span>
                    <Calendar className="w-3.5 h-3.5 text-[#958ea0]" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-[#958ea0] uppercase mb-1">Bloque Horario</label>
                  <select
                    value={selectedBlock}
                    onChange={(e) => setSelectedBlock(e.target.value)}
                    className="w-full p-2.5 rounded-lg bg-[#0c0e14] border border-[#282a30] text-xs font-mono text-white focus:outline-none focus:border-[#a078ff]"
                  >
                    <option>16:00 - 18:00 (2hs)</option>
                    <option>18:00 - 20:00 (2hs)</option>
                    <option>20:00 - 22:00 (2hs)</option>
                    <option>22:00 - 00:00 (2hs)</option>
                  </select>
                </div>
              </div>

              {/* Fee Breakdown */}
              <div className="p-3.5 rounded-xl bg-[#0c0e14] border border-[#282a30] space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#cbc3d7]">
                    {bookingMode === 'team' ? 'Arancel Base Cabina (10 PCs / 1h):' : 'Arancel Puesto 1h:'}
                  </span>
                  <span className="font-mono font-bold text-white">
                    {bookingMode === 'team' ? '$60.000' : '$8.000'}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[#958ea0] text-[11px]">
                  <span>Puesto Asignado:</span>
                  <span className="font-mono text-[#4cd7f6]">{selectedSeat.id}</span>
                </div>

                <div className="pt-2 border-t border-[#282a30]">
                  <label className="flex items-start gap-2.5 cursor-pointer p-2 rounded-lg bg-[#1e1f26]/60 hover:bg-[#1e1f26]">
                    <input
                      type="checkbox"
                      checked={coachAddon}
                      onChange={(e) => setCoachAddon(e.target.checked)}
                      className="mt-0.5 rounded text-[#a078ff] focus:ring-0"
                    />
                    <div className="flex flex-col text-xs">
                      <span className="font-semibold text-white">Sumar Coach Táctico Presencial</span>
                      <span className="text-[10px] text-[#4edea3] font-mono">
                        Análisis GOTV + Estrategia Veto (+$4.000/hr)
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Total & Confirmation */}
              <div className="p-4 rounded-xl bg-[#1e1f26] border border-[#282a30] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#958ea0] uppercase block">
                    Total Liquidación LAN
                  </span>
                  <span className="text-xl font-bold font-mono text-[#4cd7f6]">
                    ${calculateTotal().toLocaleString('es-AR')}
                  </span>
                </div>

                <button
                  onClick={handleConfirmBooking}
                  className="px-5 py-2.5 rounded-lg bg-[#a078ff] hover:bg-[#8B5CF6] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-[0_0_14px_rgba(160,120,255,0.4)]"
                >
                  Confirmar Reserva
                </button>
              </div>

              {bookingConfirmed && (
                <div className="p-3 rounded-lg bg-[#00a572]/20 border border-[#00a572]/40 text-[#4edea3] text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>¡Reserva confirmada en mostrador Arena Posadas! Te esperamos en San Lorenzo 2170.</span>
                </div>
              )}
            </div>
          </div>

          {/* Membresías Zingaro Club */}
          <div className="p-6 rounded-2xl bg-[#191b22] border border-[#282a30] shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#d0bcff] uppercase font-bold tracking-wider">
                Membresías Zingaro Club
              </span>
              <span className="text-xs font-mono text-[#958ea0]">Mensual</span>
            </div>

            <div className="space-y-3">
              {/* Socio Plata */}
              <div className="p-4 rounded-xl bg-[#0c0e14] border border-[#282a30] space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-white">Socio Plata</span>
                    <p className="text-[11px] text-[#cbc3d7] mt-0.5">
                      2 clases semanales en Arena + Acceso libre off-peak
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-bold font-mono text-white">$45.000</span>
                    <span className="block text-[9px] text-[#958ea0] font-mono">x mes</span>
                  </div>
                </div>
                <button
                  onClick={() => alert('Suscripción a Socio Plata iniciada.')}
                  className="w-full py-2 rounded-lg bg-[#1e1f26] hover:bg-[#282a30] text-white text-xs font-mono font-semibold uppercase transition-colors"
                >
                  Adquirir Pase Plata
                </button>
              </div>

              {/* Socio Oro Pro */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-[#1e1f26] to-[#0c0e14] border border-[#4cd7f6]/40 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-[#4cd7f6]">Socio Oro Pro</span>
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    </div>
                    <p className="text-[11px] text-[#cbc3d7] mt-0.5">
                      3 clases/sem + Masterclass con Adniel + Kit Oficial
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-bold font-mono text-[#4cd7f6]">$55.000</span>
                    <span className="block text-[9px] text-[#958ea0] font-mono">x mes</span>
                  </div>
                </div>
                <button
                  onClick={() => alert('Suscripción a Socio Oro Pro iniciada con Kit Oficial!')}
                  className="w-full py-2 rounded-lg bg-[#03b5d3] hover:bg-[#4cd7f6] text-[#001f26] text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  Unirme como Socio Oro
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cronograma LAN Presencial */}
      <div className="p-6 rounded-2xl bg-[#191b22] border border-[#282a30] shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-[11px] font-mono text-[#4cd7f6] uppercase font-bold tracking-wider">
              Cronograma LAN Presencial
            </span>
            <h3 className="text-xl font-bold text-white mt-0.5">Bootcamps & Eventos de Alto Desempeño</h3>
          </div>
          <span className="px-3 py-1 rounded bg-[#0c0e14] text-xs font-mono text-[#958ea0] border border-[#282a30]">
            Temporada 2026 // Fase Clasificatoria
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#0c0e14] border border-[#282a30] flex flex-col justify-between space-y-3">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2 py-0.5 rounded bg-[#a078ff]/20 text-[#d0bcff] font-bold">
                  FECHA CONFIRMADA
                </span>
                <span className="text-[#958ea0]">14 NOV 2026</span>
              </div>
              <h4 className="text-sm font-bold text-white">Bootcamp Previo: Zingaro Fest</h4>
              <p className="text-xs text-[#cbc3d7] leading-relaxed">
                Concentración cerrada de 48hs para escuadras clasificadas. Catering deportivo, kinesiología y configs CS2 precargadas en 128-tick.
              </p>
            </div>
            <div className="pt-2 border-t border-[#282a30] flex items-center justify-between text-xs font-mono">
              <span className="text-[#4edea3] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]" /> 2 Cabinas Reservadas
              </span>
              <span className="text-[#958ea0]">Sede Posadas</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0c0e14] border border-[#282a30] flex flex-col justify-between space-y-3">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2 py-0.5 rounded bg-[#03b5d3]/20 text-[#4cd7f6] font-bold">
                  INSCRIPCIÓN ABIERTA
                </span>
                <span className="text-[#958ea0]">22 NOV 2026</span>
              </div>
              <h4 className="text-sm font-bold text-white">Torneo Relámpago 1v1 AWP & Aim</h4>
              <p className="text-xs text-[#cbc3d7] leading-relaxed">
                Competencia presencial en Puestos Libres Sector B. Bracket suizo con relatores en vivo y streaming en directo por Twitch.
              </p>
            </div>
            <div className="pt-2 border-t border-[#282a30] flex items-center justify-between text-xs font-mono">
              <span className="text-[#4cd7f6] font-bold">Pozo: $250.000 ARS</span>
              <button
                onClick={() => onSelectView('tournaments')}
                className="text-[#d0bcff] hover:underline font-bold"
              >
                Ver Torneo →
              </button>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0c0e14] border border-[#282a30] flex flex-col justify-between space-y-3">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2 py-0.5 rounded bg-[#00a572]/20 text-[#4edea3] font-bold">
                  ACADEMIA EXCLUSIVA
                </span>
                <span className="text-[#958ea0]">CADA SÁBADO</span>
              </div>
              <h4 className="text-sm font-bold text-white">Clínica de Smokes & Utilidad Pro</h4>
              <p className="text-xs text-[#cbc3d7] leading-relaxed">
                Sesión táctica grupal guiada por los entrenadores oficiales en Inferno, Mirage, Anubis y Ancient con set de microfonía individual.
              </p>
            </div>
            <div className="pt-2 border-t border-[#282a30] flex items-center justify-between text-xs font-mono">
              <span className="text-[#cbc3d7]">Cupo: 10 Jugadores</span>
              <span className="text-[#4edea3] font-bold">Incluido en Socio Oro</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
