import { useParams } from "react-router-dom";
import {MAP_DATA} from "../utils/helper"


const HomeDetails = () => {
  const params = useParams()
  const slug = params.slug

 const DATA = MAP_DATA.find((item) => item.title.toLowerCase().replaceAll(" ", "-") === slug)
  
  return (
      <section className='flex items-center justify-center w-full min-h-screen'>
        
        <h1>{DATA.title}</h1>
      </section>
  );
}

export default HomeDetails;
