import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Loader, LargeText, ManageLoadScreen, FavButton } from '../../commons'
import { useMainContext, useFavs } from '../../hooks'
import useDebounce from '../../hooks/useDebounce'
import { FavItem, ProductsTypes } from '../../interfaces'
import { Products } from '../../services'

export const Home = () => {
  let navigate = useNavigate();

  const {
    handleOnFav,
    handleOnNotFav,
    retieveFavsFromLocalStorage,
    favs
  } = useFavs()

  useEffect(() => {
    retieveFavsFromLocalStorage()
  }, [retieveFavsFromLocalStorage])

  const { data: { search } } = useMainContext();

  const searchDebounce = useDebounce(search)
  const { products } = Products({ search: searchDebounce });

  return (
    <ManageLoadScreen loading={!products}>
      {products ?
        <>
          <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center mt-24'>
            {products.map((product: ProductsTypes, index: number) =>
              <Card image_url={product.image_url} key={index} title={product.name}>
                <>
                  <div className='flex justify-between w-full pb-2 items-center'>
                    <p className="text-darkSecondary text-2xl">{product.name}</p>
                    <FavButton
                      handleOnFav={() => handleOnFav(product)}
                      handleOnNotFav={() => handleOnNotFav(product.product_id)}
                      fav={!!favs.find((prod: FavItem) => prod.id === product.product_id)}
                    />
                  </div>
                  <div className="text-darkSecondary h-[250px] flex flex-col justify-between ">
                    <div>
                      <p className="font-bold text-xl py-2">{`$${product.price}`}</p>
                      <LargeText maxLength={155} cutValue={151} value={product.description} />
                    </div>
                    <span className=' cursor-pointer font-bold  w-full flex justify-end pr-5 pt-5' onClick={() => navigate(`/product/${product.product_id}` || '')}>See More</span>
                  </div>
                </>
              </Card>
            )}
          </div>
        </>
        : <Loader />
      }
    </ManageLoadScreen>
  )
}

