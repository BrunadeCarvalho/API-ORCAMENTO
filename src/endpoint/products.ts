import { Request, Response } from "express";
import { getProducts } from "../data/getProducts";

export async function products(req:Request, res: Response){
    try{
        const result = await getProducts()
    
        res.status(200).send(result)
    }catch{
        res.status(400).send({"messaeg":"Try again later"})
    }
}