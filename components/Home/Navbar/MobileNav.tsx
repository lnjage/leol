import React from 'react'

const MobileNav = () => {
  return (
    <div>
      {/* Overlay visible only on mobile devices */}
      <div className="fixed inset-0 transform transition-all duration-500 z-[10000] bg-slate-600 w-full h-screen lg:hidden">
        {/* Mobile Menu Content */}
        <div className="flex justify-center items-center h-full text-white text-3xl">
          <p>Mobile Menu</p>
        <div className="text-white fixed justify-center flex flex-col h-full transform transition-all duration-all duration-500
        delay-300 w-[80%] sm:w-[60%] bg-indigo-900 "></div>
        </div>
      </div>
    </div>
  )
}

export default MobileNav;