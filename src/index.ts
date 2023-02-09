import { app } from "./app";
import { users } from "./endpoint/user";

app.get("/users", users)