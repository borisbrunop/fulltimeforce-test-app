import { useCallback } from "react";
import { FavItem, ProductsTypes } from "../interfaces";
import { useMainContext } from "./useMainContext";

export function useFavs() {
  const {
    data: { favs },
    actions: { setFavs },
  } = useMainContext();

  const handleOnFav = (product: ProductsTypes) => {
    const objToAdd = {
      id: product.product_id,
      img: product.image_url,
      name: product.name,
    };
    if (favs) {
      localStorage.setItem("favs", JSON.stringify([...favs, objToAdd]));
      setFavs([...favs, objToAdd]);
    } else {
      localStorage.setItem("favs", JSON.stringify([objToAdd]));
      setFavs([objToAdd]);
    }
  };
  const handleOnNotFav = (id: number) => {
    const favsFiltered = favs.filter((item: FavItem) => item.id !== id);
    localStorage.setItem("favs", JSON.stringify(favsFiltered));
    setFavs(favsFiltered);
  };

  const retieveFavsFromLocalStorage = useCallback(() => {
    const favsSession = localStorage.getItem("favs");
    if (favsSession) {
      setFavs(JSON.parse(favsSession));
    }
  }, [setFavs]);

  return {
    handleOnFav,
    handleOnNotFav,
    retieveFavsFromLocalStorage,
    favs,
  };
}
