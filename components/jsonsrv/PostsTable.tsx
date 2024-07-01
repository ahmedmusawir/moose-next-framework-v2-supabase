"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import Link from "next/link";
import { Post } from "@/types/posts";
import PostDeleteModal from "./PostDeleteModal";

interface PostsTableProps {
  limit?: number;
  title?: string;
  posts?: Post[];
}

const PostsTable = ({ limit, title, posts }: PostsTableProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const getFilteredAndSortedPosts = (posts: Post[] = [], limit?: number) => {
    const filteredPosts = limit ? [...(posts ?? [])].slice(0, limit) : posts;
    const sortedPosts = filteredPosts.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    return sortedPosts;
  };

  // Sort posts in descending order based on data
  // const sortedPosts: Post[] = [...(posts ?? [])].sort(
  //   (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  // );

  // // Filter posts to limit
  // const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;
  // Usage example:
  const sortedFilteredPosts = getFilteredAndSortedPosts(posts, 20);

  const deletePost = async (postId: string) => {
    console.log("Delete ID:", postId);
    const res = await fetch(`http://localhost:3001/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      console.log("Post Deleted");
      // Optionally, refresh your posts list or redirect the user
    } else {
      console.error("Failed to delete the post");
    }
  };

  const handleDeleteClick = (id: string) => {
    setSelectedPostId(id);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedPostId(null); // Reset selectedPostId
  };

  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">{title ? title : "Posts"}</h3>
      <Table className="mb-8">
        <TableCaption>A list of your recent JSON Server posts.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Title</TableHead>
            <TableHead className="hidden md:table-cell">Author</TableHead>
            <TableHead className="hidden md:table-cell">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedFilteredPosts?.map((post) => (
            <TableRow key={post.id}>
              <TableCell>
                {post.title} POST ID: {post.id}
              </TableCell>
              <TableCell>{post.author}</TableCell>
              <TableCell>{post.date}</TableCell>
              <TableCell className="text-right">
                <Link href={`/jsonsrv/edit/${post.id}`}>
                  <Button>Edit Post</Button>
                </Link>
                <Button
                  className="bg-red-400 text-white ml-2"
                  onClick={() => handleDeleteClick(post.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedPostId && (
        <PostDeleteModal
          isOpen={isModalOpen}
          postId={selectedPostId}
          onClose={handleModalClose}
          onConfirm={() => {
            deletePost(selectedPostId);
            handleModalClose();
          }}
        />
      )}
    </div>
  );
};

export default PostsTable;
