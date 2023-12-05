import CategoryBar from "./CategoryBar";
import DropMenu from "./DropMenu";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="search-holder">
          <input type="text" placeholder="Search" className="search-bar" />
          <div className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <ellipse
                cx="8.38062"
                cy="8.17508"
                rx="6.60914"
                ry="6.68631"
                stroke="#ABABAB"
                strokeWidth="2"
              />
              <path
                d="M17.8781 17.6288L13.0457 12.9775"
                stroke="#ABABAB"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        <div>
          <ul className="user-opt">
            <li>
              <img src="assets/logo.png" alt="logo" className="logo-icon" />
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
              >
                <path
                  d="M5.16666 4.83594H7.50572C8.24415 4.83594 8.61337 4.83594 8.88277 5.04283C9.15217 5.24972 9.24745 5.60643 9.43799 6.31985L9.66671 7.17622C9.92503 8.14336 10.0542 8.62694 10.3494 8.97207C10.5306 9.1839 10.7541 9.35551 11.0055 9.47591C11.4151 9.67206 11.9156 9.67206 12.9167 9.67206V9.67206"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M23.25 20.5534H9.67976C9.22201 20.5534 8.99313 20.5534 8.82894 20.4943C8.43335 20.3519 8.16907 19.9772 8.16764 19.5568C8.16704 19.3823 8.24383 19.1667 8.39739 18.7354V18.7354C8.56122 18.2754 8.64313 18.0454 8.76227 17.857C9.04563 17.4091 9.49521 17.092 10.0122 16.9753C10.2296 16.9263 10.4738 16.9263 10.9621 16.9263H18.0833"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.5601 16.9265H13.684C12.0825 16.9265 11.2817 16.9265 10.7244 16.4597C10.1671 15.9929 10.0267 15.2045 9.74595 13.6278L9.66947 13.1983C9.37837 11.5634 9.23281 10.7459 9.68246 10.2091C10.1321 9.67236 10.9624 9.67236 12.623 9.67236H22.4975C23.9871 9.67236 24.7318 9.67236 25.0231 10.1581C25.3143 10.6439 24.9634 11.3009 24.2616 12.6147L23.0883 14.8112L23.0883 14.8112C22.5377 15.8419 22.2625 16.3572 21.7876 16.6419C21.3128 16.9265 20.7286 16.9265 19.5601 16.9265Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <ellipse
                  cx="21.9583"
                  cy="24.1807"
                  rx="1.29167"
                  ry="1.20903"
                  fill="white"
                />
                <ellipse
                  cx="11.625"
                  cy="24.1807"
                  rx="1.29167"
                  ry="1.20903"
                  fill="white"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
              >
                <path
                  d="M4.42883 13.171L10.8326 18.8018L10.8326 18.8018C10.9903 18.9405 11.0691 19.0098 11.1556 19.042C11.2681 19.0838 11.3918 19.0838 11.5042 19.042C11.5908 19.0098 11.6696 18.9405 11.8273 18.8018L18.2311 13.171C20.1718 11.4645 20.4037 8.52413 18.7545 6.53448L18.6323 6.38707C16.7419 4.10639 13.1344 4.50587 11.7888 7.14492C11.5977 7.51973 11.0622 7.51973 10.8711 7.14492C9.52543 4.50587 5.91798 4.10638 4.02754 6.38707L3.90536 6.53448C2.25615 8.52413 2.48808 11.4645 4.42883 13.171Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
              >
                <ellipse
                  cx="9.44164"
                  cy="7.75034"
                  rx="4.72081"
                  ry="4.41879"
                  fill="white"
                />
                <path
                  d="M16.11 18.7093C16.5809 18.6095 16.8619 18.1174 16.6333 17.6937C16.108 16.7204 15.2731 15.8651 14.202 15.2149C12.8363 14.3859 11.163 13.9365 9.44161 13.9365C7.72021 13.9365 6.04692 14.3859 4.68124 15.2149C3.61013 15.8651 2.7752 16.7204 2.2499 17.6937C2.02126 18.1174 2.30227 18.6094 2.77321 18.7093C7.16996 19.6413 11.7133 19.6413 16.11 18.7093Z"
                  fill="white"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-select">
        <DropMenu />
        <CategoryBar />
      </div>
    </>
  );
}

export default Header;
