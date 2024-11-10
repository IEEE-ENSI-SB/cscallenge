import React, { useState, useEffect } from 'react';
import ThreatDetection from './ThreatDetection';
import UserBehavior from './UserBehavior';
import AIAgents from './AIAgents';
import NetworkSecurity from './NetworkSecurity';
import DataProtection from './DataProtection';
import EmailSecurity from './EmailSecurity';
import ApplicationSecurity from './ApplicationSecurity';
import VulnerabilityManagement from './VulnerabilityManagement';
import RedBlueTeam from './RedBlueTeam';
import AdvancedAnalytics from './AdvancedAnalytics';
import { Shield, Users, Activity } from 'lucide-react';

interface DashboardProps {
  activeTab: string;
}

const Dashboard: React.FC<DashboardProps> = ({ activeTab }) => {
  const [overviewStats, setOverviewStats] = useState({
    activeThreats: 7,
    resolvedThreats: 42,
    activeUsers: 2134,
    suspiciousActivities: 12,
    uptime: 99.99,
    bandwidthUsage: 82,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setOverviewStats({
        activeThreats: Math.floor(Math.random() * 10) + 1,
        resolvedThreats: Math.floor(Math.random() * 30) + 30,
        activeUsers: Math.floor(Math.random() * 1000) + 1500,
        suspiciousActivities: Math.floor(Math.random() * 15) + 1,
        uptime: (99 + Math.random()).toFixed(2),
        bandwidthUsage: Math.floor(Math.random() * 20) + 70,
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'threats':
        return <ThreatDetection />;
      case 'user-behavior':
        return <UserBehavior />;
      case 'ai-agents':
        return <AIAgents />;
      case 'network':
        return <NetworkSecurity />;
      case 'data-protection':
        return <DataProtection />;
      case 'email-security':
        return <EmailSecurity />;
      case 'application-security':
        return <ApplicationSecurity />;
      case 'vulnerability':
        return <VulnerabilityManagement />;
      case 'red-blue-team':
        return <RedBlueTeam />;
      case 'advanced-analytics':
        return <AdvancedAnalytics />;
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Shield className="mr-2 text-blue-500" />
                Threat Overview
              </h2>
              <p>Active Threats: {overviewStats.activeThreats}</p>
              <p>Resolved Threats: {overviewStats.resolvedThreats}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Users className="mr-2 text-green-500" />
                User Activity
              </h2>
              <p>Active Users: {overviewStats.activeUsers.toLocaleString()}</p>
              <p>Suspicious Activities: {overviewStats.suspiciousActivities}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Activity className="mr-2 text-purple-500" />
                Network Status
              </h2>
              <p>Uptime: {overviewStats.uptime}%</p>
              <p>Bandwidth Usage: {overviewStats.bandwidthUsage}%</p>
            </div>
          </div>
        );
    }
  };

  return <div className="h-full">{renderContent()}</div>;
};

export default Dashboard;