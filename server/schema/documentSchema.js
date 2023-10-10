import mongoose from "mongoose";

const documentSchema=mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    data:{
        type:Object,
        required:true
    }
});
const document =mongoose.model('Document', documentSchema);

export default document;