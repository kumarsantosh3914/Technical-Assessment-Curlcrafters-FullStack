# Quiz App

## Overview

This is a Quiz App built using React. The application fetches questions from the Open Trivia Database API, allows users to answer them, and provides a quiz report at the end.

### Components

1. **Quiz Component:** 

- Signup (Name, email, password)
- Login (email, password)

2. **Quiz Component:** 

- Manages the overall quiz functionality, including fetching questions, handling user answers, and managing the timer.
- Allows navigation between questions.

3. **Question Component:**

  - Displays a single question, along with answer options.
  - Allows users to select an answer and proceed to the next question.

4. **QuizReport Compnent:**

  - Displays a report at the end of the quiz, showing the user's score, each question, the user's answer, and the correct answer.

5. **QuestionNavigator Component:**

- Provides a navigation panel to jump to specific questions.
- Highlights the current question, visited questions, and attempted questions.

## Setup and Installation

1. Clone the repository

```
git clone https://github.com/kumarsantosh3914/Technical-Assessment-Curlcrafters-FullStack.git
```

2. Change into the project directory:

```
cd Technical-Assessment-Curlcrafters-FullStack
cd frontend
```

3. Install dependencies:

```
npm install
```

4. Run the application:

```
npm start
```

5. Open your browser and visit  http://localhost:3000


## Assumptions

1. The Open Trivia Database API is available and returns questions in the epected format.

2. The quiz has a fixed number of questions (15 in this case).