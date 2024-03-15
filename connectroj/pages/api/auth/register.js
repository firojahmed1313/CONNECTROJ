import dbConnect from "@/backend/config/dbConnect";
import { registerUser } from "@/backend/controler/userControler";

dbConnect();
export default async (req,res,next)=>{
    switch (req.method) {
        case "POST":
            await registerUser(req,res);
            break;
    
        default:
            break;
    }
}