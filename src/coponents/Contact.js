import React from "react";

function Contact() {
  return (
    
    <div className='bg-gray-700 text-white m-3 mt-3 rounded-md'>
      <section className="text-gray-400 bg-gray-900 body-font relative">
      <div className="text-center">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-2">
                Contact
              </h1>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-pink-500 inline-flex"></div>
              </div>
            </div>
        <div className="container px-5 w-full mx-auto py-24 mx-auto flex justify-center sm:flex-nowrap flex-wrap">
          <div className="w-full md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          
          <iframe width="100%" height="100%" title="map" className="absolute inset-0" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{filter : "grayscale(1) contrast(1.2) opacity(0.16)"}}></iframe>
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                sheshadripuram girls hostel Bangalore-560020
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-400 leading-relaxed" href="/">
                  1ms20cs405@gmail.com
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">963-227-5353</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
