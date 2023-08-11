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
const AdminFormCrud = () => {
  let [arr, setarr] = useState([]);
  let [obj, setobj] = useState({ hobbies: "" });
  let reference = useRef();

  const setData = () => {
    let formdata = new FormData();
    formdata.append("name", obj.name);
    formdata.append("email", obj.email);
    formdata.append("role", obj.role);
    formdata.append("password", obj.password);
    for (let x of formdata.entries()) {
      console.log(x);
    }
    axios
      .post("https://student-api.mycodelibraries.com/api/user/add", formdata)
      .then((res) => {
        console.log(res);
        getData();
      })
      .catch((err) => console.log(err));
  };
  const getData = () => {
    axios
      .get("https://student-api.mycodelibraries.com/api/user/get")
      .then((res) => {
        arr = res.data.data;
        setarr([...arr]);
      })
      .catch((err) => console.log(err));
  };
  const deleteapi = (a) => {
    a = `https://student-api.mycodelibraries.com/api/user/delete?id=${a}`;
    axios
      .delete(a)
      .then((res) => {
        getData();
      })
      .catch((err) => console.log(err));
  };

  const editFunction = (id) => {
    axios
      .get(
        "https://student-api.mycodelibraries.com/api/user/get-user-by-id?id=" +
          id
      )
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
      .post("https://student-api.mycodelibraries.com/api/user/update", obj)
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
                    <Label for="name" className="fw-600">
                      name
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
                    <Label for='email' className="fw-600">
                      Email
                    </Label>
                    <Input
                      id='email'
                      name='email'
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
                    <Label for='role' className="fw-600">
                      Role
                    </Label>
                    <Input
                      id='role'
                      name='role'
                      placeholder=""
                      type="text"
                      className="main"
                      onChange={changeData}
                      value={obj.role || ""}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for='password' className="fw-600">
                      Password
                    </Label>
                    <Input
                      id='password'
                      name='password'
                      placeholder=""
                      type="password"
                      className="main"
                      onChange={changeData}
                      value={obj.password || ""}
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
              <th>email</th>
              <th>Role</th>
              <th>Password</th>
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
                  <td>{x.role}</td>
                  <td>{x.password}</td>
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

export default Hoc(AdminFormCrud);
