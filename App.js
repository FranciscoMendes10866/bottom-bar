import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { HomeScreen } from "./src/screens/home";
import { SettingsScreen } from "./src/screens/settings";
import { BottomTabBar } from "./src/components/BottomTabBar";

const Tab = createBottomTabNavigator();

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <BottomTabBar {...props} />}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
