function editStudent(student) {
  localStorage.setItem('editStudent', JSON.stringify(student));
  location.href = 'createStudent.html';
}
function deleteStudent(id) {
  if (confirm("Are you sure you want to delete this student?")) {
    fetch(`http://127.0.0.1:5050/api/student/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      alert("Student deleted successfully");
      window.location.reload();
    })
    .catch(err => {
      console.error("Error deleting student:", err);
      alert("Failed to delete student");
    });
  }
}

window.onload = function() {
  fetch("http://127.0.0.1:5050/api/student")
    .then(res => res.json())
    .then(data => {
      const tableBody = document.getElementById("studentTableBody");
      tableBody.innerHTML = "";
      if (Array.isArray(data)) {
        data.forEach((student, index) => {
          const row = `
            <tr>
              <th scope="row">${index + 1}</th>
              <td>${student.name}</td>
              <td>${student.age}</td>
              <td>${student.studentClass}</td>
              <td>${student.email}</td>
              <td>${student.phone}</td>
              <td>
                <button class="btn btn-sm btn-warning me-2" onclick='editStudent(${JSON.stringify(student)})'>Edit</button>
                <button class="btn btn-sm btn-danger" onclick='deleteStudent("${student._id}")'>Delete</button>
              </td>
            </tr>`;
          tableBody.innerHTML += row;
        });
      } else {
        tableBody.innerHTML = `<tr><td colspan="6" class="text-center">No student data found.</td></tr>`;
      }
    })
    .catch(error => {
      console.error("Error fetching students:", error);
      alert("Failed to load student data");
    });
}