import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Keyboard } from "react-native";
import theme from "../styles/theme.style";
import { FontAwesome } from "@expo/vector-icons";

const BottomBar = ({ taskItems, setTaskItems }) => {
	useEffect(() => {
		Keyboard.addListener("keyboardWillShow", _keyboardDidShow);
		Keyboard.addListener("keyboardWillHide", _keyboardDidHide);

		return () => {
			Keyboard.removeAllListeners("keyboardWillShow");
			Keyboard.removeAllListeners("keyboardWillHide");
		};
	}, []);

	const [shadow, setShadow] = useState(false);
	const [taskName, setTaskName] = useState("");
	const [expanded, setExpanded] = useState(false);

	const _keyboardDidShow = () => {
		setShadow(true);
	};

	const _keyboardDidHide = () => {
		setShadow(false);
	};

	const shortButtonHandler = (important) => {
		if (expanded === false) {
			setExpanded(true);
		}
		if (expanded === true && taskName !== "") {
			setTaskItems([{ name: taskName, completed: false, important: important }, ...taskItems]);
			setTaskName("");
			setExpanded(false);
			// Keyboard.dismiss();
		}
	};

	const longButtonHandler = () => {
		if (taskName !== "") {
			setTaskItems([{ name: taskName, completed: false, important: true }, ...taskItems]);
			setTaskName("");
			Keyboard.dismiss();
		}
	};

	if (expanded === false) {
		return (
			<View style={shadow === true ? styles.backgroundShadow : styles.backgroundShadow}>
				<SafeAreaView style={styles.safeArea}>
					<View style={styles.inputField}>
						<TextInput style={styles.text} value={taskName} onChangeText={(text) => setTaskName(text)} placeholder={"Add..."} />
					</View>
					<TouchableOpacity style={styles.addButton} onPress={shortButtonHandler} onLongPress={longButtonHandler}>
						<FontAwesome name="plus" color="white" size={22} />
					</TouchableOpacity>
				</SafeAreaView>
			</View>
		);
	} else {
		return (
			<View style={shadow === true ? styles.backgroundShadow : styles.backgroundShadow}>
				<SafeAreaView style={styles.safeArea}>
					<View style={styles.inputField}>
						<TextInput style={styles.text} value={taskName} onChangeText={(text) => setTaskName(text)} placeholder={"Add..."} />
					</View>
					<View>
						<TouchableOpacity style={styles.addButtonExpandedImportant} onPress={() => shortButtonHandler(true)} onLongPress={longButtonHandler}>
							<Text style={styles.textLight}>Important</Text>
							<FontAwesome name="plus" color="white" size={22} />
						</TouchableOpacity>
						<TouchableOpacity style={styles.addButtonExpanded} onPress={() => shortButtonHandler(false)} onLongPress={longButtonHandler}>
							<Text style={styles.textLight}>Standard</Text>
							<FontAwesome name="plus" color="white" size={22} />
						</TouchableOpacity>
					</View>
				</SafeAreaView>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	background: {
		backgroundColor: "white",
		borderTopLeftRadius: theme.BORDER_RADIUS,
		borderTopRightRadius: theme.BORDER_RADIUS,
		padding: 20,
	},
	backgroundShadow: {
		backgroundColor: "#fff",
		borderTopLeftRadius: theme.BORDER_RADIUS,
		borderTopRightRadius: theme.BORDER_RADIUS,
		padding: 20,
		elevation: 30,
		shadowColor: "#171717",
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.15,
		shadowRadius: 50,
	},
	safeArea: {
		flexDirection: "row",
		alignItems: "flex-end",
		justifyContent: "space-between",
	},
	inputField: {
		backgroundColor: theme.BACKGROUND,
		height: 50,
		flex: 1,
		borderRadius: theme.BORDER_RADIUS,
		paddingHorizontal: 30,
		marginRight: 20,
		justifyContent: "center",
	},
	text: {
		fontSize: 18,
	},
	textLight: {
		fontSize: 18,
		color: "white",
	},
	addButton: {
		backgroundColor: theme.BLUE,
		height: 50,
		width: 50,
		borderRadius: theme.BORDER_RADIUS,
		justifyContent: "center",
		alignItems: "center",
	},
	addButtonExpandedImportant: {
		backgroundColor: theme.RED,
		height: 50,
		width: 170,
		borderRadius: theme.BORDER_RADIUS,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingLeft: 30,
		paddingRight: 15,
		marginBottom: 15,
	},
	addButtonExpanded: {
		backgroundColor: theme.BLUE,
		height: 50,
		width: 170,
		borderRadius: theme.BORDER_RADIUS,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingLeft: 30,
		paddingRight: 15,
	},
});

export default BottomBar;
