import axios from "axios"

export const getsignindata = () => {
    return axios.get("https://alishapi.herokuapp.com/Signup")

}
export const getdata = ( text, sort ) => {
    return axios.get(`https://alishapi.herokuapp.com/tickets?q=${text}&_sort=owner&_order=${sort}`
       
    )
}
export const deletedata = (id) => {
    return axios.delete(`https://alishapi.herokuapp.com/tickets/${id}`)
}
export const postdata = (data) => {
    return axios.post("https://alishapi.herokuapp.com/tickets", data)
    .then(()=>getdata())
}