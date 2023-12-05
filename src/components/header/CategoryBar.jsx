import "./CategoryBar.css";

function CategoryBar() {
  return (
    <div className="category-bar">
      <span className="nav-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
        >
          <rect
            width="18"
            height="19"
            transform="matrix(-1 0 0 1 18 0)"
            fill="#010101"
          />
          <path d="M12.5 3L6 9.5L12.5 16" stroke="white" strokeWidth="4" />
        </svg>
      </span>
      <ul className="nav-bar">
        <li>Home Appliances</li>
        <li>Baby Care & Mommy Products</li>
        <li>Perfumes & Fragrances</li>
        <li>Stationery - Office Supplies</li>
      </ul>
      <span className="nav-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
        >
          <rect width="18" height="19" fill="#010101" />
          <path d="M5 3L11.5 9.5L5 16" stroke="white" strokeWidth="4" />
        </svg>
      </span>
    </div>
  );
}

export default CategoryBar;
