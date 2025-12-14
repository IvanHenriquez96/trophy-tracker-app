import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "../screens/HomeScreen";
import MyGamesScreen from "../screens/MyGamesScreen";
import TipsScreen from "../screens/TipsScreen";

const MainNavigator = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Buscar", focusedIcon: "magnify" },
    {
      key: "my-games",
      title: "Mis Juegos",
      focusedIcon: "heart",
      unfocusedIcon: "heart-outline",
    },
    {
      key: "tips",
      title: "Consejos",
      focusedIcon: "lightbulb",
      unfocusedIcon: "lightbulb-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    "my-games": MyGamesScreen,
    tips: TipsScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MainNavigator;
