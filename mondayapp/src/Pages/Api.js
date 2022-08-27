import axios from "axios"

export const getsignindata = () => {
    return axios.get("https://alishapi.herokuapp.com/Signup")

}
export const getticket = () => {
    return axios.get("https://alishapi.herokuapp.com/tickets")
}