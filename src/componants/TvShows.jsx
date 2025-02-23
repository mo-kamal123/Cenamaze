import HomeSliders from "./HomeSliders"

function TvShows() {
  return (
    <div>
        <HomeSliders path={'/tv/popular'} sectionName={"TV Shows"} url={"https://api.themoviedb.org/3/tv/popular?language=en-US&page=1"} />
    </div>
  )
}

export default TvShows