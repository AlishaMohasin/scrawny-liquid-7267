import axios from "axios"

export const getsignindata = () => {
    return axios.get("https://muddy-train-bass.cyclic.app/Signup")

}
export const getdata = ({ text, sort } ) => {
    return axios.get(`https://muddy-train-bass.cyclic.app/tickets?q=${text}&_sort=owner&_order=${sort}`
       
    )
}
export const deletedata = (id) => {
    return axios.delete(`https://muddy-train-bass.cyclic.app/tickets/${id}`)
}
export const postdata = (data) => {
    return axios.post("https://muddy-train-bass.cyclic.app/tickets", data)
    .then(()=>getdata())
}