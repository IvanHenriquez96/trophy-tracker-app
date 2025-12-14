import * as React from "react";
import { Modal, Portal, Text, Button, PaperProvider } from "react-native-paper";

const AddGameModal = ({
  open,
  onDismiss,
}: {
  open: boolean;
  onDismiss: () => void;
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
      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
        Comenzar Platino
      </Text>
    </Modal>
  );
};

export default AddGameModal;
