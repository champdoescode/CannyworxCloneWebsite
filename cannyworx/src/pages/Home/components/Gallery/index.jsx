import React from "react";
const photo = [
  "./images/g1.jpg",
  "./images/g2.png",
  "./images/g3.jpg",
  "./images/g4.jpg",
  "./images/g5.jpg",
  "./images/g6.jpg",
  "./images/g7.jpg",
  "./images/g8.jpg",
  "./images/g9.jpg",
];
const Gallery = (props) => {
  return (
    <div className="p-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-3 xl:grid-cols-3 bg-[#111517]">
      {photo.map((photo) => (
        <div className="flex w-full rounded shadow-lg aspect-auto grid-items">
          <div className="w-full">
            <img src={photo} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
