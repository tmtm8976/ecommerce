import axios from "axios"

export const login = async (loginData) => {
    try {
        const response = await axios.post('https://dummyjson.com/auth/login', JSON.stringify(loginData) , {
            headers:{
                'Content-Type': 'application/json'
            }
        })
        console.log(response.data);
        return response.data
    } catch (error) {
        if (error.response && error.response.status === 400) {
            console.log("Wrong credentials.")
        } else {
            console.log("An error occurred while logging in.")
        }
        throw error
    }
}