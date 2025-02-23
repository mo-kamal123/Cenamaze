import FetchSectionsData from "../FetchSectionsData";

function TopTv() {
  return (
    <div>
      <FetchSectionsData
        url={"https://api.themoviedb.org/3/tv/top_rated"}
        section={"Top Rated"}
      />
    </div>
  );
}

export default TopTv;
