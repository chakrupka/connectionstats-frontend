import axios from "axios";
const url = import.meta.env.VITE_BACKEND_URL;

const sendGame = async (game) => {
  try {
    const res = await axios.post(`${url}/api/game`, {
      content: {
        number: game.number,
        sequence: game.sequence,
        user: game.user,
      },
    });
    return res;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getTodaysGames = async (date) => {
  try {
    const res = await axios.get(`${url}/api/today`);
    return res;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default sendGame;
