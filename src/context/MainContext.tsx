import { createContext } from "react";
import { FavItem } from "../interfaces";

const MainContext = createContext({
    data:{
        search: '',
        favs: [{
            id: 0,
            name: '',
            img: ''
        }],
    },
    actions: {
        setSearch: (search: string) => {},
        setFavs: (search: FavItem[]) => {}
    }
})

export default MainContext;