import FetchMediaData from "../FetchMediaData";

function PersonDetails({ id }) {
  return (
    <div>
      <FetchMediaData
        type={"person"}
        url={`//api.themoviedb.org/3/person/${id}?language=en-US`}
      />
    </div>
  );
}

export default PersonDetails;
