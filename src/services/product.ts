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
                .finally(() => resolve(products))

        })
    }
}

const products: Product[] = [
    {
        id: "1",
        title: "Unicorn Frappe",
        price: 12.30,
        category: "drinks",
        description: "A lower-calorie version of the classic latte. Espresso and lactose-free milk come together in perfect harmony to bring lightness to your drink.",
        image: "img/product1.png"
    },
    {
        id: "2",
        title: "Caramel Frappe",
        price: 33.12,
        category: "drinks",
        description: "A lower-calorie version of the classic latte. Espresso and lactose-free milk come together in perfect harmony to bring lightness to your drink.",
        image: "img/product2.png"
    },
    {
        id: "3",
        title: "Unicorn Frappe",
        price: 10.99,
        category: "drinks",
        description: "A lower-calorie version of the classic latte. Espresso and lactose-free milk come together in perfect harmony to bring lightness to your drink.",
        image: "img/product3.png"
    }
]

export default new productService()