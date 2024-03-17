import  Jwt  from "jsonwebtoken";

export const createCookie = (user, res, massage) =>{
    const token = Jwt.sign({id:user.id},"FIROJ");
    console.log(token);
    res.status(200).send({
        success: true,
        massage,
        token,
        user,
    })
}