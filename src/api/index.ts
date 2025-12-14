import axios from "axios";

//create an axios instance
const rawgApi = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d6b68a1ab5904c4c97ac3323332bf21b",
  },
});

const searchGame = (query: string) => {
  try {
    return rawgApi.get(`/games?search=${query}&page_size=5`);
  } catch (error) {
    console.log("error searching game", error);
    throw error;
  }
};

const getAchievements = (gameId: string) => {
  try {
    https: return rawgApi.get(`/games/${gameId}/achievements`);
  } catch (error) {
    console.log("error getting achievements", error);
    throw error;
  }
};

export { searchGame };
