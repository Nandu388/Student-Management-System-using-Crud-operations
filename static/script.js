let editIndex = -1;

async function fetchStudents() {

    const response = await fetch('/students');
    const students = await response.json();

    const table = document.getElementById('studentTable');
    table.innerHTML = '';

    students.forEach((student, index) => {

        table.innerHTML += `
            <tr>
                <td>${student.name}</td>
                <td>${student.marks}</td>
                <td>${student.attendance}</td>
                <td>${student.result}</td>

                <td>
                    <button onclick="editStudent(${index})">
                        Edit
                    </button>

                    <button onclick="deleteStudent(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

async function addStudent() {

    const name = document.getElementById('name').value;
    const marks = parseInt(document.getElementById('marks').value);
    const attendance = parseInt(document.getElementById('attendance').value);

    const studentData = {
        name,
        marks,
        attendance
    };

    // UPDATE
    if (editIndex !== -1) {

        await fetch(`/students/${editIndex}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(studentData)
        });

        editIndex = -1;

        document.querySelector("button").innerText = "Add Student";
    }

    // CREATE
    else {

        await fetch('/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(studentData)
        });
    }

    clearForm();

    fetchStudents();
}

async function deleteStudent(index) {

    await fetch(`/students/${index}`, {
        method: 'DELETE'
    });

    fetchStudents();
}

async function editStudent(index) {

    const response = await fetch('/students');
    const students = await response.json();

    const student = students[index];

    document.getElementById('name').value = student.name;
    document.getElementById('marks').value = student.marks;
    document.getElementById('attendance').value = student.attendance;

    editIndex = index;

    document.querySelector("button").innerText = "Update Student";
}

function clearForm() {

    document.getElementById('name').value = '';
    document.getElementById('marks').value = '';
    document.getElementById('attendance').value = '';
}

fetchStudents();