type UUID = `${string}-${string}-${string}-${string}-${string}`;

export interface Article {
  _id: UUID;
  course: UUID;
  creator: UUID;
  semester: string;
  title: string;
  tags: string[];
}

export interface Course {
  _id: UUID;
  curriculum: string;
  lecturer: string;
  class?: string;
  names: string[];
  credit: number;
  categories: string[];
}

export interface Quiz {
  _id: UUID;
  course: UUID;
  uploader: UUID;
  semester: string;
  session: 'midterm' | 'final' | 'first' | 'second';
}

export interface User {
  _id: string;
  email: string;
  name: string;
}
