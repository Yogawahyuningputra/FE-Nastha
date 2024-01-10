import { Container, Navbar, Nav } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const Navbars = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar className="bg-body-secondary">
        <Container className="d-flex justify-content-between align-items-center fw-bold">
          <Navbar.Brand
            onClick={() => navigate("/home")}
            style={{ cursor: "pointer" }}
          >
            <Navbar.Text className="fw-bold mx-2">LOGO</Navbar.Text>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end fw-bold">
            <Nav>
              <Nav.Link onClick={() => navigate("/home")}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate("/mahasiswa")}>
                Mahasiswa
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
