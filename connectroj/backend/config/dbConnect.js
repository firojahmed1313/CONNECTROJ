import mongoose from "mongoose";
const dbConnect = () => {
    if (mongoose.Connection.readystate >= 1) {
        console.log("alredy dbconnect");
        return;
    }
    const DB_URL="mongodb+srv://newgitpods:VL6eb0rHhdZJ1gv0@mdfirojahmed.chpjhjr.mongodb.net/?retryWrites=true&w=majority";
    mongoose.connect(DB_URL, {
        dbName: "Connectroj",        
    }).then(() => {
        console.log("detabase connected");
    }).catch((error) => {
        console.log(error());
    });
}
export default dbConnect;