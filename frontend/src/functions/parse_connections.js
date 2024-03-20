const failInput = `Connections 
Puzzle #282
🟨🟨🟨🟨
🟦🟦🟦🟦
🟪🟪🟩🟩
🟪🟩🟪🟩
🟩🟪🟪🟩
🟪🟪🟩🟩`

const successInput = `Connections 
Puzzle #282
🟨🟨🟨🟨
🟦🟦🟦🟦
🟪🟪🟩🟩
🟪🟩🟪🟩
🟩🟩🟩🟩
🟪🟪🟪🟪`

const cleanInput = (input) => {
  let cleanedInput = input
  const colorEmojis = ["🟨", "🟩", "🟦", "🟪"]
  const colorLetters = ["y", "g", "b", "p"]

  for (let i = 0; i < 4; i++) {
    cleanedInput = cleanedInput.replaceAll(colorEmojis[i], colorLetters[i])
  }

  return cleanedInput
}

const checkValidLine = (line) => {
  if (
    line === "yyyy" ||
    line === "gggg" ||
    line === "bbbb" ||
    line === "pppp"
  ) {
    return true
  } else {
    return false
  }
}

const checkIfSuccess = (lines) => {
  if (
    lines.some((line) => line === "yyyy") &&
    lines.some((line) => line === "gggg") &&
    lines.some((line) => line === "bbbb") &&
    lines.some((line) => line === "pppp")
  ) {
    return true
  } else {
    return false
  }
}

const scoreGame = (lines) => {
  const game = lines.slice(2)
  const worths = {
    y: 1,
    g: 2,
    b: 3,
    p: 4,
  }
  let score = 0

  for (let i = 0; i < 4; i++) {
    if (checkValidLine(game[i])) {
      score = score + (4 - i) * worths[game[i][0]]
    }
  }
  return score
}

const parseInput = (input) => {
  const inputData = {}

  const clean = cleanInput(input)
  const lines = clean.split("\n")

  inputData.puzzleNumber = lines[1].slice(
    lines[1].indexOf("#") + 1,
    lines[1].indexOf("#") + 4
  )

  if (checkIfSuccess(lines)) {
    inputData.completed = true
    inputData.numberTries = lines.length - 2

    const positions = {
      y: lines.indexOf("yyyy"),
      g: lines.indexOf("gggg"),
      b: lines.indexOf("bbbb"),
      p: lines.indexOf("pppp"),
    }

    const ordered = Object.entries(positions)
      .sort(([, a], [, b]) => a - b)
      .map((color) => color[0])

    inputData.orderOfColors = ordered

    inputData.score = scoreGame(lines)
  } else {
    inputData.completed = false
    inputData.numberTries = 0
  }
  return inputData
}

export default parseInput
