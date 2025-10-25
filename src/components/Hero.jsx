import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import profile from "../assets/profile.jpeg"

function Hero() {
  return (
    <section className="hero flex md:flex-row flex-col bg-black text-white gap-8 sm:py-10 py-4 justify-center md:items-center items-start">
      <div className="md:w-[600px] p-4 flex flex-col gap-3">
        <div className="lg:text-6xl md:text-5xl text-4xl font-bold">
          <h1 >HI, I AM</h1>
          <h1 >SHRI KRISHNA</h1>
        </div>
        <div className="text-sm lg:w-[460px]">
          <p>A Sydney based front-end developer passionate about building accessible and user friendly websites.</p>
        </div>
        <div >
          <ul className="flex items-center gap-4 text-xl">
            <li><button className="border text-lg rounded-3xl py-1 px-2  ">Contact me</button></li>
            <li><a href=""><FaLinkedinIn /></a></li>
            <li><a href=""><FaGithub /></a></li>
            <li><a href=""><FaWhatsapp /></a></li>
          </ul>
        </div>
      </div>
      <div className="md:w-[600px] p-4"><img  className="rounded-2xl" src={profile} alt="" /></div>
    </section>
  );
}


export default Hero