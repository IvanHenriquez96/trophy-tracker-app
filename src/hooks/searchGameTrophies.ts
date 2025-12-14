import { useQuery } from "@tanstack/react-query";
import { searchGameTrophies } from "../api";

const useSearchGameTrophiesQuery = (gameId: string) => {
  const searchGameTrophiesQuery = useQuery({
    queryKey: ["game-trophies", gameId],
    queryFn: async () => {
      const res = await searchGameTrophies(gameId);
      return res.data.results;
    },
    enabled: gameId !== "",
  });

  return searchGameTrophiesQuery;
};

export default useSearchGameTrophiesQuery;
