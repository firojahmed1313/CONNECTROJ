import dbConnect from "@/backend/config/dbConnect";
import { getUserById } from "@/backend/controler/userControler";
dbConnect()
export default async (req,res,next)=>{
    switch (req.method) {
        case "GET":
            await getUserById(req,res)
            break;
    
        default:
            break;
    }
}