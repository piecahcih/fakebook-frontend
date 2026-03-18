import useUserStore from "@/stores/userStore"
import Avatar from "./Avatar"
import { PhotoIcon2 } from "@/icons"
import { useState } from "react"
import AddPicture from "./AddPicture"
import axios from "axios"
import uploadCloud from "@/utils/uploadCloud"
import { toast } from "react-toastify"
import usePostStore from "@/stores/postStore"

function PostForm() {
    const user = useUserStore(st=>st.user)
    const createPost = usePostStore(st=>st.createPost)
    const createPost2 = usePostStore(st=>st.createPost2)
    const [addPic, setAddPic] = useState(false)
    const [file, setFile] = useState(null)
    const [message,setMessage] = useState('')
    const [loading,setLoading] = useState(false)

    const hdlCreatePost = async () => {
        let imageUrl = ''
        setLoading(true)
        try {
            if(file){
                imageUrl = await uploadCloud(file)
            }
            const body = { message : message, image: imageUrl}
            const res = await createPost2(body)
            setLoading(false)
            document.getElementById('postform-modal').close()
        } catch (error) {
            console.log(error)
            const errMsg = error.response?.data.message || error.message
            toast.error(errMsg)
            setLoading(false)
        }
    }

  return (
    <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl">Create Post <span className="font-medium text-xl text-orange-300" >({message.split('\n').length} line)</span> </h1>
        <div className="divider"></div>

        <div className="flex gap-5">
            <Avatar className='w-15 h-15 rounded-full' imgSrc={user.profileImage}/>
            <div className="">
                <p className="font-bold">{user.firstName} {user.lastName} </p>
                <select className="btn rounded-md py-0 px-0" defaultValue="default">
                    <option value="default" disabled>who can see?</option>
                    <option>public</option>
                    <option>friends</option>
                </select>
            </div>
        </div>
        <textarea className="textarea textarea-ghost w-full" 
        placeholder="What a wonderful world..."
        value={message}
        onChange={e=>setMessage(e.target.value)}
        rows={message.split('\n').length}
        ></textarea>

        {addPic && <AddPicture file ={file} setFile={setFile} />}
        <div className="flex border rounded-lg p-2 justify-between items-center">
            <p>add with your post</p>
            <div className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-emerald-300 active:scale-110"
            onClick={()=>setAddPic(prv=>!prv)}>
            <PhotoIcon2 className='w-7' />
            </div>
        </div>
        <button className="btn btn-primary w-full rounded-md" 
        onClick={hdlCreatePost} disabled={loading || !message.trim() && !file}
        >Create Post
        {loading && <span className="loading loading-dots loading-sm"></span>}
        </button>
    </div>
  )
}

export default PostForm