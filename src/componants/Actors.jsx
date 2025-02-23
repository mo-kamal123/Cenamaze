import HomeSliders from "./HomeSliders"

function Actors() {
  return (
    <div>
        <HomeSliders sectionName={"Actors"} url={'https://api.themoviedb.org/3/trending/person/day?language=en-US'} />
    </div>
  )
}

export default Actors