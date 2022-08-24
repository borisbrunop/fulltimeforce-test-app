import React, { useRef, useState } from 'react'
import { Button, FileInput, Loader, ManageImages } from '../../../commons';
import { useAxios, useToast } from '../../../hooks';

export function FileForm({ id, image_url, postUpload }: { id: number, image_url: string, postUpload?: (url: string) => void }) {
    const [selectedImage, setSelectedImage] = useState<string | null | ArrayBuffer>();
    const [imageData, setImageData] = useState<any>();
    const [working, setWorking] = useState<boolean>(false);
    const fileRef = useRef<HTMLHeadingElement>(null);
    const { handleAxios } = useAxios();
    const { notify } = useToast([
        {
            position: 'bottom-center',
            type: 'success',
            key: 's'
        }
    ])

    const handleUploadImage = async () => {
        setWorking(true)
        const configAxios = {
            path: '/products/addImage',
            method: 'post',
            body: {
                product_id: id,
                file: selectedImage
            },
            postFetch: (res: any) => {
                if (postUpload) {
                    postUpload(res.data.image_url)
                    if (notify.s) {
                        notify.s(res.message)
                    }
                }
            },
            postErrorFetch: (err: any) => {
                console.log('ERROR', err)
            }
        }
        await handleAxios(configAxios);
        setWorking(false)
    }

    return (
        <>
            {(image_url || imageData) && <ManageImages className='mb-5' title={'provisional image'} image_url={imageData ? URL.createObjectURL(imageData) : image_url} />}
            <div className="flex items-center justify-evenly w-full">
                <div className="flex justify-center w-full h-[30px] items-center">
                    <FileInput fileRef={fileRef} setSelectedImage={setSelectedImage} setImageData={setImageData} />
                    <input type="text" disabled={true} className="border-2 pl-2  w-full h-full mx-4 rounded-lg" value={imageData?.name || 'Select Image'} />
                </div>
                <div className="flex justify-center items-center ">
                    <Button className='px-5 py-2 rounded-full' disable={!selectedImage || working} onClick={() => handleUploadImage()} >
                        <p>Upload</p>
                    </Button>
                </div>
            </div>
            <div className='flex w-full justify-center mt-5 '>
                <Loader type='normal' visable={working} size="40" />
            </div>
        </>
    )
}
