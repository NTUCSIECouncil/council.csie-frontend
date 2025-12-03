import * as React from 'react';

export interface ExamUploadEmailProps {
  info: Record<string, string>;
}

export function ExamUploadEmail({ info }: ExamUploadEmailProps) {
  return (
    <div>
      <h1>Report</h1>

      <h2>Information</h2>
      <ul>
        {Object.entries(info).map(([key, value]) => (
          <li key={key}>
            {key} : {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
