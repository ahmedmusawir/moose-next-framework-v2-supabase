import BackButton from "@/components/common/BackButton";
import EditForm from "./EditForm";
import { Post } from "@/types/posts";

interface PostEditPageProps {
  params: {
    id: string;
  };
}

const getSingle = async (id: string) => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch post with id: ${id}`);
  }

  return res.json();
};

const PostEditPage = async ({ params }: PostEditPageProps) => {
  const post = await getSingle(params.id);
  console.log("SINGLE POST", post);

  return (
    <>
      <BackButton text="Back To Posts" link="/jsonsrv" />
      <EditForm post={post} />
    </>
  );
};

export default PostEditPage;
