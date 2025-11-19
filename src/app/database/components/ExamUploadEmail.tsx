// components/ExamUploadEmail.tsx
import * as React from 'react';

export interface ExamUploadEmailProps {
  info: Record<string, string>;
  fileNames: string[];
}

export function ExamUploadEmail({ info, fileNames }: ExamUploadEmailProps) {
  return (
    <div>
      <h1>Upload Exam</h1>

      <h2>Information</h2>
      <ul>
        {Object.entries(info).map(([key, value]) => (
          <li key={key}>
            {key} : {value}
          </li>
        ))}
      </ul>

      <h2>File List</h2>
      {fileNames.length === 0 ? (
        <p>No File</p>
      ) : (
        <ul>
          {fileNames.map((name, idx) => (
            <li key={idx}>{name}</li>
          ))}
        </ul>
      )}

    </div>
  );
}

