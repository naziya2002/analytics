import {connect} from "@/dbConfig/dbconfig";
import User from "@/models/userModal";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import { isJSDocThrowsTag } from "typescript";
import jwt from "jsonwebtoken"
import toast from "react-hot-toast"



connect()

export async function POST(request:NextRequest) {
    try{

const reqBody=await request.json()
const {email,password}=reqBody
console.log(reqBody);

//check if user exists
const user=await User.findOne({email})
if(!user){
 
    console.log("email Does not exist")
    return NextResponse.json({error:"User doesnot exists"},
    {status:400})
   
}

//check if password is correct
const validPassword=await bcryptjs.compare(password,user.password)
if(!validPassword){
 
    console.log("InvalidPassword")
    return NextResponse.json({error:"InvalidPassword"},{status:400})
  
}
//create token data
const tokenData={
    id:user._id,
    username:user.username,
    email:user.email
}
//create token
const token =await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "7d" })

const response=NextResponse.json({
    message:"Login sucessful",
    success:true,
})
response.cookies.set("token",token,{
    httpOnly:true,
})
// const [data,setData] =useState('')
// const getUserDetails=async()=>{
 
//     const res=await axios.get('/api/users/userdata')
//     setData(res.data.data._id)
//   }

return response

    }catch(error:any){
        return NextResponse.json({error:error.message},
        {status:500})
    }
}