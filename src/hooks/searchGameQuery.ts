import { useQuery } from "@tanstack/react-query";
import { searchGame } from "../api";

const useSearchGameQuery = (name: string) => {
  const searchGameQuery = useQuery({
    queryKey: ["search-game", name],
    queryFn: async () => {
      const res = await searchGame(name);
      return res.data.results;
    },
    enabled: name !== "",
  });

  return searchGameQuery;
};

export default useSearchGameQuery;
