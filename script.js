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
    question:
      "Which attribute is used to provide an alternate text for an image?",
    options: ["title", "alt", "src", "name"],
    correct: 1,
  },
  {
    category: "Web Development",
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<src>"],
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
