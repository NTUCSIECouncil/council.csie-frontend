'use client';

import { useState, useEffect } from 'react';

interface RenamePanelProps {
  isOpen: boolean;
  initialName: string;
  onCancel: () => void;
  onSave: (newName: string) => void;
}

const RenamePanel = ({ isOpen, initialName, onCancel, onSave }: RenamePanelProps) => {
  const [newDisplayName, setNewDisplayName] = useState(initialName);

  // Re-render when opened
  useEffect(() => {
    if (isOpen) {
      setNewDisplayName(initialName);
    }
  }, [isOpen, initialName]);

  if (!isOpen) {
    return null;
  }
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      onClick={onCancel}
    >
      <div
        className="bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-semibold text-white mb-4">
          Edit Display Name
        </h3>
        
        <input
          type="text"
          value={newDisplayName}
          onChange={(e) => setNewDisplayName(e.target.value)}
          className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
        />
        
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-md text-white bg-gray-600 hover:bg-gray-500 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(newDisplayName)}
            className="px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-500 transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default RenamePanel;
