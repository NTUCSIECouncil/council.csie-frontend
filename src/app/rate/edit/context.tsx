import { createContext, useContext } from 'react';

import { type Course } from '@/types/backend';

interface EditContextType {
  title: string;
  setTitle: (t: string) => void;
  selectedCourse: Course | null;
  setSelectedCourse: (c: Course | null) => void;
  content: string;
  setContent: (c: string) => void;
  selectedTags: string[];
  setSelectedTags: (t: string[]) => void;
  semester: string;
  setSemester: (s: string) => void;
}

export const EditContext = createContext<EditContextType | null>(null);

export const useEdit = () => {
  const context = useContext(EditContext);
  if (!context) {
    throw new Error('useEdit must be used within an EditProvider');
  }
  return context;
};
