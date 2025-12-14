import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, ActivityIndicator, MD2Colors } from "react-native-paper";
import useMyGamesQuery from "../hooks/myGamesQuery";
import CardGameSearch from "../components/CardGameSearch";

const MyGamesScreen = () => {
  const { data, isLoading, error } = useMyGamesQuery();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mis Juegos</Text>

      {isLoading && (
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
      )}

      {data && (
        <FlatList
          data={data}
          keyExtractor={(item) => item.gameId} // Assuming gameId is unique
          renderItem={({ item }) => (
            <CardGameSearch
              name={item.gameName}
              cover={item.gameImage}
              onPress={() =>
                console.log("Navigate to game details", item.gameId)
              }
            />
          )}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
      )}
    </SafeAreaView>
  );
};

export default MyGamesScreen;

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
  list: {
    paddingBottom: 20,
  },
});
