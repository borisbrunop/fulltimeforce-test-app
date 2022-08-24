import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { FavButton, ManageLoadScreen, Button, ManageImages, Loader } from '../../commons';
import { useAxios, useToast, useFavs } from '../../hooks';
import { FavItem } from '../../interfaces';
import { Products } from '../../services'

export type MyParams = {
    id: string;
};

export function ProductDetails() {
    const { id } = useParams<keyof MyParams>() as MyParams;
    const { product } = Products({ id: parseInt(id) })
    const navigate = useNavigate()
    const [workingDelete, setWorkingDelete] = useState<boolean>(false);
    const { handleAxios } = useAxios();
    const { notify } = useToast([
        {
            position: 'bottom-center',
            type: 'success',
            key: 's'
        }
    ])

    const {
        handleOnFav,
        handleOnNotFav,
        retieveFavsFromLocalStorage,
        favs
    } = useFavs()

    useEffect(() => {
        retieveFavsFromLocalStorage()
    }, [retieveFavsFromLocalStorage])

    const deleteProduct = () => {
        const configAxiosDelete = {
            path: '/products/delete',
            method: 'delete',
            body: { product_id: id },
            postFetch: (res: { data: number, message: string }) => {
                if (notify.s) {
                    notify?.s(res.message)
                }
                navigate('/')
                handleOnNotFav(parseInt(id))
            },
            setWork: setWorkingDelete
        }
        handleAxios(configAxiosDelete)
    }

    return (
        <ManageLoadScreen loading={!product}>
            <div className='flex flex-col justify-center items-center'>
                <div className='text-darkSecondary w-full mx-5 lg:w-1/2'>
                    <div className='w-full flex justify-between mt-10 mb-3'>
                        <Button className='py-2 px-5 rounded-full' onClick={() => navigate(`/product/edit/${product?.product_id}`)}>
                            <p>Edit</p>
                        </Button>
                        <div className="flex items-center">
                            <Loader type='normal' visable={workingDelete} size="40" />
                            <Button disable={workingDelete} className='py-2 px-5 rounded-full ml-2' type="cancel" onClick={() => deleteProduct()}>
                                <p>Delete</p>
                            </Button>
                        </div>
                    </div>
                    <ManageImages image_url={product?.image_url} title={product?.name || ''} />
                    <div className='flex text-5xl w-full justify-between py-5'>
                        <p>{product?.name}</p>
                        <p>{`$${product?.price}`}</p>
                    </div>
                    <FavButton
                        handleOnFav={() => product ? handleOnFav(product) : {}}
                        handleOnNotFav={() => handleOnNotFav(parseInt(id))}
                        fav={!!favs.find((prod: FavItem) => prod.id === product?.product_id)}
                    />
                    <p className='py-5'>{product?.description}</p>
                    <div className='border border-darkSecondary rounded-lg'>
                        {product?.attributes &&
                            Object.keys(product?.attributes).map((key: string, index: number) =>
                                <div key={index} className={`flex justify-between w-full border-darkSecondary py-2 px-4 ${index === 1 && 'border-t'} ${index === 0 || index === Object.keys(product?.attributes).length - 1 ? 'border-none' : 'border-b '}`}>
                                    <p>{key}</p>
                                    <p>{product?.attributes[key]}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </ManageLoadScreen>
    )
}
