import FetchSectionsData from "./media/FetchSectionsData"

function HomeTrending() {
  return (
    <div className="">
      <FetchSectionsData
        url={"https://api.themoviedb.org/3/trending/all/day?language=en-US"}
        section={"Trending"}
      />
    </div>  )
}

export default HomeTrending