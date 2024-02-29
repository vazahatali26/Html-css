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
        "     . Hadoop architecture
"Explain how data is analyzed with Hadoop Using Map and Reduce", 
"Explain Hadoop Ecosystem.", 
"Explain how Data is read using the Java FileSystem API.", 
"Anatomy of file read.", 
"Anatomy of file writes.", 
"Difference between traditional database and hadoop", 
"List various hadoop filesystems.", 
"Assumption and goals for hadoop design.", 
"Define failover and fencing in hadoop.", 
"Replication policy used in hadoop design", 
 "What is safemode", 
"Unit-III", 
"1. Why NoSQL is used.", 
"2. Difference between SQL and NoSQL", 
"3. Types of NoSQL databases", 
"4. Database impedence mismatch", 
"5. Polygot persistence", 
"6. What is Auto sharding", 
"7. Aggregate data model with example", 
"8. What is Key-value and document data model", 
"9. Graph databases and relationships", 

"10. What is schemaless database", 
"11. Explain distribution models", 
"12. Explain sharding", 
"13. Use of version stamps", 
"14. Explain partitioning and combining in MapReduce", 
"Unit-IV", 
"1. explain working of MapReduce paradigm", 
"2. map reduce architecture", 
"3. anatomy of YARN map reduce job run", 
"4. anatomy of classic map reduce job run", 
"5. failures in classic/YARN MapReduce", 
"6. Explain Map Reduce Input formats", 
"7. Shuffle and sort in map reduce", 
"8. Job tracker, task tracker", 
"9. Node manager, resource manager", 
"10. Application master failure in YARN map reduce", 
"11. Scheduling and types of schedulers", 
"12. Speculative execution", 
"13. Types of input formats for hadoop", 
"14. Types of output formats for hadoop", 
"15. Benefits of map reduce", 
"Unit-V", 
"1. Explain Hive architecture", 
"2. Hive metastore configuration.", 
"3. Hive comparison with traditional databases.", 
"4. Difference between SQL and HQL.", 
"5. What are Hive partitions and buckets", 
"6. Sorting and aggregating in Hive.", 
"7. Hive UDF and UDAF with examples.", 
"8. Working (workflow) of Hive UDAF."
"9. Pig Vs Hive, Pig Vs SQL.", 
"10. Apache Pig data processing operators.", 
"11. Apache Pig register and define statements", 
"12. Pig Latin built-in functions.", 
"13. Types of functions in Apache Pig.", 
"14. Apache Pig UDFs", 
"15. Grouping and joining, combining and splitting in Pig Latin.", 
"16. MongoDB CRUD operations", 
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
