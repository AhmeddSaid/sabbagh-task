import "./Recommended.css";

function Recommended() {
  const items = Array.from({ length: 24 }, (_, index) => (
    <div key={index} className="item">
      <img src="assets/item-1.png" alt="item" />
      <p>text (Title)</p>
      <p className="price">60$</p>
    </div>
  ));

  return (
    <div className="recommended">
      <h4 className="main-title">Recommended</h4>
      <div className="container">{items}</div>
      <div className="view-more">View More</div>
    </div>
  );
}

export default Recommended;
