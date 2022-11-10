import { Link } from "react-router-dom"
const Booking = () => {
  return (
    
    <div className=" mb-[38rem]">
        <div className="bg-booking bg-cover h-screen opacity-80 relative">
            <div className="font-special font-black text-black text-center tracking-widest text-5xl lg:text-8xl p-8 opacity-80"> It's time to <br /> EXPLORE!!</div>
        </div>
        
        <div className="">
        <form action="" className="lg:w-[45rem] mx-auto px-4 py-4 font-main font-extrabold text-2xl -mt-12 inset-x-0 rounded-sm shadow-lg shadow-black bg-lightyellow text-lightblue absolute">
                <div className="lg:flex py-4 gap-8 w-full">
                    <div className="lg:w-1/2 pb-8 lg:pb-0">
                        <label htmlFor="">Date of Arrival</label> <br />
                        <input type="date" name="arrival" id="" className="h-12 px-4 w-full rounded-sm"/> <br />
                    </div>
                    <div className="lg:w-1/2">
                        <label htmlFor="">Date of Departure</label> <br />
                        <input type="date" name="departure" id="" className="h-12 px-4 w-full rounded-sm"/>
                    </div>
                </div>
                <div className="lg:flex gap-8 py-4 w-full">
                    <div className="lg:w-1/2 pb-8 lg:pb-0">
                        <label htmlFor="">Children</label> <br />
                        <input type="number" name="children" id="" placeholder="0" min="0" className="h-12 px-4 w-full rounded-sm"/> <br />
                    </div>
                    <div className="lg:w-1/2 ">
                        <label htmlFor="">Adults</label> <br />
                        <input type="number" name="adults" id="" placeholder="0" min="0" className="h-12 px-4 w-full rounded-sm"/>
                    </div>
                </div>
                <div className="py-4 w-full">
                    <label htmlFor="">Email</label> <br />
                    <input type="email" name="email" id="" placeholder="" className="w-full h-12 px-4 rounded-sm"/> <br />
                </div>
                <div className="py-4 w-full">
                    <label htmlFor="">Phone Number</label> <br />
                    <input type="tel" name="number" id="" placeholder="" className="w-full h-12 px-4 rounded-sm "/> <br />
                </div>
                <Link to={'/Payment'}>
                <button className="bg-lightblue mt-4 mb-6 px-4 py-2 text-2xl text-palewhite font-main font-semibold hover:bg-palewhite hover:text-lightblue h-12 w-full">Confirm</button>
                </Link>
            </form>
            
        </div>
      
    </div>
  )
}

export default Booking
