
import React from "react";
import Article from "@/components/Article";
import ApiService from "@/services/apiService";

export default async function Blog() {
    const apiService = new ApiService(process.env.NEXT_PUBLIC_API_URL);
  try {
    const posts = await apiService.get("/posts");
    
    if (!Array.isArray(posts)) {
      throw new Error('La réponse de l\'API n\'est pas un tableau');
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Articles du blog</h1>
        <div className="grid gap-8">
          {posts.map((post) => (
            <Article key={post.id} post={post} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Erreur lors de la récupération des posts:', error);
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Articles du blog</h1>
        <p className="text-red-500">Une erreur est survenue lors de la récupération des articles.</p>
      </div>
    );
  }
}