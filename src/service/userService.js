import axios from "axios"

export class UserService {
    static url =`https://jsonplaceholder.typicode.com/users`

    static getAllUsers(){
        return axios.get(UserService.url)
    }
}