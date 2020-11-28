export type Iklan = {
    isDeleted: boolean,
    _id: string,
    product_name: string,
    price: number,
    category: Category,
    image: string,
    createdAt: string,
    updatedAt: string,
    __v: number
}

export type Category = {
    _id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    __v: number
}