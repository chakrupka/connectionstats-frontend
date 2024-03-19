const userInput = `Connections 
Puzzle #282
🟨🟨🟨🟨
🟦🟦🟦🟦
🟪🟪🟩🟩
🟪🟩🟪🟩
🟩🟪🟪🟩
🟪🟪🟩🟩`

const parseInput = (input) => {
  const inputData = {}
  inputData.puzzleNumber = input.slice(
    input.indexOf("#") + 1,
    input.indexOf("#") + 4
  )
  console.log(inputData)
}

parseInput(userInput)
