import { useEffect, useRef, useState } from "react";
import { ManageImages } from "../commons";
import { useFavs } from "../hooks";
import { AiFillHeart } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';

export function FavsDropDown({ className = '' }: { className?: string }) {
    const [show, setShow] = useState<boolean>(false)
    const wrapperRef = useRef<HTMLDivElement>(null);

    const {
        handleOnNotFav,
        retieveFavsFromLocalStorage,
        favs
    } = useFavs()

    useEffect(() => {
        retieveFavsFromLocalStorage()
    }, [retieveFavsFromLocalStorage])

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShow(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    return (
        <div className={`relative lg:mr-5 ${className}`}>
            <AiFillHeart className='cursor-pointer transition-all text-primary text-3xl' onClick={(e) => { e.preventDefault(); setShow(!show) }} />
            {show &&
                <div ref={wrapperRef} className={`absolute top-10 -left-[230px] lg:-left-[130px] bg-white ${favs.length > 0 ? 'border border-soft' : ''} p-2 rounded-lg`}>
                    {favs.length > 0 &&
                        favs.map((fav) =>
                            <div className="flex justify-between items-center py-1 w-[250px]">
                                <ManageImages title={fav.name} image_url={fav.img} className="!w-[30px] !h-[30px] cursor-default" />
                                <p className="cursor-default ">{fav.name}</p>
                                <MdDeleteOutline
                                    className="text-2xl cursor-pointer"
                                    onClick={() => handleOnNotFav(fav.id)}
                                />
                            </div>
                        )
                    }
                </div>
            }
        </div>
    )
}
