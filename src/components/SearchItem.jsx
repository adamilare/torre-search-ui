import PropTypes from "prop-types";
import Like from "./Like";
import { useDispatch } from "react-redux";
import { addNewRecentSearch } from "../store/search/searchThunk";
import Person from "../models/person.model";

function SearchItem({ item, isFavorite }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addNewRecentSearch(new Person(item)));
  };

  return (
    <div className="search-item">
      <Like item={item} isFavorite={isFavorite} />
      <a
        href={`https://torre.ai/${item.username}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        <h3>{item.name}</h3>
      </a>
    </div>
  );
}

SearchItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  isFavorite: PropTypes.bool,
};

export default SearchItem;
