import { CalendarDate } from "cally"
import { RouterProvider } from "react-router"
import {userRouter,guestRouter} from "./router"
import { Suspense } from "react";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify";


function App() {
  const user = null
  // const user = { email: 'andy@ggg.mail'}
  const finalRouter = user ? userRouter : guestRouter
  return (
    <>
      <Suspense fallback={<span className="loading loading-ring loading-xl flex items-center min-w-screen"></span>}>
        <RouterProvider router={finalRouter}/>
      </Suspense>
      <ToastContainer
        position="top-center"
        style={{ zIndex: 9999 }}
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default App
