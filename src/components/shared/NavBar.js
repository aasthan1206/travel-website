import { SideBarData } from "../../utils/NavData"

const NavBar = ({ className }) => {
  return (
    <div className={className}>
      <div className="font-main font-bold text-white flex bg-gradient-to-r from-darkblue to-lightyellow p-4">
        <div>TravelLog</div>
        <div className="flex px-8">
            {SideBarData.map((link) => (
                <div key={link.id} className="px-2">{link.title}</div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default NavBar
