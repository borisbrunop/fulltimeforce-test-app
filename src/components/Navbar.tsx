import { useMemo } from "react";
import { Toaster } from "react-hot-toast";
import { useLocation, useNavigate, } from "react-router-dom";
import { Button } from "../commons";
import { PATHNAMES_ADD_BUTTON, PATHNAMES_SEARCHBAR } from "../constants";
import { useMainContext } from "../hooks";
import { FavsDropDown } from "./FavsDropDown";

export function Navbar() {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const { data: { search }, actions: { setSearch } } = useMainContext();

    const splitPathname = useMemo(() => pathname.split('/'), [pathname])
    const validatePathnameForButtonAdd = useMemo(() => '/' + splitPathname.map((item: string, index: number) => index === splitPathname.length - 1 ? false : item).filter((item) => item).join('/'), [splitPathname])

    return (
        <div className="w-full flex justify-between items-center p-4 lg:p-8 flex-col lg:flex-row">
            <p className="flex items-center cursor-pointer" onClick={() => navigate('/')} >LOGO</p>
            {PATHNAMES_SEARCHBAR.includes(pathname) &&
                <input
                    className="rounded-lg border-2 border-soft w-full h-12 p-5 mt-2 lg:mt-0 lg:mx-10 text-[#214003] focus:outline-none"
                    type="text"
                    placeholder="Search Products"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            }
            <div className={`flex items-center ${!PATHNAMES_ADD_BUTTON.includes(validatePathnameForButtonAdd) ? 'justify-between' : 'justify-end'} lg:justify-end w-full lg:w-fit mt-5 lg:mt-0`}>
                <FavsDropDown className="hidden lg:flex" />
                {!PATHNAMES_ADD_BUTTON.includes(validatePathnameForButtonAdd) &&
                    <div className="w-fit flex items-center lg:justify-end">
                        <Button onClick={() => navigate('/product/add')} className="px-5 py-2 rounded-full flex items-center justify-end w-fit">
                            <p>Add</p>
                        </Button>
                    </div>
                }
                <FavsDropDown className="lg:hidden" />
            </div>
            <Toaster />
        </div>
    )
}
