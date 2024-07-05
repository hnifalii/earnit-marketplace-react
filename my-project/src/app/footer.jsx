import React from "react";

// Icons
import { FcGoogle } from "react-icons/fc";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-wrap mt-20 bottom-0 bg-primary text-white gap-[180px] justify-center">
        <div className="p-8">
          <h2 className="text-4xl mb-6 lg:text-[48px] md:text-[48px] font-bold hover:cursor-default">earnit</h2>
          <p className="hover:cursor-default">Social Media</p>
          <div className="flex flex-col gap-2 pt-2">
            <div className="flex flex-row items-center">
              <MdOutlineMailOutline className="size-8 mr-2" />
              <p>earnit@business.inq</p>
            </div>
            <div className="flex flex-row items-center">
              <FaWhatsapp className="size-8 mr-2" />
              <p>086969696969</p>
            </div>
            <div className="flex flex-row items-center">
              <p>www.instagram.com</p>
            </div>
          </div>
        </div>

        <div className="p-8 pt-12 align-center">
          <h5 className="text-lg font-semibold pb-1 hover:cursor-default">
            Customer Service
          </h5>
          <div className="bg-white w-36 h-[2px] my-1"></div>
          <div className="flex flex-col gap-2 mt-2">
            <a href="about.html">Tentang kami</a>
            <a href="#">FAQ</a>
            <a href="#">Syarat dan Ketentuan</a>
            <a href="custcare.html">Customer Care</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
