import Hero from "../components/Hero"
import {FaTimes} from 'react-icons/fa'
import {FaCheck} from 'react-icons/fa'
import Card from "../components/Card"

const Destination = () => {
  return (
    <div>
        <div>
            <div className="text-center text-5xl text-darkblue font-main font-extrabold my-8">MANALI</div>
            <Hero />
            <div className="text-center text-xl text-lightblue font-main my-8 mx-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptas officia necessitatibus! Eum, fugit iure! Blanditiis, architecto velit? Vitae, officiis ea inventore repellendus blanditiis quisquam unde accusantium esse voluptate quo!</div>
            <Card />
        </div>
      
    </div>
  )
}

export default Destination
