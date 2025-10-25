import { useState } from "react"
import logo from "../assets/logo.jpg"
import { IoMenu } from "react-icons/io5";



function Navbar(){

  const [toggle , setToggle] = useState("hidden")
  function changeToggle(){
    if(toggle == "hidden"){
      setToggle("flex")
    }else{
      setToggle("hidden")
    }
  }


  return<>
    <div className="bg-black text-white w-full flex items-center sticky top-0 justify-center pr-2 py-0.5 text-[1.2rem] ">
      <div className="relative w-[800px] " >
        <a className="flex items-center w-[270px] gap-1 text-3xl" href=""><img src={logo} className="relative w-20" alt="" />Shri Krishna</a>
      </div>

      <div className="hidden relative w-[500px] justify-end gap-6 px-7 md:flex">
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
      <div className="flex w-20 justify-center md:hidden ">
        <button className="text-4xl" onClick={changeToggle}><IoMenu /></button>
        <ul className={`${toggle} flex flex-col absolute items-center top-21 right-0 w-full bg-red-500 p-5`} >
          <li><a href="#">Home</a></li>
          <li><a href="#">Projects</a></li>
          <li> <a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </>
}

export default Navbar
