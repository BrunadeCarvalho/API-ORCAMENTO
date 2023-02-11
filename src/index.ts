import { app } from "./app";
import { products } from "./endpoint/products";
import { totalValue } from "./endpoint/totalValue";
import { users } from "./endpoint/user";

app.get("/users", users)
app.get("/products", products)
app.post("/total-value/:userId", totalValue)