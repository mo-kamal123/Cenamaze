import FetchMediaData from "../FetchMediaData";

function TvDetails({ id }) {
  return (
    <div>
      <FetchMediaData
        type={"tv"}
        url={`https://api.themoviedb.org/3/tv/${id}?language=en-US`}
      />
    </div>
  );
}

export default TvDetails;
