import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";

export default function App() {
  const [goals, setGoals] = useState<string[]>([]);
  const [text, setText] = useState("");

  const addGoal = () => {
    if (!text.trim()) return;
    setGoals([text.trim(), ...goals]);
    setText("");
  };

  const removeGoal = (goal: string) => {
    setGoals(goals.filter(g => g !== goal));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Goals</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="New goal…"
        />
        <Button title="Add" onPress={addGoal} />
      </View>
      <FlatList
        data={goals}
        keyExtractor={(item) => item}
        renderItem={({ item } : { item: string }) => (
          <Text style={styles.item} onPress={() => removeGoal(item)}>
            • {item}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 12 },
  row: { flexDirection: "row", alignItems: "center", gap: 8 },
  input: { flex: 1, borderWidth: 1, borderRadius: 8, padding: 8 },
  item: { padding: 10, borderBottomWidth: 1, borderColor: "#ddd" },
});
