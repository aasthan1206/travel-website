import { socialIconData } from "../../utils/FooterData"

const SocialIcons = () => {
  return (
    <div className="flex gap-8 justify-center">
      {socialIconData.map((icon) => (
        <div key={icon.id}>{icon.icon}</div>
      ))}
    </div>
  )
}

export default SocialIcons
