import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAxios, useToast } from "../../hooks";
import { ProductsTypes } from "../../interfaces";
import uniqid from "uniqid";

export default function ProductFormLogic() {
  const [working, setWorking] = useState<boolean>(false);
  const [formType, setFormType] = useState<string>();
  const [name, setName] = useState<string>();
  const [sku, setSku] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [description, setDescription] = useState<string>();
  const [attributes, setAttributes] = useState<{ [key: string]: string }[]>([]);
  const [product, setProduct] = useState<ProductsTypes>();
  const { handleAxios } = useAxios();
  const navigate = useNavigate();
  const { id } = useParams();
  const { notify } = useToast([
    {
      position: "bottom-center",
      type: "success",
      key: "s",
    },
  ]);

  const handleCallProduct = useCallback(async () => {
    if (id) {
      setFormType("e");
      const configAxiosOneProduct = {
        path: `/products/${id}`,
        method: "get",
        postFetch: (res: ProductsTypes) => {
          setProduct(res);
          setName(res.name);
          setDescription(res.description);
          const attributesMapped = Object.keys(res.attributes).map(
            (key: string) => ({ key, value: res.attributes[key], id: uniqid() })
          );
          setAttributes(attributesMapped);
          setPrice(res.price);
          setSku(res.sku);
        },
      };
      handleAxios(configAxiosOneProduct);
    } else {
      setFormType("a");
    }
  }, [setFormType, handleAxios, id]);

  useEffect(() => {
    handleCallProduct();
  }, [handleCallProduct]);

  const validateFrom = useMemo(
    () => !name || !sku || !price || !description || attributes.length === 0,
    [name, sku, price, description, attributes]
  );

  const handleButton = async () => {
    const attibrutesMapped = attributes.reduce(
      (a, v) => ({ ...a, [v.key]: v.value }),
      {}
    );
    if (formType === "e") {
      const configAxiosEdit = {
        path: "/products/edit",
        method: "put",
        body: {
          product_id: product?.product_id,
          name,
          sku,
          price,
          description,
          attributes: attibrutesMapped,
          image_url: product?.image_url,
          update_at: new Date(),
        },
        postFetch: (res: { message: string; data: ProductsTypes }) => {
          console.log("RES EDIT", res);
          setProduct(res.data);
          setFormType("e");
          if (notify.s) {
            notify?.s(res.message);
          }
        },
        setWork: setWorking,
      };
      await handleAxios(configAxiosEdit);
    } else {
      const configAxiosAdd = {
        path: "/products",
        method: "post",
        body: {
          name,
          sku,
          price,
          description,
          attributes: attibrutesMapped,
          image_url: product?.image_url || null,
        },
        postFetch: (res: ProductsTypes) => {
          console.log("RES ADD", res);
          setProduct(res);
          setFormType("e");
          if (notify.s) {
            notify?.s("Product added successfuly");
          }
          navigate(`/product/edit/${res.product_id}`);
        },
        setWork: setWorking,
      };
      await handleAxios(configAxiosAdd);
    }
  };

  return {
    setName,
    name,
    setSku,
    sku,
    setPrice,
    price,
    setDescription,
    description,
    setAttributes,
    attributes,
    product,
    setProduct,
    validateFrom,
    handleButton,
    formType,
    id,
    working,
  };
}
