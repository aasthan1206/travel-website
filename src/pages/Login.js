

const Login = () => {
  return (
    <div className="bg-login bg-cover flex-col lg:flex lg:flex-row lg:h-screen lg:px-16 px-8 py-12 gap-16 opacity-90">
        <div className="rounded-md bg-white lg:w-1/2 px-16 opacity-90">
            <div className="text-darkblue text-4xl font-main font-extrabold py-6">Sign Up</div>
            <div className="text-lg font-main font-bold ">
                <label htmlFor="">Email</label> <br />
                <input type="email" name="email" className="border-2 border-black rounded-sm my-2 px-2 py-1 w-full" />
            </div>
            <div className="text-lg font-main font-bold ">
                <label htmlFor="">Password</label> <br />
                <input type="password" name="password" className="border-2 border-black rounded-sm my-2 px-2 py-1 w-full" />
            </div>
            <div className="text-lg font-main font-bold ">
                <label htmlFor="">Name</label> <br />
                <input type="text" name="name" className="border-2 border-black rounded-sm my-2 px-2 py-1 w-full" />
            </div>
            <div className="text-lg font-main font-bold ">
                <label htmlFor="">Contact Number</label> <br />
                <input type="tel" name="number" className="border-2 border-black rounded-sm my-2 px-2 py-1 w-full" />
            </div>
            <button className="bg-darkpink my-4 lg:my-2 px-4 py-2 text-xl text-white font-main font-semibold hover:bg-lightpink hover:text-darkpink rounded-sm">Sign Up</button>
            
        </div>
        <div className="rounded-md bg-white lg:w-1/2 px-16 opacity-90">
            <div className="text-white bg-darkblue text-4xl font-main font-extrabold my-6 p-2">Login</div>
            <div className="text-lg font-main font-bold ">
                <label htmlFor="">Email</label> <br />
                <input type="email" name="email" className="border-2 border-black rounded-sm my-2 px-2 py-1 w-full" />
            </div>
            <div className="text-lg font-main font-bold ">
                <label htmlFor="">Password</label> <br />
                <input type="password" name="password" className="border-2 border-black rounded-sm my-2 px-2 py-1 w-full" />
            </div>
            <button className="bg-darkpink my-4 lg:my-2 px-4 py-2 text-xl text-white font-main font-semibold hover:bg-lightpink hover:text-darkpink rounded-sm">Login</button>
        </div>
      
    </div>
  )
}

export default Login
