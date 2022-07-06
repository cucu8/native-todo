import React from "react";
import { Text, View } from "react-native";
import { Todos } from "./pages"
import { styles } from "./style";

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Todos />
    </View>
  );
};

export default App;
