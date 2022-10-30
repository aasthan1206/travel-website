import { WhyUsData } from "../utils/WhyUsData"

const WhyUs = () => {
  return (
    <div className="md:shadow-xl">
        <div className="mx-16 flex-col md:flex md:flex-row md:justify-around md:gap-12 font-main py-8">
            <div className="text-darkblue text-2xl font-bold pb-4">Why you should choose us?</div>
            <div className="flex-col md:flex md:flex-row">
                {WhyUsData.map((data) => (
                    <div key={data.id} className="flex pb-2">
                        <div>
                            {data.icon}
                        </div>
                        <div>
                            <div className="text-darkblue font-bold">
                                {data.title}
                            </div>
                            <div>
                                {data.desc}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    
  )
}

export default WhyUs
