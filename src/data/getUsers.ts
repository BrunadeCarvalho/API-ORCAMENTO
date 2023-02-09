import axios from "axios";

export async function getUsers() {
    try{
        const {data} = await axios.get('https://mockend.com/juunegreiros/BE-test-api/users')
        
        return data
    }catch(error:any){
        throw new Error(error.message)

    };    
}