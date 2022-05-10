import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../styles/theme.style.js";

const ButtonSelect = ({ text, id, category, setCategory }) => {
	const buttonHandler = () => {
		setCategory(id);
	};

	return (
		<TouchableOpacity
			style={id === category ? styles.containerSelected : styles.container}
			onPress={buttonHandler}
		>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 25,
		borderRadius: theme.BORDER_RADIUS,
		height: 50,
		justifyContent: "center",
	},
	containerSelected: {
		elevation: theme.ELEVATION,
		paddingHorizontal: 25,
		borderRadius: theme.BORDER_RADIUS,
		height: 50,
		justifyContent: "center",
		backgroundColor: "white",
	},
	text: {
		fontSize: 18,
	},
});

export default ButtonSelect;
