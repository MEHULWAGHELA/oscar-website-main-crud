import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function DynamiceGallery(props) {
  return (
    <>
      <div className="container py-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {
                  props.obj.map((x,i) => {
                      return <div className="col" key={i}>
                      <div className="card border border-1 rounded-0 GalleryHover">
                        <Link className="CoursesImg" to={x.to}>
                          <img src={x.img} alt="" className="img-fluid" />
                          <div className="gallaryimghover d-flex justify-content-center align-items-center">
                              <FaLongArrowAltRight className="fs-5 text-white"/>
                          </div>
                        </Link>
                        <div className="card-footer text-center py-4 bg-white">
                          <Link className="CourseFootera" to={x.to}>{x.a}</Link>
                        </div>
                      </div>
                    </div>
                  })
              }
          </div>
      </div>
    </>
  );
}

export default DynamiceGallery;
