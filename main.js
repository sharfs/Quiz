(function() {
    function buildQuiz() {
      const output = [];
  
      myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
  
        for (letter in currentQuestion.answers) {
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      let numCorrect = 0;
  
      myQuestions.forEach((currentQuestion, questionNumber) => {
        
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if (userAnswer === currentQuestion.correctAnswer) {
          
          numCorrect++;
  
          answerContainers[questionNumber].style.color = "green";
        } else {
          
          answerContainers[questionNumber].style.color = "red";
        }

      });
  
      
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
     {
        question: "1. What is the root of 9",
        answers: {
          a: "3",
          b: "81",
          c: "27",
          d: "1"
        },
        correctAnswer: "a"
      },
      {
        question: "2. What is 6 x 12?",
        answers: {
          a: "18",
          b: "60",
          c: "72",
          d: "144"
        },
        correctAnswer: "c"
      },
      {
        question: "3. How many 5's are there in 30?",
        answers: {
          a: "35",
          b: "90",
          c: "7",
          d: "6"
        },
        correctAnswer: "d"
      },
      {
        question: "4. What is 8 x 10?",
        answers: {
          a: "18",
          b: "2",
          c: "80",
          d: "800"
        },
        correctAnswer: "c"
      },
      {
        question: "5. What is 78 x 45?",
        answers: {
          a: "3500",
          b: "3510",
          c: "7200",
          d: "1448"
        },
        correctAnswer: "b"
      },
      {
        question: "6. What is 20% of R30?",
        answers: {
          a: "10",
          b: "5",
          c: "6",
          d: "12"
        },
        correctAnswer: "c"
      },
      {
        question: "7. What is 75% as a fraction in its simplest form?",
        answers: {
          a: "1/2",
          b: "3/4",
          c: "2/3",
          d: "75/100"
        },
        correctAnswer: "b"
      },
      {
        question: "8. What are all the prime numbers between 20 & 30?",
        answers: {
          a: "21, 25",
          b: "23, 29",
          c: "22, 27",
          d: "29"
        },
        correctAnswer: "b"
      },
      {
        question: "9. What is 18/20 as a percentage?",
        answers: {
          a: "90%",
          b: "85%",
          c: "69%",
          d: "73%"
        },
        correctAnswer: "a"
      },
      {
        question: "10. How do you write 1,5 million in numbers?",
        answers: {
          a: "150 000",
          b: "15 000",
          c: "1 500 000",
          d: "15 000 000"
        },
        correctAnswer: "c"
      },
      {
        question: "11. What is 19/20 as a decimal?",
        answers: {
          a: "0.95",
          b: "0.1920",
          c: "0.10",
          d: "0.56"
        },
        correctAnswer: "a"
      },
      {
        question: "12. What is half of 1,5 cups?",
        answers: {
          a: "0,65 cups",
          b: "0.15 cups",
          c: "7,5 cups",
          d: "0,75 cups"
        },
        correctAnswer: "d"
      },
      {
        question: "13. What is two thirds times 3?",
        answers: {
          a: "3",
          b: "2",
          c: "6",
          d: "9"
        },
        correctAnswer: "b"
      },
      {
        question: "14. 8 times what equals 32?",
        answers: {
          a: "6",
          b: "2",
          c: "8",
          d: "4"
        },
        correctAnswer: "d"
      },
      {
        question: "15. What is 0.8 as a fraction in its simplest form?",
        answers: {
          a: "8/10",
          b: "1/8",
          c: "4/5",
          d: "10/8"
        },
        correctAnswer: "c"
      },
      {
        question: "16. What is the square root of 25?",
        answers: {
          a: "5",
          b: "4",
          c: "3",
          d: "125"
        },
        correctAnswer: "c"
      },
      {
        question: "17. 6 is 15% of what number?",
        answers: {
          a: "60",
          b: "80",
          c: "30",
          d: "40"
        },
        correctAnswer: "d"
      },
      {
        question: "18. What is 90 x 4?",
        answers: {
          a: "180",
          b: "260",
          c: "320",
          d: "360"
        },
        correctAnswer: "d"
      },
      {
        question: "19. What is 24 / 4?",
        answers: {
          a: "18",
          b: "60",
          c: "6",
          d: "14"
        },
        correctAnswer: "c"
      },
      {
        question: "20. What is the next number in the sequence? { 5, 10, 15, 20, ?} ?",
        answers: {
          a: "35",
          b: "30",
          c: "20",
          d: "25"
        },
        correctAnswer: "d"
      },
    ];
  
    buildQuiz();
  
    submitButton.addEventListener("click", showResults);
  })();