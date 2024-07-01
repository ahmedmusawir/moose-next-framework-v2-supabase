import BackButton from "@/components/common/BackButton";
import PostPagination from "@/components/jsonsrv/PostPagination";
import PostsTable from "@/components/jsonsrv/PostsTable";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// export const dynamic = 'force-dynamic'; // SSR: Always render the page dynamically on the server

const getPosts = async () => {
  const res = await fetch("http://localhost:3001/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 0, // Ensure fresh data on every 10sec. ISR implementation
    },
    cache: "no-store", // Ensure the fetch request bypasses any cache. SSR Implementation
  });

  return res.json();
};

const PostPageContent = async () => {
  const posts = await getPosts();
  console.log("Json Server Posts: ", posts);

  return (
    <>
      <BackButton text="Go Back" link="/" />
      <Link className="float-end" href="/jsonsrv/insert">
        <Button className="bg-green-500">Create New Post</Button>
      </Link>
      <PostsTable title="Json Server Posts" limit={5} posts={posts} />

      <PostPagination />
    </>
  );
};

export default PostPageContent;
