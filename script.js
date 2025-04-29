// Quiz questions and answers
const questions = [
    {
      question: "What is 2 + 2?",
      answers: ["3", "4", "5", "-3"],
      correctAnswerIndex: 1,
      correctAnswer: "4",
    },
    {
      question: "What is 12 + 2?",
      answers: ["1", "4", "0", "14"],
      correctAnswerIndex: 3,
      correctAnswer: "14",
    },
    {
        question: "What is 16 - 8?",
        answers: ["0", "8", "-9", "12"],
        correctAnswerIndex: 2,
        correctAnswer: "8",
      },    
  ];
  
  let questionIndex = 0; // Tracks which question is currently shown
  
  // Get elements of question to be displayed, using HTML
  const questionsTitle = document.getElementById("questions-title");
  const answersDiv = document.getElementById("answers");
  const resultDiv = document.getElementById("result");
  const nextButton = document.getElementById("next");
  
  // Check if the answer is correct
  function checkAnswer(answer) {
    let question = questions[questionIndex];
    let correctAnswer = question.correctAnswer;
  
    if (answer === correctAnswer) {
      resultDiv.innerHTML = "You are correct!";
    } else {
      resultDiv.innerHTML = "You are wrong!";
    }
  }
  
  // Load next question
  function nextQuestion() {
    questionIndex == 1; // ⚠️ This line has no effect. Probably meant to be an assignment?
    if (questionIndex < questions.length - 1) {
      questionIndex++;
    } else {
      console.log("No increment!");
    }
    updateUI();
  }
  
  // Update the question and answers shown in the UI
  function updateUI() {
    const question = `<h3>${questions[questionIndex].question}</h3>`;
    let answersString = "<ul>";
  
    // Create buttons for each answer choice
    for (
      let answerIndex = 0;
      answerIndex < questions[questionIndex].answers.length; // No hard code
      answerIndex++
    ) {
      const answer = questions[questionIndex].answers[answerIndex];
      answersString +=
        `<li><button onclick="checkAnswer('${answer}')">${answer}</button></li>`;
    }
  
    answersString += "</ul>";
  
    // Takes question and inserts it onto the page
    questionsTitle.innerHTML = question;
    answersDiv.innerHTML = answersString;
  }
  
  updateUI();
  
  nextButton.addEventListener("click", nextQuestion);  