import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
    imageUrl: string;
  };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-4 ${
        isDarkBackground ? "bg-slate-800 text-white" : "text-slate-800"
      } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <img
        src={post.imageUrl || "/placeholder.jpg"}
        alt={post.title || "Blog image"}
        className="w-full h-48 object-cover rounded-lg"
      />
      <CardTitle className="text-xl font-medium mt-4 text-center">
        {post.title || "Untitled Post"}
      </CardTitle>
      <CardContent className="text-center mt-4">
        <p>
          {post.description.length > 100
            ? `${post.description.slice(0, 100)}...`
            : post.description}
        </p>
      </CardContent>
      <div className="flex flex-col items-center mt-4">
        <p
          className={`text-sm mb-2 ${
            isDarkBackground ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Published on: {post.date ? new Date(post.date).toLocaleDateString() : "Unknown Date"}
        </p>
        <a
          href={`/posts/${post.id}`}
          className={` text-center w-full px-6 py-2 text-white rounded ${
            isDarkBackground
              ? "bg-blue-700 hover:bg-red-700"
              : "bg-blue-950 hover:bg-red-700"
          }` }
        >
          Read More
        </a>
      </div>
    </Card>
  );
}
