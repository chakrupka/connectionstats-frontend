import { newDate } from "./formatDate.js";
import { DateTime } from "luxon";
import getPuzzleNum from "./getPuzzleNum.js";
// import sampleGames from "./games_for_testing.js";

const sortGames = (games) => {
  return games.sort((a, b) => a.number - b.number);
};

// Hopefully these are useful later...I am an idiot
const sortDates = (games) => {
  const todaysDate = newDate();
  const dates = games.map((game) => dateToUnix(game.date));
  dates.sort();
  const sortedDates = dates.map((date) => unixToDate(date));
  return sortedDates;
};

const dateToUnix = (dateString) => {
  const dt = DateTime.fromISO(dateString);
  return dt.toSeconds();
};

const unixToDate = (seconds) => {
  const dt = DateTime.fromSeconds(seconds).setZone("America/New_York");
  return dt.toFormat("yyyy-LL-dd");
};

const areDayApart = (date1, date2) => {
  return (
    dateToUnix(date1) + 86400 === dateToUnix(date2) ||
    dateToUnix(date1) === dateToUnix(date2) + 86400
  );
};

const isAStreak = (game1, game2) => {
  if (!game1.score || !game2.score) return false;
  return game1.number + 1 === game2.number || game1.number - 1 === game2.number;
};

const longestStreak = (gamesArray) => {
  if (!gamesArray || gamesArray.length === 0) {
    return 0;
  }

  const games = sortGames(gamesArray);
  let longest = 0;
  let pos1 = 0;
  let pos2 = 1;

  while (pos1 < games.length) {
    let start = pos1,
      end = pos1;
    if (!games[start].score) {
      pos1++;
      pos2++;
      continue;
    }
    while (pos2 < games.length && isAStreak(games[pos1], games[pos2])) {
      pos1++;
      end = pos2++;
    }
    longest = end - start + 1 > longest ? end - start + 1 : longest;
    pos1 = pos2++;
  }

  return longest;
};

const currentStreak = (gamesArray) => {
  if (!gamesArray || gamesArray.length < 1) {
    return 0;
  }
  const games = sortGames(gamesArray);
  if (
    games[games.length - 1].number !== getPuzzleNum() ||
    !games[games.length - 1].score
  ) {
    return 0;
  }

  let pos1 = 1;
  let pos2 = 2;
  let start = pos1,
    end = pos1;
  while (
    pos2 <= games.length &&
    isAStreak(games[games.length - pos1], games[games.length - pos2])
  ) {
    pos1++;
    end = pos2++;
  }
  return end - start + 1;
};

const numSolved = (games) => {
  if (!games) return 0;
  let solved = 0;
  games.map((game) => {
    if (game.score) solved++;
  });
  return solved;
};

const highestScore = (games) => {
  if (!games) return 0;
  let highGame = games[0];
  games.map((game) => {
    if (game.score && game.score > highGame.score) highGame = game;
  });
  return highGame;
};

// console.log(sortGames(sampleGames));
// console.log(currentStreak(sampleGames));
// console.log(longestStreak(sampleGames));

export default { longestStreak, currentStreak, numSolved, highestScore };
