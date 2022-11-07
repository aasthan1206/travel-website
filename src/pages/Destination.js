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
            <div className="text-center text-5xl text-darkblue font-main font-extrabold my-8">MANALI</div>
            <DestinationSlider />
            <div className="text-center text-xl text-lightblue font-main my-8 mx-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptas officia necessitatibus! Eum, fugit iure! Blanditiis, architecto velit? Vitae, officiis ea inventore repellendus blanditiis quisquam unde accusantium esse voluptate quo!</div>
            <Card />
            <table className="table-auto w-[50vw] text-center mx-auto font-main mt-64 mb-16">
                  <thead className="text-2xl text-darkblue py-4 bg-lightpink h-16">
                    <th>Activities</th>
                    <th>3 D / 2 N</th>
                    <th>3 D / 2 N</th>
                    <th>3 D / 2 N</th>
                  </thead>
                    <tbody className="text-xl font-extrabold">
                      <tr className="border-b-2 border-darkpink">
                        <td className="py-4">1</td>
                        <td className="pl-16"><FaTimes className="text-red-600" /></td>
                        <td className="pl-16"><FaCheck className="text-green-600" /></td>
                        <td className="pl-16"><FaTimes className="text-red-600" /></td>
                      </tr>
                      <tr className="border-b-2 border-darkpink bg-lightpink">
                        <td className="py-4">1</td>
                        <td className="pl-16"><FaTimes className="text-red-600" /></td>
                        <td className="pl-16"><FaCheck className="text-green-600" /></td>
                        <td className="pl-16"><FaCheck className="text-green-600" /></td>
                      </tr>
                      <tr className="border-b-2 border-darkpink">
                        <td className="py-4">1</td>
                        <td className="pl-16"><FaCheck className="text-green-600" /></td>
                        <td className="pl-16"><FaCheck className="text-green-600" /></td>
                        <td className="pl-16"><FaCheck className="text-green-600" /></td>
                      </tr>
                      <tr className="border-b-2 border-darkpink bg-lightpink">
                        <td className="py-4">1</td>
                        <td className="pl-16"><FaTimes className="text-red-600" /></td>
                        <td className="pl-16"><FaTimes className="text-red-600" /></td>
                        <td className="pl-16"><FaTimes className="text-red-600" /></td>
                      </tr>
                      <tr className="border-b-2 border-darkpink">
                        <td className="py-4">1</td>
                        <td className="pl-16"><FaCheck className="text-green-600" /></td>
                        <td className="pl-16"><FaTimes className="text-red-600" /></td>
                        <td className="pl-16"><FaCheck className="text-green-600" /></td>
                      </tr>
                    </tbody>
                </table>
        </div>
      
    </div>
    
  )
}

export default Destination
