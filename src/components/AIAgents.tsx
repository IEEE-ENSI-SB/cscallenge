import React, { useState, useEffect } from 'react';
import { Bot, Shield, Zap, GitBranch } from 'lucide-react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const AIAgents: React.FC = () => {
  const [chartData, setChartData] = useState({
    labels: ['Threat Intelligence', 'Automated Response', 'Vulnerability Management', 'Incident Response', 'Security Orchestration'],
    datasets: [
      {
        label: 'AI Agent Performance',
        data: [85, 92, 78, 88, 95],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  });

  const [stats, setStats] = useState({
    activeAgents: 24,
    threatsMitigated: 187,
    responseTime: 1.2,
    aiModels: 8,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = Array(5).fill(0).map(() => Math.floor(Math.random() * 30) + 70);
      setChartData(prevState => ({
        ...prevState,
        datasets: [{
          ...prevState.datasets[0],
          data: newData,
        }],
      }));

      setStats({
        activeAgents: Math.floor(Math.random() * 10) + 20,
        threatsMitigated: Math.floor(Math.random() * 50) + 150,
        responseTime: (Math.random() * 2 + 0.5).toFixed(1),
        aiModels: Math.floor(Math.random() * 3) + 7,
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const chartOptions = {
    responsive: true,
    scales: {
      r: {
        angleLines: {
          display: false
        },
        suggestedMin: 0,
        suggestedMax: 100
      }
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'AI Agent Performance Metrics',
      },
    },
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">AI Cybersecurity Agents</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Radar data={chartData} options={chartOptions} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <Bot className="text-blue-500" size={24} />
              <span className="text-sm font-semibold text-gray-500">Active AI Agents</span>
            </div>
            <p className="text-2xl font-bold">{stats.activeAgents}</p>
            <p className="text-sm text-gray-500">Monitoring systems</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <Shield className="text-green-500" size={24} />
              <span className="text-sm font-semibold text-gray-500">Threats Mitigated</span>
            </div>
            <p className="text-2xl font-bold">{stats.threatsMitigated}</p>
            <p className="text-sm text-gray-500">This month</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <Zap className="text-yellow-500" size={24} />
              <span className="text-sm font-semibold text-gray-500">Response Time</span>
            </div>
            <p className="text-2xl font-bold">{stats.responseTime}s</p>
            <p className="text-sm text-gray-500">Average</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <GitBranch className="text-purple-500" size={24} />
              <span className="text-sm font-semibold text-gray-500">AI Models</span>
            </div>
            <p className="text-2xl font-bold">{stats.aiModels}</p>
            <p className="text-sm text-gray-500">In production</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAgents;