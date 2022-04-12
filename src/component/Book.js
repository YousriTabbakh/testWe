import { Card, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Book(props) {
  const book = props.data;
  const charactersArray = [];
  for (let i = 0; i < 10; i++) {
    charactersArray.push(book.characters[i]);
  } 
  return (
    <Card>
      <Card.Body>
        <Card.Title>{book.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{book.authors[0]} - {book.publisher}</Card.Subtitle>
        <h6>Top 10 des personnages :</h6>
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="me-2" aria-label="First group">
            {charactersArray.map((character, i) => (
              <Link key={i} to={`/perso/${character.split("/").pop()}`} state={character.split("/").pop()}>
                <Button>{i + 1}</Button>
              </Link>
            ))}
          </ButtonGroup>
        </ButtonToolbar>
      </Card.Body>
      
    </Card>
  );
}
