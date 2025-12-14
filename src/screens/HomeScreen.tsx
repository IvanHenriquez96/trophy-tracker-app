import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  ActivityIndicator,
  MD2Colors,
  Searchbar,
  Text,
} from "react-native-paper";
import useSearchGameQuery from "../hooks/searchGameQuery";
import CardGameSearch from "../components/CardGameSearch";
import AddGameModal from "../components/AddGameModal";

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [gameName, setGameName] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedGame, setSelectedGame] = React.useState(null);

  const { data, isFetching, error } = useSearchGameQuery(gameName);

  const handleSearchGame = async (query: string) => {
    setGameName(query);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Busca tu siguiente trofeo</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        onSubmitEditing={(e) => handleSearchGame(e.nativeEvent.text)}
        value={searchQuery}
        style={styles.searchbar}
      />
      {isFetching && (
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
      )}

      {data &&
        data.map((item: any) => {
          return (
            <CardGameSearch
              key={item.id}
              name={item.name}
              cover={item.background_image}
              onPress={() => {
                setSelectedGame(item);
                setOpenModal(true);
              }}
            />
          );
        })}

      <AddGameModal
        open={openModal}
        onDismiss={() => setOpenModal(false)}
        selectedGame={selectedGame}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchbar: {
    marginBottom: 10,
  },
});
