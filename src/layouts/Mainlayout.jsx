import { Outlet } from "react-router"
import Header from "../components/Header"
import ThemeToggle from "../components/ThemeToggle"

function Mainlayout() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center">
        <Header/>
        <ThemeToggle/>
      </div>
        <Outlet/>
    </div>
  )
}

export default Mainlayout