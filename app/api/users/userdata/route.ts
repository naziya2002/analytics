import { getDataFromToken } from "@/Helpers/getDataFromToken";
import { NextRequest,NextResponse } from "next/server";
import User from "@/models/userModal"
import {connect} from '@/dbConfig/dbconfig'





connect();
export async function GET(request:NextRequest){
    try{
const userID=   await  getDataFromToken(request);
 const user=await User.findOne({_id:userID}).
 select("-password-isVerified-isAdmin-email");
 return NextResponse.json({
    message:"User found",
    data:user
 })
    }catch(error:any){
        return NextResponse.json({error:error.message},
            {status:400})

    }
}