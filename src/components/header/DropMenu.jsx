import "./DropMenu.css";

function DropMenu() {
  return (
    <div className="drop-down-menu">
      <span>Categories</span>
      <div className="svg-holder">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="13"
          viewBox="0 0 19 13"
          fill="none"
        >
          <path d="M1.5 2L9.5 10L17.5 2" stroke="black" strokeWidth="4" />
        </svg>
      </div>
    </div>
  );
}

export default DropMenu;
