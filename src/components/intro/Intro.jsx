import Header from "../header/header";
import "./Intro.css";

function Intro() {
  return (
    <div className="intro">
      <Header />
      <div className="container">
        <div className="image-holder">
          <img src="/src/assets/image-1.jpeg" alt="image-1" />
        </div>
        <div className="image-holder">
          <span className="arrow-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="58"
              viewBox="0 0 32 58"
              fill="none"
            >
              <path
                d="M30.5 1.5L3 29L30.5 56.5"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
          </span>
          <img src="/src/assets/image-2.jpeg" alt="image-2" />
          <span className="arrow-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="58"
              viewBox="0 0 33 58"
              fill="none"
            >
              <path d="M2 1.5L29.5 29L2 56.5" stroke="white" strokeWidth="4" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Intro;
