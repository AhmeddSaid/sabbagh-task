import "./ScrollButton.css";

function ScrollButton() {
  return (
    <a className="scroll-btn" href="#">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="47"
        height="47"
        viewBox="0 0 47 47"
        fill="none"
      >
        <rect width="47" height="47" fill="black" />
        <path d="M7 32L23 16L39 32" stroke="white" strokeWidth="6" />
      </svg>
    </a>
  );
}

export default ScrollButton;
