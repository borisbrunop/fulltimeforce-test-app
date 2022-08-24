import { useCallback, useEffect, useState } from "react";
import { useAxios } from "../hooks";
import { ProductsTypes } from "../interfaces";

interface ProductServiceTypes {
  id?: number;
  search?: string;
}

export function Products({ id, search }: ProductServiceTypes) {
  const [products, setProducts] = useState<ProductsTypes[] | []>();
  const [product, setProduct] = useState<ProductsTypes | null>();
  const { handleAxios } = useAxios();

  const handleCall = useCallback(
    async (recall?: boolean) => {
      if (recall) {
        setProducts([]);
        setProduct(null);
      }
      if (!id) {
        const configAxiosProducts = {
          path: `/products/search/${search || ""}`,
          method: "get",
          postFetch: (res: ProductsTypes[]) => {
            setProducts(res);
          },
        };
        await handleAxios(configAxiosProducts);
      } else {
        const configAxiosOneProduct = {
          path: `/products/${id}`,
          method: "get",
          postFetch: (res: ProductsTypes) => {
            setProduct(res);
          },
        };
        await handleAxios(configAxiosOneProduct);
      }
    },
    [id, handleAxios, search]
  );

  useEffect(() => {
    handleCall();
  }, [search, handleCall]);

  return { products, product, recall: handleCall };
}
