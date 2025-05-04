'use client';

import React from 'react';
import { FaFacebook, FaTiktok } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import Image from 'next/image';

const contactInfo = [
  {
    icon: <MdEmail className="text-red-500" />,
    text: 'leolinsuranceagency@gmail.com',
  },
  {
    icon: <MdPhone className="text-green-500" />,
    text: '+254 758 775539',
  },
  {
    icon: <MdLocationOn className="text-blue-500 mt-1" />,
    text: (
      <div>
        <p>Krishna Mansion,</p>
        <p>Moktar Daddah Street,</p>
        <p>1st Floor, Office Number 15</p>
      </div>
    ),
  },
];

const socialLinks = [
  {
    href: 'https://www.facebook.com/people/LEOL-Insurance-Agency/61574830292329/',
    icon: <FaFacebook />,
    className: 'text-blue-600 hover:text-blue-800',
  },
  {
    href: 'https://www.tiktok.com/@henry_maira',
    icon: <FaTiktok />,
    className: 'text-black hover:text-gray-800',
  },
  {
    href: 'mailto:leolinsuranceagency@gmail.com',
    icon: <MdEmail />,
    className: 'text-red-600 hover:text-red-800',
  },
];

const Footer = () => {
  return (
    <>
      <div className="pt-16 pb-16 bg-[#fcf6fa]">
        <h1 className="text-2xl md:text-3xl capitalize font-bold text-center">
          Get In Touch With Us
        </h1>

        <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Logo / About */}
            <div>
            <div className="flex items-center space-x-2">
                <Image src="./leol_icon.png" alt="Leol Insurance Logo" width={40} height={40} />
                <h2 className="text-xl text-blue-500 font-bold">Leol Insurance Agency</h2>
              </div>
              <p className="text-sm text-gray-600 mt-2">Follow us and stay connected.</p>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-md font-semibold text-gray-800 mb-2">Connect with Us</h3>
              <ul className="flex space-x-4 text-xl">
                {socialLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={link.className}
                    >
                      {link.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-md font-semibold text-gray-800 mb-2">Contact Info</h3>
              {contactInfo.map((item, idx) => (
                <div key={idx} className="flex items-start text-sm text-gray-600 mb-2">
                  <span className="mr-2 text-lg">{item.icon}</span>
                  {typeof item.text === 'string' ? <span>{item.text}</span> : item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 👇 Copyright Section */}
      <div className="bg-gray-200 text-center py-4 text-xsm text-gray-700">
        © {new Date().getFullYear()} Leol Insurance Agency. All rights reserved. Developed by <span className="text-black">njanja</span>.
      </div>
    </>
  );
};

export default Footer;
