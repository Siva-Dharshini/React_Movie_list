export const AddMovie=()=>{
    return(
        <div className="flex flex-col gap-3 items-center w-full my-4 ">
        <h1 className="text-gray-500 font-semibold text-4xl ">Create Movie </h1>
            <input className="p-2 border border-gray-500 rounded w-3/4" placeholder="Movie title"/>
            <input className="p-2 border border-gray-500 rounded w-3/4" placeholder="Image Url"/>
            <textarea rows={3} className="p-2 border border-gray-500 rounded w-3/4" placeholder="Description"/>
            <input className="p-2 border border-gray-500 rounded w-3/4" placeholder="IMDB Link"/>
            <button className="text-sm p-2 bg-blue-600 hover:bg-blue-800 text-white rounded ">Create Movie</button>

        </div>
    )
}