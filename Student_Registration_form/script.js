document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.getElementById('studentForm');
    const studentTableBody = document.getElementById('studentTableBody');
    const editIndexInput = document.getElementById('editIndex');
    const nameError = document.getElementById('nameError');
    const idError = document.getElementById('idError');
    const emailError = document.getElementById('emailError');
    const contactError = document.getElementById('contactError');
    const recordsContainer = document.getElementById('records-container');

    let students = loadStudents();
    renderStudents();

    studentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addOrUpdateStudent();
    });

    function loadStudents() {
        const storedStudents = localStorage.getItem('students');
        return storedStudents ? JSON.parse(storedStudents) : [];
    }

    function saveStudents() {
        localStorage.setItem('students', JSON.stringify(students));
    }

    function renderStudents() {
        studentTableBody.innerHTML = '';
        if (students.length > 0) {
            students.forEach((student, index) => {
                const row = studentTableBody.insertRow();
                const nameCell = row.insertCell();
                const idCell = row.insertCell();
                const emailCell = row.insertCell();
                const contactCell = row.insertCell();
                const actionsCell = row.insertCell();

                nameCell.textContent = student.name;
                idCell.textContent = student.id;
                emailCell.textContent = student.email;
                contactCell.textContent = student.contact;

                const editButton = createButton('Edit', 'edit-button', () => editStudent(index));
                const deleteButton = createButton('Delete', 'delete-button', () => deleteStudent(index));

                const actionsDiv = document.createElement('div');
                actionsDiv.classList.add('action-buttons');
                actionsDiv.appendChild(editButton);
                actionsDiv.appendChild(deleteButton);
                actionsCell.appendChild(actionsDiv);
            });
            // Dynamically add vertical scrollbar if content overflows
            if (studentTableBody.offsetHeight > 300) {
                recordsContainer.classList.add('scrollable');
            } else {
                recordsContainer.classList.remove('scrollable');
            }
        } else {
            const row = studentTableBody.insertRow();
            const emptyCell = row.insertCell();
            emptyCell.colSpan = 5;
            emptyCell.textContent = 'No student records found.';
        }
    }

    function createButton(text, className, onClick) {
        const button = document.createElement('button');
        button.textContent = text;
        button.className = className;
        button.addEventListener('click', onClick);
        return button;
    }

    function addOrUpdateStudent() {
        const nameInput = document.getElementById('studentName');
        const idInput = document.getElementById('studentId');
        const emailInput = document.getElementById('emailId');
        const contactInput = document.getElementById('contactNo');
        const editIndex = parseInt(editIndexInput.value);

        const name = nameInput.value.trim();
        const id = idInput.value.trim();
        const email = emailInput.value.trim();
        const contact = contactInput.value.trim();

        // Reset error messages
        nameError.textContent = '';
        idError.textContent = '';
        emailError.textContent = '';
        contactError.textContent = '';

        let isValid = true;

        if (!/^[a-zA-Z\s]+$/.test(name)) {
            nameError.textContent = 'Student name should contain only characters.';
            isValid = false;
        }

        if (!/^\d+$/.test(id)) {
            idError.textContent = 'Student ID should contain only numbers.';
            isValid = false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        if (!/^\d+$/.test(contact)) {
            contactError.textContent = 'Contact number should contain only numbers.';
            isValid = false;
        }

        if (!name || !id || !email || !contact) {
            alert('Please fill in all the fields.');
            return;
        }

        if (!isValid) {
            return;
        }

        const newStudent = { name, id, email, contact };

        if (editIndex >= 0) {
            students[editIndex] = newStudent;
            editIndexInput.value = -1; // Reset edit index
            studentForm.querySelector('button[type="submit"]').textContent = 'Add Student';
        } else {
            students.push(newStudent);
        }

        saveStudents();
        renderStudents();
        studentForm.reset();
    }

    function editStudent(index) {
        const student = students[index];
        document.getElementById('studentName').value = student.name;
        document.getElementById('studentId').value = student.id;
        document.getElementById('emailId').value = student.email;
        document.getElementById('contactNo').value = student.contact;
        document.getElementById('editIndex').value = index;
        studentForm.querySelector('button[type="submit"]').textContent = 'Update Student';
    }

    function deleteStudent(index) {
        if (confirm('Are you sure you want to delete this student record?')) {
            students.splice(index, 1);
            saveStudents();
            renderStudents();
        }
    }
});


