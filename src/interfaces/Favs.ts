export interface FavItem {
    id: number,
    name: string,
    img: string
}

export interface useFavsTypes {
    favs: FavItem[],
    setFavs: (favs: FavItem[]) => void
}