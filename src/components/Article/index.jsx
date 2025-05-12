import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ post }) => {
    return (
        <article className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">
              {post.title.rendered}
            </h2>
            <div
              className="text-gray-600 mb-4"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
            <a
              href={`/post/${post.slug}`}
              className="text-blue-500 hover:text-blue-700"
            >
              Lire la suite →
            </a>
        </article>
    );
};

Article.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.shape({
      rendered: PropTypes.string.isRequired
    }).isRequired,
    excerpt: PropTypes.shape({
      rendered: PropTypes.string.isRequired
    }).isRequired,
    slug: PropTypes.string.isRequired
  }).isRequired
};

export default Article;