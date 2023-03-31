const request = require("supertest");
const server = require("../../app");

const { faker } = require("@faker-js/faker");

// create a function that login and returns a token
const login = async () => {
    const response = await request(server).post("/login").send({
        email: "aaaadmin@admin.com",
        password: "Damagedonelpq09!",
    });
    return response.body;
};

const jwt = login();