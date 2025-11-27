"use client";
import React, { useState } from "react";
import { VscTools } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";

function Header(): React.ReactElement {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = () => {
    setOpen(false);
    setOpenDropdown(false);
  };

  const closeDropdown = () => setOpenDropdown(false);

  return (
    <div className="top-0 z-[999] sticky bg-gradient-to-b from-gray-900 to-primary-light shadow-black/40 shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <Link
            to="/"
            onClick={handleClose}
            className="group flex flex-row items-center gap-1 mb-2 font-bold text-white text-2xl cursor-pointer"
          >
            <VscTools className="group-active:rotate-45 group-hover:rotate-12 duration-200" />
            <h5 className="text-cta">
              Jm <span className="text-white">Service</span>
            </h5>
          </Link>

          {/* DESKTOP */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-6 font-light text-white text-lg">
              <li className="hover:text-cta transition-colors">
                <Link to="/" onClick={closeDropdown}>
                  Home
                </Link>
              </li>

              <li className="hover:text-cta transition-colors">
                <Link to="/servicios" onClick={closeDropdown}>
                  Servicios
                </Link>
              </li>

              {/* 🔽 DROPDOWN */}
              <li className="relative">
                <button
                  onClick={() => setOpenDropdown((p) => !p)}
                  className="flex items-center gap-1 hover:text-cta transition-colors"
                >
                  Nosotros
                  <MdKeyboardArrowDown
                    className={`text-xl transition-transform duration-200 ${
                      openDropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="left-1/2 z-50 absolute mt-3 w-48 -translate-x-1/2"
                    >
                      {/* PIQUITO unido al contenedor */}
                      <div className="flex justify-center">
                        <div className="bg-primary-light/95 shadow-md -mb-2 border-white/10 border-t border-l w-4 h-4 rotate-45"></div>
                      </div>

                      {/* CONTENEDOR */}
                      <div className="bg-primary-light/95 shadow-lg backdrop-blur-md border border-white/10 rounded-md overflow-hidden">
                        <Link
                          to="/about/electricista"
                          onClick={closeDropdown}
                          className="block hover:bg-cta/60 px-4 py-2 hover:pl-5 text-white transition-all duration-200"
                        >
                          Sobre JM
                        </Link>

                        <Link
                          to="/about/albanil"
                          onClick={closeDropdown}
                          className="block hover:bg-cta/60 px-4 py-2 hover:pl-5 text-white transition-all duration-200"
                        >
                          Sobre Damián
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={handleToggle}
            className="md:hidden text-white text-3xl transition-all duration-200"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-primary-light/95 shadow-inner backdrop-blur-md px-6 py-6"
          >
            <ul className="flex flex-col gap-4 font-medium text-white text-lg">
              <li>
                <Link to="/" onClick={handleClose}>
                  Home
                </Link>
              </li>

              <li>
                <Link to="/servicios" onClick={handleClose}>
                  Servicios
                </Link>
              </li>

              <li>
                <Link to="/about/electricista" onClick={handleClose}>
                  Sobre JM
                </Link>
              </li>

              <li>
                <Link to="/about/albanil" onClick={handleClose}>
                  Sobre Damián
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
