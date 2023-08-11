import React, { useCallback, useState } from 'react'
import ImageViewer from "react-simple-image-viewer";

function SecondPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  let images = [
    require('./../../../Assets/Images/gallery/vishwabharti college/img1.jpeg'),
    require('./../../../Assets/Images/gallery/vishwabharti college/img2.jpeg'),
    require('./../../../Assets/Images/gallery/vishwabharti college/img3.jpeg'),
    require('./../../../Assets/Images/gallery/vishwabharti college/img4.jpeg'),
    require('./../../../Assets/Images/gallery/vishwabharti college/img5.jpeg'),
    require('./../../../Assets/Images/gallery/vishwabharti college/img6.jpeg'),
    require('./../../../Assets/Images/gallery/vishwabharti college/img7.jpeg'),
    require('./../../../Assets/Images/gallery/vishwabharti college/img8.jpeg'),
    require('./../../../Assets/Images/gallery/vishwabharti college/img9.jpeg'),
    require('./../../../Assets/Images/gallery/vishwabharti college/img10.jpeg'),
    require('./../../../Assets/Images/gallery/vishwabharti college/img11.jpeg'),
    require('./../../../Assets/Images/gallery/vishwabharti college/img12.jpeg'),
    require('./../../../Assets/Images/gallery/vishwabharti college/img13.jpeg'),
    require('./../../../Assets/Images/gallery/vishwabharti college/img14.jpeg'),
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
        <h2>Seminar at Vishwabharti College, Surat</h2>
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

export default SecondPage