import NavBar from "./NavBar"
import SideBar from "./SideBar"

const Navigation = () => {
  return (
    <>
      <NavBar className={"hidden lg:block"} />
      <SideBar className={"block lg:hidden"} />
    </>
  )
}

export default Navigation
