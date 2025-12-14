import React from "react";
import { FlatList, View } from "react-native";
import { Searchbar, Text } from "react-native-paper";
import useSearchGameQuery from "../hooks/searchGameQuery";
import CardGameSearch from "../components/CardGameSearch";

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [gameName, setGameName] = React.useState("");

  const { data, isLoading, error } = useSearchGameQuery(gameName);

  const handleSearchGame = async (query: string) => {
    setGameName(query);
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
      {data &&
        data.map((item: any) => {
          return (
            <CardGameSearch
              key={item.id}
              name={item.name}
              cover={item.background_image}
            />
          );
        })}
    </View>
  );
};

export default HomeScreen;
