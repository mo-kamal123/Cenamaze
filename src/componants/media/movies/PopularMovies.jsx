import FetchSectionsData from "../FetchSectionsData";

function PopularMovies() {
  return (
    <div className="">
      <FetchSectionsData
        url={"https://api.themoviedb.org/3/movie/popular"}
        section={"Popular"}
      />
    </div>
  );
}

export default PopularMovies;
