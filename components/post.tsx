"use client";

import { useSearchParams } from "next/navigation";
import { getPosts } from "./getPost";

const SocialPost = async () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("display");

  const post = await getPosts({ id: Number(search) });
  return (
    <div>
      {" "}
      <h1> Post ID: {post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default SocialPost;
