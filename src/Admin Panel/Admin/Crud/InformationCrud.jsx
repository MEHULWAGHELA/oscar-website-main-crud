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
const InformationCrud = () => {
  let [arr, setarr] = useState([]);
  let [obj, setobj] = useState({});
  let reference = useRef();

  const setData = () => {
    let formdata = new FormData();
    formdata.append("icon", obj.icon);
    formdata.append("h2", obj.h2);
    formdata.append("p", obj.p);
    formdata.append("color", obj.color);

    for (let x of formdata.entries()) {
      console.log(x);
    }
    axios
      .post("http://localhost:1000/api/information/adddata", formdata,Authorization())
      .then((res) => {
        console.log(res);
        getData();
      })
      .catch((err) => console.log(err));
  };
  const getData = () => {
    axios
      .get("http://localhost:1000/api/information/getdata",Authorization())
      .then((res) => {
        arr = res.data.data;
        setarr([...arr]);
      })
      .catch((err) => console.log(err));
  };
  const deleteapi = (a) => {
    a = `http://localhost:1000/api/information/deletedata?id=${a}`;
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
    if (e.target.name === "icon") {
      obj[e.target.name] = e.target.files[0];
    } else {
      obj[e.target.name] = e.target.value;
    }
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
                    <Label for="color" className="fw-600">
                      Color
                    </Label>
                    <Input
                      id="color"
                      name="color"
                      placeholder=""
                      type="color"
                      className="main"
                      onChange={changeData}
                      value={obj.color || ""}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="p" className="fw-600 ">
                      P
                    </Label>
                    <Input
                      id="p"
                      name="p"
                      placeholder=""
                      type="text"
                      className="main"
                      onChange={changeData}
                      value={obj.p || ""}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="h2" className="fw-600 ">
                      H2
                    </Label>
                    <Input
                      id="h2"
                      name="h2"
                      placeholder=""
                      type="string"
                      className="main"
                      onChange={changeData}
                      value={obj.h2 || ""}
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
              <th>H2</th>
              <th>P</th>
              <th>Color</th>
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
                  <td>{x.h2}</td>
                  <td>{x.p}</td>
                  <td>{x.color}</td>

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

export default Hoc(InformationCrud);
