import NoImageFound from '../assests/NoImageFound.png'
import ManageImages from './ManageImages'

interface CardTypes {
    title: string,
    classNameTitle?: string,
    children: JSX.Element,
    image_url?: string
}
export function Card ({title, image_url,  children, classNameTitle = ''} : CardTypes) {
  return (
    <div className='border border-darkSecondary rounded-lg'>
        <ManageImages image_url={image_url}  title={title}/>
        <p className={classNameTitle + ' pl-5 pt-2'}>{title}</p>
        <div className='p-5'>
        {children}
        </div>
    </div>
  )
}
