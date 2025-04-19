document.addEventListener('DOMContentLoaded', () => {
    // This ensures the code inside this function runs only after the entire HTML document has been fully loaded and parsed.
    // 'DOMContentLoaded' is an event that fires when the initial HTML document has been completely loaded and parsed,
    // without waiting for stylesheets, images, and subframes to finish loading.
    // The arrow function `() => { ... }` is a concise way to define a function that will be executed when the event occurs.

    const studentForm = document.getElementById('studentForm');
    // This line gets a reference to the HTML element with the ID 'studentForm'.
    // `document.getElementById()` is a method that searches the entire document for an element with the specified ID and returns a reference to it.
    // The `const` keyword declares a constant variable named `studentForm` and assigns the found HTML form element to it.
    // Once assigned, the value of `studentForm` cannot be reassigned.

    const studentTableBody = document.getElementById('studentTableBody');
    // Similar to the previous line, this gets a reference to the HTML `<tbody>` element with the ID 'studentTableBody',
    // which is where the student records will be displayed in the table.

    const editIndexInput = document.getElementById('editIndex');
    // This line gets a reference to the hidden input field with the ID 'editIndex'.
    // This input is used to store the index of the student being edited.

    const nameError = document.getElementById('nameError');
    const idError = document.getElementById('idError');
    const emailError = document.getElementById('emailError');
    const contactError = document.getElementById('contactError');
    // These lines get references to the `<span>` elements (or similar) that are used to display error messages for each input field.

    const recordsContainer = document.getElementById('records-container');
    // This line gets a reference to the `<div>` element that contains the student records table.
    // It's used to dynamically add/remove the scrollbar.

    let students = loadStudents();
    // This line declares a variable named `students` using the `let` keyword (meaning its value can be reassigned).
    // It calls the `loadStudents()` function (defined later) and assigns the returned value (an array of student objects or an empty array) to the `students` variable.

    renderStudents();
    // This line calls the `renderStudents()` function (defined later) to display the initial student records in the table when the page loads.

    studentForm.addEventListener('submit', function(event) {
        // This line attaches an event listener to the `studentForm` element.
        // It listens for the 'submit' event, which occurs when the user tries to submit the form (e.g., by clicking the submit button).
        // The second argument is a function that will be executed when the 'submit' event occurs.
        // The `event` object contains information about the event.

        event.preventDefault();
        // This line calls the `preventDefault()` method on the `event` object.
        // It stops the default behavior of the form submission, which would typically cause the page to reload or navigate to a different URL.
        // We prevent the default submission because we want to handle the form data using JavaScript.

        addOrUpdateStudent();
        // This line calls the `addOrUpdateStudent()` function (defined later) to either add a new student record or update an existing one based on the form data.
    });

    function loadStudents() {
        // This defines a function named `loadStudents`.
        const storedStudents = localStorage.getItem('students');
        // This line retrieves data from the browser's local storage using the `localStorage.getItem()` method.
        // It tries to get an item with the key 'students'.
        // Local storage allows web applications to store key/value pairs locally within the user's browser.
        const parsedStudents = storedStudents ? JSON.parse(storedStudents) : [];
        // This line uses a ternary operator to handle the result of `localStorage.getItem('students')`.
        // If `storedStudents` is not null (meaning there was data stored with the key 'students'),
        // it parses the JSON string stored in `storedStudents` back into a JavaScript array of objects using `JSON.parse()`.
        // If `storedStudents` is null (meaning no data was found), it assigns an empty array `[]` to `parsedStudents`.
        return parsedStudents;
        // This line returns the `parsedStudents` array, which contains the student records loaded from local storage or an empty array if no records were found.
    }

    function saveStudents() {
        // This defines a function named `saveStudents`.
        localStorage.setItem('students', JSON.stringify(students));
        // This line saves the current `students` array to the browser's local storage.
        // `JSON.stringify()` converts the JavaScript array of objects into a JSON string, which can be stored in local storage.
        // The data is stored with the key 'students'.
    }

    function renderStudents() {
        // This defines a function named `renderStudents`. Its purpose is to update the student records table in the HTML.
        studentTableBody.innerHTML = '';
        // This line clears the existing content of the `studentTableBody` element.
        // Setting `innerHTML` to an empty string effectively removes all the rows currently displayed in the table.

        if (students.length > 0) {
            // This `if` statement checks if the `students` array has any records.
            students.forEach((student, index) => {
                // This line iterates over each `student` object in the `students` array using the `forEach()` method.
                // For each student, it also provides the `index` of that student in the array.

                const row = studentTableBody.insertRow();
                // This line creates a new table row (`<tr>`) element and appends it to the `studentTableBody`.
                // `insertRow()` is a method of the `<tbody>` element.

                const nameCell = row.insertCell();
                const idCell = row.insertCell();
                const emailCell = row.insertCell();
                const contactCell = row.insertCell();
                const actionsCell = row.insertCell();
                // These lines create new table data cells (`<td>`) elements and append them to the current `row`.
                // `insertCell()` is a method of the `<tr>` element.

                nameCell.textContent = student.name;
                idCell.textContent = student.id;
                emailCell.textContent = student.email;
                contactCell.textContent = student.contact;
                // These lines set the text content of each cell to the corresponding property of the current `student` object.

                const editButton = createButton('Edit', 'edit-button', () => editStudent(index));
                const deleteButton = createButton('Delete', 'delete-button', () => deleteStudent(index));
                // These lines call the `createButton()` function (defined later) to create "Edit" and "Delete" buttons for the current student record.
                // They pass the button's text, CSS class, and an event handler function (using an arrow function that calls `editStudent()` or `deleteStudent()` with the current `index`).

                const actionsDiv = document.createElement('div');
                actionsDiv.classList.add('action-buttons');
                actionsDiv.appendChild(editButton);
                actionsDiv.appendChild(deleteButton);
                actionsCell.appendChild(actionsDiv);
                // These lines create a `<div>` element to hold the action buttons, add the 'action-buttons' CSS class to it,
                // append the created edit and delete buttons to the `div`, and then append the `div` to the `actionsCell`.

            });

            if (studentTableBody.offsetHeight > 300) {
                recordsContainer.classList.add('scrollable');
            } else {
                recordsContainer.classList.remove('scrollable');
            }
            // This block checks if the height of the table body exceeds 300 pixels.
            // If it does, it adds the 'scrollable' CSS class to the `recordsContainer` to enable vertical scrolling.
            // Otherwise, it removes the class.
        } else {
            // This `else` block executes if the `students` array is empty (no records).
            const row = studentTableBody.insertRow();
            const emptyCell = row.insertCell();
            emptyCell.colSpan = 5;
            emptyCell.textContent = 'No student records found.';
            // This creates a single row with a single cell that spans all 5 columns of the table, displaying a "No student records found." message.
        }
    }

    function createButton(text, className, onClick) {
        // This defines a reusable function to create a button element.
        const button = document.createElement('button');
        // This line creates a new `<button>` element.
        button.textContent = text;
        // This line sets the text content of the button to the `text` argument.
        button.className = className;
        // This line sets the CSS class of the button to the `className` argument.
        button.addEventListener('click', onClick);
        // This line attaches an event listener to the button. When the button is clicked, the function provided as the `onClick` argument will be executed.
        return button;
        // This line returns the newly created button element.
    }

    function addOrUpdateStudent() {
        // This defines a function to either add a new student or update an existing one based on the form data.
        const nameInput = document.getElementById('studentName');
        const idInput = document.getElementById('studentId');
        const emailInput = document.getElementById('emailId');
        const contactInput = document.getElementById('contactNo');
        const editIndex = parseInt(editIndexInput.value);
        // These lines get references to the input fields in the form and the value of the hidden 'editIndex' input.
        // `parseInt()` is used to convert the string value of 'editIndex' to an integer.

        const name = nameInput.value.trim();
        const id = idInput.value.trim();
        const email = emailInput.value.trim();
        const contact = contactInput.value.trim();
        // These lines get the values from the input fields and use the `trim()` method to remove any leading or trailing whitespace.

        nameError.textContent = '';
        idError.textContent = '';
        emailError.textContent = '';
        contactError.textContent = '';
        // These lines clear any existing error messages by setting the text content of the error message spans to an empty string.

        let isValid = true;
        // This line initializes a boolean variable `isValid` to `true`. It will be set to `false` if any validation fails.

        if (!/^[a-zA-Z\s]+$/.test(name)) {
            nameError.textContent = 'Student name should contain only characters.';
            isValid = false;
        }
        // This `if` statement uses a regular expression (`/^[a-zA-Z\s]+$/`) to check if the `name` contains only letters (both uppercase and lowercase) and whitespace.
        // If the test fails (`!test()`), an error message is displayed, and `isValid` is set to `false`.

        if (!/^\d+$/.test(id)) {
            idError.textContent = 'Student ID should contain only numbers.';
            isValid = false;
        }
        // This `if` statement uses a regular expression (`/^\d+$/`) to check if the `id` contains only digits.
        // If the test fails, an error message is displayed, and `isValid` is set to `false`.

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }
        // This `if` statement uses a regular expression to check if the `email` has a basic valid email format.
        // If the test fails, an error message is displayed, and `isValid` is set to `false`.

        if (!/^\d+$/.test(contact)) {
            contactError.textContent = 'Contact number should contain only numbers.';
            isValid = false;
        }
        // This `if` statement uses a regular expression (`/^\d+$/`) to check if the `contact` contains only digits.
        // If the test fails, an error message is displayed, and `isValid` is set to `false`.

        if (!name || !id || !email || !contact) {
            alert('Please fill in all the fields.');
            return;
        }
        // This `if` statement checks if any of the required input fields are empty. If so, it displays an alert and exits the function.

        if (!isValid) {
            return;
        }
        // This `if` statement checks if the `isValid` flag is `false` (meaning validation failed). If so, it exits the function, preventing the student data from being added or updated.

        const newStudent = { name, id, email, contact };
        // This line creates a new JavaScript object `newStudent` containing the values from the input fields.

        if (editIndex >= 0) {
            // This `if` statement checks if `editIndex` is greater than or equal to 0, which means we are editing an existing student.
            students[editIndex] = newStudent;
            // This line updates the student object at the `editIndex` in the `students` array with the `newStudent` data.
            editIndexInput.value = -1; // Reset edit index
            // This line resets the value of the hidden 'editIndex' input to -1, indicating that we are no longer in edit mode.
            studentForm.querySelector('button[type="submit"]').textContent = 'Add Student';
            // This line changes the text of the submit button back to "Add Student".
        } else {
            // This `else` block executes if `editIndex` is -1, meaning we are adding a new student.
            students.push(newStudent);
            // This line adds the `newStudent` object to the end of the `students` array.
        }

        saveStudents();
        // This line calls the `saveStudents()` function to save the updated `students` array to local storage.
        renderStudents();
        // This line calls the `renderStudents()` function to re-render the student records table with the updated data.
        studentForm.reset();
        // This line resets the form, clearing all the input fields.
    }

    function editStudent(index) {
        // This defines a function to populate the form with the details of the student to be edited.
        const student = students[index];
        // This line retrieves the student object at the given `index` from the `students` array.
        document.getElementById('studentName').value = student.name;
        document.getElementById('studentId').value = student.id;
        document.getElementById('emailId').value = student.email;
        document.getElementById('contactNo').value = student.contact;
        // These lines set the values of the corresponding input fields in the form to the properties of the selected `student` object.
        document.getElementById('editIndex').value = index;
        // This line sets the value of the hidden 'editIndex' input to the `index` of the student being edited.
        studentForm.querySelector('button[type="submit"]').textContent = 'Update Student';
        // This line changes the text of the submit button to "Update Student" to indicate that the form is now in edit mode.
    }

    function deleteStudent(index) {
        // This defines a function to delete a student record.
        if (confirm('Are you sure you want to delete this student record?')) {
            // This line displays a confirmation dialog to the user. If the user clicks "OK", the code inside the `if` block will execute.
            students.splice(index, 1);
            // This line removes the student object at the given `index` from the `students` array.
            // `splice()` is an array method that can add or remove elements from an array. Here, it removes 1 element at the specified `index`.
            saveStudents();
            // This line calls the `saveStudents()` function to save the updated `students` array (with the deleted record) to local storage.
            renderStudents();
            // This line calls the `renderStudents()` function to re-render the student records table, reflecting the deletion.
        }
    }
});