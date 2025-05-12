import React from 'react';
import PropTypes from 'prop-types';

export default function Page({ page }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold mb-4">{page.title.rendered}</h1>
        <div
          className="text-gray-600 whitespace-pre-wrap post-content"
          dangerouslySetInnerHTML={{ __html: page.content.rendered }}
        />
      </div>
    </div>
  );
}

Page.propTypes = {
  page: PropTypes.shape({
    title: PropTypes.shape({
      rendered: PropTypes.string.isRequired
    }).isRequired,
    content: PropTypes.shape({
      rendered: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
