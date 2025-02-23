function MovieGenre({media}) {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4 w-[90%] m-auto text-white">
        Genres
      </h2>
      <div className="flex w-[90%] m-auto items-center gap-10">
        {media?.genres.map((genre) => (
          <p
            key={genre.id}
            className="text-white bg-neutral-800 px-2 py-1 rounded-3xl hover:bg-red-600 transition-all duration-300"
          >
            {genre.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default MovieGenre;
