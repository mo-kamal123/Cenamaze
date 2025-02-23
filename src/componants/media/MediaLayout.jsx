import MovieCard from "../MovieCard"

function MediaLayout({media, section}) {
  return (
    <div className="text-white w-[90%] m-auto">
        <div className="group w-fit">
        <h1 className="text-4xl ">{section}</h1>
        <div className="h-2 w-7 bg-red-500 rounded-full mt-2 group-hover:w-full transition-all duration-300"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 border-[1px] p-5 border-gray-900 my-10">
            {media.map((media) => (
                <div>
                    <MovieCard movie={media} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default MediaLayout