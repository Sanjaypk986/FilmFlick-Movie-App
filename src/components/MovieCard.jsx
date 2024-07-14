import React from 'react'

const MovieCard = () => {
  return (
    <article className="p-1 rounded-lg shadow-lg bg-white flex flex-col items-center">
      <img
        className="rounded-md w-full max-h-80"
        src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA2MjEuOEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00352941-qdafpgypxr-portrait.jpg"
        alt="Movie image"
      />
      <h3 className="text-sm sm:text-base md:text-lg font-semibold whitespace-nowrap mt-3 text-gray-700">
        Kalki (2024)
      </h3>
      <p className="text-xs sm:text-sm md:text-base my-1 text-gray-600">Action/Drama</p>
    </article>
  )
}

export default MovieCard
