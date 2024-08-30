import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumbs from "../Ex7";

export const metadata: Metadata = {
  title: "Danh sách bài viết",
  description: "blogs.",
};

const posts = [
  {
    id: 1,
    title: "Post 1",
    Url:
      "https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg",
  },
  {
    id: 2,
    title: "Post 2",
    Url:
      "https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg",
  },

];

export default function PostsPage() {
  return (
    <div className="container mx-auto p-4">
      <Breadcrumbs></Breadcrumbs>
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 rounded shadow-sm">
            <Image
              src={post.Url}
              alt={post.title}
              width={500}
              height={300}
              className="rounded mb-2"
              priority={post.id === 1}
            />
            <h2 className="text-lg font-semibold">{post.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

