import moongoose,{Schema} from "moongoose";

const userSchema=new Schema({});

export const User=moongoose.model("User",userSchema);
