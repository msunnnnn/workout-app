import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import exercises from "./assets/data/exercises.json";
import ExerciseListItem from "./src/components/ExerciseListItem";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FlatList
        data={exercises}
        contentConteainerStyle= {{gap:5}}
        keyExtractor={(item, index) => item.name+index}
        renderItems={({ item }) => <ExerciseListItem item={item} />}
      /> */}
      <View style={{ gap: 5 }}>
        {exercises.map((item) => (
          <ExerciseListItem key={item.name} item={item} />
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
    justifyContent: "center",
    padding: 10,
    paddingTop: 70,
  },
});
