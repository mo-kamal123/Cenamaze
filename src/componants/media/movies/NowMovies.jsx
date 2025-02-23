import FetchSectionsData from "../FetchSectionsData";

function NowMovies() {
  return (
    <div className="">
      <FetchSectionsData
        url={"https://api.themoviedb.org/3/movie/now_playing"}
        section={"Playing Now"}
      />
    </div>
  );
}

export default NowMovies;
