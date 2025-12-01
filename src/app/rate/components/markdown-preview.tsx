'use client';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';

interface MarkdownPreviewProps {
  content: string;
  maxHeight?: number;
  className?: string;
}

const MarkdownPreview = ({
  content,
  maxHeight = 150,
  className = '',
}: MarkdownPreviewProps): React.JSX.Element => {
    //rendering markdown, change headers to bold
  const components: Components = {
    h1: ({ children }) => <p className="font-semibold mb-2">{children}</p>,
    h2: ({ children }) => <p className="font-semibold mb-2">{children}</p>,
    h3: ({ children }) => <p className="font-semibold mb-2">{children}</p>,
    h4: ({ children }) => <p className="font-semibold mb-2">{children}</p>,
    h5: ({ children }) => <p className="font-semibold mb-2">{children}</p>,
    h6: ({ children }) => <p className="font-semibold mb-2">{children}</p>,
  };

  return (
    <div className={className}>
      <div
        className="prose prose-invert max-w-none overflow-hidden"
        style={{
          maxHeight: `${maxHeight}px`,
        }}
      >
        <Markdown remarkPlugins={[remarkGfm]} components={components}>
          {content}
        </Markdown>
      </div>
      <div
        className="relative -mt-8 h-8 bg-gradient-to-t from-gray-800 group-hover:from-gray-700 transition-colors duration-300 ease-in-out pointer-events-none"
      />
    </div>
  );
};

export default MarkdownPreview;