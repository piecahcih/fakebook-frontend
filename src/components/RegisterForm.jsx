import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '@/validations/schema'
import axios from "axios"
import { Bounce, toast, ToastContainer } from "react-toastify"
import { apiRegister, mainApi } from "@/api/mainApi"

function RegisterForm() {
  const {register, handleSubmit, formState, reset} = useForm({
    resolver : zodResolver(registerSchema),
    mode: 'onSubmit',
    defaultValues: {
      firstName: '', lastName: '', identity: '', password: '', confirmPassword: ''
    }
  })
  const { errors, isSubmitting } = formState

  const onSubmit = async (data) => {
    try {
      // alert(JSON.stringify(data, null, 2))
      await new Promise( resolve => setTimeout(resolve, 1000))
      // const res = await axios.post('http://localhost:8899/api/auth/register',data)
      // const res = await apiRegister(data)
      const res = await mainApi.post('/auth/register',data)
      // toast.success(JSON.stringify(res.data.message), {transition: Bounce, autoClose: 2000})
      toast.success(res.data.message, {transition: Bounce, autoClose: 2000})
      document.getElementById('register-form').close()
      reset()
    } catch (error) {
      console.dir(error)
      const errMsg = error.response?.data.message || error.message
      // alert(JSON.stringify(error,null,2))
      // alert(errMsg)
      toast.error(errMsg, {transition : Bounce, autoClose: 2000, containerId: 'register-modal'})
    }
  }


  return (
    <div>
      <ToastContainer containerId="register-modal" theme="colored" position="top-center"/>
        <div className="text-3xl text-center opacity-70">Create a new account
          {isSubmitting && <span className="loading loading-spinner mx-2"></span>}
        </div>
        <div className="divider"></div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="flex flex-col gap-5 p-4 pt-3" disabled={isSubmitting}>
            <div className="flex gap-2">
              <div className="w-full">
                <input type="text" className="input w-full" placeholder="First name" {...register('firstName')}/>
                <p className="text-sm text-error">{errors.firstName?.message}</p>
              </div>
              <div className="w-full">
                <input type="text" className="input w-full" placeholder="Last name" {...register('lastName')}/>
                <p className="text-sm text-error">{errors.lastName?.message}</p>
              </div>
            </div>

            <div className="w-full">
                <input type="text" className="input w-full" placeholder="E-mail or Phone number" {...register('identity')}/>
                <p className="text-sm text-error">{errors.identity?.message}</p>
            </div>
            <div className="w-full">
                <input type="password" className="input w-full" placeholder="New password" {...register('password')}/>
                <p className="text-sm text-error">{errors.password?.message}</p>
            </div>
            <div className="w-full">
                <input type="password" className="input w-full" placeholder="Confirm password" {...register('confirmPassword')}/>
                <p className="text-sm text-error">{errors.confirmPassword?.message}</p>
            </div>
            <button className="btn btn-secondary text-xl" disabled={isSubmitting}>Sign Up</button>
            <button type="button" onClick={()=>reset()} className="btn btn-warning text-xl">Clear</button>
          </fieldset>
        </form>

        {/* <div className="border">
            <pre className="text-error text-xs">
            {JSON.stringify(errors, (k,v) => k==='ref' ? undefined : v, 2) }</pre>
        </div> */}
    </div>
  )
}

export default RegisterForm


    // <div>
    //     <div className="text-3xl text-center opacity-70">Create a new account</div>
    //     <div className="divider"></div>
    //     <form onSubmit={e=>e.preventDefault()} className="flex flex-col gap-5 p-4 pt-3">
    //         <div className="flex gap-2">
    //             <input type="text" className="input w-full" placeholder="First name"/>
    //             <input type="text" className="input w-full" placeholder="Last name"/>
    //         </div>
    //         <input type="text" className="input w-full" placeholder="E-mail or Phone number"/>
    //         <input type="password" className="input w-full" placeholder="New password"/>
    //         <input type="password" className="input w-full" placeholder="Confirm password"/>
    //         <button className="btn btn-secondary text-xl">Sign Up</button>
    //     </form>
    // </div>