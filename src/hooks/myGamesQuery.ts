import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const useMyGamesQuery = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["myGames"],
    queryFn: async () => {
      const res = await getDocs(collection(db, "myGames"));
      const result = res.docs.map((doc) => doc.data());
      return result;
    },
  });
  return { data, isLoading, error };
};

export default useMyGamesQuery;
