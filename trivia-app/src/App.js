import React from "react"
import Quiz from "./components/quiz.js"
import Modal from "./components/modal.js"

function App() {
  const [displayModal, setDisplayModal] = React.useState(false)
  const [quizData, setQuizData] = React.useState(1)
  

  
  
  
  React.useEffect( function() {
    fetch('https://opentdb.com/api.php?amount=5&category=20&difficulty=medium&type=multiple')
      .then(res => res.json())
      .then(data => console.log(data))
  }, [displayModal])

  
  return (
    <main className="app-Bg">
      <Modal 
        display = {displayModal ? "block" : "none"}
      />
      <Quiz 
        display = {displayModal ? "none" : "block"}
      />
    </main>
  )
}

export default App;

