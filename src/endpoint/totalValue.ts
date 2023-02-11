import { Request, Response } from "express";
import { getProducts } from "../data/getProducts";
import { getSpecificUser } from "../data/getSpecificUser";

export async function totalValue(req:Request, res: Response){
    const userId = req.params.userId
    const productsIdsList = req.body.productsIds
    try {
        const allProducts = await getProducts()

        const user = await getSpecificUser(userId)
        const filteredProducts = allProducts.filter((product:any) => productsIdsList.includes(product.id))
        const totalWithoutTax = filteredProducts.reduce((accumulator:number, currentValue:any) => accumulator + currentValue.price, 0)
        const totalWithTax = totalWithoutTax * (user.tax  / 100)
        const result = {
            totalWithoutTax,
            userTax: user.tax,
            totalWithTax
        }
    
        res.status(200).send(result)

    } catch {
        res.status(404).send({"message": "user not found"})
    }
}
