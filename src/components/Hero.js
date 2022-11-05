import WhyUs from "./WhyUs"

const Hero = () => {
  return (
    <div>
        <div className='bg-hero h-[82vh] bg-cover opacity-80'>
            <div className="text-center text-5xl text-black font-special py-28 opacity-80">
                Travel!! <br></br>
                Before you run out of time...
            </div>
        </div>
        <WhyUs />
    </div>
  )
}

export default Hero
