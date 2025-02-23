import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [showNav, setShowNav] = useState(false)
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [search, setSearch] = useState('')

  // Use a ref to track the last scroll position
  const lastScrollY = useRef(0);
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search/${search}`);
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setNavbarVisible(false);
      } else {
        // Scrolling up
        setNavbarVisible(true);
      }

      // Update background based on scroll position
      if (currentScrollY > 50) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }

      // Update the ref with the current scroll position
      lastScrollY.current = currentScrollY;
    };

    // Add a debounce to the scroll event for better performance
    let debounceTimer;
    const debouncedHandleScroll = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(handleScroll, 100); // Adjust debounce time as needed
    };

    window.addEventListener("scroll", debouncedHandleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []); // No dependencies needed since we're using a ref

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full flex justify-between items-center text-white py-5 px-10 transition-all duration-300 ${
        navbarBackground ? "bg-black" : "bg-transparent"
      } ${navbarVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <Link to={"/"} className="logo text-3xl text-red-500">
        Cenamaze
      </Link>
      <div onClick={()=> setShowNav(!showNav)}  className="lg:hidden">=</div>
      <div className={`${showNav ? "bg-black/50 absolute top-10 right-10 p-5 text-center " : "hidden"}  lg:flex links gap-10`}>

        <div className="movies relative">
          <button
            onClick={() => {
              setOpen(!open);
              setActive("movies");
            }}
            className="cursor-pointer"
          >
            Movies
          </button>
          {open && active === "movies" && (
            <>
              {/* Full-screen overlay */}
              <div
                className="fixed inset-0 z-40"
                onClick={() => setOpen(false)}
              ></div>

              {/* Menu */}
              <div className="absolute rounded-lg text-gray-300 bg-black flex flex-col w-46 py-2 px-8 -left-10 z-50">
                <Link
                  className="text-lg my-1 hover:text-red-500 transition-all"
                  to={"/movies/playing-now"}
                >
                  Now Playing
                </Link>
                <Link
                  className="text-lg my-1 hover:text-red-500 transition-all"
                  to={"/movies/popular"}
                >
                  Popular
                </Link>
                <Link
                  className="text-lg my-1 hover:text-red-500 transition-all"
                  to={"/movies/top-rated"}
                >
                  Top Rated
                </Link>
                <Link
                  className="text-lg my-1 hover:text-red-500 transition-all"
                  to={"/movies/upcoming"}
                >
                  Upcoming
                </Link>
              </div>
            </>
          )}
        </div>
        <div className="tvshows relative">
          <button
            className="cursor-pointer"
            onClick={() => {
              setOpen(!open);
              setActive("tv");
            }}
          >
            TV Shows
          </button>
          {open && active === "tv" && (
            <>
              {/* Full-screen overlay */}
              <div
                className="fixed inset-0 z-40"
                onClick={() => setOpen(false)}
              ></div>

              {/* Menu */}
              <div className="absolute rounded-lg text-gray-300 bg-black flex flex-col w-46 py-2 px-8 -left-10 z-50">
                <Link
                  className="text-lg my-1 hover:text-red-500 transition-all"
                  to={"/tv/airing"}
                >
                  Airing Today
                </Link>
                <Link
                  className="text-lg my-1 hover:text-red-500 transition-all"
                  to={"/tv/on-The-Air"}
                >
                  On The Air
                </Link>
                <Link
                  className="text-lg my-1 hover:text-red-500 transition-all"
                  to={"/tv/popular"}
                >
                  Popular
                </Link>
                <Link
                  className="text-lg my-1 hover:text-red-500 transition-all"
                  to={"/tv/top-rated"}
                >
                  Top Rated
                </Link>
              </div>
            </>
          )}
        </div>
        <div className="genres relative">
          <Link
            to={'/genres'}
            className="cursor-pointer"
            onClick={() => {
              setOpen(!open);
              setActive("genres");
            }}
          >
            Genres
          </Link>
        </div>
      </div>
      <form onSubmit={(e)=>{e.preventDefault(); handleSearch()}} className={`search ${showNav ? "bg-black/50 absolute top-34 right-10 p-5 text-center " : "hidden"} lg:flex`}>
        <input
        onChange={(e)=> {setSearch(e.target.value)}}
          className=" text-white border-2 border-red-500 px-5 py-2 rounded outline-0 focus:bg-gray-950/50 transition-all duration-300"
          type="text"
          placeholder="search"
        />
        {/* <p onClick={handleSearch} className="bg-red-500 p-2 text-black cursor-pointer">go</p> */}
      </form>
    </nav>
  );
}

export default Nav;