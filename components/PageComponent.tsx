// PageComponent.tsx
import AmazonLetterSize from '@/components/AmazonASizeComponent';
import React from 'react';

interface PageProps {
  pageNumber: number;
  content: string;
}

const PageComponent: React.FC<PageProps> = ({ pageNumber, content }) => {
  return (
    <div style={{ width: '210mm', height: '297mm', padding: '20px', pageBreakAfter: 'always' }}>
      <h1>Page {pageNumber}</h1>
      <p>{content}</p>
      <AmazonLetterSize/>
    </div>
  );
};

export default PageComponent;
