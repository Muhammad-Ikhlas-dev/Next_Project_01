import React from 'react';
import NavBar from "../_components/Navbar/Nav";
import Footer from "../_components/Footer";

function layout({children}) {
  return (
    <>
    <NavBar/>
    {children}                                                                                                            
    <Footer/>
    </>
  )
}

export default layout
