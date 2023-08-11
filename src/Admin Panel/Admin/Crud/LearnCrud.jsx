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
const LearnCrud = () => {
  let [arr, setarr] = useState([]);
  let [obj, setobj] = useState({ hobbies: "" });
  let reference = useRef();

  const setData = () => {
    let formdata = new FormData();
    formdata.append("userImage", obj.userImage);
    formdata.append("firstName", obj.firstName);
    formdata.append("lastName", obj.lastName);
    formdata.append("age", obj.age);
    formdata.append("city", obj.city);
    formdata.append("gender", obj.gender);
    formdata.append("hobbies", obj.hobbies);
    for (let x of formdata.entries()) {
      console.log(x);
    }
    axios
      .post("http://localhost:1000/api/learn/adddata", formdata)
      .then((res) => {
        console.log(res);
        getData();
      })
      .catch((err) => console.log(err));
  };
  const getData = () => {
    axios
      .get("http://localhost:1000/api/learn/getdata")
      .then((res) => {
        arr = res.data.data;
        setarr([...arr]);
      })
      .catch((err) => console.log(err));
  };
  const deleteapi = (a) => {
    a = `http://localhost:1000/api/learn/deletedata?id=${a}`;
    axios
      .delete(a)
      .then((res) => {
        getData();
      })
      .catch((err) => console.log(err));
  };

  const editFunction = (id) => {
    axios
      .get("http://localhost:1000/api/learn/getdata?id=" + id)
      .then((res) => {
        obj = res.data.data;
        obj.hobbies = obj.hobbies.split(",");
        setobj({ ...obj });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateapi = () => {
    obj.id = obj._id;
    axios
      .post("http://localhost:1000/api/learn/adddata", obj)
      .then((res) => getData())
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const changeData = (e) => {
    if (e.target.name === "hobbies") {
      if (e.target.checked) {
        obj.hobbies = [...obj.hobbies, e.target.value];
      } else {
        obj.hobbies = obj.hobbies.filter((x) => !x.includes(e.target.value));
      }
    } else if (e.target.name === "userImage") {
      obj[e.target.name] = e.target.files[0];
    } else {
      obj[e.target.name] = e.target.value;
    }
    setobj({ ...obj });
  };

  const submitFunction = (e) => {
    e.preventDefault();
    if (obj._id === undefined) {
      setData();
    } else {
      updateapi();
    }
    obj = { hobbies: "" };
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
                    <Label for="h5" className="fw-600 ">
                      H5
                    </Label>
                    <Input
                      id="h5"
                      name="h5"
                      placeholder=""
                      type="string"
                      className="main"
                      onChange={changeData}
                      value={obj.h5 || ""}
                    />
                  </FormGroup>
                </Col>
                <Col md={12} className="">
                  <Row className="py-2">
                    <Col xs={12}>
                      <Label check for="icon" className="py-2">
                        Icon
                      </Label>
                      <input
                        id="icon"
                        name="icon"
                        type="file"
                        className="language me-2 form-control"
                        onChange={changeData}
                        ref={reference}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="bg" className="fw-600">
                      BG
                    </Label>
                    <Input
                      id="bg"
                      name="bg"
                      placeholder=""
                      type="color"
                      className="main"
                      onChange={changeData}
                      value={obj.bg || ""}
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
              <th>Icon</th>
              <th>H5</th>
              <th>BG</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {arr?.map((x, i) => {
              return (
                <tr key={i + 1}>
                  <td>{i + 1}</td>
                  <td>
                    <img src={x.icon} alt="" width={40} height={40} />
                  </td>
                  <td>{x.h5}</td>
                  <td>{x.bg}</td>
                  <td>
                    <button
                      onClick={() => deleteapi(x._id)}
                      className="me-2 btn text-bg-danger"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => editFunction(x._id)}
                      className="btn text-bg-warning"
                    >
                      Edit
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

export default Hoc(LearnCrud);
