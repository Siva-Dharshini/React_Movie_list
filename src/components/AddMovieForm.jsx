import { useState } from "react";

export const AddMovie = (props) => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [imdbLink, setImdbLink] = useState("");

  const clearAllFields = () => {
    setTitle("");
    setDescription("");
    setImageUrl("");
    setImdbLink("");
  };

  const validData = () => {
    if (!title) return false;
    // TODO: check if imdb link is a valid url
    // TODO: check if image url is valid url

    return true;
  };

  return (
    <div className="flex flex-col gap-3 items-center w-full my-4 ">
      <h1 className="text-gray-500 font-semibold text-4xl ">Create Movie</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border border-gray-500 rounded w-3/4"
        placeholder="Movie title"
      />

      <input
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        className="p-2 border border-gray-500 rounded w-3/4"
        placeholder="Image Url"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={3}
        className="p-2 border border-gray-500 rounded w-3/4"
        placeholder="Description"
      />

      <input
        value={imdbLink}
        onChange={(e) => setImdbLink(e.target.value)}
        className="p-2 border border-gray-500 rounded w-3/4"
        placeholder="IMDB Link"
      />

      <button
        onClick={() => {
          if (!validData()) {
            alert("Enter valid Data");
            return;
          }

          props.setMovies((prev) => [
            { title, imageUrl, description, imdbLink },
            ...prev,
          ]);
          clearAllFields();
        }}
        className="text-sm p-2 bg-blue-600 hover:bg-blue-800 text-white rounded "
      >
        Create Movie
      </button>
    </div>
  );
};
