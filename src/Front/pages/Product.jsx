import React from 'react'
import { FaEye, FaFacebook, FaLinkedinIn, FaRegStar, FaShoppingCart, FaStar } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoLogoYoutube, IoSearch } from 'react-icons/io5'
import { BiHeart } from 'react-icons/bi'
import { IoIosShuffle } from 'react-icons/io'
import { FaStarOfDavid } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { addtocart } from '../../redux/feacture/cartSlice'

import ringImg from "../../Front/assest/imgs/prod1.jpg"
import ringImg2 from "../../Front/assest/imgs/prod2.jpg"
import ringImg3 from "../../Front/assest/imgs/prod3.jpg"
import ringImg4 from "../../Front/assest/imgs/prod4.jpg"
import ringImg5 from "../../Front/assest/imgs/prod5.jpg"
import ringImg6 from "../../Front/assest/imgs/prod6.jpg"
import ringImg7 from "../../Front/assest/imgs/prod7.jpg"
import ringImg8 from "../../Front/assest/imgs/prod8.jpg"
import ringImg9 from "../../Front/assest/imgs/prod9.jpg"
import ringImg10 from "../../Front/assest/imgs/prod10.jpg"
import ringImg11 from "../../Front/assest/imgs/prod11.jpg"
import ringImg12 from "../../Front/assest/imgs/prod12.jpg"
import ringImg13 from "../../Front/assest/imgs/prod13.jpg"
import downlod from "../../Front/assest/imgs/download.png"
import bg10 from "../../Front/assest/imgs/bg10.jpg"
import shape from "../../Front/assest/imgs/shape.svg"

const Product = () => {
  const products = [
    { id: 1, img: ringImg, title: "Gold Crown Treasure", price: 20.0, oldPrice: 80.0, tag: "New", rating: 4 },
    { id: 2, img: ringImg2, title: "Gold Crown Treasure", price: 20.0, oldPrice: 80.0, tag: "New", rating: 4 },
    { id: 3, img: ringImg3, title: "Gold Crown Treasure", price: 20.0, oldPrice: 80.0, tag: "New", rating: 4 },
    { id: 4, img: ringImg4, title: "Gold Crown Treasure", price: 20.0, oldPrice: 80.0, tag: "New", rating: 4 },
    { id: 5, img: ringImg5, title: "Gold Crown Treasure", price: 20.0, oldPrice: 80.0, tag: "New", rating: 4 },
    { id: 6, img: ringImg6, title: "Gold Crown Treasure", price: 20.0, oldPrice: 80.0, tag: "New", rating: 4 },
    { id: 7, img: ringImg7, title: "Gold Crown Treasure", price: 20.0, oldPrice: 80.0, tag: "New", rating: 4 },
    { id: 8, img: ringImg8, title: "Gold Crown Treasure", price: 20.0, oldPrice: 80.0, tag: "New", rating: 4 },
    { id: 9, img: ringImg9, title: "Gold Crown Treasure", price: 20.0, oldPrice: 80.0, tag: "New", rating: 4 },
    { id: 10, img: ringImg10, title: "Gold Crown Treasure", price: 20.0, oldPrice: 80.0, tag: "New", rating: 4 },
    { id: 11, img: ringImg11, title: "Gold Crown Treasure", price: 20.0, oldPrice: 80.0, tag: "New", rating: 4 },
    { id: 12, img: ringImg12, title: "Gold Crown Treasure", price: 20.0, oldPrice: 80.0, tag: "New", rating: 4 },
    { id: 13, img: ringImg13, title: "Gold Crown Treasure", price: 20.0, oldPrice: 80.0, tag: "New", rating: 4 },
  ];

  const dispatch = useDispatch();
  const handlecart = (product) => dispatch(addtocart(product));

  // Animation variants
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <>
      {/* Header Section */}
      <div className="section-8 pt-20 pb-30 text-center text-white relative overflow-hidden" style={{ backgroundImage: `url(${bg10})`, backgroundSize: '100%' }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10">
          <h2 className='text-2xl'>Product</h2>
          <p className="flex text-xs mt-3 justify-center items-center cursor-pointer">
            Home <FaStarOfDavid className="mx-2" /> Product
          </p>
        </div>
      </div>

      {/* Shape Section */}
      <div className='w-full h-[100px] rotate-180 mt-[-90px]' style={{ backgroundImage: `url(${shape})`, }}></div>

      {/* Intro Text */}
      <div className='text-center'>
        <img src={downlod} alt="" className='m-auto my-10' />
        <p className='md:mx-50'>
          Each of our astrology products is carefully curated to bring balance, positivity, and divine energy into your life. From authentic gemstones and healing crystals to personalized birth charts and yantras, every item is designed to align your inner energies with the cosmic
        </p>
      </div>

      {/* Main Section */}
      <div className='md:flex-row-reverse md:flex justify-between w-full'>
        {/* Products Section */}
        <div className="md:w-[70%] md:py-20 px-10">
          <div className="flex flex-wrap justify-between">
            {products.map((item, i) => (
              <motion.div
  key={item.id}
  className="group relative mt-10 bg-white shadow-md rounded-2xl overflow-hidden w-full sm:w-[48%] md:w-[30%] p-4 transition-all duration-500 hover:shadow-xl"
  variants={cardVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  custom={i}
  whileHover={{ scale: 1.05 }}
>
  <span className="absolute top-3 z-50 left-3 bg-orange-400 text-white text-xs font-semibold px-2 py-1 rounded">
    {item.tag}
  </span>

  <div className="flex justify-center items-center relative">
    <motion.img
      src={item.img}
      alt={item.title}
      className="w-[150px] h-[150px] object-contain"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    />

    {/* Fixed hover buttons */}
    <motion.div
      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center gap-3 transition-opacity duration-500"
    >
      <button
        onClick={() => handlecart(item)}
        className="bg-linear-to-r from-orange-400 to-orange-600 text-white text-sm font-medium px-4 py-2 rounded flex items-center gap-1 shadow-md hover:scale-105 transition-transform"
      >
        <FaShoppingCart /> Add To Cart
      </button>

      <div className="flex gap-3 text-white text-lg">
        <button className="hover:text-orange-300 transition"><FaEye /></button>
        <button className="hover:text-orange-300 transition"><BiHeart /></button>
        <button className="hover:text-orange-300 transition"><IoIosShuffle /></button>
      </div>
    </motion.div>
  </div>

  {/* Product Details */}
  <div className="text-center my-5">
    <div className="flex justify-center mb-1">
      {[...Array(5)].map((_, i) =>
        i < item.rating ? (
          <FaStar key={i} className="text-yellow-400" />
        ) : (
          <FaRegStar key={i} className="text-yellow-400" />
        )
      )}
    </div>
    <h3 className="font-semibold text-gray-800">{item.title}</h3>
    <div className="mt-1">
      <span className="text-lg font-bold text-black">₹{item.price.toFixed(2)}</span>
      <span className="text-gray-400 line-through ml-2">₹{item.oldPrice.toFixed(2)}</span>
    </div>
  </div>
</motion.div>

            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:w-[30%] py-5 md:py-20 px-10 md:ps-10">
          <div className="flex mb-6">
            <input type="text" placeholder="Product Search" className="w-full px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none" />
            <button className="bg-linear-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-r-full">
              <IoSearch />
            </button>
          </div>

          <h2 className="text-xl font-bold mb-3">Top Categories</h2>
          <ul className="border-t border-gray-200">
            {["Kundali Dosha", "Face Reading", "Daily Horoscope", "Personal Consultation", "Gem & Stone", "Manglik Dosha", "Vastu Shastra", "Planets", "Numerology"].map((cat, i) => (
              <li key={i} className="border-b border-gray-200 py-2 hover:text-orange-500 cursor-pointer">
                {cat}
              </li>
            ))}
          </ul>

          <div className="mt-4 space-y-4">
            <h2 className="text-xl font-bold mb-3">New Products</h2>
            {[1, 2].map((i) => (
              <div key={i} className="flex space-x-3 items-center border-b pb-3">
                <img src="https://via.placeholder.com/60" alt="" className="rounded" />
                <div>
                  <div className="flex text-yellow-400 text-sm mb-1">★★★★☆</div>
                  <p className="font-semibold">Rudraksha Yantra</p>
                  <p className="text-sm">
                    <span className="font-bold">₹50.00</span>{" "}
                    <span className="line-through text-gray-400">₹80.00</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

         {/* Social Share Section */}
<div className="mt-6">
  <h3 className="font-semibold mb-3 text-lg md:text-xl">Social Share</h3>
  <div className="flex flex-wrap gap-4">
    <a
      href="https://www.facebook.com/share/v/17XFTtqMbi/"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-gray-300 p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
    >
      <FaFacebook size={20} />
    </a>

    <a
      href="https://twitter.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-gray-300 p-3 rounded-full text-sky-500 hover:bg-sky-500 hover:text-white transition-all duration-300"
    >
      <FaXTwitter size={20} />
    </a>

    <a
      href="https://www.linkedin.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-gray-300 p-3 rounded-full text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300"
    >
      <FaLinkedinIn size={20} />
    </a>

    <a
      href="https://youtu.be/BN5m7Cb3V7Q?si=735Rj8OpAyewgt5W"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-gray-300 p-3 rounded-full text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
    >
      <IoLogoYoutube size={22} />
    </a>
  </div>
</div>

        </div>
      </div>
    </>
  )
}

export default Product