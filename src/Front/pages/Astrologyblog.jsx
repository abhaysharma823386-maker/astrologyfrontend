import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedinIn, FaStarOfDavid } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoYoutube, IoSearch } from 'react-icons/io5';
import downlod from "../../Front/assest/imgs/download.png";
import bg10 from "../../Front/assest/imgs/bg10.jpg";
import shape from "../../Front/assest/imgs/shape.svg";
import blog4 from "../../Front/assest/imgs/blog4.webp";
import blog5 from "../../Front/assest/imgs/blog5.webp";
import blog6 from "../../Front/assest/imgs/blog6.webp";

const Astrologyblog = () => {
    const blogs = [
        {
            id: 1,
            img: blog4,
            title: "The Power of Planetary Movements in Shaping Your Destiny",
            date: "July 29, 2025",
            desc: "Planetary movements play a crucial role in influencing your emotions, opportunities, and decisions.",
            category: "Planets",
        },
        {
            id: 2,
            img: blog5,
            title: "Unlocking Success Through Kundali Analysis and Remedies",
            date: "August 10, 2025",
            desc: "Your birth chart, or Kundali, holds the key to your strengths, challenges, and destiny.",
            category: "Kundali Dosha",
        },
        {
            id: 3,
            img: blog6,
            title: "Astrological Remedies for Peace, Prosperity, and Positive Energy",
            date: "September 5, 2025",
            desc: "Astrology offers powerful remedies — from gemstones to mantras — to balance planetary influences.",
            category: "Gem & Stone",
        },
        {
            id: 4,
            img: blog5,
            title: "Understanding Zodiac Signs and Their Impact on Relationships",
            date: "October 1, 2025",
            desc: "Each zodiac sign shapes our connection with others and impacts relationships deeply.",
            category: "Daily Horoscope",
        },
        {
            id: 5,
            img: blog4,
            title: "Vastu Shastra: Balancing Energy for a Happy Home",
            date: "October 15, 2025",
            desc: "Vastu Shastra harmonizes your home and invites positivity, health, and wealth.",
            category: "Vastu Shastra",
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    // ✅ Combined filter logic
    const filteredBlogs = blogs.filter((blog) => {
        const matchesCategory =
            selectedCategory === "All" || blog.category === selectedCategory;
        const matchesSearch =
            blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.desc.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const blogsPerPage = 3;
    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
    const startIndex = (currentPage - 1) * blogsPerPage;
    const currentBlogs = filteredBlogs.slice(startIndex, startIndex + blogsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const categories = [
        "All",
        "Kundali Dosha",
        "Face Reading",
        "Daily Horoscope",
        "Personal Consultation",
        "Gem & Stone",
        "Manglik Dosha",
        "Vastu Shastra",
        "Planets",
        "Numerology",
    ];

    return (
        <>
            {/* ✅ Header Section */}
            <div
                className="section-8 pt-20 pb-30 text-center text-white relative overflow-hidden"
                style={{ backgroundImage: `url(${bg10})`, backgroundSize: "100%" }}
            >
                <div className="absolute inset-0 bg-black/70"></div>
                <motion.div
                    initial={{ scale: 1.3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10"
                >
                    <h2 className="text-2xl md:text-3xl font-semibold">Blog</h2>
                    <p className="flex text-xs mt-3 justify-center items-center cursor-pointer">
                        Home <FaStarOfDavid className="mx-2" /> Blog
                    </p>
                </motion.div>
            </div>

            <div
                className="w-full h-[100px] rotate-180 mt-[-90px]"
                style={{ backgroundImage: `url(${shape})` }}
            ></div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center px-5 md:px-20 overflow-hidden"
            >
                <img src={downlod} alt="" className="m-auto my-10 w-14 md:w-20" />
                <p className="max-w-3xl mx-auto text-gray-700 text-sm md:text-base">
                    Discover practical astrology insights to help you live with purpose, balance,
                    and spiritual awareness.
                </p>
            </motion.div>

            {/* ✅ Main Blog + Sidebar Section */}
            <div className="md:flex md:flex-row-reverse justify-between w-full overflow-hidden">
                {/* 🔸 BLOG LIST */}
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="md:w-[70%] py-10 px-5 md:px-20"
                >
                    {currentBlogs.length > 0 ? (
                        currentBlogs.map((blog) => (
                            <motion.div
                                key={blog.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="group bg-white mb-10 rounded-2xl shadow-md overflow-hidden duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                            >
                                <div className="relative">
                                    <img
                                        src={blog.img}
                                        alt=""
                                        className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <span className="absolute bottom-3 right-3 bg-orange-500 text-white text-sm font-medium px-4 py-1.5 rounded-full">
                                        {blog.date}
                                    </span>
                                </div>
                                <div className="p-5 text-left">
                                    <h1 className="text-lg font-semibold text-gray-800 duration-300 group-hover:text-orange-500">
                                        {blog.title}
                                    </h1>
                                    <p className="text-gray-600 mt-3 text-sm md:text-base">
                                        {blog.desc}
                                    </p>
                                    <p className="mt-2 text-xs text-gray-400">
                                        Category: {blog.category}
                                    </p>
                                    <button className="mt-5 px-5 py-2 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 duration-300">
                                        Read More
                                    </button>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No blogs found.</p>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex justify-center mt-10 gap-5 flex-wrap"
                        >
                            <button
                                onClick={prevPage}
                                disabled={currentPage === 1}
                                className={`px-4 py-2 rounded-lg font-semibold ${
                                    currentPage === 1
                                        ? "bg-gray-400"
                                        : "bg-orange-500 hover:bg-orange-600"
                                } text-white`}
                            >
                                Previous
                            </button>
                            <span className="text-lg font-semibold text-gray-800">
                                Page {currentPage} of {totalPages}
                            </span>
                            <button
                                onClick={nextPage}
                                disabled={currentPage === totalPages}
                                className={`px-4 py-2 rounded-lg font-semibold ${
                                    currentPage === totalPages
                                        ? "bg-gray-400"
                                        : "bg-orange-500 hover:bg-orange-600"
                                } text-white`}
                            >
                                Next
                            </button>
                        </motion.div>
                    )}
                </motion.div>

                {/* 🔸 SIDEBAR (Search + Filter) */}
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="md:w-[30%] py-10 px-5 md:px-10 overflow-hidden"
                >
                    {/* 🔹 Search Bar */}
                    <div className="flex mb-6">
                        <input
                            type="text"
                            placeholder="Search Blog"
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="w-full px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none"
                        />
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-r-full">
                            <IoSearch />
                        </button>
                    </div>

                    {/* 🔹 Category Filter */}
                    <div>
                        <h2 className="text-xl font-bold mb-3">Top Categories</h2>
                        <ul className="border-t border-gray-200 text-sm">
                            {categories.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => {
                                        setSelectedCategory(item);
                                        setCurrentPage(1);
                                    }}
                                    className={`border-b border-gray-200 py-2 cursor-pointer duration-200 ${
                                        selectedCategory === item
                                            ? "text-orange-500 font-semibold"
                                            : "hover:text-orange-500"
                                    }`}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 🔹 Social Icons */}
                    <div className="mt-6">
                        <h3 className="font-semibold mb-3">Social Share</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="border border-gray-300 p-3 rounded-full text-gray-600 hover:bg-gray-100">
                                <FaFacebook />
                            </a>
                            <a href="#" className="border border-gray-300 p-3 rounded-full text-gray-600 hover:bg-gray-100">
                                <FaXTwitter />
                            </a>
                            <a href="#" className="border border-gray-300 p-3 rounded-full text-gray-600 hover:bg-gray-100">
                                <FaLinkedinIn />
                            </a>
                            <a href="#" className="border border-gray-300 p-3 rounded-full text-gray-600 hover:bg-gray-100">
                                <IoLogoYoutube />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Astrologyblog;
