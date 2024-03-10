import React, { useState, useEffect } from "react";
import Question from "./Question";
import QuizReport from "./QuizReport";
import { API } from "../utils/constants";
import QuestionNavigator from "./QuestionNavigator";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(15).fill(""));
  const [timer, setTimer] = useState(30 * 60); // 15 minutes in seconds
  const [quizEnded, setQuizEnded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [visitedQuestions, setVisitedQuestions] = useState([]);
  const [attemptedQuestions, setAttemptedQuestions] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successfull
      })
      .catch(() => {
        // AN error happend
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/quiz");
      } else {
        // user is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setQuestions(data.results);
        startTimer();
      } else {
        throw new Error("No questions found");
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
      setLoading(false);
    }
  };

  const startTimer = () => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          setQuizEnded(true);
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000); // Set interval to 1000 milliseconds (1 second)
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleAnswerChange = (answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answer;
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion === questions.length - 1 && timer > 0) {
      // User has answered all questions before the timer runs out
      setQuizEnded(true);
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  const handleNavigate = (questionIndex) => {
    setCurrentQuestion(questionIndex);
    setVisitedQuestions(
      Array.from(new Set([...visitedQuestions, questionIndex]))
    );
  };

  return (
    <div>
      {quizEnded ? (
        <QuizReport
          questions={questions}
          userAnswers={userAnswers}
          timer={timer}
        />
      ) : (
        <div>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onClick={handleSignOut}
          >
            Sign Out
          </button>

          <h1>Quiz App</h1>
          <div>Timer: {formatTime(timer)}</div>
          <QuestionNavigator
            questions={questions}
            currentQuestion={currentQuestion}
            visitedQuestions={visitedQuestions}
            attemptedQuestions={attemptedQuestions}
            onNavigate={handleNavigate}
          />
          {loading ? (
            <div>Loading questions...</div>
          ) : questions.length > 0 && currentQuestion < questions.length ? (
            <Question
              question={questions[currentQuestion]}
              userAnswer={userAnswers[currentQuestion]}
              onAnswerChange={handleAnswerChange}
              onNextQuestion={handleNextQuestion}
            />
          ) : (
            <div>No questions available</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
