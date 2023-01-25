export const MovieCard = (props) => {
  return (
    <div className="p-2 rounded shadow w-[300px] text-center flex flex-col items-center justify-center gap-4">
      <img className="w-full rounded" alt="avatar" src={props.movie.imageUrl} />
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl font-bold text-gray-700">
          {props.movie.title}
        </h1>
        <p className="text-sm text-gray-500">{props.movie.description}</p>
        <a
          className="text-blue-400 hover:text-blue-600"
          href={props.movie.imdbLink}
        >
          Read More
        </a>
      </div>
    </div>
  );
};
