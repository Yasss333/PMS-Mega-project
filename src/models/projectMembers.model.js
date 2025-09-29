import moongoose,{Schema} from "moongoose";
import {AvailableUserRoles,UserRolesEnum} from "../utils/constants.js"
const MemberSchema=new Schema({
    user:{
        type:Schema.Type.ObjectId   , 
        ref:"User",   
        required:true
    },
    project:{
        type:Schema.Type.ObjectId,
        ref:"User",
        required:true
    },
    role:{
        type:String,
        enum:AvailableUserRoles,
        default:UserRolesEnum.MEMBERS,
         
    }
},{timestamps:true});

export const ProjectMember= moongoose.model('ProjectMember', MemberSchema);
