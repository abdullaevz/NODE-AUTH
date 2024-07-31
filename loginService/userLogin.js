import userModel from "../Schema/userSchema.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";


export const logUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
        const encPass = user.password;
        bcrypt.compare(password, encPass).then(function (result) {
            if (result) {
                const token = jsonwebtoken.sign({ email, password }, "1234")
                res.send(`Succesfull login , your token : ${token}`)
            } else {
                res.send("Wrong password")
            }
        });
    } else {
        res.send("Cannot find this email , please register")
    }
}