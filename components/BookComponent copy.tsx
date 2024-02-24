// BookComponent.tsx
import React from 'react';
import PageComponent from './PageComponent';

interface BookComponentProps {
  bookId: any; // Assuming bookId is a string, adjust the type accordingly
}

const BookComponent: React.FC<BookComponentProps> = ({ bookId }) => {
  const pages = Array.from({ length: bookId }, (_, index) => ({
    pageNumber: parseInt(bookId, 10) + index,
    content: `Content for page ${parseInt(bookId, 10) + index}`,
  }));
  console.log(pages)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {pages.map((page) => (
        <PageComponent key={page.pageNumber} {...page} />
      ))}

      <p>{bookId}</p>
    </div>
  );
};

export default BookComponent;
