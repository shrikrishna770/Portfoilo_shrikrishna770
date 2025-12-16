import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import data from "../data.js";

console.log(data);
function Project() {
  return (<>
    {data.map((item)=>(
      <div key={item.id} className="flex flex-col lg:flex-row lg:content-center justify-between items-center gap-15">
        <div className="flex justify-center p-10 text-center items-center bg-gray-500 lg:h-[450px] lg:w-[600px] h-[300px] min-w-[350px]">
          <img src={item.img} className="w-full h-full" alt={item.title} />
        </div>  
        <div className="flex flex-col justify-center gap-8 max-w-[900px] lg:max-w-[700px]">
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <p className="text-sm">{item.description}</p>
          </div>
          <div className="text-sm flex w-auto flex-col gap-3" >
            <p>Project info</p>
            <hr />
            <div className="flex justify-between">
              <p>Year</p>
              <p>{item.year}</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Role</p>
              <p>{item.role}</p>
            </div>
          </div>
          <div className="flex gap-5 text-sm">
            <p className="flex cursor-pointer items-center gap-1"><a href={item.liveLink} target="_blank" rel="noopener noreferrer">Live Demo </a><FiArrowUpRight /></p>
            <p className="flex items-center cursor-pointer gap-1"><a href={item.sourceLink} target="_blank" rel="noopener noreferrer">See On Github</a><FaGithub/></p>
          </div>
        </div>
      </div>
    ))}
    </>
  )
}

export default Project