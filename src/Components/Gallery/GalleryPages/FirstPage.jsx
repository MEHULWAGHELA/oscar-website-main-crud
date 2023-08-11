import React, { useCallback, useState } from 'react'
import ImageViewer from "react-simple-image-viewer";

function FirstPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  let images = [
    require('./../../../Assets/Images/gallery/republiceday/img1.jpg'),
    require('./../../../Assets/Images/gallery/republiceday/img2.jpg'),
    require('./../../../Assets/Images/gallery/republiceday/img3.jpg'),
    require('./../../../Assets/Images/gallery/republiceday/img4.jpg'),
    require('./../../../Assets/Images/gallery/republiceday/img5.jpg'),
    require('./../../../Assets/Images/gallery/republiceday/img6.jpg'),
    require('./../../../Assets/Images/gallery/republiceday/img7.jpg'),
    require('./../../../Assets/Images/gallery/republiceday/img8.jpg'),
    require('./../../../Assets/Images/gallery/republiceday/img9.jpg'),
    require('./../../../Assets/Images/gallery/republiceday/img10.jpg'),
    require('./../../../Assets/Images/gallery/republiceday/img11.jpg'),
    require('./../../../Assets/Images/gallery/republiceday/img12.jpg'),
    require('./../../../Assets/Images/gallery/republiceday/img13.jpg'),
    require('./../../../Assets/Images/gallery/republiceday/img14.jpg'),
    require('./../../../Assets/Images/gallery/republiceday/img15.jpg'),
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
        <h2>Republic Day 2022 Celebrations</h2>
        <div className='row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4 py-4'>
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

export default FirstPage