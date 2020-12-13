import React from 'react';

export default function Button({ loadMore }) {
  return (
    <button onClick={loadMore} className="Button">
      Load More
    </button>
  );
}
