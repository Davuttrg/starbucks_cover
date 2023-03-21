import { Category } from "./category"
import http from "./http"


export type Product = {
    id: string,
    title: string,
    price: number,
    category: Category | string,
    description: string,
    image: string
}

class productService {

    getAll() {

        return new Promise<Product[]>((resolve, reject) => {
            http.get<Product[]>("products") // return mock products in every situation
                .finally(() => resolve([
                    {
                        id: "1",
                        title: "Title",
                        price: 1,
                        category: "drinks",
                        description: "string",
                        image: "string"
                    }
                ]))

        })
    }
}

export default new productService()