import React from 'react';
import { FaFacebook, FaTiktok } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <div className='bg-white py-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

          {/* Logo / About Section */}
          <div>
            <h2 className='text-lg text-blue-400 font-bold'>Leol Insurance</h2>
            <p className='text-sm text-gray-600 mt-2'>
              Follow us and stay connected.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className='text-md font-semibold mb-2'>Connect with Us</h3>
            <ul className='flex space-x-4'>
              <li>
                <a
                  href='https://www.facebook.com/people/LEOL-Insurance-Agency/61574830292329/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 hover:text-blue-800 text-xl'
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href='https://www.tiktok.com/@henry_maira'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-black hover:text-gray-800 text-xl'
                >
                  <FaTiktok />
                </a>
              </li>
              <li>
                <a
                  href='mailto:leolinsuranceagency@gmail.com'
                  className='text-red-600 hover:text-red-800 text-xl'
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-md font-semibold mb-2'>Contact Info</h3>

            {/* Email */}
            <div className='flex items-center text-sm text-gray-600 mb-2'>
              <MdEmail className='mr-2 text-lg text-red-500' />
              leolinsuranceagency@gmail.com
            </div>

            {/* Phone */}
            <div className='flex items-center text-sm text-gray-600 mb-2'>
              <MdPhone className='mr-2 text-lg text-green-500' />
              +254 758 775539
            </div>

            {/* Address */}
            <div className='flex items-start text-sm text-gray-600'>
              <MdLocationOn className='mr-2 text-lg text-blue-500 mt-1' />
              <div>
                <p>Krishna Mansion,</p>
                <p>Moktar Daddah Street,</p>
                <p>1st Floor, Office Number 15</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
