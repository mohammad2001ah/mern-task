var studentForm =document.getElementById('studentForm');
var studentId = document.getElementById('studentId');
var nameStudent = document.getElementById('name');
var ageStudent = document.getElementById('age');
var studentClass = document.getElementById('class');
var emailStudent = document.getElementById('email');
var phoneStudent = document.getElementById('phone');
var studentsTableBody = document.querySelector('#studentsTable tbody');

studentForm.addEventListener('submit',function(event){
  event.preventDefault();

  var studentInfo={
    name:nameStudent.value,
    age:ageStudent.value,
    studentClass:studentClass.value,
    email:emailStudent.value,
    phone:phoneStudent.value
  }
  console.log("Student Information :",studentInfo);

  fetch("http://127.0.0.1:5050/api/student",{
    method:"POST",
    headers: {
      'Content-Type': 'application/json'
      },
      body:JSON.stringify(studentInfo)
  })
  .then(res=>res.json()).then(data=>{
    console.log("Student Information :",data);
    alert("student add successfully");
  })
  .catch(err=>{
    console.error("Error creating student:", err);
    alert("Failed to add student");
  })
})