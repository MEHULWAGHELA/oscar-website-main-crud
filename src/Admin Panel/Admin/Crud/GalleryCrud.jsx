import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";
import Sidebar from "../Sidebar";
import Hoc from "../Hoc";
import { Authorization } from "../../AuthorizationComponent";
const GalleryCrud = () => {
  let [arr, setarr] = useState([]);
  let [obj, setobj] = useState({});
  let reference = useRef();

  const setData = () => {
    let formdata = new FormData();
    formdata.append("image", obj.image);
    formdata.append("title", obj.title);
    axios
      .post("http://localhost:1000/api/gallery/adddata", formdata,Authorization())
      .then((res) => {
        console.log(res);
        getData();
      })
      .catch((err) => console.log(err));
  };
  const getData = () => {
    axios
      .get("http://localhost:1000/api/gallery/getdata",Authorization())
      .then((res) => {
        arr = res.data.data;
        setarr([...arr]);
      })
      .catch((err) => console.log(err));
  };
  const deleteapi = (a) => {
    a = `http://localhost:1000/api/gallery/deletedata?id=${a}`;
    axios
      .delete(a,Authorization())
      .then((res) => {
        getData();
      })
      .catch((err) => console.log(err));
  };


  useEffect(() => {
    getData();
  }, []);

  const changeData = (e) => {
    if (e.target.name === "image") {
      obj[e.target.name] = e.target.files[0];
    } else {
      obj[e.target.name] = e.target.value;
    }
    setobj({ ...obj });
  };

  const submitFunction = (e) => {
    e.preventDefault();
    setData();
    obj = {  };
    setobj({ ...obj });
    reference.current.value = "";
  };
  return (
    <div>
      <Row>
        <Col xs={6} className="offset-3">
          <Container className="mt-1 py-1 px-4 border border-1 border-black rounded-2 shadow-lg">
            <h1 className="text-center py-3">About Form</h1>
            <Form
              onSubmit={(e) => {
                submitFunction(e);
              }}
            >
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="title" className="fw-600 ">
                      title
                    </Label>
                    <Input
                      id="title"
                      name="title"
                      placeholder=""
                      type="text"
                      className="main"
                      onChange={changeData}
                      value={obj.title || ""}
                    />
                  </FormGroup>
                </Col>
                <Col md={12} className="">
                  <Row className="py-2">
                    <Col xs={12}>
                      <Label check for="images" className="py-2">
                        Images
                      </Label>
                      <input
                        id="images"
                        name="images"
                        type="file"
                        className="language me-2 form-control"
                        onChange={changeData}
                        ref={reference}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="text-center">
                <button className="my-2 btn btn-secondary submit fs-4">
                  Submit
                </button>
              </div>
            </Form>
          </Container>
        </Col>
      </Row>
      <div className="container bg-body-secondary mt-3">
        <h2 className="text-center py-3">Form</h2>
        <Table className="">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Profile</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {arr?.map((x, i) => {
              return (
                <tr key={i + 1}>
                  <td>{i + 1}</td>
                  <td>
                    <img src={x.image} alt="" width={40} height={40} />
                  </td>
                  <td>{x.title}</td>
                  <td>
                    <button
                      onClick={() => deleteapi(x._id)}
                      className="me-2 btn text-bg-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Hoc(GalleryCrud);
