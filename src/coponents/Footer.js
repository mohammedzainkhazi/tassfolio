import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className="m-3 rounded-lg">
                <footer className="text-gray-400 bg-gray-900 body-font">
                    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white" href="/">                                <i className="fas fa-crown"></i>
                                <span className="ml-3 text-xl">MT</span>
                            </a>

                        </div>
                        <div className="container">
                            <div className="row footer_inner">
                                <div className="col-lg-5 col-sm-6">
                                    <aside className="f_widget ab_widget">
                                        <div className="f_title">
                                            <h3>About Me</h3>
                                        </div>
                                        <p>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the better you get.</p>

                                    </aside>
                                </div>

                                <div className="col-lg-2">
                                    <aside className="f_widget social_widget">
                                        <div className="f_title">
                                            
                                        </div>


                                    </aside>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="bg-gray-800 bg-opacity-75">
                        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                            <p className="text-gray-400 text-sm text-center sm:text-left">© 2022 Tasmiya<i className="fas fa-crown"></i>              <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" rel="noopener noreferrer" target="_blank">mohammaditasmiya2001@gmail.com</a>
                            </p>
                            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                                <a className="text-gray-400" href="/">
                                    <a href="https://www.facebook.com/">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </a>
                                <a className="ml-3 text-gray-400" href="/">
                                    <a href="https://www.instagram.com/mohammaditasmiya2001/">
                                        <i className="fab fa-instagram"></i>
                                    </a>

                                </a>
                                <a className="ml-3 text-gray-400" href="/">
                                    <a href="https://github.com/mohammaditasmiya2001">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </a>
                                <a className="ml-3 text-gray-400" href="/">
                                    <a href="https://linkedin.com">
                                        <i className="fab fa-linkedin"></i>
                                    </a>

                                </a>
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
