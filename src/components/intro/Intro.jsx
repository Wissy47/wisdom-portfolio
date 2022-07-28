import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["PHP", "React", "Laravel", "JavaScript", "MySQL"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="wrapper">
          {/* <h2>Hi There, I'm</h2> */}
          <h1>Hi There, </h1> 
          <h1>I'm Wisdom,</h1>
          <h1>A Software Engineer.</h1>
          <h3>
            My Stack Consist of <span ref={textRef}></span>
          </h3>
        <p>Check my Latest Projects Below:</p>
        </div>
        <a href="#projects">
          <img src="assets/down.png" alt="" />
          <img src="assets/down.png" alt="" />
          <img src="assets/down.png" alt="" />
        </a>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src="assets/profilepic.png" alt="" />
        </div>
      </div>
    </div>
  );
}
