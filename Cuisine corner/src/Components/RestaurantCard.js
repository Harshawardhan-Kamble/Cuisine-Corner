const RestuarantCard = ({ name, cuisine, rating, price, delivery, img }) => {
  return (
    <div className="res-card">
      <img className="res-logo" src={img} alt="" />
      <h3>{name}</h3>
      <p>{cuisine.join(",")}</p>
      <span>&#9733; {rating}</span>
      <span>&#x2022; {price}</span>
      <span>&#x2022; {delivery}</span>
    </div>
  );
};
export default RestuarantCard;
