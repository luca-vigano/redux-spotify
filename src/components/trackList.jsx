import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";

function TrackList() {
  const ArrayOfSong = useSelector((store) => {
    return store.searchBarInput.searchBarInput;
  });

  return (
    <ListGroup>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
  );
}

export default TrackList;
