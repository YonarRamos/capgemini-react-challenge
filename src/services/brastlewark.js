import axios from 'axios'
const baseURL = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'

export const getAll = async ()=> {
    const res = await axios.get(baseURL)
    return res.data
}