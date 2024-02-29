document.addEventListener('DOMContentLoaded', function () {
    // Sample subjects
    const subjects = ['Mathematics', 'Physics', 'Computer Science'];

    // Function to render subjects on the webpage
    function renderSubjects() {
        const subjectList = document.getElementById('subjectList');
        subjectList.innerHTML = '';

        subjects.forEach(subject => {
            const li = document.createElement('li');
            li.textContent = subject;

            // Click event to show important questions
            li.addEventListener('click', function () {
                showQuestions(subject);
            });

            subjectList.appendChild(li);
        });
    }

    // Function to show important questions for a subject
    function showQuestions(subject) {
        const isConfirmed = confirm(`Do you want to view and delete important questions for ${subject}?`);
        if (isConfirmed) {
            // Add your logic to show and delete questions for the selected subject
            alert(`Logic for ${subject} questions will be implemented here.`);
        }
    }

    // Initial rendering of subjects
    renderSubjects();
});
