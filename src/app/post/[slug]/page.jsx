import React from 'react';
import PropTypes from 'prop-types';

export default async function PostPage({ params }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?slug=${params.slug}`,
    {
      next: { revalidate: 60 }, // Revalidation toutes les 60 secondes
    }
  );

  if (!response.ok) {
    throw new Error('Erreur lors de la récupération du post');
  }

  const posts = await response.json();
  const post = posts[0];

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-3xl font-bold mb-4">Post non trouvé</h1>
          <p className="text-gray-600">Le post que vous recherchez n&apos;existe pas.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-3xl font-bold mb-4">{post.title.rendered}</h1>
            <div
              className="text-gray-600 whitespace-pre-wrap post-content"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

PostPage.propTypes = {
  params: PropTypes.shape({
    slug: PropTypes.string.isRequired
  }).isRequired
};
