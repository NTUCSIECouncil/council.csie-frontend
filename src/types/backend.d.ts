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
  title: string;
  semester?: string;
  credit: number;
  lecturer: string;
  pastQuiz?: string; // link to course's past quiz page
  ratings?: string; // link to course's rating page
}
interface Quiz {
  _id: UUID;
  title: string;
  course: UUID;
  semester: string;
  downloadLink: string;
}

interface User {
  _id: UUID;
  email: string;
  name: string;
}
