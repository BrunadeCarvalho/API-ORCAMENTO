import { Request, Response } from "express";
import { getProducts } from "../data/getProducts";
import { getUsers } from "../data/getUsers";

export async function products(req:Request, res: Response){
    const result = await getProducts()

    res.status(200).send(result)
}