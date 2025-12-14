import * as React from "react";
import { Modal, Portal, Text, Button, PaperProvider } from "react-native-paper";
import useSearchGameTrophiesQuery from "../hooks/searchGameTrophies";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const AddGameModal = ({
  open,
  onDismiss,
  selectedGame,
}: {
  open: boolean;
  onDismiss: () => void;
  selectedGame: any;
}) => {
  const { data, isFetching, error } = useSearchGameTrophiesQuery(
    selectedGame?.id
  );
  const handleAddGame = async () => {
    console.log("el id del juego es", selectedGame?.id);
    console.log("los trofeos son", data);

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
      console.log("Document written with ID: ", docRef.id);
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
        Comenzar
      </Button>
    </Modal>
  );
};

export default AddGameModal;
