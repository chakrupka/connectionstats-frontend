import parseInput from "./functions/parse_connections"
import { useState } from "react"

const App = () => {
  const [newGame, setNewGame] = useState("")
  const [results, setResults] = useState("")

  const handleGameChange = (event) => {
    setNewGame(event.target.value)
    console.log(newGame)
  }

  const submitGame = (event) => {
    event.preventDefault()
    console.log(newGame)
    setResults(parseInput(newGame))
  }

  return (
    <div className='input'>
      <form onSubmit={submitGame} className='gameForm'>
        <textarea
          value={newGame}
          onChange={handleGameChange}
          className='gameInput'
        />
        <button type='submit' className='submitButton'>
          Check score
        </button>
      </form>
      {results && (
        <div className='results'>
          <p>Completed: {results.completed ? "Yes" : "No"}</p>
          <p>Number of guesses: {results.numberTries}</p>
          <p>Score: {results.score}</p>
        </div>
      )}
    </div>
  )
}
export default App
