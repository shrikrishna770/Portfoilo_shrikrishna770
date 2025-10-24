import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-gray-800 flex flex-col text-white sm:pt-10 pt-4  justify-center sm:gap-10 gap-3">
      <div className="flex flex-col justify-center gap-15 sm:gap-4 sm:flex-row p-4">
        <div className=" lg:w-[600px] w-auto sm:w-[500px] flex flex-col gap-5 ">
          <div className="flex flex-col gap-2 text-base">
            <h1 className="text-4xl font-bold">LET'S CONNECT</h1>
            <div>
            <p>Say hello at <a href=""></a></p>
            <p>For more into hear is my resume <a href=""></a></p>
            </div>
          </div>
          <ul className="flex gap-4 text-2xl">
            <li><a href=""><FaLinkedinIn/></a></li>
            <li><a href=""><FaGithub/></a></li>
            <li><a href=""><FaWhatsapp/></a></li>
            {/* <li><a href="">I</a></li> */}
          </ul>
        </div>
        <div className="lg:w-[600px] w-auto flex flex-col gap-2 sm:w-[500px]">
          <h1 className="text-3xl font-bold">Feedback form</h1>
          <form action="" className="flex flex-col text-sm ">
            <label htmlFor="">Name
            <input type="text" className="w-full mt-2 mb-4 border rounded-sm text-lg p-1"/>
            </label>

            <label htmlFor="">Email
            <input type="text" className="w-full mt-2 mb-4 border rounded-sm text-lg p-1 "/>
            </label>

            <label htmlFor="">Subject
            <input type="text" className="w-full mt-2 mb-4 border rounded-sm text-lg p-1"/>
            </label>

            <label htmlFor="">Message</label>
              <textarea name="" rows={5} id="" className="w-full mt-2 mb-4 border rounded-sm text-lg p-1"></textarea>

            <button type="submit" className="border w-[90px] text-lg rounded-2xl p-2 ">Submit</button>
          </form>
        </div>
      </div>
      <div className="flex justify-center border-t p-4">
        <p className="w-[1220px]">&copy; 2024 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer


