import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaStarOfDavid } from 'react-icons/fa';
import bg10 from "../../Front/assest/imgs/bg10.jpg";
import shape from "../../Front/assest/imgs/shape.svg";
import downlod from "../../Front/assest/imgs/download.png";
import gallery1 from "../../Front/assest/imgs/gallery-3.jpeg";
import gallery2 from "../../Front/assest/imgs/gallery4.jpeg";
import gallery3 from "../../Front/assest/imgs/gallery5.jpeg";
import gallery4 from "../../Front/assest/imgs/gallery6.jpeg";
import gallery5 from "../../Front/assest/imgs/gallery7.jpeg";
import gallery6 from "../../Front/assest/imgs/gallery8.jpeg";
import gallery7 from "../../Front/assest/imgs/gallery9.jpeg";
import gallery8 from "../../Front/assest/imgs/gallery10.jpeg";
import gallery9 from "../../Front/assest/imgs/gallery11.jpeg";
import gallery10 from "../../Front/assest/imgs/gallery12.jpeg";
import gallery11 from "../../Front/assest/imgs/gallery13.jpeg";
import gallery12 from "../../Front/assest/imgs/gallery14.jpeg";
import gallery13 from "../../Front/assest/imgs/gallery15.jpeg";
import gallery14 from "../../Front/assest/imgs/gallery16.jpeg";
import gallery15 from "../../Front/assest/imgs/gallery17.jpeg";
import gallery16 from "../../Front/assest/imgs/gallery18.jpeg";

const Photogallery = () => {
  const images = [
    gallery1, gallery2, gallery3, gallery4,
    gallery5, gallery6, gallery7, gallery8,
    gallery9, gallery10, gallery11, gallery12,
    gallery13, gallery14, gallery15, gallery16,
    gallery1, gallery2, gallery3, gallery4,
    gallery5, gallery6, gallery7, gallery8,
    gallery9, gallery10, gallery11, gallery12,
    gallery13, gallery14, gallery15, gallery16
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 10;
  const totalPages = Math.ceil(images.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = images.slice(startIndex, startIndex + imagesPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div
        className="section-8 pt-20 pb-30 text-center text-white relative overflow-hidden"
        style={{ backgroundImage: `url(${bg10})`, backgroundSize: '100%' }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <motion.div
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-semibold">Photo Gallery</h2>
          <p className="flex text-sm md:text-base mt-3 justify-center items-center cursor-pointer">
            Home <FaStarOfDavid className="mx-2" /> Photo Gallery
          </p>
        </motion.div>
      </div>

      <div
        className="w-full h-[100px] rotate-180 mt-[-90px]"
        style={{ backgroundImage: `url(${shape})` }}
      ></div>

      <div className="section-9 overflow-hidden pb-20 px-5 md:px-10 text-center">
        <motion.div
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center pb-10"
        >
          <img src={downlod} alt="download" className="m-auto my-5 w-14 md:w-20" />
          <p className="max-w-2xl mx-auto text-gray-700">
            Explore our gallery of divine moments captured through the lens of devotion and spirituality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center">
          {currentImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full flex justify-center"
            >
              <img
                src={img}
                alt={`gallery-${index}`}
                className="rounded-xl duration-500 hover:scale-105 shadow-lg w-[250px] h-[180px] md:w-[220px] md:h-40 object-cover"
              />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-10 gap-5 flex-wrap">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg font-semibold ${currentPage === 1 ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"} text-white`}
          >
            Previous
          </button>
          <span className="text-lg font-semibold text-gray-800">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg font-semibold ${currentPage === totalPages ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"} text-white`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Photogallery;
