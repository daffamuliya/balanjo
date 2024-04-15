import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MDBBtn } from 'mdb-react-ui-kit';

const NormalNavbar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: 'white', color: 'black', fontWeight: 'bold', padding: '20px' }}>
      <Navbar.Brand href="/" className="ms-5">
        <img src="/img/logo.png" width="63" height="63" className="d-inline-block align-top" alt="React Bootstrap logo" />
      </Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll></Nav>
          <Form className="d-flex">
            <MDBBtn size="lg" className="me-2" style={{ backgroundColor: 'transparent', fontSize: '16px', maxWidth: '158px', maxHeight: '42px', textAlign: 'center', border: 'none', color: '#A08336' }}>
              Budi
            </MDBBtn>
          </Form>
          <img src="/img/budi.png" width="63" height="63" className="d-inline-block align-top" alt="React Bootstrap logo" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NormalNavbar;
