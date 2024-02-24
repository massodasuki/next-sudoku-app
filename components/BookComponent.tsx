// BookComponent.js
import React from 'react';
import PageComponent from './PageComponent';

const BookComponent = () => {
  const pages = [
    { pageNumber: 1, content: 'Content for page 1' },
    { pageNumber: 2, content: 'Content for page 2' }
    // Add more pages as needed
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {pages.map((page) => (
        <PageComponent key={page.pageNumber} {...page} />
      ))}
    </div>
  );
};

export default BookComponent;
