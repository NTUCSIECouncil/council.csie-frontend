import React, { useState } from 'react';

import { SettingOption, SettingOptions } from '@/utils/constants';
import { useRouter } from 'next/navigation';

const CloseIcon = () => (
  <svg
    className="w-6 h-6 text-white hover:text-gray-300 transition-colors"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// --- The Main Settings Panel Component ---
export const SettingsPanel = () => {
  const [configs, setConfigs] = useState<SettingOption[]>(SettingOptions);
  const router = useRouter();
  return (
    <div className="w-full max-w-4xl mx-auto mt-10 p-6 sm:p-8 rounded-2xl bg-white/10 shadow-lg backdrop-blur-[15px] relative text-white">
      
      {/* Desktop-only Close Button*/}
      <button
        onClick={() => {router.back();}}
        className="hidden lg:block absolute top-3 right-3 p-1 rounded-full z-10"
        aria-label="Close settings"
      >
        <CloseIcon />
      </button>

      <div className="flex flex-col items-center space-y-4 mb-8">
        <p className="text-3xl font-bold text-center">User Settings</p>
        <hr color="white" className="w-full max-w-md mx-auto border-t opacity-50" />
      </div>

      <div className="flex flex-col space-y-4">
        {configs.map((option) => (
          <div
            key={option.id}
            className="flex justify-between items-center p-4 rounded-lg bg-black/20"
          >
            <div className="flex-grow pr-4">
              <p className="text-lg font-medium">{option.label}</p>
              <p className="text-sm text-gray-300">{option.description}</p>
            </div>
            
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={option.enabled}
                onChange={(e) => setConfigs((currentConfigs) =>
                  currentConfigs.map((config) =>
                    config.id === option.id ? { ...config, enabled: e.target.checked } : config
                  )
                )}
                className="sr-only peer" // Hides the default checkbox
              />
              {/* visualized checkbox */}
              <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-focus:ring-2 peer-focus:ring-violet-400 peer-checked:bg-violet-600 transition-all
                              peer-checked:after:translate-x-full peer-checked:after:border-white 
                              after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all">
              </div>
            </label>
          </div>
        ))}
      </div>

      {/* Mobile-only Close Button (Bottom) */}
      <button
        onClick={() => {router.back();}}
        className="lg:hidden block w-full p-3 mt-8 rounded-lg bg-violet-600 hover:bg-violet-700 transition-colors text-lg font-semibold"
      >
        Back
      </button>
    </div>
  );
};
