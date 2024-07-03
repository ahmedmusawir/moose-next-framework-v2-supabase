import BackButton from "@/components/common/BackButton";
import PostPagination from "@/components/jsonsrv/PostPagination";
import PostsTable from "@/components/jsonsrv/PostsTable";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getPosts } from "@/services/jsonsrvPostServices";

// export const dynamic = 'force-dynamic'; // SSR: Always render the page dynamically on the server

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
