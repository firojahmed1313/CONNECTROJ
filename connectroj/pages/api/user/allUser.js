import dbConnect from "@/backend/config/dbConnect";
import { getUser } from "@/backend/controler/userControler";
dbConnect();
export default async (req,res,next)=>{
    switch (req.method) {
        case "GET":
            await getUser(req,res)
            break;
    
        default:
            break;
    }
}