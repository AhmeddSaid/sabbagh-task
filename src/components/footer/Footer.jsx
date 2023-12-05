import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="company-info">
          <h5>COMPANY INFO</h5>
          <p>About Us</p>
          <p>
            Sabbagh Group is a trusted online shop in over the world aims to
            provide a trouble-free shopping experience for the people of the
            world but is also providing ample opportunity for international
            online shopping from Sabbagh Group.
          </p>
        </div>
        <div className="useful-links">
          <h5>Useful Links</h5>
          <a href="#">Browse All Products</a>
          <a href="#">Browse all Categories</a>
          <a href="#">Browse all Brands</a>
        </div>
        <div className="help-support">
          <h5>Help & Support</h5>
          <a href="#">Shipping info</a>
          <a href="#">How to order</a>
          <a href="#">Sell on Sabbagh Group</a>
        </div>
        <div className="customer-care">
          <h5>Customer Care</h5>
          <a href="#">Contact Us</a>
        </div>
      </div>
      <p className="copyright">2023 Sabbagh Group All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
