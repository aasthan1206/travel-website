import card from "../assets/images/card.jpg";
import { packageGrid } from "../utils/PackageSectionData";

const Card = () => {
  return (
    <div>
      <div className="text-5xl text-darkblue font-main font-black mx-16 mt-12">Featured Packages</div>
      <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mx-16 my-12 gap-16">
        {packageGrid.map((data) => (
          <div className="relative h-[20vh] w-60 lg:h-[35vh] sm:w-80 shadow-stone-600 shadow-md transition-all duration-500 ease-in-out transform hover:scale-110">
            <img
              src={data.image}
              alt=""
              className="lg:h-[35vh] sm:w-80 w-60 h-[20vh] rounded-sm"
            />
            <div className="absolute bottom-0 text-white text-3xl bg-black font-extrabold opacity-60 w-1/2 h-16">
              <span className="flex justify-center py-3 font-main">
                {data.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
