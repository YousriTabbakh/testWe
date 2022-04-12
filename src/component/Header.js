import { Navbar, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
export default function Header(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Books GOT</Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
