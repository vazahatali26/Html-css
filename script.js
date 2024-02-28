// JavaScript for updating the progress bar based on checked topics
const updateProgressBar = (subject, progressId, syllabusId) => {
    const checkboxes = document.querySelectorAll(#${syllabusId} input[type="checkbox"]);
    const progressBar = document.getElementById(progressId);

    const totalTopics = checkboxes.length;
    const completedTopics = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;

    const progressPercentage = (completedTopics / totalTopics) * 100;
    progressBar.style.width = ${progressPercentage}%;
};

// JavaScript for marking all topics as completed in a syllabus
const markAllCompleted = (syllabusId) => {
    const checkboxes = document.querySelectorAll(#${syllabusId} input[type="checkbox"]);
    checkboxes.forEach(checkbox => (checkbox.checked = true));
    updateProgressBar(syllabusId.split('-')[0], ${syllabusId.split('-')[0]}-progress, syllabusId);
};

// JavaScript for collapsing/expanding syllabus
const toggleSyllabus = (syllabusId) => {
    const syllabus = document.getElementById(syllabusId);
    syllabus.style.maxHeight = syllabus.style.maxHeight === '0px' ? ${syllabus.scrollHeight}px : '0px';
};

// Event listeners for updating progress bars
document.getElementById('iot-syllabus').addEventListener('change', () => {
    updateProgressBar('iot', 'iot-progress', 'iot-syllabus');
});

document.getElementById('bda-syllabus').addEventListener('change', () => {
    updateProgressBar('bda', 'bda-progress', 'bda-syllabus');
});

document.getElementById('spm-syllabus').addEventListener('change', () => {
    updateProgressBar('spm', 'spm-progress', 'spm-syllabus');
});

document.getElementById('cyber-syllabus').addEventListener('change', () => {
    updateProgressBar('cyber', 'cyber-progress', 'cyber-syllabus');
});