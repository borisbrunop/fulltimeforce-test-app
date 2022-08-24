import { ManageImages } from './ManageImages'

interface CardTypes {
  children: JSX.Element,
  image_url?: string,
  title: string
}
export function Card({ title, image_url, children }: CardTypes) {

  return (
    <div className='border border-darkSecondary rounded-lg'>
      <ManageImages image_url={image_url} title={title} />
      <div className='p-5'>
        {children}
      </div>
    </div>
  )
}
