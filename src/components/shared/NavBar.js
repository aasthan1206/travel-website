import { SideBarData } from "../../utils/NavData"
import { Link } from 'react-router-dom'

const NavBar = ({ className }) => {
  return (
    <div className={className}>
      <div className="font-main font-bold text-white flex bg-gradient-to-r from-darkblue to-lightyellow p-4 tracking-wider">
        <div>TravelLog</div>
        <div className="flex px-8">
            {SideBarData.map((link) => (
                <Link to={link.to} key={link.id} className="px-2">{link.title}</Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default NavBar
