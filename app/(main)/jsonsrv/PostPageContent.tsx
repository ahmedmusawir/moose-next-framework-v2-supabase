"use client";

import BackButton from "@/components/common/BackButton";
import PostPagination from "@/components/jsonsrv/PostPagination";
import PostsTable from "@/components/jsonsrv/PostsTable";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useJsonsrvPostStore } from "@/store/useJsonsrvPostStore";
import { useEffect } from "react";

// export const dynamic = 'force-dynamic'; // SSR: Always render the page dynamically on the server

const PostPageContent = () => {
  const fetchPosts = useJsonsrvPostStore((state) => state.fetchPosts);
  const posts = useJsonsrvPostStore((state) => state.posts);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <>
      <BackButton text="Go Back" link="/" />
      <Link className="float-end" href="/jsonsrv/insert">
        <Button className="bg-green-500">Create New Post</Button>
      </Link>
      <PostsTable title="Json Server Posts" limit={20} posts={posts} />

      <PostPagination />
    </>
  );
};

export default PostPageContent;
