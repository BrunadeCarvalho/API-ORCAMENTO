import { app } from "../src/app";
import request from "supertest";


describe("Status code tests", () => {
    test("Get /users, status code should be equal 200", async ()=>{
        const result = await request(app).get("/users")
        expect(result.statusCode).toEqual(200)
    }),

    test("Get /products, status code should be equal 200", async ()=>{
        const result = await request(app).get("/products")
        expect(result.statusCode).toEqual(200)
    }),

    test("Post valid user, status code should be equal 200", async ()=>{
        const result = await request(app).post("/cart/1")
        .send({
            "productsIds": [1,2,3]
        })
        expect(result.statusCode).toEqual(200)
    }),

    test("Post invalid user, status code should be equal 404", async ()=>{
        const result = await request(app).post("/cart/1928392")
        .send({
            "productsIds": [1,2,3]
        })
        expect(result.statusCode).toEqual(404)
    }),

    test("Post invalid product id, status code should be equal 404", async ()=>{
        const result = await request(app).post("/cart/2")
        .send({
            "productsIds": [1,2,3, 999]
        })
        expect(result.statusCode).toEqual(404)
    })
}),

describe("Result tests", () => {
    test("Post valid data and user", async ()=>{
        const result = await request(app).post("/cart/1")
        .send({
            "productsIds": [1,2,3]
        })
        expect(result.body).toEqual({
            "totalWithoutTax": 14365,
            "userTax": 79,
            "totalWithTax": 11348
        })
    }),

    test("Post valid data and user", async ()=>{
        const result = await request(app).post("/cart/6")
        .send({
            "productsIds": [6,22]
        })
        expect(result.body).toEqual({
            "totalWithoutTax": 21979,
            "userTax": 83,
            "totalWithTax": 18243
        })
    }),

    test("Post invalid user", async ()=>{
        const result = await request(app).post("/cart/9918")
        .send({
            "productsIds": [6,22]
        })
        expect(result.body).toEqual({"message": "user not found"})
    }),
    
    test("Post invalid product id", async ()=>{
        const result = await request(app).post("/cart/6")
        .send({
            "productsIds": [6,22, 999]
        })
        expect(result.body).toEqual({"message": "at least one product was not found"})
    })
})