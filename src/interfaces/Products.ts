export interface ProductsTypes {
    updated_at: Date;
    created_at: Date;
    product_id: number;
    attributes: {[key: string]: string; };
    sku: string;
    price: number;
    name: string;
    description: string;
    image_url: string
}