import React, { useState, useCallback } from "react";
// import Lightbox from "react-awesome-lightbox";
// import { render } from 'react-dom';
import ImageViewer from "react-simple-image-viewer";
import AboutSec1 from "../Components/About US/AboutSec1/AboutSec1";
import "./Placement.css"

function Placement() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    require("./../Assets/Images/Placement/img9.jpg"),
    require("./../Assets/Images/Placement/img4.jpg"),
    require("./../Assets/Images/Placement/img1.jpg"),
    require("./../Assets/Images/Placement/img5.jpg"),
    require("./../Assets/Images/Placement/img6.jpg"),
    require("./../Assets/Images/Placement/img2.jpg"),
    require("./../Assets/Images/Placement/img7.jpg"),
    require("./../Assets/Images/Placement/img3.jpg"),
    require("./../Assets/Images/Placement/img8.jpg"),
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <AboutSec1 title="PLACEMENT" />

      <div className="container py-5">
        <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4">
          {
            images.map((src, index) => (
              <div className="col">
                <div className="">
                  <img className="img-fluid" style={{cursor : 'pointer'}} src={src} onClick={() => openImageViewer(index)} key={index} alt=""/>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {
        isViewerOpen && (
          <ImageViewer src={images} currentIndex={currentImage} disableScroll={true} closeOnClickOutside={false} onClose={closeImageViewer}/>
        )
      }
    </>
  );
}

export default Placement;
