/*
 * Various methods for parsing and formatting game information
 * Cha Krupka, Spring 2024
 */

const colorToChar = (input) => {
  let sequence = input;
  const colorEmojis = ["🟨", "🟩", "🟦", "🟪"];
  const colorChars = ["y", "g", "b", "p"];

  for (let j = 0; j < sequence.length; j++) {
    sequence[j] = sequence[j].slice(0, 8);
    for (let i = 0; i < 4; i++) {
      sequence[j] = sequence[j].replaceAll(colorEmojis[i], colorChars[i]);
    }
  }

  return sequence;
};

const charToColor = (input) => {
  let sequence = input;
  const colorEmojis = ["🟨", "🟩", "🟦", "🟪"];
  const colorChars = ["y", "g", "b", "p"];

  for (let j = 0; j < sequence.length; j++) {
    for (let i = 0; i < 4; i++) {
      sequence[j] = sequence[j].replaceAll(colorChars[i], colorEmojis[i]);
    }
  }

  return sequence;
};

const removeTrailing = (input) => {
  let endLine = 6;
  for (let index = 6; index < input.length; index++) {
    const line = input[index];
    if (
      line.includes("🟨") ||
      line.includes("🟩") ||
      line.includes("🟦") ||
      line.includes("🟪")
    ) {
      endLine++;
    }
  }
  return endLine;
};

export const prepGame = (input) => {
  const game = {};
  const inputLines = input.split("\n");
  const validLines = inputLines.slice(0, removeTrailing(inputLines));

  game.number = validLines[1].slice(validLines[1].indexOf("#") + 1);
  game.sequence = colorToChar(validLines.slice(2));

  return game;
};

export const getColorArray = (game) => {
  const colorArray = charToColor(game.sequence);
  return colorArray;
};

export default { prepGame, getColorArray };
