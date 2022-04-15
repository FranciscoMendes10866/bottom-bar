import { Text, View, StyleSheet } from "react-native";

export const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
