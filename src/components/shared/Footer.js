import Newsletter from "./Newsletter"
import SocialIcons from "./SocialIcons"
import { footerLink } from "../../utils/FooterData"

const Footer = () => {
  return (
    <div>
      <div className="bg-darkblue text-white font-main text-center py-4 lg:flex lg:justify-between lg:gap-24 px-12" >
        <div>
          <div className="text-2xl font-bold py-2">TravelLog</div>
          <div className="pb-2 text-lightyellow font-special tracking-wider">Travel in style</div>
          <div className="py-2"><SocialIcons /></div>
        </div>
        <div className="py-2 text-xl">
          {footerLink.map((link) => (
            <div key={link.id} className="py-2 hover:text-lightyellow">{link.link}</div>
          ))}
        </div>
        <div><Newsletter /></div>
      </div>
    </div>
  )
}

export default Footer
