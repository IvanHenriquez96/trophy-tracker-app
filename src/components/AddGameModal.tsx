import * as React from "react";
import { Modal, Portal, Text, Button, PaperProvider } from "react-native-paper";

const AddGameModal = ({
  open,
  onDismiss,
  selectedGame,
}: {
  open: boolean;
  onDismiss: () => void;
  selectedGame: any;
}) => {
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
      <Button mode="contained" onPress={onDismiss}>
        Comenzar
      </Button>
    </Modal>
  );
};

export default AddGameModal;
