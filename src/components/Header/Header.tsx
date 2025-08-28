import React from 'react';
import { VscTools } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

function Header(): React.ReactElement {
    return (
        <div className="top-0 z-50 sticky bg-primary-light shadow-black/50 shadow-md">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex justify-between items-center h-16">
                    <Link to={"/"} className="group flex flex-row flex-shrink-0 items-center gap-1 mb-2 font-bold text-white text-2xl cursor-pointer">
                        <VscTools className='group-active:rotate-45 group-hover:rotate-12 duration-200' />
                        <h5 className='text-cta'>
                            Jm
                            <span className='text-white'>
                                Service
                            </span>
                        </h5>
                        {/* <img
                            className="w-auto h-10"
                            src="/logo.svg" 
                            alt="Your Logo"
                        /> */}
                    </Link>
                    <nav>
                        <ul className="flex space-x-6 font-medium text-white text-lg">
                            <li className="hover:text-cta transition-colors cursor-pointer">
                                <Link to={"/"}>
                                    Home
                                </Link>
                            </li>
                            <li className="hover:text-cta transition-colors cursor-pointer">
                                <Link to={"/servicios"}>
                                    Servicios
                                </Link>
                            </li>
                            <li className="hover:text-cta transition-colors cursor-pointer">
                                <Link to={"/about/electricista"}>
                                    Sobre JM
                                </Link>
                            </li>
                            <li className="hover:text-cta transition-colors cursor-pointer">
                                <Link to={"/about/albanil"}>
                                    Sobre Damian
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
