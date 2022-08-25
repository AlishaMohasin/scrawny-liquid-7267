import axios from "axios"

export const getsignindata = () => {
    return axios.get("https://alishapi.herokuapp.com/Signup")

}