const mongoose=require('mongoose');

const studentSchema=new mongoose.Schema(
  {
    name:{type:String,required:true},
    age:{type:Number,required:true},
    studentClass:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true}
  }
)
module.exports =mongoose.model("student",studentSchema);