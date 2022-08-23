import NoImageFound from '../assests/NoImageFound.png'

export default function ManageImages({image_url, title}: {image_url?: string, title: string}) {
  return (
    <>
                    {image_url ?

<div className={`h-[400px]`}>
            <img style={{height: '100%', width: '100%'}} className='object-cover rounded-t-lg' src={image_url} alt={title} />
            </div>
            :
            <div className={`h-[400px]`}>
                <img style={{height: '100%', width: '100%'}} className='object-cover rounded-t-lg' src={NoImageFound} alt={title} />
            </div>
        }
    </>
  )
}
