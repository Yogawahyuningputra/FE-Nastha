import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Table, Button, Form, Col, Row } from "react-bootstrap";
import {
  addMahasiswa,
  updateMahasiswa,
  removeMahasiswa,
} from "../features/mahasiswa/mahasiswaSlice";

const Mahasiswa = () => {
  const mahasiswaList = useSelector((state) => state.mahasiswa.list);
  const dispatch = useDispatch();
  const [mahasiswaName, setMahasiswaName] = useState("");
  const [mahasiswaId, setMahasiswaId] = useState("");

  const handleAddMahasiswa = () => {
    if (mahasiswaName.trim() !== "") {
      const newMahasiswa = {
        id: mahasiswaId || mahasiswaList.length + 1,
        name: mahasiswaName,
      };

      if (mahasiswaId) {
        dispatch(updateMahasiswa(newMahasiswa));
        setMahasiswaId(null);
      } else {
        dispatch(addMahasiswa(newMahasiswa));
      }

      setMahasiswaName("");
    }
  };

  const handleEditMahasiswa = (mhs) => {
    setMahasiswaId(mhs.id);
    setMahasiswaName(mhs.name);
    // console.log(mhs);
  };

  const handleDeleteMahasiswa = (id) => {
    dispatch(removeMahasiswa(id));
  };

  return (
    <Container>
      <h1>Daftar Mahasiswa</h1>

      <Row>
        <Col sm={2}>
          <Button variant="primary" onClick={handleAddMahasiswa}>
            {mahasiswaId == 0 ? "Tambah Mahasiswa" : "Update Mahasiswa"}
          </Button>
        </Col>
        <Col sm={4}>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control
                type="text"
                placeholder="Nama Mahasiswa"
                value={mahasiswaName}
                onChange={(e) => setMahasiswaName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {mahasiswaList.map((mahasiswa) => (
            <tr key={mahasiswa.id}>
              <td>{mahasiswa.id}</td>
              <td>{mahasiswa.name}</td>
              <td>
                <Button
                  variant="warning"
                  className="m-2"
                  onClick={() => handleEditMahasiswa(mahasiswa)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteMahasiswa(mahasiswa.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Mahasiswa;
