import { SideBarData } from "../../utils/NavData"
import { Link } from 'react-router-dom'
import logoPlane from '../../assets/images/logoPlane.png'

const NavBar = ({ className }) => {
  return (
    <div className={className}>
      <div className="font-main font-bold text-white flex bg-gradient-to-r from-darkblue to-lightyellow p-4">
        <img src={logoPlane} alt="" className="w-12 mx-4" />
        <div className="mt-2 tracking-widest">TravelLog</div>
        <div className="flex px-8 gap-8 mt-2">
            {SideBarData.map((link) => (
                <Link to={link.to} key={link.id} className="px-2">{link.title}</Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default NavBar
