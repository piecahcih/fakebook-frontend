import { NavLink } from "react-router"

function GuestNav() {
  return (
      <div className="flex justify-between gap-16">
        <NavLink to="./share">Share</NavLink>
        <NavLink to="./login">Login</NavLink>
      </div>
  )
}

export default GuestNav