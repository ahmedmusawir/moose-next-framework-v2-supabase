import { create } from "zustand";
import { Post } from "@/types/posts";
import {
  getPosts,
  deletePost,
  createPost,
  editPost,
} from "@/services/jsonsrvPostServices";

interface PostState {
  posts: Post[];
  isModalOpen: boolean;
  selectedPostId: string | null;
  fetchPosts: () => Promise<void>;
  addPost: (post: Post) => void;
  editPost: (post: Post) => void;
  removePost: (postId: string) => Promise<void>;
  openModal: (postId: string) => void;
  closeModal: () => void;
  totalPosts: number;
}

export const useJsonsrvPostStore = create<PostState>((set) => ({
  posts: [],
  isModalOpen: false,
  selectedPostId: null,
  getTotalPosts: () => {
    set((state) => ({
      totalPosts: state.posts.length,
    }));
  },
  fetchPosts: async () => {
    const posts = await getPosts();
    set({ posts });
  },
  addPost: async (post: Post) => {
    const newPost = await createPost(post);
    set((state) => ({
      posts: [...state.posts, newPost],
    }));
  },
  editPost: async (updatedPost: Post) => {
    const editedPost = await editPost(updatedPost.id, updatedPost);
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === editedPost.id ? editedPost : post
      ),
    }));
  },
  removePost: async (postId: string) => {
    await deletePost(postId);
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== postId),
    }));
  },
  openModal: (postId: string) => {
    set({ isModalOpen: true, selectedPostId: postId });
  },
  closeModal: () => {
    set({ isModalOpen: false, selectedPostId: null });
  },
  get totalPosts() {
    return this.posts.length;
  },
}));
