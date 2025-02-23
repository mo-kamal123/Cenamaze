import HomeSliders from "./HomeSliders"

function Upcoming() {
  return (
    <div>
            <HomeSliders path={'/movies/upcoming'} sectionName={"Upcoming"} url={"https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"} />
    </div>
  )
}

export default Upcoming