import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import TrackList from "./trackList";
import { useSelector } from "react-redux";

const SearchContent = () => {
  const ArrayOfSong = useSelector((store) => {
    return store.searchBarInput.searchBarInput;
  });
  console.log("array", ArrayOfSong);

  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2></h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            >
              <TrackList />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchContent;
