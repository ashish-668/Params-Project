
import { Link } from "react-router-dom";
import { MAP_DATA } from "../../utils/helper";

const Home = () => {
  return (
    <section className="pt-30 pb-22.5 bg-lite-orange">
      <div className="max-w-302.5 px-5 w-full mx-auto">
        <div className="flex items-center justify-center gap-7.5">
          {MAP_DATA.map((item, index) => (
            <Link to={`/blog/${item.title.toLowerCase().replaceAll(" ", "-")}`}
              key={index}
              className="flex flex-col bg-white rounded-[10px] p-3.75 shadow-[0px_1px_4px_0px_#0000001A] max-w-92.5 w-full"
            >
              <div>
                <img
                  height={225}
                  width={340}
                  src={item.img}
                  alt={item.title}
                  className="w-full"
                />
              </div>

              <div className="mt-3.75">
                <h3 className="text-xl leading-150">
                  {item.title}

                  <p className="text-base leading-146 mt-4.5">
                    {item.description}
                  </p>
                </h3>

                <div className="mt-6.25">
                  <button
                    type="button"
                    className="group relative isolate overflow-hidden cursor-pointer flex shrink-0 px-3.25 py-2 text-white text-xl font-medium leading-145 bg-bright-orange border border-bright-orange rounded-[5px] shadow-[4px_5px_15px_0px_#FF53001A] transition-colors duration-300 hover:text-bright-orange before:content-[''] before:absolute before:inset-0 before:bg-lite-orange before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100"
                  >
                    <span className="relative z-10">
                      {item.btn}
                    </span>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
