import { useState } from "react";
import "./App.css";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div>
          <div className="introduction">
            <div className="img">
              <img src="" alt="" />
            </div>
            <div className="description">
              <h1>Hi, I'm Sushmoy</h1>
              <p>
                I'm an enthusiastic front-end engineer with expertise in Vue.js,
                Tailwind CSS, Git, and HTML/CSS. I'm committed to continuous
                learning and problem-solving. Let's connect and explore
                opportunities to create innovative web solutions together!
              </p>
            </div>
          </div>
          <div className="resources">
            <button></button>
            <a href="#experience"></a>
          </div>
        </div>
        <div className="projects">Projects</div>
        <div className="technologies">Technologies</div>
      </div>
    </>
  );
}

export default Home;
