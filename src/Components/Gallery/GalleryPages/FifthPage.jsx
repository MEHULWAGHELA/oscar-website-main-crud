import React, { useCallback, useState } from 'react'
import ImageViewer from "react-simple-image-viewer";

function FifthPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  let images = [
    require('./../../../Assets/Images/gallery/Vision Infotech/img1.jpeg'),
    require('./../../../Assets/Images/gallery/Vision Infotech/img2.jpg'),
    require('./../../../Assets/Images/gallery/Vision Infotech/img3.jpg'),
    require('./../../../Assets/Images/gallery/Vision Infotech/img4.jpg'),
    require('./../../../Assets/Images/gallery/Vision Infotech/img5.jpg'),
    require('./../../../Assets/Images/gallery/Vision Infotech/img6.jpeg'),
    require('./../../../Assets/Images/gallery/Vision Infotech/img7.jpeg'),
    require('./../../../Assets/Images/gallery/Vision Infotech/img8.jpeg'),
    require('./../../../Assets/Images/gallery/Vision Infotech/img9.jpeg'),
    require('./../../../Assets/Images/gallery/Vision Infotech/img10.jpeg'),
    require('./../../../Assets/Images/gallery/Vision Infotech/img11.jpeg'),
    require('./../../../Assets/Images/gallery/Vision Infotech/img12.jpeg'),
    require('./../../../Assets/Images/gallery/Vision Infotech/img13.jpeg')
  ]

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
      <div className='container py-5'>
        <h2>Industrial Visit to Vision Infotech</h2>
        <div className='row row-cols-lg-3 row-cols-md-2 row-cols-1 g-3 py-4'>
          {
            images.map((src, index) => {
              return <div className='col'>
                <div className=''>
                  <img className="img-fluid" style={{cursor : 'pointer'}} src={src} onClick={() => openImageViewer(index)} key={index} alt=""/>
                </div>
              </div>
            })
          }
        </div>
      </div>
      {
        isViewerOpen && (
          <ImageViewer src={images} currentIndex={currentImage} disableScroll={true} closeOnClickOutside={false} onClose={closeImageViewer}/>
        )
      }
    </>
  )
}

export default FifthPage