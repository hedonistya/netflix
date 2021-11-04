import React, {useState} from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SignUp from "../components/SignUp";
import About from "../components/About";
import Discover from "../components/Discover";
import Footer from "../components/Footer";
import Best from "../components/Best";
import Email from "../components/Email";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <SignUp/>
      <About/>
      <Discover/>
      <Best/>
      <Email/>
      <Footer/>
    </>
  )
}

export default Home;