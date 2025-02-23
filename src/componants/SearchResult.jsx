import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import MediaLayout from "./media/MediaLayout";
import FetchSectionsData from "./media/FetchSectionsData";

function SearchResult() {
    const {search} = useParams()
  return (
    <div className="bg-black min-h-svh">
        {/* <MediaLayout media={result} section={search} /> */}
        <FetchSectionsData
        url={`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US`}
        section={search}
      />
    </div>
  )
}

export default SearchResult