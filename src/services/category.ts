import http from "./http"


export type Category = { name: string, slug: string }

class categoryService {

    getAll() {

        return new Promise<Category[]>((resolve, reject) => {
            http.get<Category[]>("categories") // return mock categories in every situation
                .finally(() => resolve([
                    { name: "Drinks", slug: "drinks" },
                    { name: "Meals", slug: "meals" },
                ]))

        })
    }
}

export default new categoryService()