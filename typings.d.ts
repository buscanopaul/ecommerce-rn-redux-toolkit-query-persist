export interface Data {
    id: string;
    title: string;
    imageUrl: string;
};

export interface Product {
    index: number;
    item: ProductData;
    id: string;
    title: string;
    imageURL: string;
}

export interface ItemData {
    id: string;
    title: string;
    imageUrl: string
    price: number
    index: number
    item: ProductData;
};

export interface ProductData {
    id: number
    title: string
    price: number
    imageUrl: string
    colors: Colors[]
    sizes: Sizes[]
    quantity: number
}

interface Colors {
    id: string
    value: string
}

interface Sizes {
    id: string
    value: string
}
  