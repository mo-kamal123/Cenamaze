import FetchSectionsData from "../FetchSectionsData";

function TopMovies() {
  return (
    <div className="">
      <FetchSectionsData
        url={"https://api.themoviedb.org/3/movie/top_rated"}
        section={"Top Rated"}
      />
    </div>
  );
}

export default TopMovies;
