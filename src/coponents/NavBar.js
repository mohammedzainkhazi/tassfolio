import React from 'react'

export default function NavBar() {
  return (
    <div className='bg-gray-700 text-white m-3 mt-3 rounded-md'>
         <div classNameName="m-3 rounded-lg bg-gray-900">
            <header className="text-gray-400  body-font" >
            <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">                
            <i className="fas fa-crown text-[30px] text-yellow-500 "></i>
            <nav className="md:ml-auto flex flex-wrap items-center  text-white justify-center">
                <a className="mr-5 hover:text-white font-medium" href="#home" >Home</a>
                <a className="mr-5 hover:text-white font-medium" href="#education">Education</a>
                <a className="mr-5 hover:text-white font-medium" href="#project">Projects</a>
                <a className="mr-5 hover:text-white font-medium" href="#blog">Blog</a>

                <a className="mr-5 hover:text-white font-medium" href="#contact">Contact</a>

                
            </nav>
            
            </div>
            </header>
        </div>

    </div>
  )
}
