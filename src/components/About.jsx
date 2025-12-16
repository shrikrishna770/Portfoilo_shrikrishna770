
function About() {
  return (
    <>
      <div className="flex flex-col text-justify  lg:flex-row bg-black justify-center text-white py-20">
        <div className="flex lg:w-[580px] px-4 ">
          <h1 className="text-4xl lg:text-5xl font-bold py-10">
            About Me
          </h1>
        </div>
        <div className="lg:w-[730px] px-4 w-full">
          <p className="text-lg text-gray-500">
            I am a Frontend Developer with strong problem-solving skills and real-world experience in building fast, responsive, and performance-focused web applications. I work with HTML, CSS, Tailwind CSS, JavaScript (JS), and React, combining clean design with modern development practices to create intuitive and user-friendly interfaces.
          </p>
          <p className="mt-4 text-lg text-gray-500">
            I enjoy writing clean, scalable code and transforming ideas into fully functional web experiences. My projects—ranging from recipe apps to temple websites and task-management tools—focus on usability, smooth navigation, and real-time features. I deploy live versions on Vercel and manage collaboration and version control using Git & GitHub.
          </p>
          <p className="mt-4 text-lg text-gray-500">
            Currently, I’m undergoing professional training at Hyperverge Academy, where I am sharpening my frontend fundamentals, logical thinking, performance optimization techniques, and overall developer mindset. I actively practice DSA, strengthen my JavaScript concepts, and continuously improve my ability to build clean, modern, and responsive interfaces.
          </p>
          <p className="mt-4 text-lg text-gray-500">
            My goal is to build high-quality web applications, contribute to real-world projects, and grow into a strong full-stack or product-oriented developer while learning from experienced mentors and modern technologies.
          </p>
          <p className="mt-4 text-lg text-blue-700">
            <a href="">Know more about me</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
