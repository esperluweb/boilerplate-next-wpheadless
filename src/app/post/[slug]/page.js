export default async function PostPage({ params }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API}/posts?slug=${params.slug}`,
    {
      next: { revalidate: 60 }, // Revalidation toutes les 60 secondes
    }
  );
  const posts = await response.json();
  const post = posts[0]; // On prend le premier résultat car le slug est unique

  if (!post) {
    return <div>Post non trouvé</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold mb-4">{post.title.rendered}</h1>
        <div
          className="text-gray-600 whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
    </div>
  );
}
