import React from 'react'
import { navLinks } from '@/constant/Constant'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

const MobileNav = () => {
  return (
    <div>
      {/* Overlay visible only on mobile devices */}
      <div className="fixed inset-0 transform transition-all duration-500 z-[10000] bg-black opacity-70 w-full h-screen"></div>

      {/* Mobile Menu Content - Visible only on mobile (sm:block) */}
        <div className="text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-indigo-900 space-y-6 z-[10006]" >
                { /*Navigation links */}
                 {navLinks.map((link) => {
                    return (
                      <Link href={link.url} key={link.id}>
                        <p className="nav__link text-white text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                          {link.label}
                        </p> {/* Apply nav__link directly on the <a> */}
                      </Link>
                    );
          })}
                {/*close icon*/}
              <CgClose className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6'/>
            </div>
          </div>
  )
}

export default MobileNav;
