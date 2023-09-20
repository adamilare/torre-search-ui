import { useSelector } from "react-redux";
import SearchItem from "./SearchItem";
import { useEffect, useState } from "react";

function FavoriteItems() {
  const { favorites } = useSelector((store) => store.favorite);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (favorites !== null && favorites !== undefined && favorites.length > 0) {
      setItems(favorites);
    }
  }, [favorites]);

  if (items === null || items === undefined || items.length < 1) return null;

  const getFavoriteItems = () => {
    return items.map((item) => {
      return <SearchItem key={item.ardaId} item={item} isFavorite={true} />;
    });
  };

  return (
    <>
      <div className="">
        <div className="search-items">{getFavoriteItems()}</div>
      </div>
    </>
  );
}

export default FavoriteItems;
