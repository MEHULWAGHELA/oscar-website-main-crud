import "./Gallery.css";
import AboutSec1 from "../Components/About US/AboutSec1/AboutSec1";
import { Outlet } from "react-router-dom";

function Gallery() {
  return (
    <>
      <AboutSec1 title="GALLERY" />
      {/* <div className="container py-5">
        <div className="row row-cols-3 g-4">
          {photos.map((x, i) => {
            return <DynamiceGallery obj={x} key={i} />;
          })}
        </div>
      </div> */}
      <Outlet />
    </>
  );
}

export default Gallery;
