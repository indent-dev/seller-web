export type Iklan = {
    isDeleted: boolean,
    _id: string,
    product_name: string,
    price: number,
    category: Category,
    image: string,
    createdAt: Date,
    updatedAt: Date,
    __v: number
}

export type Category = {
    _id: string,
    name: string,
    createdAt: Date,
    updatedAt: Date,
    __v: number
}