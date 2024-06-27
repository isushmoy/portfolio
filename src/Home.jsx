import { useState } from "react";
import "./App.css";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div>
          <div className="introduction mb-[12rem] lg:flex flex-row-reverse justify-around">
            <div className="img mb-[2.4375rem]">
              <img src="src/assets/profile-photo.png" className="mx-auto rounded-full lg:w-[17rem]" width={140} alt="Profile photo of Sushmoy" />
            </div>
            <div className="description lg:text-left">
              <div className="max-w-[28rem] mx-auto">
                <h1 className="text-[2.1rem] lg:text-[3rem] mb-[1.4375rem] font-medium">Hi, I'm Sushmoy</h1>
                <p className="text-gray-400 mb-[3.5rem] lg:mb-[2rem] lg:text-[1.1rem]">
                  I'm an enthusiastic <span className="font-bold">front-end engineer</span> with expertise 
                  <span className="font-bold"> in Vue.js, Tailwind CSS, Git, and HTML/CSS</span>. I'm committed to continuous
                  learning and problem-solving. Let's connect and explore
                  opportunities to create innovative web solutions together!
                </p>
              </div>
              <div className="resources lg:flex items-center gap-[1.5rem]">
                <button className="rounded-full mb-[1.4375rem] lg:mb-0"><a href="">Resume</a></button>
                <a href="#experience" className="block lg:inline text-purple-400">Experiences</a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects mb-[7.5rem]">
          <h3 className="text-[2rem] text-gray-300 mb-[3.8rem]">Some of the projects that I've worked on...</h3>
          <div className="lists flex flex-wrap justify-around">
            <li className="hover:scale-110 transition w-[15rem] lg:w-[22rem] text-neutral-800 font-bold">
              <a href="https://github.com/sushcod3/space-tourism?tab=readme-ov-file">
                <img className="rounded-3xl" src="src/assets/space-tourism-screenshot.png" alt="space tourism photo" />
                <p className="mt-6" >Space Tourism Website</p>
              </a>
            </li>
            <li className="hover:scale-110 transition w-[15rem] lg:w-[22rem] text-neutral-800 font-bold">
              <a href="https://github.com/sushcod3/age-calculator">
                <img className="rounded-3xl" src="src/assets/age-calculator.png" alt="age calculator project photo" />
                <p className="mt-6" >Age Calculator App</p>
              </a>
            </li>
          </div>
        </div> 
        <div className="technologies mb-[6.875rem]">
          <h2 className="text-[2rem] text-gray-300 mb-[3.8rem]">Technologies I've been using...</h2>
          <div className="cursor-default px-12 py-10 mx-auto max-w-[25rem] rounded-2xl nunito text-left border border-gray-800 flex flex-col">
            <p className="font-bold mb-4 text-lg">Front-end Enginnering</p>
            <li className="hover:scale-125 transition flex items-center gap-[0.7rem] py-1.5"><img src="https://img.icons8.com/?size=30&id=108784&format=png&color=000000" alt="javascript icon" />JavaScript</li>
            <li className="hover:scale-125 transition flex items-center gap-[0.7rem] py-1.5"><img src="https://img.icons8.com/?size=30&id=bzf0DqjXFHIW&format=png&color=000000" alt="reactjs icon" />React JS</li>
            <li className="hover:scale-125 transition flex items-center gap-[0.7rem] py-1.5"><img src="https://img.icons8.com/?size=30&id=eETV3RNHVrWA&format=png&color=000000" alt="Vue js icon" />Vue JS</li>
            <li className="hover:scale-125 transition flex items-center gap-[0.7rem] py-1.5"><img src="https://img.icons8.com/?size=30&id=x7XMNGh2vdqA&format=png&color=000000" alt="tailwind css icon" />Tailwind CSS</li>
            <li className="hover:scale-125 transition flex items-center gap-[0.7rem] py-1.5"><img src="https://img.icons8.com/?size=30&id=EzPCiQUqWWEa&format=png&color=000000" alt="bootstrap icon" />Bootstrap</li>
            <li className="hover:scale-125 transition flex items-center gap-[0.7rem] py-1.5"><img src="https://img.icons8.com/?size=30&id=20906&format=png&color=000000" alt="git icon" />Git</li>
            <li className="hover:scale-125 transition flex items-center gap-[0.7rem] py-1.5"><img src="https://img.icons8.com/?size=30&id=24895&format=png&color=000000" alt="npm icon" />NPM</li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
