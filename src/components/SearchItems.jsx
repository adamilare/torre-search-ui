import { useSelector } from "react-redux";
import SearchItem from "./SearchItem";
import { useEffect, useState } from "react";

function SearchItems() {
  const { searchResult, recentSearches, isSearching } = useSelector(
    (store) => store.search
  );
  const { favorites } = useSelector((store) => store.favorite);
  const [searchItems, setSearchItems] = useState([]);

  let favIds = null;

  if (favorites !== null) {
    favIds = favorites.map((item) => item.ardaId);
  }

  useEffect(() => {
    if (
      searchResult !== null &&
      searchResult !== undefined &&
      searchResult.length > 0
    ) {
      setSearchItems(searchResult);
    } else if (
      recentSearches !== null &&
      recentSearches !== undefined &&
      recentSearches.length > 0
    ) {
      setSearchItems(recentSearches);
    }
  }, [searchResult, recentSearches]);

  if (
    searchItems === null ||
    searchItems === undefined ||
    searchItems.length < 1 ||
    !isSearching
  )
    return null;

  const getSearchItems = () => {
    return searchItems.map((item) => {
      let isFavorite = false;
      if (favIds !== null && favIds.includes(item.ardaId)) {
        isFavorite = true;
      }
      return (
        <SearchItem key={item.ardaId} item={item} isFavorite={isFavorite} />
      );
    });
  };

  return (
    <>
      <div className="">
        <div className="search-items">{getSearchItems()}</div>
      </div>
    </>
  );
}

export default SearchItems;
