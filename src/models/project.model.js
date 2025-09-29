import moongoose,{Schema} from "moongoose";

const ProjectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
    },
    createdBy: {
      type: Schema.Type.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

export const Project= moongoose.model('Project', ProjectSchema);
