import React from 'react';
import Page from '@/components/Page';
import PropTypes from 'prop-types';

export default async function ExamplePage({ params }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pages?slug=${params.slug}`,
    {
      next: { revalidate: 60 }, // Revalidation toutes les 60 secondes
    }
  );

  if (!response.ok) {
    throw new Error('Erreur lors de la récupération de la page');
  }

  const pages = await response.json();
  const page = pages[0];

  if (!page) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-3xl font-bold mb-4">Page non trouvée</h1>
          <p className="text-gray-600">La page que vous recherchez n&apos;existe pas.</p>
        </div>
      </div>
    );
  }

  return <Page page={page} />;
}

ExamplePage.propTypes = {
  params: PropTypes.shape({
    slug: PropTypes.string.isRequired
  }).isRequired
};
