import dbConnection from "@/lib/dbConnection";
import { MessageModel } from "@/models/message";
export async function POST(req:Response) {
    await dbConnection();
    try{
        const data = await req.json();
        console.log(data);
        const message = new MessageModel({
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message
            
        });
        await message.save();
        return Response.json({
            success:true,
            message:"Data saved successfully"
        })

    }catch(err)
    {
        return Response.json({
            successs:false,
            message:"Error occure while saving data"
        })
    }
    
}