import { createBrowserRouter, Navigate } from "react-router";
// import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";
import Friends from "@/pages/Friends";
import Login from "@/pages/Login";
import Profile from "@/pages/Profile";
import { lazy } from "react";
import ShareInfo from "@/pages/ShareInfo";
const Mainlayout = lazy(()=>import("../layouts/Mainlayout"));


//path ที่เข้าได้ทั้งguest / user
const commonPath = [
    {
        path:'/share', 
        Component: ShareInfo
    }
]

const guestRouter = createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout/>,
        children: [
            {
                index: true,
                Component: Login
            },
            {
                path:'*',
                element: <Navigate to='/'/>
            },
            ...commonPath
        ]
    }
])
const userRouter = createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout/>,
        children: [
            {
                index: true,
                element:<Home/>
            },
            {
                path:'/friends',
                Component: Friends
            },
            {
                path:'/profile',
                element: <Profile/>
            },
            {
                path:'*',
                element: <p>Peach</p>
            },
            ...commonPath
        ]
    }
])

export {userRouter,guestRouter}