import { CloseIcon, CommentIcon, LikeIcon, ShareIcon, ThreeDotIcon } from "../icons"
import Avatar from "./Avatar"
import reactLogo from '../assets/react.svg'
import cat from '../assets/cat.gif'
import usePostStore from "@/stores/postStore"
import { toast } from "react-toastify"
import useUserStore from "@/stores/userStore"
import TimeAgo from "react-timeago"

function PostItem({post}) {
    const deletePost = usePostStore(st => st.deletePost)
    const user = useUserStore(st=>st.user)
    const setCurrentPost = usePostStore(st=>st.setCurrentPost)
    const createLike = usePostStore(st=>st.createLike)
    const unLike = usePostStore(st=>st.unLike)

    const haveLike = post.likes.some(el => el.userId === user.id)

    const hdlLikeClick = async () => {
        if(haveLike) {
            await unLike(post.id)
        } else {
            await createLike(post.id)
        }
    }

    const hdlDelete = async() => {
        try {
            const res = await deletePost(post.id)
            toast.success(res.data.message)
        } catch (error) {
            const errMsg = error.response?.data.message || error.message
            toast.error(errMsg)
        }
    }
    const hdlUpdate = async() => {
        setCurrentPost(post)
        document.getElementById('editform-modal').showModal()
    }

 return (
   <div className="card bg-slate-50 shadow-xl rounded-md p-3">
     <div className="card-body p-3">
        {/* headers */}
       <div className="flex justify-between">
         <div className="flex gap-3">
           <Avatar className='w-11 h-11 rounded-full' imgSrc={post.user.profileImage} />
           <div className="flex flex-col">
             <p className='font-bold text-sm'>{post.user.firstName} {post.user.lastName}</p>
             <p className='text-xs opacity-70'>
               <TimeAgo date={post.createdAt}/>
             </p>
           </div>
         </div>
         <div className="flex gap-2">
        { user.id === post.userId && (
            <div className="dropdown">
             <div tabIndex={0} role='button'>
               <div className="avatar items-center cursor-pointer">
                 <div className="w-10 h-10 rounded-full !flex justify-center items-center hover:bg-gray-200">
                   <ThreeDotIcon className='w-6' />
                 </div>
               </div>
             </div>
             <ul tabIndex={0} className='dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow'>
               <li onClick={hdlUpdate}><a>Edit</a></li>
               <li onClick={hdlDelete}><a>Delete</a></li>
             </ul>
           </div>
        )}
           <div className="avatar items-center cursor-pointer">
             <div className="w-10 h-10 rounded-full !flex justify-center items-center hover:bg-gray-200">
               <CloseIcon className='w-6' />
             </div>
           </div>
         </div>
       </div>

       {/* content */}
       <p>{post.message}</p>
       {post.image && (
            <img src= {post.image}
            alt="post image"
           className='p-4 w-full object-contain'
         />
       )}


       {/* {Math.random()>0.5 && (
         <img src={Math.random() > 0.5 ? cat : 'https://m.media-amazon.com/images/I/712tQUrusKL._AC_UF894,1000_QL80_.jpg'} 
            alt="post image"
           className='p-4 max-h-[200px] object-contain'
         />
       )} */}


       {/* like , comment */}
       <div className="flex justify-between items-center pe-4">
         <div className="avatar items-end cursor-pointer gap-1">
           <div className="w-7 h-7 rounded-full !flex justify-center items-center">
             <LikeIcon className='w-5' />
           </div>
           <p>{post.likes.length} likes</p>
         </div>
         <div className="flex ">
           <p className='opacity-60'>{post.comments.length} comments</p>
         </div>
       </div>
       <div className="divider h-0 my-0"></div>
       <div className="flex gap-3 justify-between">
			<div className="flex gap-3 justify-center items-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 flex-1"
			onClick={hdlLikeClick}>
                {haveLike && <LikeIcon className='w-8 bg-fuchsia-300 rounded outline-offset-2' />}
                {!haveLike && <LikeIcon className='w-6' />}
			</div>
         <div className="flex gap-3 justify-center items-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 flex-1">
           <CommentIcon className='w-8' /> Comment
         </div>
         <div className="flex gap-3 justify-center items-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 flex-1">
           <ShareIcon className='w-6' /> Share
         </div>
       </div>
       <div className="divider h-0 my-0"></div>
       {/* <CommentContainer postId={post.id} comments={post.comments} /> */}
     </div>
   </div>
 )}

export default PostItem