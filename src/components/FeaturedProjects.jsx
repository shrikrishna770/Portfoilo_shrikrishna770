import { FiArrowUpRight } from "react-icons/fi"
import Project from "./Project";
import { FaGithub } from "react-icons/fa"

function FeaturedProjects() {
  return <>
    <div className=" bg-black text-white  flex flex-col py-20 px-2 items-center ">
      <div className="flex flex-col gap-4 w-full max-w-7xl p-1">
        <h1 className="text-4xl lg:text-5xl font-bold">Featured Projects</h1>
        <p className="max-w-[460px] text-sm">Here are some of the selected projects that showcase my passion for front-end development.</p>
      </div>
      <div className="flex flex-col gap-20 py-20 ">
        <Project />
      </div>
    </div>
  </>
}


export default FeaturedProjects