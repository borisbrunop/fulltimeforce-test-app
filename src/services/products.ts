import { useEffect, useState } from 'react'
import {useAxios} from '../hooks'
import { ProductsTypes } from '../interfaces'

export function Products(id?: number) {
    const [products, setProducts] = useState<ProductsTypes[] | []>();
    const [product, setProduct] = useState<ProductsTypes | null>();
    const {handleAxios} = useAxios();

    const handleCall = async (recall?: boolean) => {

        // const getProducts = async () => {
            if(recall){
                setProducts([])
                setProduct(null)
            }
            if(!id){
                const configAxiosProducts = {
                    path: '/products',
                    method: 'get',
                    postFetch: (res: ProductsTypes[]) => {
                        setProducts(res)
                    }
                }
                await handleAxios(configAxiosProducts)
            }else{
                const configAxiosOneProduct = {
                    path: `/products/${id}`,
                    method: 'get',
                    postFetch: (res: ProductsTypes) => {
                        setProduct(res)
                    }
                }
                await handleAxios(configAxiosOneProduct)
            }
        // }
        // const getOneProduct = async () => {
        // }
    }


    useEffect(() => {
        handleCall()
        // if(id){
        //     getOneProduct()
        // }else{
        //     getProducts()
        // }
    },[])

  return {products, product, recall: handleCall}
}
