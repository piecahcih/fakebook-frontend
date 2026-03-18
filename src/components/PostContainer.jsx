import usePostStore from "@/stores/postStore"
import CreatePost from "./CreatePost"
import { useEffect } from "react"
import PostItem from "./POstItem"
import { CloseIcon } from "@/icons"
import PostFormEdit from "./PostFormEdit"


function PostContainer() {
  const getAllPosts = usePostStore(st => st.getAllPosts)
  const posts = usePostStore(st=>st.posts)
  const currentPost = usePostStore(st=>st.currentPost)
  const setCurrentPost = usePostStore(st=>st.setCurrentPost)

  useEffect(()=>{
    getAllPosts()
  },[])

  return (
    <>
      <div className="w-4/7 mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg max-xl:w-5/7">
        <CreatePost/>
        { posts.map( post => ( <PostItem key={post.id} post={post}/>))}
        {/* <pre>{JSON.stringify(posts,null,2)}</pre> */}
      </div>
      <dialog className='modal' id='editform-modal' onClose={() => setCurrentPost(null)}>
				<div className="modal-box ">
					{currentPost && <PostFormEdit />}
					<form method='dialog'>
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
							<CloseIcon />
						</button>
					</form>
				</div>
			</dialog>
    </>
  )
}

export default PostContainer