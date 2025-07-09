var studentForm = document.getElementById('studentForm');
var studentId = document.getElementById('studentId');
var nameStudent = document.getElementById('name');
var ageStudent = document.getElementById('age');
var studentClass = document.getElementById('class');
var emailStudent = document.getElementById('email');
var phoneStudent = document.getElementById('phone');
var save = document.getElementById("save");

window.onload = function() {
  const editStudent = localStorage.getItem('editStudent');
  if (editStudent) {
    const student = JSON.parse(editStudent);
    studentId.value = student._id;
    nameStudent.value = student.name;
    ageStudent.value = student.age;
    studentClass.value = student.studentClass;
    emailStudent.value = student.email;
    phoneStudent.value = student.phone;
    localStorage.removeItem('editStudent');
  }
}

studentForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var studentInfo = {
    name: nameStudent.value,
    age: ageStudent.value,
    studentClass: studentClass.value,
    email: emailStudent.value,
    phone: phoneStudent.value
  }
  console.log("Student Information :", studentInfo);

  if (studentId.value) {
    fetch(`http://127.0.0.1:5050/api/student/${studentId.value}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(studentInfo)
    })
    .then(res => res.json())
    .then(data => {
      console.log("Student Information :", data);
      alert("Student updated successfully");
      studentForm.reset();
      window.location.href = 'viewStudent.html';
    })
    .catch(err => {
      console.error("Error Updating student:", err);
      alert("Failed to update student");
    });
  } else {
    fetch(`http://127.0.0.1:5050/api/student`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(studentInfo)
    })
    .then(res => res.json())
    .then(data => {
      console.log("Student Information :", data);
      alert("Student added successfully");
      studentForm.reset();
      window.location.href = 'viewStudent.html';
    })
    .catch(err => {
      console.error("Error creating student:", err);
      alert("Failed to add student");
    });
  }
});
