// Overview.tsx
import React, { useState, useEffect } from 'react';
import { Shield, Activity, AlertTriangle } from 'lucide-react';

const Overview: React.FC = () => {
  const [stats, setStats] = useState({
    f1Score: 99.8,
    detectionAccuracy: 99.8,
    activeThreats: 7,
    systemUptime: 99.99,
    cpuUsage: 45,
    memoryUsage: 68,
    recentThreats: 5,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) => ({
        ...prevStats,
        activeThreats: Math.floor(Math.random() * 10),
        cpuUsage: Math.floor(Math.random() * 20) + 40,
        memoryUsage: Math.floor(Math.random() * 20) + 60,
        recentThreats: Math.floor(Math.random() * 10),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <AlertTriangle className="mr-2 text-red-500" />
          Threat Summary
        </h2>
        <p>Active Threats: {stats.activeThreats}</p>
        <p>Recent Threats: {stats.recentThreats}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Activity className="mr-2 text-green-500" />
          System Health
        </h2>
        <p>System Uptime: {stats.systemUptime}%</p>
        <p>CPU Usage: {stats.cpuUsage}%</p>
        <p>Memory Usage: {stats.memoryUsage}%</p>
      </div>
    </div>
  );
};

export default Overview;
