import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Post {
  title: string;
  _createdAt: string;
  body: any;
  mainImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  author?: string;
  // commentsCount?: number;
  // likes?: number;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params
  const { slug } = await params;

  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    _createdAt,
    body,
    mainImage {
      asset -> {
        url
      },
      alt
    },
    "author": author->name,
    "commentsCount": count(*[_type == "comment" && post._ref == ^._id]),
    likes
  }`;

  const post: Post = await client.fetch(query, { slug });

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>

      <div className="text-gray-500 text-sm mb-6 flex justify-between flex-wrap gap-2">
        <span>🗓️ {new Date(post._createdAt).toLocaleDateString()}</span>
        <span>👤 {post.author || "Unknown"}</span>
        {/* <span>💬 {post.commentsCount ?? 0} Comments</span>
        <span>❤️ {post.likes ?? 0} Likes</span> */}
      </div>

      {post.mainImage?.asset?.url && (
        <div className="mb-6">
          <Image
            src={post.mainImage.asset.url}
            alt={post.mainImage.alt || post.title || "Blog image"}
            width={800}
            height={450}
            className="rounded-lg object-cover w-full"
          />
        </div>
      )}

      <article className="prose prose-lg">
        <PortableText value={post.body} />
      </article>
    </main>
  );
}
