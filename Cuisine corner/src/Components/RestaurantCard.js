const RestuarantCard = ({ name, cuisine, rating, price, delivery, img }) => {
  return (
    <div className="res-card">
      <img className="res-logo" src={img} alt="" />
      <h3>{name}</h3>
      <p>{cuisine.join(",")}</p>
      <p>{rating}</p>
      <p>{price}</p>
      <p>{delivery}</p>
    </div>
  );
};
export default RestuarantCard;
