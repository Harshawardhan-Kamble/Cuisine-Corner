const Shimmer = () => {
  const shimmerCards = Array(16)
    .fill(null)
    .map((_, index) => <div className="shimmer-card" key={index}></div>);

  return <div className="shimmer-Container">{shimmerCards}</div>;
};

export default Shimmer;
