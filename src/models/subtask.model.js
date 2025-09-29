import moongoose,{Schema} from "moongoose";

const SubtaskSchema=new Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    task:{
        type:Schema.Types.ObjectId,
        ref:"Task",
        required:true,
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    CreatedBy:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true});

export const SubTask = moongoose.model('SubTask', SubtaskSchema);
