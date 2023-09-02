import axios from "axios";

export const login = (data) => {
  axios.post('https://fakestoreapi.com/users', data).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
} 