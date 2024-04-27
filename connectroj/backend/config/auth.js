import  Jwt  from "jsonwebtoken";
import { User } from "../model/User";

export const isSignin = async(req) =>{
    //console.log("cookies is : ",req.headers.authorization);
    const userId= req.headers.authorization.replace(/"/g, '');
    //console.log(userId);
    const decode = Jwt.verify(userId, "FIROJ");
    //console.log(decode.id);
    const user = await User.findById(decode.id);
    //console.log(user);
    return user;
}

