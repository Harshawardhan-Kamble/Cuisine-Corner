const Filter = ({ searchText, setSearchText, handlerOnClick, topRated }) => {
  return (
    <div className="filter">
      <div className="search">
        <input
          className="search-input"
          type="text"
          placeholder="Search for restaurants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="search-button" onClick={handlerOnClick}>
          Search
        </button>
      </div>
      <button className="filter-btn" onClick={topRated}>
        Rating 4.5 +
      </button>
    </div>
  );
};

export default Filter;
