import airballoon from '../assets/images/airballoon.jpg'
import map from '../assets/images/map.jpg'
import water from '../assets/images/water.jpg'

const About = () => {
  return (
    <div>
      <div className="bg-about bg-cover opacity-80 h-[80vh]">
        <div className="font-special font-extrabold text-9xl text-black text-center pt-20 opacity-80">Get to know us</div>
      </div>
      <div className='text-center text-darkblue text-6xl font-main font-bold mt-8 mb-8 lg:mb-0'>About Us</div>
      <div className='flex flex-col items-center lg:flex-row lg:justify-center mb-8'>
        <div className="bg-lightblue w-96">
          <img src={map} alt="" className="rounded-full w-80 mx-auto py-8" />
          <div className="text-center text-lg font-main px-4 pb-8 text-palewhite font-semibold">We always make our customers happy by providing as many choices as possible top tourist destinations for you with advantages that have never been seen anywhere else.</div>

        </div>
        <div className="bg-lightpink w-96 lg:mt-12 ">
          <img src={airballoon} alt="" className="rounded-full w-56 mx-auto py-8" />
          <div className="text-center text-2xl font-main font-extrabold px-4 pb-8 text-darkpink flex-col">
            <div className='py-2'>10+ Destinations</div>
            <div className='py-2'>6 Exclusive Packages</div>
            <div className='py-2'>Amazing Activities</div>
            <div className='py-2'>Best Hotels</div>
          </div>

        </div>
        <div className="bg-lightyellow w-96 ">
          <img src={water} alt="" className="rounded-full w-80 mx-auto py-8" />
          <div className="text-center text-lg font-main px-4 pb-8 text-lightblue font-semibold">Since we first opened we have always prioritized the convenience of our users by providing low prices and with fast and easy process so thet our users are happy.</div>

        </div>
      </div>
      
    </div>
  )
}

export default About
