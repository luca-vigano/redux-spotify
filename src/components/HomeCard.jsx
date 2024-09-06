import { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const HomeCard = (param) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchHome();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchHome = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
        param.artist
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("la chiamata non è andata a buon fine");
        }
      })
      .then((Song) => {
        setSongs(Song.data);
        console.log(songs);
      })
      .catch();
  };

  return songs.slice(0, 4).map((song, i) => {
    return (
      <Col className="text-center" key={i}>
        <Image
          className="img-fluid"
          src={song.album.cover_medium}
          alt="track"
        ></Image>
        <p>
          Track: {song.title}
          Artist: {song.artist.name}
        </p>
      </Col>
    );
  });
};

export default HomeCard;
