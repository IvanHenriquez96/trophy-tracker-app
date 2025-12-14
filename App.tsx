import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainNavigator from "./src/navigation/MainNavigator";

const queryClient = new QueryClient();

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <QueryClientProvider client={queryClient}>
          <MainNavigator />
          <StatusBar style="auto" />
        </QueryClientProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
