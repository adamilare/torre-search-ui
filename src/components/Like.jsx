import PropTypes from "prop-types";
import { MdFavorite } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFavorite, addFavorite } from "../store/favorite/favoriteThunk";
import Person from "../models/person.model";
import { useState } from "react";

const Like = ({ item, isFavorite }) => {
  const dispatch = useDispatch();
  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);

  const handleClick = () => {
    if (isFavoriteState) {
      dispatch(removeFavorite(item.ardaId));
      setIsFavoriteState(!isFavoriteState);
    } else {
      dispatch(addFavorite(new Person(item)));
      setIsFavoriteState(!isFavoriteState);
    }
    // dispatch(setFavorite(new Person(item)));
    // setIsFavoriteState(!isFavoriteState);
  };

  return (
    <span
      className={`fav-icon ${isFavoriteState ? "active" : ""}`}
      onClick={handleClick}
    >
      <MdFavorite />
    </span>
  );
};

Like.propTypes = {
  item: PropTypes.shape({
    ardaId: PropTypes.number.isRequired,
  }).isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default Like;
