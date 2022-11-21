import Hero from "../components/Hero"
import DestinationSlider from "../components/DestinationSlider"
import DestinationImage from "../components/DestinationImage"
import Card from "../components/Card"
import {FaTimes} from 'react-icons/fa'
import {FaCheck} from 'react-icons/fa'
import { packageGrid } from "../utils/PackageSectionData"
import { useState } from "react"


const Jim = () => {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  return (
    <div>
        <div className="">
            <div className="text-6xl text-darkblue font-main font-extrabold my-8 mx-12 text-center">Jim Corbett National Park</div>
            <DestinationImage />
            <div className="text-justify text-2xl font-bold text-lightblue font-main my-8 mx-12">Jim Corbett National Park is a forested wildlife sanctuary in northern India's Uttarakhand State. Rich in flora and fauna, it's known for its Bengal tigers. Animals, including tigers, leopards and wild elephants, roam the Dhikala zone. On the banks of the Ramganga Reservoir, the Sonanadi zone is home to elephants and leopards, along with hundreds of species of birds.</div>
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

export default Jim
