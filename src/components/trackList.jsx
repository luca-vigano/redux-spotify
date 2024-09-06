import { Col, Button, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Image from "react-bootstrap/Image";
import { useDispatch } from "react-redux";

function TrackList() {
  const ArrayOfSong = useSelector((store) => {
    return store.searchBarInput.searchBarInput;
  });

  const dispatch = useDispatch();

  return (
    <>
      {ArrayOfSong
        ? ArrayOfSong.map((arr) => {
            return (
              <>
                <Col>
                  <Image src={arr.album.cover}></Image>
                </Col>
                <Col>
                  <Row>
                    <Col>{arr.artist.name}</Col>
                    <Col>{arr.album.title}</Col>
                    <Col>{arr.title}</Col>
                    <Button
                      onClick={() => {
                        dispatch();
                      }}
                    >
                      ADD TO FAVORITES
                    </Button>
                  </Row>
                </Col>
              </>
            );
          })
        : ""}
    </>
  );
}

export default TrackList;
