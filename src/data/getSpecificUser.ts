import axios from "axios";

export async function getSpecificUser(userId:string) {
    try{
        const {data} = await axios.get(`https://mockend.com/juunegreiros/BE-test-api/users/${userId}`)
        
        return data
    }catch(error:any){
        throw new Error(error.message)
    };    
}
