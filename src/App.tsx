/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ViewType } from './types/esports';
import { CURRENT_USER } from './data/mockData';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';

// Core Competitive Views
import { DashboardView } from './components/views/DashboardView';
import { MatchroomView } from './components/views/MatchroomView';
import { MasterPanelView } from './components/views/MasterPanelView';
import { DisputesView } from './components/views/DisputesView';
import { AuditLogsView } from './components/views/AuditLogsView';
import { RolesView } from './components/views/RolesView';
import { ArbitrationJudicialView } from './components/views/ArbitrationJudicialView';
import { ServersView } from './components/views/ServersView';
import { TeamsView } from './components/views/TeamsView';
import { TournamentsView } from './components/views/TournamentsView';
import { LeagueView } from './components/views/LeagueView';
import { MatchesScrimsView } from './components/views/MatchesScrimsView';
import { RankingView } from './components/views/RankingView';
import { ProfileView } from './components/views/ProfileView';
import { SupportView } from './components/views/SupportView';

// Venue, Academy, Coordination & Specialized Views
import { ArenaLanView } from './components/views/ArenaLanView';
import { AcademiaView } from './components/views/AcademiaView';
import { StudentReportView } from './components/views/StudentReportView';
import { MatchSchedulingView } from './components/views/MatchSchedulingView';
import { NotificationsView } from './components/views/NotificationsView';
import { StatsView } from './components/views/StatsView';
import { ExportAiStudioView } from './components/views/ExportAiStudioView';

// Modals
import { RosterLockModal } from './components/modals/RosterLockModal';
import { NotificationDrawer } from './components/modals/NotificationDrawer';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [isRosterModalOpen, setIsRosterModalOpen] = useState(false);
  const [isNotifDrawerOpen, setIsNotifDrawerOpen] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(3);

  const handleSelectView = (view: ViewType) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveView = () => {
    switch (currentView) {
      case 'dashboard':
        return (
          <DashboardView
            onSelectView={handleSelectView}
            onRequestRosterModal={() => setIsRosterModalOpen(true)}
          />
        );
      case 'matchroom':
        return <MatchroomView onSelectView={handleSelectView} />;
      case 'master-panel':
        return <MasterPanelView onSelectView={handleSelectView} />;
      case 'disputes':
        return <DisputesView onSelectView={handleSelectView} />;
      case 'audit-logs':
        return <AuditLogsView onSelectView={handleSelectView} />;
      case 'roles':
        return <RolesView onSelectView={handleSelectView} />;
      case 'judicial-dossier':
        return <ArbitrationJudicialView onSelectView={handleSelectView} />;
      case 'servers':
        return <ServersView onSelectView={handleSelectView} />;
      case 'teams':
        return (
          <TeamsView
            onSelectView={handleSelectView}
            onRequestRosterLockModal={() => setIsRosterModalOpen(true)}
          />
        );
      case 'tournaments':
        return <TournamentsView onSelectView={handleSelectView} />;
      case 'league':
        return <LeagueView onSelectView={handleSelectView} />;
      case 'matches':
        return <MatchesScrimsView onSelectView={handleSelectView} />;
      case 'ranking':
        return <RankingView onSelectView={handleSelectView} />;
      case 'stats':
        return <StatsView onSelectView={handleSelectView} />;
      case 'profile':
        return <ProfileView onSelectView={handleSelectView} />;
      case 'support':
        return <SupportView onSelectView={handleSelectView} />;
      case 'arena-lan':
        return <ArenaLanView onSelectView={handleSelectView} />;
      case 'academia':
        return <AcademiaView onSelectView={handleSelectView} />;
      case 'student-report':
        return <StudentReportView onSelectView={handleSelectView} />;
      case 'match-scheduling':
      case 'scheduling':
        return <MatchSchedulingView onSelectView={handleSelectView} />;
      case 'notifications':
        return <NotificationsView onSelectView={handleSelectView} />;
      case 'ai-studio-export':
      case 'export-ai':
        return <ExportAiStudioView onSelectView={handleSelectView} />;
      default:
        return (
          <DashboardView
            onSelectView={handleSelectView}
            onRequestRosterModal={() => setIsRosterModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="flex h-screen bg-[#0b0d13] text-neutral-100 overflow-hidden font-sans antialiased selection:bg-cyan-500 selection:text-black">
      {/* Background Decorative Gradient Elements */}
      <div className="fixed top-0 left-64 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Left Sidebar */}
      <Sidebar
        currentView={currentView}
        onSelectView={handleSelectView}
        user={CURRENT_USER}
        unreadNotifications={unreadNotifications}
        openNotifications={() => setIsNotifDrawerOpen(true)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Global Top Header */}
        <Header
          user={CURRENT_USER}
          onSelectView={handleSelectView}
          openNotificationDrawer={() => {
            setIsNotifDrawerOpen(true);
            setUnreadNotifications(0);
          }}
          unreadCount={unreadNotifications}
        />

        {/* Dynamic View Scroll Container */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 space-y-6">
          <div className="max-w-7xl mx-auto">
            {renderActiveView()}
          </div>
        </main>
      </div>

      {/* Modals & Drawers */}
      <RosterLockModal
        isOpen={isRosterModalOpen}
        onClose={() => setIsRosterModalOpen(false)}
        onSubmitSuccess={() => {
          // Success callback
        }}
      />

      <NotificationDrawer
        isOpen={isNotifDrawerOpen}
        onClose={() => setIsNotifDrawerOpen(false)}
        onSelectView={handleSelectView}
      />
    </div>
  );
}
