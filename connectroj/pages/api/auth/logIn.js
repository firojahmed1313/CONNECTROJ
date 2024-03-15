import dbConnect from "@/backend/config/dbConnect";
import { logInUser } from "@/backend/controler/userControler";
dbConnect()
export default async (req,res,next)=>{
    switch (req.method) {
        case "POST":
            await logInUser(req,res)
            break;
    
        default:
            break;
    }
}