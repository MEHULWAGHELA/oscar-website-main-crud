import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from "react-bootstrap/Pagination";
import "./Courses.css"

function DynamiceCoursesPage(props) {
  const [isActiveNumber, setisActiveNumber] = useState(0);

  const page = (number) => {
    setisActiveNumber(number);
  };
  return (
    <>
      <div className="container pt-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {props.ary[isActiveNumber].map((x, i) => {
            return <div className='col' key={i}>
              <div className='card rounded-0 border-0 CoursesHover'>
                <Link to={x.to} className='CoursesImg'>
                  <img src={x.img} alt="" className='img-fluid' />
                </Link>
                <div className='card-footer text-center py-4'>
                  <Link to={x.to} className='CourseFootera'>{x.a}</Link>
                </div>
              </div>
            </div>
          })}
        </div>
        <div className="mt-4 d-flex justify-content-center">
          <Pagination>
            {
              isActiveNumber == 0 ?
                <></> :
                <>
                  <Pagination.Prev onClick={() => setisActiveNumber(isActiveNumber - 1)} />
                </>
            }
            {props.ary.map((x, i) => {
              return (
                <Pagination.Item
                  key={i + 1}
                  active={i === isActiveNumber}
                  onClick={() => page(i)}
                >
                  {i + 1}
                </Pagination.Item>
              );
            })}
            {
              isActiveNumber == props.ary.length - 1 ?
                <></> :
                <>
                  <Pagination.Next onClick={() => setisActiveNumber(isActiveNumber + 1)} />
                </>
            }
          </Pagination>
        </div>
      </div>
    </>
  )
}

export default DynamiceCoursesPage