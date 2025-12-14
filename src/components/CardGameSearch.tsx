import React from "react";
import { View } from "react-native";
import { Avatar, Card, Chip, IconButton } from "react-native-paper";

const CardGameSearch = ({ name, cover }: { name: string; cover: string }) => {
  return (
    <Card.Title
      title={name}
      left={(props) => <Avatar.Image {...props} source={{ uri: cover }} />}
      right={(props) => (
        <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
      )}
    />
  );
};

export default CardGameSearch;
