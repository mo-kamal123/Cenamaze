import { useEffect, useState } from "react";
import Nav from "../Nav";
import MediaLayout from "./MediaLayout";
import SmallNav from "../SmallNav";
import Spinner from "../Spinner";

function FetchSectionsData({ url, section }) {
  const [media, SetMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setpage] = useState(1);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjQwM2M3YTBkZmQyN2YwYTkyOTJmMDkyNDkyZTkwZiIsIm5iZiI6MTczNjcwMDc5MC4xMzIsInN1YiI6IjY3ODNmMzc2MDY5MGFjMDZlNzdiNWEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b8HnEC3yGmDoSxhyfi4ObtEE3iWap_lD5yBsFbAewxM",
    },
  };
  useEffect(() => {
    const getSectionData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${url}?language=en-US&page=${page}`,
          options
        );
        const data = await response.json();
        console.log(data.results);
        SetMedia(data.results);
        setLoading(false);
      } catch (err) {
      } finally {
      }
    };
    getSectionData();
    console.log(media);
  }, [page,url]);
  if (media && loading) {
    return (
      <div className="bg-black min-h-svh">
      <div className="lg:hidden"><SmallNav /></div>
      <div className="hidden lg:block"><Nav /></div>
              <div className="pt-26 w-[90%] m-auto">
          <div className="group w-fit">
            <h1 className="text-4xl text-white">{section}</h1>
            <div className="h-2 w-7 bg-red-500 rounded-full mt-2 group-hover:w-full transition-all duration-300"></div>
          </div>
          <div className="text-white flex items-center justify-center h-80"> <Spinner /></div>
        </div>
        <div className="text-white flex items-center justify-center gap-5 pb-10">
          <button
            onClick={() => setpage(page - 1)}
            className="border-[1px] border-red-500 px-2 py-1 rounded-sm hover:bg-red-500 hover:text-black transition-all duration-300"
          >
            Prev
          </button>
          <p>{page}</p>
          <button
            onClick={() => setpage(page + 1)}
            className="border-[1px] border-red-500 px-2 py-1 rounded-sm hover:bg-red-500 hover:text-black transition-all duration-300"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-black min-h-svh">
      <div className="lg:hidden"><SmallNav /></div>
      <div className="hidden lg:block"><Nav /></div>
      <div className="pt-26">
        <MediaLayout media={media} section={section} />
      </div>
      <div className="text-white flex items-center justify-center gap-5 pb-10">
        <button
          onClick={() => setpage(page - 1)}
          className="border-[1px] border-red-500 px-2 py-1 rounded-sm hover:bg-red-500 hover:text-black transition-all duration-300"
        >
          Prev
        </button>
        <p>{page}</p>
        <button
          onClick={() => setpage(page + 1)}
          className="border-[1px] border-red-500 px-2 py-1 rounded-sm hover:bg-red-500 hover:text-black transition-all duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default FetchSectionsData;
