import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Avatar, Card, Chip, IconButton } from "react-native-paper";

const CardGameSearch = ({
  name,
  cover,
  onPress,
}: {
  name: string;
  cover: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card.Title
        title={name}
        left={(props) => <Avatar.Image {...props} source={{ uri: cover }} />}
        right={(props) => (
          <IconButton
            {...props}
            icon="trophy-variant-outline"
            onPress={onPress}
          />
        )}
      />
    </TouchableOpacity>
  );
};

export default CardGameSearch;
