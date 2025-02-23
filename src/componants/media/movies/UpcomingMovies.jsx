import FetchSectionsData from "../FetchSectionsData";

function UpcomingMovies() {
  return (
    <div className="">
      <FetchSectionsData
        url={"https://api.themoviedb.org/3/movie/upcoming"}
        section={"Upcoming"}
      />
    </div>
  );
}

export default UpcomingMovies;
