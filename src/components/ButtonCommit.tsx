import { useLocation, useNavigate } from "react-router-dom"
import { PATHNAMES_BUTTON_COMMITS } from "../constants"

export function ButtonCommit() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <>
      {!PATHNAMES_BUTTON_COMMITS.includes(pathname) &&
        <div className='flex w-full justify-end pr-10 pb-10'>
          <p className='cursor-pointer hover:underline text-xl' onClick={() => navigate('/commits')}>Github Commits</p>
        </div>
      }
    </>
  )
}
