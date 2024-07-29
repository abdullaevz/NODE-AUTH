import express from "express";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import { regUser } from "./registerService/userRegister.js";
import { logUser } from "./loginService/userLogin.js";
configDotenv();

const app = express();
app.use(express.json())

const PORT = process.env.PORT;
const URI = process.env.URI;

app.get("/", (req, res) => {
    res.send("this is a get request")
});

app.post("/register", regUser);
app.post("/login",logUser)






app.listen(PORT, async () => {
    console.log(`Server is runing with port ${PORT}`);
    await mongoose.connect(URI)
    console.log("Database connected");
})