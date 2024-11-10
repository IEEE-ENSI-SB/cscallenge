import React, { useState } from 'react';
import { Bell, Settings, ToggleLeft, ToggleRight, Eye, EyeOff, Moon, Sun } from 'lucide-react';
import Modal from './Modal';

const Header: React.FC = () => {
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showAlertsModal, setShowAlertsModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [dataPrivacy, setDataPrivacy] = useState(true);

  const alerts = [
    { id: 1, severity: 'Critical', message: 'Unauthorized access attempt detected from IP 192.168.1.100', time: '2 minutes ago' },
    { id: 2, severity: 'High', message: 'Unusual data exfiltration activity observed in Marketing department', time: '15 minutes ago' },
    { id: 3, severity: 'Medium', message: 'Failed login attempts exceeded threshold for user admin@example.com', time: '1 hour ago' },
    { id: 4, severity: 'Low', message: 'Software update available for Firewall System', time: '3 hours ago' },
    { id: 5, severity: 'Info', message: 'Routine security scan completed successfully', time: '5 hours ago' },
  ];

  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">TunSecure-AI</h1>
        <div className="flex items-center space-x-4">
          <button
            className="text-gray-600 hover:text-gray-800 relative"
            onClick={() => setShowAlertsModal(true)}
          >
            <Bell className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {alerts.length}
            </span>
          </button>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={() => setShowSettingsModal(true)}
          >
            <Settings className="h-6 w-6" />
          </button>
        </div>
      </div>

      <Modal
        isOpen={showSettingsModal}
        onClose={() => setShowSettingsModal(false)}
        title="Dashboard Settings"
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Dark Mode</span>
            <button onClick={() => setDarkMode(!darkMode)} className="focus:outline-none">
              {darkMode ? <Moon className="text-indigo-600" /> : <Sun className="text-yellow-500" />}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Notifications</span>
            <button onClick={() => setNotifications(!notifications)} className="focus:outline-none">
              {notifications ? <ToggleRight className="text-green-500" /> : <ToggleLeft className="text-gray-400" />}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Enhanced Data Privacy</span>
            <button onClick={() => setDataPrivacy(!dataPrivacy)} className="focus:outline-none">
              {dataPrivacy ? <Eye className="text-blue-500" /> : <EyeOff className="text-gray-400" />}
            </button>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Dashboard Customization</h3>
            <p className="text-sm text-gray-600 mb-2">Select widgets to display:</p>
            <div className="space-y-2">
              {['Threat Overview', 'User Activity', 'Network Status', 'Vulnerability Scan'].map((widget) => (
                <label key={widget} className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" defaultChecked />
                  <span className="ml-2 text-sm text-gray-700">{widget}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={showAlertsModal}
        onClose={() => setShowAlertsModal(false)}
        title="Security Alerts"
      >
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="border-b pb-2">
              <div className="flex items-center justify-between">
                <span className={`text-sm font-semibold ${
                  alert.severity === 'Critical' ? 'text-red-600' :
                  alert.severity === 'High' ? 'text-orange-500' :
                  alert.severity === 'Medium' ? 'text-yellow-500' :
                  alert.severity === 'Low' ? 'text-blue-500' : 'text-gray-500'
                }`}>
                  {alert.severity}
                </span>
                <span className="text-xs text-gray-500">{alert.time}</span>
              </div>
              <p className="text-sm text-gray-700 mt-1">{alert.message}</p>
            </div>
          ))}
          <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">
            View All Alerts
          </button>
        </div>
      </Modal>
    </header>
  );
};

export default Header;