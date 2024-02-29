document.addEventListener('DOMContentLoaded', function () {
    const subjects = [
        { name: 'Mathematics', questions: ['Question 1', 'Question 2'] },
        { name: 'Physics', questions: ['Question 3', 'Question 4'] },
        { name: 'Computer Science', questions: ['Question 5', 'Question 6'] }
    ];

    function renderSubjects() {
        const subjectList = document.getElementById('subjectList');
        subjectList.innerHTML = '';

        subjects.forEach(subject => {
            const li = document.createElement('li');
            li.textContent = subject.name;

            li.addEventListener('click', function () {
                showQuestions(subject);
            });

            subjectList.appendChild(li);
        });
    }

    function showQuestions(subject) {
        const isConfirmed = confirm(`Do you want to view and delete important questions for ${subject.name}?`);
        if (isConfirmed) {
            const questionsString = subject.questions.join('\n');
            const userInput = prompt(`Important Questions for ${subject.name}:\n${questionsString}\nEnter question number to delete:`);

            if (userInput !== null) {
                const questionIndex = parseInt(userInput) - 1;
                if (!isNaN(questionIndex) && questionIndex >= 0 && questionIndex < subject.questions.length) {
                    subject.questions.splice(questionIndex, 1);
                    alert(`Question deleted successfully!`);
                } else {
                    alert(`Invalid input or question number. No questions were deleted.`);
                }
            }
        }
    }

    renderSubjects();
});
