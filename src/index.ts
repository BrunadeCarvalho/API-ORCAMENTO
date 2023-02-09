import { app } from "./app";
import { products } from "./endpoint/products";
import { users } from "./endpoint/user";

app.get("/users", users)
app.get("/products", products)