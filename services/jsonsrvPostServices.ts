// /services/postServices.ts

const BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`;

// Fetches all the posts from the json server
export const getPosts = async () => {
  const res = await fetch(BASE_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 0, // Ensure fresh data on every 10sec. ISR implementation
    },
    cache: "no-store", // Ensure the fetch request bypasses any cache. SSR Implementation
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
};

// Creates new post into the Json Server
export const createPost = async (data: any) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to create post");
  }

  return res.json();
};

// Edits post by id
export const editPost = async (id: string, data: any) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to update post");
  }

  return res.json();
};

// Deletes post by id
export const deletePost = async (postId: string) => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(`${BASE_URL}/posts/${postId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to delete post with id: ${postId}`);
  }

  console.log("Post Deleted");
  return res.json();
};
