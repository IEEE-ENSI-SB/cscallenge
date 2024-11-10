import React, { useState } from 'react';
import { Shield, Users, Bot, Network, Lock, Mail, FileCode, Search, Target, BarChart2 } from 'lucide-react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const menuItems = [
    { id: 'overview', icon: Shield, label: 'Overview' },
    { id: 'threats', icon: Shield, label: 'Threat Detection' },
    { id: 'user-behavior', icon: Users, label: 'User Behavior' },
    { id: 'ai-agents', icon: Bot, label: 'AI Agents' },
    { id: 'network', icon: Network, label: 'Network Security' },
    { id: 'data-protection', icon: Lock, label: 'Data Protection' },
    { id: 'email-security', icon: Mail, label: 'Email Security' },
    { id: 'application-security', icon: FileCode, label: 'Application Security' },
    { id: 'vulnerability', icon: Search, label: 'Vulnerability Management' },
    { id: 'red-blue-team', icon: Target, label: 'Red & Blue Team' },
    { id: 'advanced-analytics', icon: BarChart2, label: 'Advanced Analytics' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar menuItems={menuItems} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <Dashboard activeTab={activeTab} />
        </main>
      </div>
    </div>
  );
};

export default App;