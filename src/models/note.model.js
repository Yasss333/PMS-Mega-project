import { Timestamp } from "mongodb";
import moongoose,{Schema} from "moongoose";

const NotesSchema=new Schema({
    project:{
        type:Schema.Types.ObjectId,
        ref:"Project",
        required:"True"
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:"True"
    },
    content:{
        type:String,
        required:"True"

    }
},{timestamps:true});

export const ProjectNotes= moongoose.model('ProjectNotes', NotesSchema);
