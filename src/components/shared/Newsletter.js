
const Newsletter = () => {
  return (
    <div>
        <div className="bg-darkblue text-center px-12 pt-4 pb-8 lg:text-left">
            <div className="font-main text-white font-bold tracking-widest">
                JOIN OUR MAILING LIST
            </div>
            <div className="text-white pt-4 pb-8">
                Receive trip ideas, destination guides & inspiration straight to your inbox
            </div>
            <div>
                <input type="text" placeholder="Enter your email" className="outline-none border-none rounded-2xl md:w-72 h-8 px-4 text-darkblue font-main font-medium" />
            </div>
            <button className="bg-lightyellow mt-8 px-4 py-2 text-xl text-darkblue font-main font-semibold hover:bg-palewhite">Subscribe</button>
        </div>
    </div>
    
  )
}

export default Newsletter
