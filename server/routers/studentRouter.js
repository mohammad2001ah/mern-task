const express = require("express")
const {getStudent,addStudent,findStudentByID,studentUpdate,deleteStudentByID}=require('../controller/studentController')
const router=express.Router();
//get student
router.get('/student',getStudent);
//post student
router.post('/student',addStudent);
//get student by id
router.get('/student/:id',findStudentByID);
//update student info
router.put('/student/:id',studentUpdate);
//delete student
router.delete('/student/:id',deleteStudentByID);



module.exports=router;