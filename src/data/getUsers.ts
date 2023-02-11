import axios from "axios";
import { CustomError } from "../error/CustomError";

export async function getUsers() {
    try{
        const {data} = await axios.get('https://mockend.com/juunegreiros/BE-test-api/users')
        
        return data
    }catch(error:any){
        throw new CustomError(error.statusCode, error.message)
    };    
}