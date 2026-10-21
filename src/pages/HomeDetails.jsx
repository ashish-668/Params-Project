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
        </div>
      </section>
  );
}

export default HomeDetails;
