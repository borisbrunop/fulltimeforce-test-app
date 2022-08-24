import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface FavButtonTypes {
    fav: boolean,
    handleOnNotFav: () => void,
    handleOnFav: () => void
}

export function FavButton({ fav, handleOnFav, handleOnNotFav }: FavButtonTypes) {


    return (
        <>
            {fav ? (
                <AiFillHeart className='cursor-pointer transition-all text-primary text-3xl' onClick={() => handleOnNotFav()} />
            ) : (
                <AiOutlineHeart className='cursor-pointer transition-all text-primary text-3xl' onClick={() => handleOnFav()} />
            )}
        </>
    )
}
