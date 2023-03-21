import http from "./http"


export type Category = { name: string }

class categoryService {

    getAll() {
        return http.get<Category[]>("categories")
    }
}

export default new categoryService()