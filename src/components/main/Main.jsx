import "./Main.css";

function Main() {
  return (
    <div className="main-section">
      <div className="best-seller">
        <h4 className="title">Best Seller</h4>
        <p>Get a discount on popular products</p>
        <img src="/src/assets/product-1.jpeg" alt="product-1" />
        <div className="price">
          60$ <span className="discount">-25%</span>
        </div>
      </div>
      <div className="right-group">
        <div className="strongest-brands">
          <h4 className="title">The strongest brands</h4>
          <p>Selections at the best prices and best quality</p>
          <div className="items">
            <div>
              <img src="/src/assets/product-2.jpeg" alt="product-2" />
              <div className="price">
                <span>
                  54$<span className="discount">-22%</span>
                </span>
              </div>
            </div>
            <div>
              <img src="/src/assets/product-3.png" alt="product-3" />
              <div className="price">
                <span>
                  60$
                  <span className="discount">-25%</span>
                </span>
              </div>
            </div>
            <div>
              <img src="/src/assets/product-4.png" alt="product-4" />
              <div className="price">
                <span>
                  48$
                  <span className="discount">-15$</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="weekly-deals">
          <h4 className="title">Weekly Deals</h4>
          <div className="details">
            <p>Discounted prices for the last 30 days</p>
            <div className="price">
              <span>
                22$<span className="discount">-48$</span>
              </span>
            </div>
          </div>
          <img src="/src/assets/product-5.png" alt="product-5" />
        </div>
      </div>
    </div>
  );
}

export default Main;
