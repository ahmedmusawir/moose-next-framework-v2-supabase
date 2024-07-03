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
import { deletePost } from "@/services/jsonsrvPostServices";
import { getFilteredAndSortedPosts } from "@/utils/jsonSrv/jsonsrvUtils";

interface PostsTableProps {
  limit?: number;
  title?: string;
  posts?: Post[];
}

const PostsTable = ({ limit, title, posts }: PostsTableProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  // Sorting alphabetically with post limit
  const sortedFilteredPosts = getFilteredAndSortedPosts(posts, 20);

  // Opens the Delete Confirmatin Modal and Updates the Selected ID
  const handleDeleteClick = (id: string) => {
    setSelectedPostId(id);
    setModalOpen(true);
  };

  // Closing the Delete Confirmation Modal
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
