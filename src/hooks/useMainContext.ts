import { useContext, useState } from "react";
import MainContext from "../context/MainContext";
import { FavItem } from "../interfaces";

interface useMainContextTypes {
  data: {
    search: string;
    favs: FavItem[] | never[];
  };
  actions: {
    setSearch: (search: string) => void;
    setFavs: (search: FavItem[]) => void;
  };
}

export function useMainStatesContext(): useMainContextTypes {
  const [search, setSearch] = useState("");
  const [favs, setFavs] = useState<FavItem[]>([]);
  return {
    data: { search, favs },
    actions: { setSearch, setFavs },
  };
}

export function useMainContext() {
  return useContext(MainContext);
}
