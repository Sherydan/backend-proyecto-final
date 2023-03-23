const app = require("../../server"); 
const supertest = require("supertest");
const request = supertest(app);


describe("Store CRUD operations", () => {
    it("Should create a new store", async (done) => {
        const response = await request.post("/store").send({
            name: "Test Store",
            rut: "12345678-9",
            email: "test@test.com",	
            adress: "Test adress",
            industry: "Test industry",
        });
        expect(response.status).toBe(200);
        done();

    });
    it("Should get store data", async (done) => {
        const response = await request.get("/store").send({
            name: "Test Store",
        });
        expect(response.status).toBe(200);
        done();
    }
    );
    it("Should update store data", async (done) => {
        const response = await request.put("/store").send({
            name: "Test Store",
            adress: "Test adress updated",
        });
        expect(response.status).toBe(200);
        done();
    });
    it("Should delete store", async (done) => {
        const response = await request.delete("/store").send({
            name: "Test Store",
        });
        expect(response.status).toBe(200);
        done();
    });
});


// describe("User CRUD operations", () => {
//     it("Should create a new user", async (done) => {
//         const response = await request.post("/user").send({
//             email: "usertest@test.com",
//             password: "12345678",
//             rol: "user",
//             first_name: "Test",
//             last_name: "User",
//         });
//         expect(response.status).toBe(200);
//         done();
//     });
//     it("Should get user data", async (done) => {
//         const response = await request.get("/user").send({
//             email: "usertest@test.com",
//         });
//         expect(response.status).toBe(200);
//         done();
//     });
//     it("Should update user data", async (done) => {
//         const response = await request.put("/user").send({
//             password:"910111213",
//             rol: "admin"
//         });
//         expect(response.status).toBe(200);
//         done();
//     });
//     it("Should delete user", async (done) => {
//         const response = await request.delete("/user").send({
//             email: "usertest@test.com",
//         });
//         expect(response.status).toBe(200);
//         done();
//     });
// });

         




