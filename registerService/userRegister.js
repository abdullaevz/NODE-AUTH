
import userModel from "../Schema/userSchema.js";
import bcrypt from "bcrypt";



export const regUser = async (req, res) => {
    const { username, email, password } = req.body;
    const check = await userModel.findOne({ email });
    if (username && email) {
        if (!check) {
            bcrypt.hash(password, 10, async (err, pass) => {
                await userModel.create({
                    username,
                    email,
                    password:pass
                });
            });

            res.send("Successful signing , go to Login page !")

        } else {
            res.send("This user already exists")
        }
    } else {
        res.send("Invail parameters")
    }
}