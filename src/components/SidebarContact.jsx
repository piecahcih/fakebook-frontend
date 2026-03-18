import { SearchIcon } from "@/icons"
import useUserStore from "@/stores/userStore"
import MenuItem from "./MenuItem"
import Avatar from "./Avatar"

function SidebarContact() {
    const user = useUserStore(st=>st.user)
  return (
    <div className="fixed top-14 right-0 h-full w-1/5 overflow-auto flex flex-col gap-2 max-xl:hidden">
      <div className="flex justify-between text-gray-500">
        <div>Contact</div>
        <div className="flex gap-2">
          <SearchIcon/>
          ...
        </div>
      </div>
      <MenuItem  
        icon={Avatar}
        text="Hello Kitty"
        className="w-11 h-11 rounded-full bg-slate-200"
        imgSrc='https://i.pinimg.com/564x/82/aa/ff/82aaff66cdd860224ba3a7b6437684bb.jpg'
      />
      <MenuItem  
        icon={Avatar}
        text="Peach Codecamp22"
        className="w-11 h-11 rounded-full bg-slate-200"
        imgSrc='https://pbs.twimg.com/media/Fn4r7qkWIAAJXvU.jpg'
      />
      <MenuItem  
        icon={Avatar}
        text="Peach<3 Moncchichi"
        className="w-11 h-11 rounded-full bg-slate-200"
        imgSrc='https://i.pinimg.com/736x/82/b5/59/82b5591589b5b545726a31fd54728fd4.jpg'
      />
    </div>
  )
}

export default SidebarContact