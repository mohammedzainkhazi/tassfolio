import React from 'react'
import tass from '../image/port.jpeg'

export default function Home() {
  return (
    <div>
           <div className="m-3 rounded-lg">
        <section className="text-gray-400 bg-gray-900 body-font" id="home">
        <div className="container mx-auto flex px-5 py-17 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Mohammadi Tasmiya
            <br className="hidden lg:inline-block"/>
            </h1>
            <h2 className="text-white">FrontEnd Web Developer</h2>
            <br className="hidden lg:inline-block"/>
            
            <p className="mb-8 leading-relaxed">I'm a Fresher pursuing Computer Science &amp; Engineering at M S Ramaiah Institute of Technology, Bangalore. I am always ready to have new experiences and learn new things. I find the idea of creating FrontEnd Design Development  and impacting the world through my work gratifying.</p>
            <div className="flex justify-center"> 
            <br/> 

            <h1 className="mb-10 title-font sm:text-4xl text-3xl mb-4 font-medium text-white">SKills
            </h1>
            </div>
                <div className="w-16 h-1 rounded-full bg-pink-500 inline-flex"></div>
            
            <br/><br/>
            

            <div className="w-full mt-2 flex flex-row justify-between items-center">
                <div><i className="fab fa-html5 fa-3x" aria-hidden="true"></i></div>
                <div><i className="fab fa-css3 fa-3x" aria-hidden="true"></i></div>
                <div><i className="fab fa-js-square fa-3x" aria-hidden="true"></i></div>
                <div><i className="fab fa-python fa-3x" aria-hidden="true"></i></div>
                
      
            </div> 
            
        </div>
        
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:ml-0 ml-10">
            
        
        <img className="object-cover object-center rounded-lg pt-6 pb-6" style={{borderRadius : "30px",width:"85%",height:"19%"}} src={tass}  alt="img"/>
        </div>
        </div>
    </section>
    </div>
        </div>
  )
}
