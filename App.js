import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import BottomBar from "./components/bottomBar.js";
import CategoryBar from "./components/categoryBar.js";
import TaskList from "./components/taskList.js";
import theme from "./styles/theme.style.js";

export default function App() {
	const [category, setCategory] = useState(0);

	const [taskItems, setTaskItems] = useState([
		{ name: "Test 1", important: false, completed: false },
		{ name: "Test 2", important: false, completed: true },
	]);

	return (
		<KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<CategoryBar category={category} setCategory={setCategory} />
			<TaskList taskItems={taskItems} setTaskItems={setTaskItems} category={category} />
			<BottomBar taskItems={taskItems} setTaskItems={setTaskItems} />
			<StatusBar style={"dark"} />
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.BACKGROUND,
	},
});

// https://youtu.be/0kL6nhutjQ8?t=675
// <View style={{ flex: 1, justifyContent: "space-between" }}>
