import card from "../assets/images/card.jpg";
import { packageGrid } from "../utils/PackageSectionData"
import { useState } from "react"
import {FaTimes} from 'react-icons/fa'
import {FaCheck} from 'react-icons/fa'


const Card = () => {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  return (
    <div>
      <div className="text-5xl text-darkblue font-main font-black mx-4 mt-12">Featured Packages</div>
      <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mx-8 my-12 gap-4">
        {packageGrid.map((data) => (
          <div className="h-[20vh] w-60 lg:h-[35vh] sm:w-96 shadow-stone-600 shadow-md bg-gradient-to-r from-black to-palewhite">
            <div className="text-center text-xl font-bold text-palewhite my-2">{data.title}</div>
            <img
              src={data.image}
              alt=""
              className="lg:h-[35vh] sm:w-96 w-60 h-[20vh] rounded-sm cursor-pointer"
            />
            {/* transition-all duration-500 ease-in-out transform hover:scale-110 */}
            {/* Heelo
            <div className=" text-white text-3xl bg-black font-extrabold opacity-60 w-1/2 h-16">
              <span className="flex justify-center py-3 font-main">
                {data.title}
              </span>
            </div>
            <div className="my-4 flex-col gap-4 justify-end">
              <div>Price</div>
              <div>4 days /  3 nights</div>
              <button className="bg-lightyellow mt-4 mb-6 px-4 py-2 text-xl text-lightblue font-main font-semibold hover:bg-palewhite" onClick={handleClick}>More Info</button>
            </div> */}
            <div className="my-4 flex-col gap-4 justify-end font-main px-4 -mt-1 py-4 shadow-lg rounded-sm bg-gradient-to-r from-palewhite to-black ">
              <div className="text-darkblue text-xl font-black">Price</div>
              <div className="text-lg font-extrabold">4 days /  3 nights</div>
              <button className="bg-lightyellow mt-4 mb-6 px-4 py-2 text-xl text-lightblue font-main font-semibold hover:bg-palewhite" onClick={handleClick}>More Info</button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
