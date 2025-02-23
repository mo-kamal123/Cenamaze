import FetchSectionsData from "../FetchSectionsData";

function OnAirTv() {
  return (
    <div>
      <FetchSectionsData
        url={"https://api.themoviedb.org/3/tv/on_the_air"}
        section={"On The Air"}
      />
    </div>
  );
}

export default OnAirTv;
