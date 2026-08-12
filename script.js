// School Results Portal
// NextGen Software Development Capstone Project

const studentResults = {
  "STU001": {
    name: "Aisha Ibrahim",
    studentId: "STU001",
    className: "SS2",
    session: "2025/2026",
    subjects: [
      { name: "English Language", ca: 25, exam: 60 },
      { name: "Mathematics", ca: 28, exam: 58 },
      { name: "Biology", ca: 26, exam: 62 },
      { name: "Chemistry", ca: 24, exam: 55 },
      { name: "Physics", ca: 27, exam: 59 }
    ]
  },

  "STU002": {
    name: "Mohammed Musa",
    studentId: "STU002",
    className: "SS2",
    session: "2025/2026",
    subjects: [
      { name: "English Language", ca: 22, exam: 52 },
      { name: "Mathematics", ca: 24, exam: 48 },
      { name: "Biology", ca: 27, exam: 57 },
      { name: "Chemistry", ca: 21, exam: 50 },
      { name: "Physics", ca: 25, exam: 54 }
    ]
  }
];

function calculateGrade(total) {
  if (total >= 70) {
    return { grade: "A", remark: "Excellent" };
  } else if (total >= 60) {
    return { grade: "B", remark: "Very Good" };
  } else if (total >= 50) {
    return { grade: "C", remark: "Good" };
  } else if (total >= 45) {
    return { grade: "D", remark: "Fair" };
  } else if (total >= 40) {
    return { grade: "E", remark: "Pass" };
  } else {
    return { grade: "F", remark: "Fail" };
  }
}

function checkResult() {
  const input = document.getElementById("studentId");
  const message = document.getElementById("message");

  const studentId = input.value.trim().toUpperCase();

  if (studentId === "") {
    message.textContent = "Please enter a Student ID.";
    message.style.color = "red";
    return;
  }

  const student = studentResults[studentId];

  if (!student) {
    message.textContent =
      "Student record not found. Try STU001 or STU002.";
    message.style.color = "red";
    return;
  }

  displayResult(student);
}

function displayResult(student) {
  const message = document.getElementById("message");

  let totalMarks = 0;

  let resultRows = "";

  student.subjects.forEach(subject => {
    const total = subject.ca + subject.exam;
    const result = calculateGrade(total);

    totalMarks += total;

    resultRows += `
      <tr>
        <td>${subject.name}</td>
        <td>${subject.ca}</td>
        <td>${subject.exam}</td>
        <td>${total}</td>
        <td>${result.grade}</td>
        <td>${result.remark}</td>
      </tr>
    `;
  });

  const average = (totalMarks / student.subjects.length).toFixed(2);

  message.innerHTML = `
    <div class="result-card">

      <h2>Student Result</h2>

      <div class="student-info">
        <p><strong>Name:</strong> ${student.name}</p>
        <p><strong>Student ID:</strong> ${student.studentId}</p>
        <p><strong>Class:</strong> ${student.className}</p>
        <p><strong>Session:</strong> ${student.session}</p>
      </div>

      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>CA</th>
              <th>Exam</th>
              <th>Total</th>
              <th>Grade</th>
              <th>Remark</th>
            </tr>
          </thead>

          <tbody>
            ${resultRows}
          </tbody>
        </table>
      </div>

      <div class="summary">
        <p><strong>Total Marks:</strong> ${totalMarks}</p>
        <p><strong>Average:</strong> ${average}%</p>
      </div>

    </div>
  `;

  message.style.color = "#222";
       }
