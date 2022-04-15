import { useCallback } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export const BottomTabBar = ({ state, navigation }) => {
  const handleNavigation = useCallback(
    (route) => {
      navigation.navigate(route);
    },
    [navigation]
  );

  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      {state.routes.map((route, index) => (
        <TouchableOpacity
          key={index}
          style={styles.tabItem}
          onPress={() => handleNavigation(route)}
        >
          <Feather
            name={route.name.toLowerCase()}
            size={26}
            color={state.index === index ? "#1EE3CF" : "#F2F4F6"}
          />
          <Text
            style={{
              marginTop: 4,
              color: state.index === index ? "#1EE3CF" : "#F2F4F6",
            }}
          >
            {route.name}
          </Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 15,
    backgroundColor: "#6B48FF",
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
  },
});
