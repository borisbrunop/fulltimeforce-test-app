import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom'
import { FavButton, FileInput, ManageLoadScreen } from '../../commons';
import Button from '../../commons/Button';
import ManageImages from '../../commons/ManageImages';
import { useAxios } from '../../hooks';
import { Products } from '../../services'

export type MyParams = {
    id: string;
  };

export function ProductDetails() {
    const [fav, setFav] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<string | null | ArrayBuffer>();
    const { id } = useParams<keyof MyParams>() as MyParams;
    const {product, recall} = Products(parseInt(id))
    const fileRef = useRef<HTMLHeadingElement>(null);
    const {handleAxios} = useAxios();
    // console.log('IMAGE', Buffer.from(selectedImage))

    const handleUploadImage = async () => {
        const configAxios = {
            path: '/products/addImage',
            method: 'post',
            body: {
                product_id: id,
                file: selectedImage
            },
            postFetch: (res: any) => {
                console.log('RES 200', res)
                recall(true)
            },
            postErrorFetch: (err: any) => {
                console.log('ERROR', err)
            }
        }
        await handleAxios(configAxios);
    }

  return (
    <ManageLoadScreen loading={!product}>
        <div className='flex flex-col justify-center items-center'>
            <div className='text-darkSecondary w-1/2 mt-10'>
                {/* <img src={product?.image_url} alt={product?.name}  className="rounded"/> */}
                <ManageImages image_url={product?.image_url}  title={product?.name || ''}/>
                <div className='flex text-5xl w-full justify-between py-5'>
                <p>{product?.name}</p>
                <p>{`$${product?.price}`}</p>
                </div>
                <FavButton fav={fav} favOnClick={() => {setFav(!fav); recall(true)}} notFavOnClick={() => {setFav(!fav); recall(true)}}/>
                <p className='py-5'>{product?.description}</p>
            </div>
        <FileInput fileRef={fileRef} setSelectedImage={setSelectedImage} />
        <Button className='px-5 py-2 rounded-full mt-5' disable={!selectedImage} onClick={() => handleUploadImage()} >
            <p>Upload</p>
        </Button>
        </div>
    </ManageLoadScreen>
  )
}
