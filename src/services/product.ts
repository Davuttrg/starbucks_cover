import http from "./http"


export type Product = {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string
}

class productService {

    getAll() {

        return new Promise((resolve, reject) => {
            http.get<Product[]>("products")
                .finally(() => resolve([
                    {
                        id: "1",
                        title: "Title",
                        price: 1,
                        category: "cat",
                        description: "string",
                        image: "string"
                    }
                ]))

        })
    }
}

export default new productService()