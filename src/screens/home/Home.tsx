import { useNavigate } from 'react-router-dom'
import { Card, Loader, LargeText, ManageLoadScreen } from '../../commons'
import { ProductsTypes } from '../../interfaces'
import {Products} from '../../services'

export const Home = () => {
  const {products} = Products()
  let navigate = useNavigate();
  return (
    <ManageLoadScreen loading={!products}>
    {products ?

    <div className='grid gap-4 grid-cols-1 md:grid-cols-3 content-center mt-40'>
      {products.map(({name, price, description, product_id, image_url}: ProductsTypes, index: number) => 
        <Card image_url={image_url} title={name} key={index} classNameTitle="text-darkSecondary text-2xl">
          <div className="text-darkSecondary h-[250px] flex flex-col justify-between ">
            <div>
            <p className="font-bold text-xl py-2">{`$${price}`}</p>
            <LargeText maxLength={155} cutValue={151} value={description} />
            </div>
            <span className=' cursor-pointer font-bold  w-full flex justify-end pr-5 pt-5' onClick={() => { navigate(`/product/${product_id}` || '', { replace: true }) }}>See More</span>
          </div>
        </Card>
      )}
      </div>
      :<Loader />
    }
      </ManageLoadScreen>
)
}

