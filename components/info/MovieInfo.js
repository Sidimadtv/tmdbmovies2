import React from "react";
import ImageCard from "../display/ImageCard";
import MovieDetails from "./MovieDetails";

const MovieInfo = (props) => {
  let {MovieDetail,genreArr,id}=props
  return (
    <div>
      <div className="flex flex-row flex-wrap place-content-center items-center mb-10 mt-5">
        <ImageCard MovieDetail={MovieDetail} />
        <MovieDetails MovieDetail={MovieDetail} genreArr={genreArr} />
      </div>
      <div className="pt-2 pb-8 flex justify-center">
        <iframe
          className="w-4/5 aspect-video"
          src={"https://autoembed.to/movie/tmdb/" + id}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
};

export default MovieInfo;
