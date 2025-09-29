import moongoose,{Schema} from "moongoose";
import {AvailableTaskStatus,TaskStatusEnum} from "../utils/constants"
const taskSchema=new Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
   description:{
     type:String,

   },
   project:{
    type:Schema.Types.ObjectId,
    ref:"User",
    required:true
},
assignedTo:{
    type:Schema.Types.ObjectId,
    ref:"User",
    required:true
   },
   assignedBy:{
    type:Schema.Types.ObjectId,
    ref:"User",
    required:true
   },
   Status:{
    type:String,
    enum:AvailableTaskStatus,
    default:TaskStatusEnum.IN_Progress
   },
   Attachments:{
  type:[{
    url:String,
    MimeType:String,
    size:Number
  }]
   }
},{timestamps:true});

export const Task=moongoose.model("task",taskSchema);
