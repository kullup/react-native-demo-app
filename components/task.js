import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import theme from "../styles/theme.style.js";
import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import TaskModal from "./taskModal.js";

const Task = ({ index, name, completed, important, taskItems, setTaskItems }) => {
	const [modalOpen, setModalOpen] = useState(false);

	const handleCompleteButton = () => {
		let taskItemsCopy = taskItems;
		taskItemsCopy[index].completed = !taskItemsCopy[index].completed;
		setTaskItems([...taskItemsCopy]);
	};

	const handleLongPress = () => {
		let taskItemsCopy = taskItems;
		taskItemsCopy[index].important = !taskItemsCopy[index].important;
		setTaskItems([...taskItemsCopy]);
	};

	const handleToggle = () => {
		console.log("hi");
		handleLongPress();
	};

	const handleDelete = () => {
		console.log("delete");
	};

	return (
		<View>
			<TaskModal name={name} modalOpen={modalOpen} setModalOpen={setModalOpen} handleToggle={handleToggle} important={important} handleDelete={handleDelete} />

			<TouchableOpacity style={[styles.background, completed === true ? completed : null]} onLongPress={handleLongPress}>
				<Text style={[completed === true ? styles.textCompleted : styles.text, { flex: 1 }]}>{name}</Text>

				<TouchableOpacity onPress={() => setModalOpen(true)}>
					<FontAwesome name="ellipsis-h" size={20} style={[{ paddingHorizontal: 25 }, completed === true ? styles.completed : null]} />
				</TouchableOpacity>

				<TouchableOpacity style={[styles.checkBox, important === true ? styles.important : null, completed === true ? styles.completed : null]} onPress={handleCompleteButton}>
					<FontAwesome name={completed === true ? "check" : "circle"} color={theme.FOREGROUND} size={22} style={completed === true ? styles.completed : null} />
				</TouchableOpacity>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	background: {
		marginHorizontal: 20,
		elevation: theme.ELEVATION,
		backgroundColor: "white",
		height: 50,
		borderRadius: theme.BORDER_RADIUS,
		justifyContent: "center",
		paddingLeft: 25,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginVertical: 10,
	},
	checkBox: {
		backgroundColor: theme.BLUE,
		height: 50,
		width: 50,
		borderTopRightRadius: theme.BORDER_RADIUS,
		borderBottomRightRadius: theme.BORDER_RADIUS,
		borderTopLeftRadius: theme.BORDER_RADIUS_FULL,
		borderBottomLeftRadius: theme.BORDER_RADIUS_FULL,
		justifyContent: "center",
		alignItems: "center",
	},
	completed: {
		opacity: 0.6,
	},
	important: {
		backgroundColor: theme.RED,
	},
	text: {
		fontSize: theme.FONT_SIZE_LARGE,
	},
	textCompleted: {
		fontSize: theme.FONT_SIZE_LARGE,
		color: "#707070",
		textDecorationLine: "line-through",
		textDecorationStyle: "solid",
	},
});

export default Task;
