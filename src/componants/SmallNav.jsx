import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function SmallNav() {
  const [showNav, setShowNav] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();


  const handleSearch = () => {
    navigate(`/search/${search}`);
  };
  return (
    <>
      <div className="flex fixed justify-between p-5 items-center w-full bg-black  z-50">
        <Link to={"/"} className="logo text-3xl text-red-500">
          Cenamaze
        </Link>{" "}
        <div className="bg-black">
          <p onClick={() => setShowNav(!showNav)} className="text-3xl text-white cursor-pointer">=</p>
          <div
            className={`absolute bg-black/90 w-full h-1-0 ${
              showNav ? "top-18" : " -top-120"
            } transition-all duration-300 left-0 z-10`}
          >
            <div className="ml-10">
              <h1 className="text-lg font-semibold text-red-500">Movies</h1>
              <div className=" rounded-lg text-gray-300  flex flex-col w-46 py-2 px-8 z-50">
                <Link
                  className="text-md my-1 hover:text-red-500 transition-all"
                  to={"/movies/playing-now"}
                >
                  Now Playing
                </Link>
                <Link
                  className="text-md my-1 hover:text-red-500 transition-all"
                  to={"/movies/popular"}
                >
                  Popular
                </Link>
                <Link
                  className="text-md my-1 hover:text-red-500 transition-all"
                  to={"/movies/top-rated"}
                >
                  Top Rated
                </Link>
                <Link
                  className="text-md my-1 hover:text-red-500 transition-all"
                  to={"/movies/upcoming"}
                >
                  Upcoming
                </Link>
              </div>
            </div>
            <div className="ml-10">
              <h1 className="text-lg font-semibold text-red-500">TV Shows</h1>
              <div className="rounded-lg text-gray-300 flex flex-col w-46 py-2 px-8 z-50">
                <Link
                  className="text-md my-1 hover:text-red-500 transition-all"
                  to={"/tv/airing"}
                >
                  Airing Today
                </Link>
                <Link
                  className="text-md my-1 hover:text-red-500 transition-all"
                  to={"/tv/on-The-Air"}
                >
                  On The Air
                </Link>
                <Link
                  className="text-md my-1 hover:text-red-500 transition-all"
                  to={"/tv/popular"}
                >
                  Popular
                </Link>
                <Link
                  className="text-md my-1 hover:text-red-500 transition-all"
                  to={"/tv/top-rated"}
                >
                  Top Rated
                </Link>
              </div>
            </div>
            <div className="ml-10">
              <Link
                to={"/genres"}
                className="cursor-pointer text-lg font-semibold text-red-500"
              >
                Genres
              </Link>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
              className={`search flex gap-2 ml-10 py-5`}
            >
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                className=" text-white border-2 border-red-500 px-5 py-2 rounded outline-0 focus:bg-gray-950/50 transition-all duration-300"
                type="text"
                placeholder="search"
              />
              <p onClick={handleSearch} className="bg-red-500 w-fit p-2 rounded text-black cursor-pointer">Search</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SmallNav;
