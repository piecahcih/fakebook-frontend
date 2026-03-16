import RegisterForm from "@/components/RegisterForm"
import { useForm } from "react-hook-form"

function Login() {
    return(
        <>
            <div className="h-175 pt-20 pb-28 bg-yellow-50">
                <div className="p-5 max-w-5xl mx-auto min-h-135 flex justify-between max-md:flex-col">
                    <div className="flex flex-col gap-4 mt-20 basis-3/5 max-md::text-center">
                        <h1 className="text-5xl text-blue-600 font-bold">fakebook</h1>
                        <p className="text-[30px] leading-8 mt-3 w-128.5 max-md:w-auto">
                            Fakebook helps you connect and share with the people in your life.
                        </p>
                        <p className="badge badge-dash badge-error">This site is a scam</p>
                    </div>
                    <div className="flex-1">
                        <div className="card bg-white w-full h-87.5 shadow-xl mt-8 max-md:w-2/3">
                            <form onSubmit={e=>e.preventDefault()}>
                                <div className="card-body">
                                    <input className="border rounded-md w-full px-2 py-3 " 
                                    type="text" placeholder="E-mail or Phone number" />
                                    <input className="border rounded-md w-full px-2 py-3 " 
                                    type="text" placeholder="Password" />
                                    <button className="bg-blue-600 text-white p-2 w-full rounded-md">Log In</button>
                                    <button>Forgotten password?</button>
                                    <div className="divider"></div>
                                    <button className="btn btn-secondary rounded-md" 
                                    onClick={()=>document.getElementById('register-form').showModal()}>
                                        Create new account</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            <dialog id="register-form" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <RegisterForm/>
                </div>
            </dialog>
        </>
    )
}


// function Login() {
//   return (
//     <div className="min-h-screen min-w-screen bg-base-200 flex items-center justify-center p-4">
//       <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-secondary/10">
//         <div className="card-body">
//           {/* Header */}
//           <div className="text-center mb-6">
//             <h1 className="text-3xl font-bold">Fakebook</h1>
//             <p className="text-neutral/60 mt-2">Access your creative hub</p>
//           </div>

//           <form >
//             {/* Email Field */}
//             <div className="form-control w-full">
//               <label className="label">
//                 <span className="label-text font-semibold">Email</span>
//               </label>
//               <label className="input input-bordered flex items-center gap-2 w-full">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
//                 <input type="email" className="grow" placeholder="email@example.com" />
//               </label>
//             </div>

//             {/* Password Field */}
//             <div className="form-control w-full mt-4">
//               <label className="label">
//                 <span className="label-text font-semibold">Password</span>
//               </label>
//               <label className="input input-bordered flex items-center gap-2 w-full">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
//                 <input 
//                   className="grow" 
//                   placeholder="••••••••" 
//                 />
//                 <button 
//                   type="button"
//                   className="hover:text-primary transition-colors"
//                 >
//                 </button>
//               </label>
//               <label className="label">
//                 <span className="label-text-alt link link-hover">Forgot password?</span>
//               </label>
//             </div>

//             {/* Login Button */}
//             <div className="form-control mt-6">
//               <button className="btn btn-accent text-white no-animation bg-amber-600">Login</button>
//             </div>
//           </form>

//           {/* Divider */}
//           <div className="divider text-xs text-neutral/40 uppercase">Or login with</div>

//           {/* Social Login */}
//           <div className="flex gap-4">
//             <button className="btn btn-outline flex-1 gap-2">
//                Google
//             </button>
//             <button className="btn btn-outline flex-1 gap-2">
//                GitHub
//             </button>
//           </div>

//           {/* Footer */}
//           <p className="text-center text-sm mt-6">
//             New here? <span className="link link-primary font-bold">Create an Account</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

export default Login