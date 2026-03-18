import useUserStore from "@/stores/userStore"
import Avatar from "./Avatar"
import { ActivityIcon, PhotoIcon, VideoIcon } from "@/icons"
import { useEffect, useState } from "react"
import PostForm from "./PostForm"

function CreatePost() {
    const user = useUserStore(st=>st.user)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(()=>{
        if(isOpen) {
            document.getElementById('postform-modal').showModal()
        }else{
            document.getElementById('postform-modal').close()
        }
    },[isOpen])


  return (
    <>
        <div className="card bg-slate-50 shadow-xl rounded-md">
            <div className="card-body p-6">
                <div className="flex gap-2">
                    <Avatar className='w-11 h-11 rounded-full' imgSrc={user.profileImage}/>
                    <button className="btn flex-1 rounded-full justify-start"
                    onClick={()=>setIsOpen(true)}>
                        What do you think? {user.firstName}
                    </button>
                </div>
                <div className="divider mt-1 mb-0"></div>
                <div className="flex gap-3 justify-between *:flex-1 *:cursor-pointer">
                    <div className="flex gap-3 justify-center py-2 rounded-lg hover:bg-gray-300">
                        <VideoIcon className='w-6' />
                        Live /Stream
                    </div>
                    <div className="flex gap-3 justify-center py-2 rounded-lg hover:bg-gray-300">
                        <PhotoIcon className='w-6' />
                        Photo /Video
                    </div>
                    <div className="flex gap-3 justify-center py-2 rounded-lg hover:bg-gray-300">
                        <ActivityIcon className='w-6' />
                        Activity
                    </div>
                </div>
            </div>
        </div>

        <dialog id="postform-modal" className="modal" onClose={()=>setIsOpen(false)}>
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                { isOpen && <PostForm />}
            </div>
       </dialog>
    </>
  )
}

export default CreatePost