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
const AboutCrud = () => {
  let token = Authorization()
  console.log(token);
  let [arr, setarr] = useState([]);
  let [obj, setobj] = useState({});
  let reference = useRef();

  const setData = () => {
    let formdata = new FormData();
    formdata.append("icon", obj.icon);
    formdata.append("h3", obj.h3);

    for (let x of formdata.entries()) {
      console.log(x);
    }
    axios
      .post("http://localhost:1000/api/about/adddata", formdata, Authorization())
      .then((res) => {
        console.log(res);
        getData();
      })
      .catch((err) => console.log(err));
  };
  const getData = () => {
    axios
      .get("http://localhost:1000/api/about/getdata", Authorization())
      .then((res) => {
        arr = res.data.data;
        setarr([...arr]);
      })
      .catch((err) => console.log(err));
  };
  const deleteapi = (id) => {
    axios
      .delete(`http://localhost:1000/api/about/deletedata?_id=${id}`, Authorization())
      .then((res) => {
        getData();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const changeData = async (e) => {
    if (e.target.name === "icon") {
      obj[e.target.name] = await toBase64(e.target.files[0]);
    } else {
      obj[e.target.name] = e.target.value;
    }
    setobj({ ...obj });
    console.log(obj)
  };

  const submitFunction = (e) => {
    e.preventDefault();
    setData();
    obj = {};
    setobj({ ...obj });
    reference.current.value = "";
  };
  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = () => reject
  })
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
                    <Label for="icon" className="fw-600">
                      icon
                    </Label>
                    <Input
                      id="icon"
                      name="icon"
                      placeholder=""
                      type="file"
                      className="main"
                      onChange={changeData}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="h3" className="fw-600 ">
                      h3
                    </Label>
                    <Input
                      id="h3"
                      name="h3"
                      placeholder=""
                      type="text"
                      className="main"
                      onChange={changeData}
                      value={obj.h3 || ""}
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
              <th>H3</th>
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
                  <td>{x.h3}</td>
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

export default Hoc(AboutCrud);
