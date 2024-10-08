import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";
import { useSelector } from "react-redux";
import { Col } from "react-bootstrap";

const MusicPlayer = () => {
  const canzoni = useSelector((store) => {
    return store.mediaPlayerReducer.mediaPlayerReducer;
  });

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <Col xs={3} md={4}>
              {canzoni && (
                <img style={{ height: "4em" }} src={canzoni.album.cover} />
              )}
            </Col>

            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prev} alt="prev" />
                </a>
                <a href="#">
                  <img src={play} alt="play" />
                </a>
                <a href="#">
                  <img src={next} alt="next" />
                </a>
                <a href="#">
                  <img src={repeat} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </div>
            <Col xs={3} md={4}>
              {canzoni && (
                <>
                  <p>{canzoni.title}</p>
                  <p>{canzoni.artist.name}</p>
                </>
              )}
            </Col>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
