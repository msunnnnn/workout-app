import { StyleSheet, Text, View,  } from "react-native";

export default function ExerciseListItem({ item }) {
    return (
      <View style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{item.name}</Text>
        <Text style={styles.exercisesSubtitle}>
          <Text style={styles.subValue}>{item.muscle}</Text> | <Text style={styles.subValue} >{item.equipment}</Text>
        </Text>
      </View>
    );
  }


  const styles = StyleSheet.create({
    exerciseContainer: {
      backgroundColor: "#fff",
      padding: 10,
      borderRadius: 10,
      gap: 5,

      //shadow
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 1,
    },
      shadowOpacity:  0.16,
      shadowRadius: 1.51,
      elevation: 2
    },
    exerciseName: {
      fontSize: 20,
      fontWeight: "500",
    },
    exercisesSubtitle: { color: "dimgray" },
    subValue:{
        textTransform: 'capitalize'
    }
  });
