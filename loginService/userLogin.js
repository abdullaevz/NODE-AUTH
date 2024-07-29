import userModel from "../Schema/userSchema.js";
import bcrypt from "bcrypt";

// const match = async (pass1, pass2) => {
//     const a = await bcrypt.compare(password, encPass);
//     return a;
// }

export const logUser = async (req, res) => {
    const { email, password } = req.body;
    const check = await userModel.findOne({ email });
    if (check) {
        const encPass = check.password;
        bcrypt.compare(password, encPass).then(function (result) {
            if (result) {
                res.send("Succesfull login")
            } else {
                res.send("Wrong password")
            }
        });
    } else {
        res.send("Cannot find this email , please register")
    }
}