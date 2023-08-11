import React, {useState } from "react";
import { Accordion } from "react-bootstrap";
import { AiOutlineFile } from "react-icons/ai";
import "./CorsesPages.css";
import AboutSec1 from "../../About US/AboutSec1/AboutSec1";

function AngularCourse(props) {
  const [data, setdata] = useState([props.obj.accordian[0]])
  const [isShow, setisShow] = useState(0);
  const setArrayData = () => {
    setdata(props.obj.accordian.slice(0, data.length+1))
  }
  return (
    <>
      <AboutSec1 title={props.obj.maintitle} />
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-8 col-lg-9 col-12 order-1 order-md-0">
            <div>
              <div className="row g-0">
                <button
                  className="col btn border border-1 rounded-0 py-3 CoursesPageFocus"
                  onClick={() => setisShow(0)}
                >
                  Overview
                </button>
                <button
                  className="col btn border border-1 rounded-0 py-3 CoursesPageFocus"
                  onClick={() => setisShow(1)}
                >
                  Curriculum
                </button>
              </div>
              {isShow == 0 ? (
                <>
                  <div className="overviewDiv">
                    <p className="pt-4"><strong>{props.obj.strong}</strong>{props.obj.p1}</p>
                    <h5 className="fw-semibold text-dark">{props.obj.heading}</h5>
                    <p>{props.obj.p2}</p>
                    <p>{props.obj.p3}</p>
                    <p>{props.obj.p4}</p>
                    <p>{props.obj.p5}</p> <br />
                    <br />
                    <p>{props.obj.p6}</p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <Accordion defaultActiveKey="0" flush alwaysOpen>
                      {data?.map((x) => {
                        return (
                          <Accordion.Item eventKey={x.eventkey}>
                            <Accordion.Header>{x.title}</Accordion.Header>
                            <Accordion.Body>
                              {x.items?.map((e) => {
                                return (
                                  <p className="pt-2 row d-flex align-items-center">
                                    <AiOutlineFile
                                      className="fs-5 col-2 col-md-1"
                                      style={{color: "#008DD2" }}
                                    />
                                    <span className="col-10 col-md-11">{e}</span>
                                  </p>
                                );
                              })}
                            </Accordion.Body>
                          </Accordion.Item>
                        );
                      })}
                    </Accordion>
                    {
                      props.obj.accordian.length == data.length ? 
                      <></> : 
                      <>
                        <div>
                      <button className="w-100 btn btn-dark rounded-0" onClick={() => setArrayData()}>Show more Selection</button>
                    </div>
                      </>
                    }
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="col-md-4 col-lg-3 col-12 order-0 order-md-1">
            <div className="CoursesImagesDiv">
              <img
                src={props.obj.img}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AngularCourse;
