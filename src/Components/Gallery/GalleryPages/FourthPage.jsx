import React, { useCallback, useState } from 'react'
import ImageViewer from "react-simple-image-viewer";

function FourthPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  let images = [
    require('./../../../Assets/Images/gallery/Office Interior/img1.jpg'),
    require('./../../../Assets/Images/gallery/Office Interior/img2.jpg'),
    require('./../../../Assets/Images/gallery/Office Interior/img3.jpg'),
    require('./../../../Assets/Images/gallery/Office Interior/img4.jpg'),
    require('./../../../Assets/Images/gallery/Office Interior/img5.jpg'),
    require('./../../../Assets/Images/gallery/Office Interior/img6.jpg'),
    require('./../../../Assets/Images/gallery/Office Interior/img7.jpg'),
    require('./../../../Assets/Images/gallery/Office Interior/img8.jpg'),
    require('./../../../Assets/Images/gallery/Office Interior/img9.jpg'),
    require('./../../../Assets/Images/gallery/Office Interior/img10.jpg'),
    require('./../../../Assets/Images/gallery/Office Interior/img11.jpg'),
    require('./../../../Assets/Images/gallery/Office Interior/img12.jpg'),
    require('./../../../Assets/Images/gallery/Office Interior/img13.jpg')
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
        <h2>Office Interior</h2>
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

export default FourthPage