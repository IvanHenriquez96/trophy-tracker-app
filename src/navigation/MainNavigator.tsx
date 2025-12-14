import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "../screens/HomeScreen";

// Placeholder components for other tabs
const FavoritesRoute = () => (
  <SafeAreaView
    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
  >
    <Text>Favorites Screen</Text>
  </SafeAreaView>
);

const RecentsRoute = () => (
  <SafeAreaView
    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
  >
    <Text>Recents Screen</Text>
  </SafeAreaView>
);

const NotificationsRoute = () => (
  <SafeAreaView
    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
  >
    <Text>Notifications Screen</Text>
  </SafeAreaView>
);

const MainNavigator = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Search", focusedIcon: "magnify" },
    {
      key: "favorites",
      title: "Favorites",
      focusedIcon: "heart",
      unfocusedIcon: "heart-outline",
    },
    { key: "recents", title: "Recents", focusedIcon: "history" },
    {
      key: "notifications",
      title: "Notifications",
      focusedIcon: "bell",
      unfocusedIcon: "bell-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    favorites: FavoritesRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
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
