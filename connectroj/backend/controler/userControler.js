import  {User}  from "../model/user";

export const registerUser = async(req, res, next) => {
    const { name, email, password } = req.body;
    //console.log(email);
    let userExist = await User.findOne({ email });
    console.log(userExist)
    if (userExist) {
        return res.status(200).json({
            success: false,
            massage: "User already exist .....",
        });
    }
    const user= await User.create({
        name, email, password  
    })
    return res.status(201).json({
        success: true,
        massage: "User registation done .....",
        user
    });
}
export const logInUser = async(req, res, next) => {
    const { email, password } = req.body;
    console.log(email);
    let isuserExist = await User.findOne({ email });
    console.log(isuserExist)
    if (!isuserExist) {
        return res.status(200).json({
            success: false,
            massage: "User not exist .....",
        });
    }
    else if (password != isuserExist.password){
        return res.status(200).json({
          success: false,
          massage: "password or email do not match .....",
        });
    }
    return res.status(200).json({
        success: true,
        massage: "User LogIn done .....",
        isuserExist
    });
}

export const  getUserById =async(req,res,next)=>{
    const _id = req.query.id;
    console.log(_id)
    try {
        let user=await User.findById(_id);
        return res.status(201).json({
            success: true,
            user
        });
    } catch (error) {
        console.warn(error)
    }
}
export const  getUser =async(req,res,next)=>{
    try {
        let user=await User.find();
        return res.status(201).json({
            success: true,
            user
        });
    } catch (error) {
        console.warn(error)
    }
}

