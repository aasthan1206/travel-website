import Hero from "../components/Hero"
import DestinationSlider from "../components/DestinationSlider"
import DestinationImage from "../components/DestinationImage"
import Card from "../components/Card"
import {FaTimes} from 'react-icons/fa'
import {FaCheck} from 'react-icons/fa'
import { packageGrid } from "../utils/PackageSectionData"
import { useState } from "react"


const Udaipur = () => {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  return (
    <div>
        <div className="">
            <div className="text-6xl text-darkblue font-main font-extrabold my-8 mx-12 text-center">Udaipur</div>
            <DestinationImage />
            <div className="text-justify text-2xl font-bold text-lightblue font-main my-8 mx-12">Udaipur, formerly the capital of the Mewar Kingdom, is a city in the western Indian state of Rajasthan. Founded by Maharana Udai Singh II in 1559, it's set around a series of artificial lakes and is known for its lavish royal residences. City Palace, overlooking Lake Pichola, is a monumental complex of 11 palaces, courtyards and gardens, famed for its intricate peacock mosaics.</div>
            <Card />
            <table className="table-auto w-[50vw] text-center mx-auto font-main mt-80 mb-16">
                  <thead className="text-2xl text-darkblue py-4 bg-lightyellow h-16">
                    <th>Activities</th>
                    <th>Family</th>
                    <th>Friends</th>
                    <th>Couple</th>
                  </thead>
                    <tbody className="text-xl font-extrabold">
                      <tr className=" ">
                        <td className="py-4">Treaking</td>
                        <td className="pl-16"><FaCheck className="text-green-600" /></td>
                        <td className="pl-16"><FaCheck className="text-green-600" /></td>
                        <td className="pl-16"><FaTimes className="text-red-600" /></td>
                      </tr>
                      <tr className="  bg-lightyellow">
                        <td className="py-4">River Rafting</td>
                        <td className="pl-16"><FaCheck className="text-green-600" /></td>
                        <td className="pl-16"><FaCheck className="text-green-600" /></td>
                        <td className="pl-16"><FaTimes className="text-red-600" /></td>
                      </tr>
                      <tr className=" ">
                        <td className="py-4">Hot Air Balloon</td>
                        <td className="pl-16"><FaCheck className="text-green-600" /></td>
                        <td className="pl-16"><FaCheck className="text-green-600" /></td>
                        <td className="pl-16"><FaCheck className="text-green-600" /></td>
                      </tr>
                      <tr className="  bg-lightyellow">
                        <td className="py-4">Helicopter Ride</td>
                        <td className="pl-16"><FaTimes className="text-red-600" /></td>
                        <td className="pl-16"><FaTimes className="text-red-600" /></td>
                        <td className="pl-16"><FaCheck  className="text-green-600" /></td>
                      </tr>
                      <tr className=" ">
                        <td className="py-4">Riverside Camping</td>
                        <td className="pl-16"><FaCheck className="text-green-600" /></td>
                        <td className="pl-16"><FaCheck className="text-green-600" /></td>
                        <td className="pl-16"><FaCheck  className="text-green-600" /></td>
                      </tr>
                      <tr className="  bg-lightyellow">
                        <td className="py-4">Local Sightseeing</td>
                        <td className="pl-16"><FaCheck className="text-green-600" /></td>
                        <td className="pl-16"><FaCheck className="text-green-600" /></td>
                        <td className="pl-16"><FaCheck  className="text-green-600" /></td>
                      </tr>
                      <tr className=" ">
                        <td className="py-4">Bike Rental</td>
                        <td className="pl-16"><FaTimes className="text-red-600" /></td>
                        <td className="pl-16"><FaCheck className="text-green-600" /></td>
                        <td className="pl-16"><FaCheck className="text-green-600" /></td>
                      </tr>
                    </tbody>
                </table>
        </div>
      
    </div>
    
  )
}

export default Udaipur
