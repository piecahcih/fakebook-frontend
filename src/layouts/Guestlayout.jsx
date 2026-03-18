import { Outlet } from "react-router"
import Header from "../components/Header"
import ThemeToggle from "../components/ThemeToggle"
import GuestNav from "@/components/GuestNav"

function Guestlayout() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center">
        <ThemeToggle/>
        <Header/>
        <GuestNav/>
      </div>
        <Outlet/>
    </div>
  )
}

export default Guestlayout