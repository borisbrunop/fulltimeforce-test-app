import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface FavButtonTypes {
    favOnClick: () => void,
    notFavOnClick: () => void,
    fav: boolean
}

export function FavButton({ favOnClick, notFavOnClick, fav }: FavButtonTypes) {
    return (
        <>
            {fav ? (
                <AiFillHeart className='cursor-pointer transition-all text-primary text-3xl' onClick={notFavOnClick} />
            ) : (
                <AiOutlineHeart className='cursor-pointer transition-all text-primary text-3xl' onClick={favOnClick} />
            )}
        </>
    )
}
