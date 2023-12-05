import "./PopularCategories.css";

function PopularCategories() {
  return (
    <div className="popular-categories">
      <h4 className="main-title">Explore Popular Categories</h4>
      <div className="container">
        <div className="item">
          <div className="icons">
            <img src="/src/assets/apple.svg" alt="brand" />
            <img src="/src/assets/beats.svg" alt="brand" />
            <img src="/src/assets/samsung.svg" alt="brand" />
            <img src="/src/assets/lg.svg" alt="brand" />
          </div>
          <div className="line"></div>
          <div className="text">
            <p>Popular top 10 Brands</p>
            <p>500+ orders and reviews</p>
          </div>
        </div>
        <div className="item">
          <div className="icons">
            <img src="/src/assets/apple.svg" alt="brand" />
            <img src="/src/assets/beats.svg" alt="brand" />
            <img src="/src/assets/samsung.svg" alt="brand" />
            <img src="/src/assets/lg.svg" alt="brand" />
          </div>
          <div className="line"></div>
          <div className="text">
            <p>Newest Brands</p>
            <p>110+ orders and reviews</p>
          </div>
        </div>
        <div className="item">
          <div className="icons">
            <img src="/src/assets/apple.svg" alt="brand" />
            <img src="/src/assets/beats.svg" alt="brand" />
            <img src="/src/assets/samsung.svg" alt="brand" />
            <img src="/src/assets/lg.svg" alt="brand" />
          </div>
          <div className="line"></div>
          <div className="text">
            <p>Newest Brands</p>
            <p>110+ orders and reviews</p>
          </div>
        </div>
        <div className="item">
          <div className="icons">
            <img src="/src/assets/apple.svg" alt="brand" />
            <img src="/src/assets/beats.svg" alt="brand" />
            <img src="/src/assets/samsung.svg" alt="brand" />
            <img src="/src/assets/lg.svg" alt="brand" />
          </div>
          <div className="line"></div>
          <div className="text">
            <p>Popular top 10 Brands</p>
            <p>500+ orders and reviews</p>
          </div>
        </div>
        <div className="item">
          <div className="icons">
            <img src="/src/assets/apple.svg" alt="brand" />
            <img src="/src/assets/beats.svg" alt="brand" />
            <img src="/src/assets/samsung.svg" alt="brand" />
            <img src="/src/assets/lg.svg" alt="brand" />
          </div>
          <div className="line"></div>
          <div className="text">
            <p>Newest Brands</p>
            <p>110+ orders and reviews</p>
          </div>
        </div>
        <div className="item">
          <div className="icons">
            <img src="/src/assets/apple.svg" alt="brand" />
            <img src="/src/assets/beats.svg" alt="brand" />
            <img src="/src/assets/samsung.svg" alt="brand" />
            <img src="/src/assets/lg.svg" alt="brand" />
          </div>
          <div className="line"></div>
          <div className="text">
            <p>Newest Brands</p>
            <p>110+ orders and reviews</p>
          </div>
        </div>
      </div>
      <div className="see-all">
        see all{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
        >
          <path
            d="M1 4H9M9 4L6 1M9 4L6 7"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default PopularCategories;
