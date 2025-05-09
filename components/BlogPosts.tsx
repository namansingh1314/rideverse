"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: {
    asset?: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
  excerpt?: string;
}

export default function BlogPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "post"] | order(_createdAt desc) {
        _id,
        title,
        slug,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        },
        excerpt
      }`)
      .then((data) => setPosts(data));
  }, []);

  return (
    <section className="blog-posts px-4 md:px-8 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            {post.mainImage?.asset?.url && (
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt || post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-800">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
