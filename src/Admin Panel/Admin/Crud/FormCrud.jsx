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
import Hoc from "../Hoc";
import { Authorization } from "../../AuthorizationComponent";
const FormCrud = () => {
  let token = Authorization();
  let [arr, setarr] = useState([]);
  let [obj, setobj] = useState({});
  let reference = useRef();

  const setData = () => {
    let formdata = new FormData();
    formdata.append("name", obj.name);
    formdata.append("email", obj.email);
    formdata.append("number", obj.number);
    formdata.append("subject", obj.subject);
    formdata.append("textarea", obj.textarea);
    for (let x of formdata.entries()) {
      console.log(x);
    }
    axios
      .post("http://localhost:1000/api/form/adddata", formdata,token)
      .then((res) => {
        console.log(res);
        getData();
      })
      .catch((err) => console.log(err));
  };
  const getData = () => {
    axios
      .get("http://localhost:1000/api/form/getdata",token)
      .then((res) => {
        arr = res.data.data;
        setarr([...arr]);
      })
      .catch((err) => console.log(err));
  };
  const deleteapi = (a) => {
    a = `http://localhost:1000/api/form/deletedata?id=${a}`;
    axios
      .delete(a,token)
      .then((res) => {
        getData();
      })
      .catch((err) => console.log(err));
  };


  useEffect(() => {
    getData();
  }, []);

  const changeData = (e) => {
    obj[e.target.name] = e.target.value;
    setobj({ ...obj });
  };

  const submitFunction = (e) => {
    e.preventDefault();
    setData();

    obj = {};
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
                    <Label for="name" className="fw-600">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder=""
                      type="text"
                      className="main"
                      onChange={changeData}
                      value={obj.name || ""}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="email" className="fw-600">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      placeholder=""
                      type="email"
                      className="main"
                      onChange={changeData}
                      value={obj.email || ""}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="number" className="fw-600">
                      Number
                    </Label>
                    <Input
                      id="number"
                      name="number"
                      placeholder=""
                      type="number"
                      className="main"
                      onChange={changeData}
                      value={obj.number || ""}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="subject" className="fw-600">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder=""
                      type="text"
                      className="main"
                      onChange={changeData}
                      value={obj.subject || ""}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="textarea" className="fw-600"></Label>
                    <textarea
                      id="textarea"
                      name="textarea"
                      placeholder=""
                      className="main"
                      onChange={changeData}
                      value={obj.textarea || ""}
                    />
                  </FormGroup>
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
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Subject</th>
              <th>TextArea</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {arr?.map((x, i) => {
              return (
                <tr key={i + 1}>
                  <td>{i + 1}</td>
                  <td>{x.name}</td>
                  <td>{x.email}</td>
                  <td>{x.number}</td>
                  <td>{x.subject}</td>
                  <td>{x.textarea}</td>
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

export default Hoc(FormCrud)
