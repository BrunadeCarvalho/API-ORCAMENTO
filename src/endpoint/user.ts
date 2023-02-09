import { Request, Response } from "express";
import { getUsers } from "../data/getUsers";

export async function users(req:Request, res: Response){
    const result = await getUsers()

    res.status(200).send(result)
}