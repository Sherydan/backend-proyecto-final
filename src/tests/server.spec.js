const request = require("supertest");
const server = require("../../app");

describe("Store CRUD operations", () => {
    it("POST /store should return status code 200", async () => {
        // hacer que rut sea dinamico ya que es unico
        const response = await request(server).post("/store").send({
            name: "test store",
            rut: "17550470-9",
            email: "test@store.com",
            adress: "test store",
            industry: "food",
        });

        expect(response.status).toBe(200);


    });
});

// describe("POST /store", () => {
//     it("POST /store should return 200", async () => {
//         const response = await request(server).post("/store").send({
//         name: "test store",
//         rut: "17550470-9",
//         email: "test@store.com",
//         adress: "test store",
//         industry: "food",
// })

//     // it("Should get store data", async (done) => {
//     //     const response = await request(server).get("/store").send({
//     //         name: "Test Store",
//     //     });
//     //     expect(response.status).toBe(200);
//     //     done();
//     // });
//     // it("Should update store data", async (done) => {
//     //     const response = await request(server).put("/store").send({
//     //         name: "Test Store",
//     //         adress: "Test adress updated",
//     //     });
//     //     expect(response.status).toBe(200);
//     //     done();
//     // });
//     // it("Should delete store", async (done) => {
//     //     const response = await request(server).delete("/store").send({
//     //         name: "Test Store",
//     //     });
//     //     expect(response.status).toBe(200);
//     //     done();
//     // });
// // });

// // describe("User CRUD operations", () => {
// //     it("Should create a new user", async (done) => {
// //         const response = await request.post("/user").send({
// //             email: "usertest@test.com",
// //             password: "12345678",
// //             rol: "user",
// //             first_name: "Test",
// //             last_name: "User",
// //         });
// //         expect(response.status).toBe(200);
// //         done();
// //     });
// //     it("Should get user data", async (done) => {
// //         const response = await request.get("/user").send({
// //             email: "usertest@test.com",
// //         });
// //         expect(response.status).toBe(200);
// //         done();
// //     });
// //     it("Should update user data", async (done) => {
// //         const response = await request.put("/user").send({
// //             password:"910111213",
// //             rol: "admin"
// //         });
// //         expect(response.status).toBe(200);
// //         done();
// //     });
// //     it("Should delete user", async (done) => {
// //         const response = await request.delete("/user").send({
// //             email: "usertest@test.com",
// //         });
// //         expect(response.status).toBe(200);
// //         done();
// //     });
// // });
