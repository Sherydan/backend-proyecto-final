const request = require("supertest");
const server = require("../../app");

const {faker} = require("@faker-js/faker");

describe("Store CRUD operations", () => {
    const testStore = {
        name: faker.finance.accountName(),
        rut: faker.datatype.uuid(),
        email: faker.internet.email(),
        adress: faker.address.streetAddress(),
        industry: "food",
    };


    console.log("datos store", testStore);
    describe("POST /store", () => {
        it("POST /store should add a new store and return status code 200", async () => {
            // hacer que rut sea dinamico ya que es unico
            console.log("log de server", server);
            // const response = await request(server).put("/store/{id}").send({
            const response = await request(server).post("/store").send(testStore);
            console.log("alo", response);
            expect(response.status).toBe(201);
        });

        // it("POST /store should return a 404 status code if store already exists", async () => {
        //     const response = await request(server).post("/store").send({
        //         name: "test store",
        //         rut: "17550470-21",
        //         email: "test@store.com",
        //         adress: "test store",
        //         industry: "food",
        //     });

        //     expect(response.status).toBe(404);
        // });
        // it("POST /store should return a 500 status code if fields are empty", async () => {
        //     const response = await request(server).post("/store").send({
        //         name: "",
        //         rut: "",
        //         email: "",
        //         adress: "",
        //         industry: "",
        //     });
        //     expect(response.status).toBe(500);
        // });
    });

    // describe("GET /store", () => {
    //     it("GET /store should return status code 200", async () => {
    //         const response = await request(server).get("/store/5").send({
    //             id: "5",
    //         });
    //         expect(response.status).toBe(200);
    //     });

    //     it("GET /store should return an array of stores", async () => {
    //         const response = await request(server).get("/store/5").send({
    //             id: "5",
    //         });
    //         console.log("expect array", Array.isArray(response.body));
    //         expect(response.body).toBeInstanceOf(Array);
    //     });
    // });

    // describe("PUT /store", () => {
    //     it("PUT /store should return status code 200", async () => {
    //         // dejar con id dinamico
    //         const response = await request(server).put("/store").send({
    //             name: "test store",
    //             adress: "test store updated",
    //         });
    //         expect(response.status).toBe(200);
    //     });
    // });

    // describe("DELETE /store", () => {
    //     it("DELETE /store should return status code 200", async () => {
    //         const response = await request(server).delete("/store").send({
    //             id: "2",
    //         });
    //         expect(response.status).toBe(200);
    //     });
    // });
});
