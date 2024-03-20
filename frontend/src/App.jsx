import parseInput from "./functions/parse_connections.js"
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

  const pasteClipboardContent = () => {
    navigator.clipboard.readText().then((text) => {
      setNewGame(text)
    })
  }

  return (
    <div className='input'>
      <form onSubmit={submitGame} className='gameForm'>
        <button
          type='button'
          className='submitButton'
          onClick={() => pasteClipboardContent()}
        >
          Paste
        </button>
        <textarea
          value={newGame}
          onChange={handleGameChange}
          className='gameInput'
          id='paste-target'
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
