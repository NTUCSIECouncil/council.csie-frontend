import { createContext, useContext } from 'react';

import { Course } from '@/types/backend';

interface EditContextType {
  title: string;
  setTitle: (t: string) => void;
  selectedCourse: Course | null;
  setSelectedCourse: (c: Course | null) => void;
  content: string;
  setContent: (c: string) => void;
  selectedTags: string[];
  setSelectedTags: (t: string[]) => void;
}

export const EditContext = createContext<EditContextType | null>(null);
export const useEdit = () => useContext(EditContext)!;
