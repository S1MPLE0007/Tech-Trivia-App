const dataQuestions = [
  //Web development questions
  {
    category: "Web Development",
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyper Transfer Markup Language",
      "Hyper Tech Market Lobby",
    ],
    correct: 0,
  },
  {
    category: "Web Development",
    question: "Which CSS property controls the text size?",
    options: ["text-size", "font-style", "font-size", "font-weight"],
    correct: 2,
  },
  {
    category: "Web Development",
    question: "What is the purpose of JavaScript in web development?",
    options: [
      "Styling web pages",
      "Adding interactivity",
      "Structuring content",
      "All of the above",
    ],
    correct: 1,
  },
  {
    category: "Web Development",
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["a", "link", "href", "src"],
    correct: 0,
  },
  {
    category: "Web Development",
    question: "What is the default position value in CSS?",
    options: ["relative", "absolute", "static", "fixed"],
    correct: 2,
  },
  {
    category: "Web Development",
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    correct: 3,
  },

  // Questions for programming language
  {
    category: "Programming Languages",
    question: 'What is a "variable" in programming?',
    options: [
      "A constant value",
      "A container for storing data",
      "A function call",
      "A loop structure",
    ],
    correct: 1,
  },
  {
    category: "Programming Languages",
    question: "Which language is primarily used for Android app development?",
    options: ["Swift", "Java/Kotlin", "C#", "Python"],
    correct: 1,
  },
  {
    category: "Programming Languages",
    question: "Which symbol is used for comments in Python?",
    options: ["//", "/* */", "#", "--"],
    correct: 2,
  },
  {
    category: "Programming Languages",
    question:
      'Which language is best known for its slogan "Write once, run anywhere"?',
    options: ["Java", "C#", "Python", "Ruby"],
    correct: 0,
  },
  {
    category: "Programming Languages",
    question: "Which programming language was developed by Guido van Rossum?",
    options: ["Ruby", "Python", "C#", "Swift"],
    correct: 1,
  },
  {
    category: "Programming Languages",
    question: "Which language runs on the .NET framework?",
    options: ["Java", "Kotlin", "C#", "PHP"],
    correct: 2,
  },

  //Cybersecurity questions
  {
    category: "Cybersecurity",
    question: "What does HTTPS stand for?",
    options: [
      "Hyper Text Secure Protocol",
      "Hyper Transfer Secure Protocol",
      "Hyper Text Transfer Protocol",
      "Hybrid Text Secure Protocol",
    ],
    correct: 2,
  },
  {
    category: "Cybersecurity",
    question:
      "Which attack involves tricking users into revealing sensitive information?",
    options: ["DDoS", "SQL Injection", "Phishing", "Man-in-the-Middle"],
    correct: 2,
  },
  {
    category: "Cybersecurity",
    question: "What is the purpose of a firewall?",
    options: [
      "Encrypt data",
      "Monitor and control network traffic",
      "Prevent spreading fires",
      "Store passwords",
    ],
    correct: 1,
  },
  {
    category: "Cybersecurity",
    question: 'What does "VPN" stand for?',
    options: [
      "Virtual Personal Node",
      "Virtual Private Network",
      "Verified Private Network",
      "Virtual Protected Network",
    ],
    correct: 1,
  },
  {
    category: "Cybersecurity",
    question:
      "Which of the following is a malware type that locks your files and demands payment?",
    options: ["Worm", "Spyware", "Ransomware", "Trojan"],
    correct: 2,
  },
  {
    category: "Cybersecurity",
    question:
      "Which cybersecurity principle ensure that only authorized people can access data?",
    options: ["Availability", "Confidentiality", "Integrity", "Authentication"],
    correct: 1,
  },

  //Tech History & Innovation questions
  {
    category: "Tech History & Innovation",
    question:
      'Which company created the first graphical web browser called "Mosaic"?',
    options: [
      "Microsoft",
      "Netscape",
      "National Center for Supercomputing Applications (NCSA)",
      "IBM",
    ],
    correct: 2,
  },
  {
    category: "Tech History & Innovation",
    question: "What year was Google founded?",
    options: ["1995", "1998", "2000", "2001"],
    correct: 1,
  },
  {
    category: "Tech History & Innovation",
    question: "What was the first commercially succesful video game?",
    options: ["Space Invaders", "Pong", "Pac-Man", "Tetris"],
    correct: 1,
  },
  {
    category: "Tech History & Innovation",
    question:
      "Who is credited with developing the first compiler for a programming language?",
    options: [
      "Ada Lovalace",
      "Dennis Ritchie",
      "Grace Hopper",
      "John McCarthy",
    ],
    correct: 2,
  },
  {
    category: "Tech History & Innovation",
    question: "The first computer mouse was made of what material?",
    options: ["Metal", "Plastic", "Aluminum", "Wood"],
    correct: 3,
  },
  {
    category: "Tech History & Innovation",
    question: 'Who is known as the "Father of the Computer"?',
    options: ["Bill Gates", "Charles Babbage", "Alan Turing", "Steve Jobs"],
    correct: 1,
  },

  // Software Engineering questions
  {
    category: "Software Engineering",
    question: "What is the main goal of software testing?",
    options: [
      "To ensure the software looks good",
      "To find and fix errors",
      "To make the code run faster",
      "None of the above",
    ],
    correct: 1,
  },
  {
    category: "Software Engineering",
    question: "What is version control used for?",
    options: [
      "Tracking changes in source code",
      "Designing UI elements",
      "Increasing system speed",
      "Encrypting data",
    ],
    correct: 0,
  },
  {
    category: "Software Engineering",
    question: "Which of the following is a popular version control system?",
    options: ["Python", "JSON", "Java", "Git"],
    correct: 3,
  },
  {
    category: "Software Engineering",
    question: 'What does "CI/CD" stand for in DevOps practices?',
    options: [
      "Continuous Integration / Continuous Deployment",
      "Code Integration / Code Debugging",
      "Cash In / Cash Delivery",
      "Centralized Infrastructure / Cloud Development",
    ],
    correct: 0,
  },
  {
    category: "Software Engineering",
    question:
      "Which software development methodology emphasizes flexibility, collaboration and iterative progress?",
    options: ["Waterfall", "Agile", "Spiral", "V-Model"],
    correct: 1,
  },
  {
    category: "Software Engineering",
    question: 'What does "DRY" stand for in software development principles?',
    options: [
      "Don`t Repeat Yourself",
      "Do Run Yearly",
      "Don`t Retreat Yet",
      "Debug Regularly Yourself",
    ],
    correct: 0,
  },
];

//function on shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//Game state
let currentQuestion = 0;
let score = 0;
let userAnswer = [];
let categoryScore = {
  "Web Development": 0,
  "Programming Languages": 0,
  Cybersecurity: 0,
  "Tech History & Innovation": 0,
  "Software Engineering": 0,
};

//DOM elements
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const nextBtn = document.getElementById("nextBtn");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const questions = document.getElementById("questions");
const results = document.getElementById("results");
const displayScore = document.getElementById("displayScore");
const category = document.getElementById("category");
const answers = document.getElementById("answers");
const restartBtn = document.getElementById("restartBtn");

// Initialized quiz on page load
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, showing intro modal...");
  if (introduction) introduction.style.display = "flex";
});

//Start button handler
if (startBtn) {
  startBtn.addEventListener("click", () => {
    console.log("Start button clicked, initializing quiz...");
    if (introduction) introduction.style.display = "none";
    initQuiz();
  });
}

//Intialize quiz with shuffling

function initQuiz() {
  console.log("Quiz initialized");
  shuffle(dataQuestions); // shuffles the question each restart
  console.log("Questions shuffled");
  currentQuestion = 0;
  score = 0;
  userAnswer = [];
  Object.keys(categoryScore).forEach((cat) => (categoryScore[cat] = 0));
  loadQuestion();
  nextBtn.disabled = true;
  console.log("First question loaded");
}

//load questions

function loadQuestion() {
  console.log(`Loading question ${currentQuestion + 1}`);
  const q = dataQuestions[currentQuestion];
  if (!q) {
    console.log("No question data found");
    return;
  }

  if (questionText) questionText.textContent = q.question;
  if (optionsContainer) {
    optionsContainer.innerHTML = "";
    q.options.forEach((option, index) => {
      const div = document.createElement("div");
      div.className = "option";
      div.innerHTML = `
            <input type="radio" id="opt${index}" name="answer" value="${index}">
            <label for="opt${index}">${option}</label>`;

      div.addEventListener("click", () => selectOption(index, div));
      optionsContainer.appendChild(div);
    });
  }

  updateProgress();
  if (nextBtn) {
    nextBtn.textContent =
      currentQuestion === dataQuestions.length - 1 ? "Submit" : "Next";
  }
  console.log("Question loaded successfully");
}

// Select option

function selectOption(index, element) {
  console.log(`Option selected: ${index}`);
  document.querySelectorAll(".option").forEach((opt) => {
    opt.classList.remove("selected");
    const radio = opt.querySelector('input[type="radio"]');
    if (radio) radio.checked = false;
  });

  //select this one
  element.classList.add("selected");
  const radio = element.querySelector('input[type="radio"]');
  if (radio) radio.checked = true;
  if (nextBtn) nextBtn.disabled = false;
  userAnswer[currentQuestion] = index;
}

//next button handler
if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    if (currentQuestion < dataQuestions.length - 1) {
      currentQuestion++;
      loadQuestion();
      nextBtn.disabled = true;
    } else {
      calculateScore();
      showResults();
    }
  });
}

//update progress
function updateProgress() {
  const progress = ((currentQuestion + 1) / dataQuestions.length) * 100;
  if (progressFill) progressFill.style.width = progress + "%";
  if (progressText)
    progressText.textContent = `Question ${currentQuestion + 1} of ${
      dataQuestions.length
    }`;
}

//calculate the score

function calculateScore() {
  console.log("Calculating score");
  dataQuestions.forEach((q, index) => {
    if (userAnswer[index] === q.correct) {
      score++;
      categoryScore[q.category]++;
    }
  });
  console.log(`Final score: ${score}/${dataQuestions.length}`);
}

//Show Results

function showResults() {
  console.log("Showing results");
  if (questions) questions.style.display = "none";
  if (results) results.style.display = "block";

  const percentage = Math.round((score / dataQuestions.length) * 100);
  if (displayScore) {
    displayScore.innerHTML = `
        <div class="score">${score} / ${dataQuestions.length}</div>
        <div style="font-size: 1.2rem; color: #2a2929ff;">${percentage}%</div>`;
  }

  //Category breakdown
  if (category) {
    category.innerHTML = "<h3>Category Breakdown</h3>";
    Object.entries(categoryScore).forEach(([cat, catScore]) => {
      const maxPerCat = 6; // number of questions per category
      const catPercentage = Math.round((catScore / maxPerCat) * 100);
      const div = document.createElement("div");
      div.className = "category-item";
      div.innerHTML = `
          <span>${cat}</span>
          <span>${catScore}/${maxPerCat} (${catPercentage}%)</span>`;

      category.appendChild(div);
    });
  }

  if (answers) {
    answers.innerHTML = "<h3>Answer Review</h3>";
    dataQuestions.forEach((q, index) => {
      const div = document.createElement("div");
      div.className = "review-item";
      const userAns = userAnswer[index]; // User's answer (might be string or undefined)
      console.log(
        `Q${
          index + 1
        }: userAns = ${userAns} (type: ${typeof userAns}), correct = ${
          q.correct
        } (type: ${typeof q.correct})`
      ); // Debug log
      // Handle undefined and convert to number for comparison
      const isCorrect = userAns !== undefined && Number(userAns) === q.correct;
      console.log(`Q${index + 1}: isCorrect = ${isCorrect}`); // Debug log
      div.classList.add(isCorrect ? "correct" : "incorrect");
      div.innerHTML = `
        <p><strong>Q${index + 1}:</strong> ${q.question}</p>
        <p>Your answer: ${q.options[userAns] || "Not answered"}</p>
        <p>Correct: ${q.options[q.correct]}</p>
    `;
      answers.appendChild(div);
    });
  }
}

// Restart Quiz
if (restartBtn) {
  restartBtn.addEventListener("click", () => {
    console.log("Restarting quiz");
    if (questions) questions.style.display = "block";
    if (results) results.style.display = "none";
    initQuiz();
  });
}
