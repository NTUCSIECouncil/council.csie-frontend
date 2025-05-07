type UUID = string;

interface Article {
  _id: UUID;
  title: string;
  lecturer: string;
  tag?: string[]; // any tags the creator wants to add
  grade?: number; // what grade is the creator when posted
  categories?: string[]; // more official tags, ex: elective, required, etc.
  content?: string;
  course: UUID; // the _id of the associated course
  creator: UUID; // the _id of the user creating it
  createdAt?: Date;
  updatedAt?: Date;
}

interface Course {
  _id: UUID;
  curriculum: string;
  lecturer: string;
  class?: string;
  names: string[];
  credit: number;
  categories: string[];
}
interface Quiz {
  _id: UUID;
  course: UUID;
  uploarder: UUID;
  semester: string;
  session: string;
}

interface User {
  _id: UUID;
  email: string;
  name: string;
}
