import { Button, InputText, InputNumber, InputTextArea, InputObject, ManageLoadScreen, Loader } from "../../commons";
import { FileForm } from "./components";
import ProductFormLogic from "./ProductFormLogic";


export function ProductForm() {
    const {
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
        working
    } = ProductFormLogic()

    return (
        <ManageLoadScreen loading={id ? !product : false} className="items-center justify-center">
            <>
                <p className="pb-8 text-2xl text-darkSecondary ">{formType === 'e' ? 'EDIT PRODUCT' : 'ADD PRODUCT'}</p>
                <div className="flex flex-col p-5 justify-center items-center border rounded-lg border-darkSecondary w-full mx-5  lg:w-1/2">
                    <InputText value={name || ''} placeholder="Name" label="Name" onChange={(e) => setName(e.target.value)} className="w-full my-1" />
                    <InputText value={sku || ''} placeholder="Sku" label="Sku" onChange={(e) => setSku(e.target.value)} className="w-full my-1" />
                    <InputNumber value={price || 0} placeholder="Price" label="Price" onChange={(e) => setPrice(e.target.value)} className="w-full my-1" />
                    <InputTextArea value={description || ''} title="Description" setValue={setDescription} className="w-full my-1" />
                    <InputObject setArrayValue={setAttributes} arrayValue={attributes} label="Attributes" />
                    <div className="my-5">
                        {product && <FileForm id={product?.product_id} image_url={product?.image_url} postUpload={(url: string) => setProduct({ ...product, image_url: url })} />}
                    </div>
                </div>
                <div className="flex items-center mt-5">
                    <Button onClick={() => handleButton()} className="mr-2 py-2 px-5 rounded-full" disable={validateFrom || working}>
                        <p>Save</p>
                    </Button>
                    <Loader type='normal' visable={working} size="40" />
                </div>
            </>
        </ManageLoadScreen>
    )
}
