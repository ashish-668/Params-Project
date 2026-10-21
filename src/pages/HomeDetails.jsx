import { useParams } from "react-router-dom";
import {MAP_DATA} from "../utils/helper"


const HomeDetails = () => {
  const params = useParams()
  const slug = params.slug

 const DATA = MAP_DATA.find((item) => item.title.toLowerCase().replaceAll(" ", "-") === slug)
  
  return (
      <section className='flex items-center justify-center w-full min-h-screen'>
        <div className="flex flex-col items-center justify-center w-full">
          <div>
            <img height={300} width={500} src={DATA.img} alt="" />
          </div>
          <h1 className="text-3xl mt-5">{DATA.title}</h1>
          <p className="mt-4 text-lg">{DATA.description}</p>
          <div className="mt-5">
 <button
                    type="button"
                    className="group relative isolate overflow-hidden cursor-pointer flex shrink-0 px-3.25 py-2 text-white text-xl font-medium leading-145 bg-bright-orange border border-bright-orange rounded-[5px] shadow-[4px_5px_15px_0px_#FF53001A] transition-colors duration-300 hover:text-bright-orange before:content-[''] before:absolute before:inset-0 before:bg-lite-orange before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100"
                  >
                    <span className="relative z-10">
                      {DATA.btn}
                    </span>
                  </button>
          </div>
        </div>
      </section>
  );
}

export default HomeDetails;
