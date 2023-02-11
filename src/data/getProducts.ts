import axios from "axios";
import { CustomError } from "../error/CustomError";

export async function getProducts() {
    try{
        const {data} = await axios.get('https://mockend.com/juunegreiros/BE-test-api/products')
        
        return data
    }catch(error:any){
        throw new CustomError(error.statusCode, error.message)
    };    
}