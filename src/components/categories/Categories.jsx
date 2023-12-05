import "./Categories.css";

function Categories() {
  return (
    <div className="categories">
      <h4 className="title">Categories</h4>
      <div className="container">
        <div className="item">
          <img src="/src/assets/item-1.png" alt="item-1" />
          <p>Electronics & Mobiles</p>
        </div>
        <div className="item">
          <img src="/src/assets/item-2.png" alt="item-2" />
          <p>Makeup</p>
        </div>
        <div className="item">
          <img src="/src/assets/item-3.png" alt="item-3" />
          <p>Car Accessories</p>
        </div>
        <div className="item">
          <img src="/src/assets/item-4.png" alt="item-4" />
          <p>Furniture</p>
        </div>
        <div className="arrow-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="51"
            viewBox="0 0 29 51"
            fill="none"
          >
            <path d="M2 1.5L26 25.5L2 49.5" stroke="black" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <div className="tabs">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <circle
              className="active"
              cx="10.5"
              cy="10.5"
              r="10.5"
              fill="#D9D9D9"
            />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <circle cx="10.5" cy="10.5" r="10.5" fill="#D9D9D9" />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <circle cx="10.5" cy="10.5" r="10.5" fill="#D9D9D9" />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <circle cx="10.5" cy="10.5" r="10.5" fill="#D9D9D9" />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <circle cx="10.5" cy="10.5" r="10.5" fill="#D9D9D9" />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <circle cx="10.5" cy="10.5" r="10.5" fill="#D9D9D9" />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <circle cx="10.5" cy="10.5" r="10.5" fill="#D9D9D9" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default Categories;
