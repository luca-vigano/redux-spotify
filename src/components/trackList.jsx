import { Col, Button, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Image from "react-bootstrap/Image";

function TrackList() {
  const ArrayOfSong = useSelector((store) => {
    return store.searchBarInput.searchBarInput;
  });

  return ArrayOfSong.data.map((arr) => {
    return (
      <>
        <Col>
          <Image src="https://placedog.net/200"></Image>
        </Col>
        <Col>
          <Row>
            <Col>artista</Col>
            <Col>album</Col>
            <Col>canzone</Col>
            <Button>ADD TO FAVORITES</Button>
          </Row>
        </Col>
      </>
    );
  });
}

export default TrackList;
