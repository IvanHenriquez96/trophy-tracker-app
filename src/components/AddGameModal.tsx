import * as React from "react";
import { Modal, Portal, Text, Button, PaperProvider } from "react-native-paper";
import useSearchGameTrophiesQuery from "../hooks/searchGameTrophies";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { useQueryClient } from "@tanstack/react-query";

const AddGameModal = ({
  open,
  onDismiss,
  selectedGame,
}: {
  open: boolean;
  onDismiss: () => void;
  selectedGame: any;
}) => {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useSearchGameTrophiesQuery(
    selectedGame?.id
  );
  const handleAddGame = async () => {
    try {
      const docRef = await addDoc(collection(db, "myGames"), {
        gameId: selectedGame?.id,
        gameName: selectedGame?.name,
        gameImage: selectedGame?.background_image,
        allCleared: false,
        trophies: data.map((trophy: any) => ({
          ...trophy,
          cleared: false,
        })),
      });
      queryClient.invalidateQueries({ queryKey: ["myGames"] });
      onDismiss();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    borderRadius: 10,
  };

  return (
    <Modal
      visible={open}
      onDismiss={onDismiss}
      contentContainerStyle={containerStyle}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        ¿Sale Platino?
      </Text>
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          marginBlock: 20,
        }}
      >
        ¿Quieres comenzar a jugar {selectedGame?.name}?
      </Text>
      <Button mode="contained" onPress={handleAddGame}>
        {isLoading ? "Cargando..." : "Comenzar"}
      </Button>
    </Modal>
  );
};

export default AddGameModal;
