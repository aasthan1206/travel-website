import Newsletter from "./Newsletter"
import SocialIcons from "./SocialIcons"
import { footerLink } from "../../utils/FooterData"
import logoPlane from '../../assets/images/logoPlane.png'

const Footer = () => {
  return (
    <div>
      <div className="bg-darkblue text-white font-main text-center py-4 lg:flex lg:justify-between lg:gap-24 px-12" >
        <div>
          
          <div className="font-bold py-2 tracking-widest flex justify-center gap-2 font-logo text-3xl"><img src={logoPlane} alt="" className="w-16 -mt-2" />TravelLog</div>
          <div className="pb-2 text-lightyellow font-special tracking-wider text-4xl">Travel in style</div>
          <div className="py-2"><SocialIcons /></div>
        </div>
        <div className="py-2 text-xl">
          {footerLink.map((link) => (
            <div key={link.id} className="py-2 hover:text-lightyellow cursor-pointer lg:text-left">{link.link}</div>
          ))}
        </div>
        <div><Newsletter /></div>
      </div>
    </div>
  )
}

export default Footer
