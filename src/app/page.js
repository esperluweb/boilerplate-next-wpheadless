export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/posts`, {
    next: { revalidate: 60 }, // Revalidation toutes les 60 secondes
  });

  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des posts');
  }

  const posts = await response.json();

  if (!Array.isArray(posts)) {
    throw new Error('La réponse de l\'API n\'est pas un tableau');
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Articles du blog</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow p-6">
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
        ))}
      </div>
    </div>
  );    
}
