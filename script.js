// script.js
const questionsContainer = document.getElementById('questions-container');

function showQuestions(subject) {
  // Clear previous questions
  questionsContainer.innerHTML = "";

  // Get questions based on the selected subject
  const questions = getQuestions(subject);

  // Display questions in the container
  questions.forEach(question => {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.textContent = question;
    questionsContainer.appendChild(questionElement);
  });
}

function getQuestions(subject) {
  switch (subject) {
    case 'bda':
      return [
        "Big data and its importance",
        "Characteristics or 10 V’s of Big data",
        "Types of big data",
        "Difference between traditional data and big data",
        "Challenges of big data",
        "Big data analytics and classification",
        "Big data technologies",
        // ... (Add all BDA questions here)
      ];
    case 'iot':
      return [
        "Impact and challenges of IOT",
        "List out class of Constraint Nodes",
        "Illustrate about criteria for connecting smart objects",
        "High level zigbee protocol stack",
        "Define SCADA",
        "What is XIVELY cloud for IoT",
        // ... (Add all IoT questions here)
      ];
    case 'spm':
      return [
        "Explain Waterfall model also explain conventional software management",
        "What is conventional software project management? explain its performance factors",
        "List and explain 10 reasons why conventional software management doesn't perform satisfactorily",
        // ... (Add all SPM questions here)
      ];
    case 'cyber':
      return [
        "What is cyber crime list the types of Cyber criminals",
        "Discuss the classification of Cyber crimes",
        "Explain the phases involved in cyber crime planning",
        "Discuss Global perspective of cyber crime Discuss the legal perspective of Cyber crime",
        "What is cyber stalking? Explain types of Cyber stalkers",
        "Explain social engineering classification of social engineering",
        // ... (Add all Cyber Security questions here)
      ];
    default:
      return [];
  }
}
