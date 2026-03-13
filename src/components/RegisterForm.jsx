
function RegisterForm() {
  return (
    <div>
        <div className="text-3xl text-center opacity-70">Create a new account</div>
        <div className="divider"></div>
        <form onSubmit={e=>e.preventDefault()} className="flex flex-col gap-5 p-4 pt-3">
            <div className="flex gap-2">
                <input type="text" className="input w-full" placeholder="First name"/>
                <input type="text" className="input w-full" placeholder="Last name"/>
            </div>
            <input type="text" className="input w-full" placeholder="E-mail or Phone number"/>
            <input type="text" className="input w-full" placeholder="New password"/>
            <input type="text" className="input w-full" placeholder="Confirm password"/>
            <button className="btn btn-secondary text-xl">Sign Up</button>
        </form>
    </div>
  )
}

export default RegisterForm