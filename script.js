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
        "Hadoop architecture", 
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

"why NoSQL is used.", 
"Difference between SQL and NoSQL", 
"Types of NoSQL databases", 
"Database impedence mismatch", 
"Polygot persistence", 
"What is Auto sharding", 
"Aggregate data model with example", 
"8What is Key-value and document data model", 
"9Graph databases and relationships", 

"What is schemaless database", 
"explain distribution models", 
"Explain sharding", 
"Use of version stamps", 
"Explain partitioning and combining in MapReduce", 
 "explain working of MapReduce paradigm", 
"map reduce architecture", 
"anatomy of YARN map reduce job run", 
"anatomy of classic map reduce job run", 
"failures in classic/YARN MapReduce", 
"Explain Map Reduce Input formats", 
"Shuffle and sort in map reduce", 
"Job tracker, task tracker", 
"Node manager, resource manager", 
"Application master failure in YARN map reduce", 
"Scheduling and types of schedulers", 
"Speculative execution", 
"types of input formats for hadoop", 

    "types of output formats for hadoop", 
"Benefits of map reduce", 
"Unit-V", 
"Explain Hive architecture", 
"Hive metastore configuration.", 
"Hive comparison with traditional databases.", 
"Difference between SQL and HQL.", 
"5what are Hive partitions and buckets", 
"6Sorting and aggregating in Hive.", 

 "Hive UDF and UDAF with examples.", 
"Working (workflow) of Hive UDAF."
"Pig Vs Hive, Pig Vs SQL.", 
"Apache Pig data processing operators.", 
        "Apache Pig register and define statements", 
        "Pig Latin built-in functions.", 
       "Types of functions in Apache Pig.", 
       "Apache Pig UDFs", 
       "Grouping and joining, combining and splitting in Pig Latin.", 
       "MongoDB CRUD operations", 
        
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
