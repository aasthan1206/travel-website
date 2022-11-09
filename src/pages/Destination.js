import Hero from "../components/Hero"
import DestinationSlider from "../components/DestinationSlider"
import Card from "../components/Card"
import {FaTimes} from 'react-icons/fa'
import {FaCheck} from 'react-icons/fa'
import { packageGrid } from "../utils/PackageSectionData"
import { useState } from "react"

const Destination = () => {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  return (
    <div>
        <div className="">
            <div className="text-6xl text-darkblue font-main font-extrabold my-8 mx-12">MANALI</div>
            <DestinationSlider />
            <div className="text-justify text-2xl font-bold text-lightblue font-main my-8 mx-12">Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination. Set on the Beas River, it’s a gateway for skiing in the Solang Valley and trekking in Parvati Valley. It's also a jumping-off point for paragliding, rafting and mountaineering in the Pir Panjal mountains, home to 4,000m-high Rohtang Pass.</div>
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

export default Destination
