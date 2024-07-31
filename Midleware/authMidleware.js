import jsonwebtoken from "jsonwebtoken";


export const authMidleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]
    jsonwebtoken.verify(token,"1234",(err,result)=>{
        if (err) {
            res.send("please log in");
        } else {
            req.user = result;
            next();
        }
    })

}