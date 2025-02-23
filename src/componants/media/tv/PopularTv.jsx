import FetchSectionsData from "../FetchSectionsData";

function PopularTv() {
  return (
    <div>
      <FetchSectionsData
        url={"https://api.themoviedb.org/3/tv/popular"}
        section={"Popular"}
      />
    </div>
  );
}

export default PopularTv;
