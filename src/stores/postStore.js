import { create } from "zustand";
import { createLikeApi, createPostApi, deletePostApi, getAllPostsApi, unLikeApi, updatePostApi } from "@/api/mainApi";
import useUserStore from "./userStore";

const usePostStore = create((set, get) => ({
   posts: [],
   currentPost: null,
   createPost: async (body) => {
       const resp = await createPostApi(body)
       get().getAllPosts()
       return resp
   },
   createPost2: async (body) => {
       const res = await createPostApi(body)
       set(state => ({
        posts : [{...res.data.post, user: useUserStore.getState().user, likes: [], comments: []}, ...state.posts]
       }))
   },
   getAllPosts: async () => {
       const resp = await getAllPostsApi()
       set({ posts: resp.data.posts })
       return resp
   },
   deletePost: async (id) => {
       const resp = await deletePostApi(id)
       get().getAllPosts()
       return resp
   },
   updatePost: async (id, body) => {
       const resp = await updatePostApi(id, body)
       get().getAllPosts()
       return resp
   },
   setCurrentPost: (post) => set({ currentPost: post }),
   createLike: async (id) => {
       const resp = await createLikeApi(id)
       get().getAllPosts()
       return resp
   },
   unLike: async (id) => {
       const resp = await unLikeApi(id)
       get().getAllPosts()
       return resp
   }
}))

export default usePostStore