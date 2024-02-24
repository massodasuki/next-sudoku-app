// BookComponent.tsx
import React from 'react';
import PageComponent from './PageComponent';

interface BookComponentProps {
  sheet: any; // Assuming sheet is a string, adjust the type accordingly
}

const BookComponent: React.FC<BookComponentProps> = ({ sheet }) => {
  const pages = Array.from({ length: sheet }, (_, index) => ({
    pageNumber: parseInt(sheet, 10) + index,
    content: `Content for page ${parseInt(sheet, 10) + index}`,
  }));
  console.log(pages)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {pages.map((page) => (
        <PageComponent key={page.pageNumber} {...page} />
      ))}

      <p>{sheet}</p>
    </div>
  );
};

export default BookComponent;
