const e = require('express');
const Student =require('../model/Student');

// add student
exports.addStudent=async(req,res)=>{
  try {
    const {name,age,studentClass,email,phone}=req.body;
    const student={name:name,age:age,studentClass:studentClass,email:email,phone:phone};
    const newStudent=new Student(student);
    await newStudent.save();
    res.status(200).json({
      massage:'student created successfully'
    });
  } 
  catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({
        message:'Server error',
        error:error.message
    });
  }
}

//get all student
exports.getStudent=async(req,res)=>{
  try{
    const student =await Student.find();
    res.json(student);
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}
//find student by id
exports.findStudentByID=async(req,res)=>{
  try {
    const {id}=req.params;
    const student=await Student.findById(id);
    if(!student){
      return res.status(400).json({
        message:'Student not found'
      });
    }
    res.status(200).json({
      message:'Student found',
      student:student
    })
  } catch (error) {
    console.error(`Error: ${error.message}`);
        res.status(500).json({
            message:'Server error',
            error:error.message
        });
  }
}
// update info for student
exports.studentUpdate=async(req,res)=>{
  console.log("Update info for student");
  try {
    const {id}=req.params;
    const {name,age,studentClass,email,phone}=req.body;
    const student =await Student.findByIdAndUpdate(id,{
      name:name,
      age:age,
      studentClass:studentClass,
      email:email,
      phone:phone
    })
    if(!student){
      return res.status(400).json({
        message:'Student not found'
      });
    }
    res.status(200).json({
      message:'Student Updated successfully',
      student:student
    })
  } catch (error) {
    console.error(`Error: ${error.message}`);
        res.status(500).json({
            message:'Server error',
            error:error.message
        });
  }
}
//remove student
exports.deleteStudentByID=async(req,res)=>{
  console.log("Delete user by id...");
  try {
    const {id} = req.params;
    const student=await Student.findByIdAndDelete(id);
    if(!student){
      return res.status(400).json({
        message:'Student not found'
      });
    }
    res.status(200).json({
      message:'Student deleted successfully'
    })
  } catch (error) {
    console.error(`Error: ${error.message}`);
        res.status(500).json({
            message:'Server error',
            error:error.message
        });
  }
}
