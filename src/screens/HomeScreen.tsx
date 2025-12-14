import React from "react";
import { View } from "react-native";
import { Searchbar, Text } from "react-native-paper";
import rawgApi from "../api";

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearchGame = async (query: string) => {
    console.log("query", query);
    try {
      //use axios to search for the game
      const response = await rawgApi.get(`/games?search=${query}&page_size=5`);
      console.log("response", response.data);
    } catch (error) {
      console.error("Error searching game:", error);
    }
  };
  return (
    <View>
      <Text>Busca tu siguiente trofeo</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        onSubmitEditing={(e) => handleSearchGame(e.nativeEvent.text)}
        value={searchQuery}
      />
    </View>
  );
};

export default HomeScreen;
