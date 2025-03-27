
import mongoose, { Document, Schema } from 'mongoose';
export interface Message extends Document{
    name:string;
    email:string;
    subject:string;
    message:string;
    createdAt:Date;
}

export default Message;
const messageSchema=new Schema<Message>({
    name:{
        type:String,
        
    },
    email:{
        type:String,
       
    },
    subject:{
        type:String,
        
    },
    message:{
        type:String,
        
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

export const MessageModel=mongoose.model<Message>("Message",messageSchema);
