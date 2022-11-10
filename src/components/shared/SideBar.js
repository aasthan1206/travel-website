import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import { SideBarData } from '../../utils/NavData'
import { Link } from 'react-router-dom'
import logoPlane from '../../assets/images/logoPlane.png'

const SideBar = ({ className }) => {

  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }
  return (
    <div className={className}>
      <div className="bg-darkblue text-white font-main font-extrabold flex text-xl justify-between px-4 py-2">
        <img src={logoPlane} alt="" className="w-12 mx-4 -mt-2" />
        <div className='tracking-widest'>TravelLog</div>
        <div className='cursor-pointer' onClick={handleClick}><FaBars /></div>
      </div>
      <div style={{display: isActive ? 'block':'none'}} className='font-main font-bold text-darkblue text-center text-2xl bg-lightyellow '>
        {SideBarData.map((link) => (
            <Link to={link.to} key={link.id} className='py-4 border-b-2 border-white hover:bg-lightblue hover:text-white '>{link.title}</Link>
        ))}
      </div>
    </div>
  )
}

export default SideBar
