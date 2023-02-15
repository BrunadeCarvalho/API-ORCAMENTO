import { totalValue } from "./endpoint/totalValue"
import { products } from "./endpoint/products"
import { users } from "./endpoint/user"
import express from "express"
import cors from 'cors'

export const app = express()

app.use(express.json())
app.use(cors())

app.get("/users", users)
app.get("/products", products)
app.post("/cart/:userId", totalValue)

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});