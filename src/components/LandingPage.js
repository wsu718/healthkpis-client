import React from 'react';
import { useAuth0 } from "../react-auth0-spa";

import Logo from '../assets/shapes-100.png';

const LandingPage = () => {

    const { loginWithRedirect } = useAuth0();

    return (
        <div className="min-h-screen bg-gray-50">



            {/* Start patterns on sides */}
            <div className="relative overflow-hidden">
                <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
                    <div className="relative h-full max-w-screen-xl mx-auto">
                        <svg className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
                            <defs>
                                <pattern id="svg-pattern-squares-1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="404" height="784" fill="url(#svg-pattern-squares-1)" />
                        </svg>
                        <svg className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
                            <defs>
                                <pattern id="svg-pattern-squares-2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="404" height="784" fill="url(#svg-pattern-squares-2)" />
                        </svg>
                    </div>
                </div>
                {/* End patterns on sides */}

                <div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">

                    {/* Topnav */}
                    <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
                        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
                            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                                <div className="flex items-center justify-between w-full md:w-auto">
                                    <a href="#">
                                        <img className="h-8 w-auto sm:h-10" src={Logo} alt="" />
                                    </a>
                                </div>
                            </div>

                            {/* Login button */}
                            <div className="md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                                <span className="inline-flex rounded-md shadow" onClick={() => loginWithRedirect({})}>
                                    <a className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white" >
                                        Log in
                    </a>

                                </span>
                            </div>
                        </nav>
                    </div>

                    <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
                        <div className="text-center">
                            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                                Improve your health
                  <br />
                                <span className="text-indigo-600">through data</span>
                            </h2>
                            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                                Track your most important health data every day. Create weekly experiments and compare the results.
                </p>
                            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                                <div className="rounded-md shadow" onClick={() => loginWithRedirect({})}>
                                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600  md:py-4 md:text-lg md:px-10">
                                        Get started
                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LandingPage;