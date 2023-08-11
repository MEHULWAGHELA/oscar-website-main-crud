import React from 'react'
import DynamiceGallery from './DynamiceGallery';

function ShowGalleryPage() {
    const photos = [
        {
          img: require("./../../Assets/Images/gallery/img1.jpg"),
          a: "Republic Day 2022 Celebrations",
          to : 'firstpage'
        },
        {
          img: require("./../../Assets/Images/gallery/img2.jpeg"),
          a: "Seminar at Vishwabharti College, Surat",
          to : 'secondpage'
        },
        {
          img: require("./../../Assets/Images/gallery/img3.jpeg"),
          a: "Seminar at STBS College, Surat",
          to : 'thirdpage'
        },
        {
          img: require("./../../Assets/Images/gallery/img4.jpg"),
          a: "Office Interior",
          to : 'forthpage'
        },
        {
          img: require("./../../Assets/Images/gallery/img5.jpeg"),
          a: "Industrial Visit to Vision Infotech",
          to : 'fifthpage'
        },
      ];
  return (
    <>
        <DynamiceGallery obj={photos}/>
    </>
  )
}

export default ShowGalleryPage