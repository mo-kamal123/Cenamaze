import FetchSectionsData from "../FetchSectionsData";

function AiringTv() {
  return (
    <div>
      <FetchSectionsData
        url={"https://api.themoviedb.org/3/tv/airing_today"}
        section={"Airing Today"}
      />
    </div>
  );
}

export default AiringTv;
