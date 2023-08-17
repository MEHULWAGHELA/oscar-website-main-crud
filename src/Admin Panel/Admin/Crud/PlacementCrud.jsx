import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Col, Container, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap'
import Sidebar from '../Sidebar'
import Hoc from '../Hoc'
import { Authorization } from '../../AuthorizationComponent'
const Placement = () => {
  let token = Authorization();
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
      .post("https://student-api.mycodelibraries.com/api/user/add", formdata,token)
      .then((res) => {
        console.log(res);
        getData();
      })
      .catch((err) => console.log(err));
  };
  const getData = () => {
    axios
      .get("https://student-api.mycodelibraries.com/api/user/get",token)
      .then((res) => {
        arr = res.data.data;
        setarr([...arr]);
      })
      .catch((err) => console.log(err));
  };
  const deleteapi = (a) => {
    a = `https://student-api.mycodelibraries.com/api/user/delete?id=${a}`;
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
    setData();
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
                    <Label for="firstName" className="fw-600">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder=""
                      type="text"
                      className="main"
                      onChange={changeData}
                      value={obj.firstName || ""}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="lastName" className="fw-600 ">
                      last Name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder=""
                      type="text"
                      className="main"
                      onChange={changeData}
                      value={obj.lastName || ""}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="age" className="fw-600 ">
                      Age
                    </Label>
                    <Input
                      id="age"
                      name="age"
                      placeholder=""
                      type="number"
                      className="main"
                      onChange={changeData}
                      value={obj.age || ""}
                    />
                  </FormGroup>
                </Col>
                <Col md={12} className="">
                  <Row className="py-2">
                    <Col xs={12}>
                      <Label check for="Exersice" className="py-2">
                        Profile
                      </Label>
                      <input
                        id="userImage"
                        name="userImage"
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
              <th>FirstName</th>
              <th>LastName</th>
              <th>Age</th>
              <th>City</th>
              <th>Gender</th>
              <th>Hobbies</th>
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
                  <td>{x.firstName}</td>
                  <td>{x.lastName}</td>
                  <td>{x.age}</td>
                  <td>{x.city}</td>
                  <td>{x.gender}</td>
                  <td>{x.hobbies}</td>
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
}

export default Hoc(Placement)