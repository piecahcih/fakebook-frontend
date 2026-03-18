
import { FacebookLogo, FriendsIcon, HomeIcon, MenuIcon, MessengerIcon, NotificationIcon, PlayIcon, SearchIcon, ShopIcon} from "@/icons"
import useUserStore from "@/stores/userStore"
import { NavLink, Link } from "react-router"
import Avatar from "./Avatar"


function UserNav() {
    const user = useUserStore(st=>st.user)
    const logout = useUserStore(st=>st.logout)
  return (
    <div className="flex h-15 justify-between items-center gap-16 min-w-screen px-10 bg-amber-50">
        <div className="flex max-md:hidden">
            <FacebookLogo className="w-12"/>
            <label className="input rounded-full">
                <input type="text" />
                <SearchIcon/>
            </label>
        </div>
        {/* Navigation */}
        <div className="flex gap-5 items-center">
            <Link to='/'>
                <HomeIcon className="w-9"/>
            </Link>
            <Link to='/'>
                <PlayIcon className="w-9"/>
            </Link>
            <Link to='/'>
                <ShopIcon className="w-9"/>
            </Link>
            <Link to='/'>
                <FriendsIcon className="w-9"/>
            </Link>
        </div>
        {/* Dropdown menu */}
        <div className="">
            <div className="avatar justify-center items-center">
                <div className="rounded-full bg-gray-200 p-4 hover:bg-base-300">
                    <MenuIcon className="w-5"/>
                </div>
            </div>
            <div className="avatar justify-center items-center">
                <div className="rounded-full bg-gray-200 p-4 hover:bg-base-300">
                    <MessengerIcon className="w-5"/>
                </div>
            </div>
            <div className="avatar justify-center items-center">
                <div className="rounded-full bg-gray-200 p-4 hover:bg-base-300">
                    <NotificationIcon className="w-5"/>
                </div>
            </div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1 btn-circle ">
                <Avatar menu right='-10' bottom='-10'
                    imgSrc={user.profileImage} className="rounded-full"
                />
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><a onClick={logout}>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}


export default UserNav