import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import theme from "../styles/theme.style.js";

const Toggle = ({ handleToggle, position }) => {
	const [toggle, setToggle] = useState(position);

	const onPressHandler = () => {
		setToggle(!toggle);
		handleToggle();
	};

	return (
		<TouchableOpacity onPress={() => onPressHandler()}>
			<View style={styles.background}>
				<View style={[styles.foreground, toggle === true ? styles.toggleTrue : null]} />
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	background: {
		backgroundColor: theme.FOREGROUND,
		height: 28,
		width: 50,
		borderRadius: 20,
	},
	foreground: {
		backgroundColor: theme.BLUE,
		height: 24,
		width: 24,
		borderRadius: 20,
		position: "absolute",
		top: 2,
		left: 2,
	},
	toggleTrue: {
		left: 24,
		backgroundColor: theme.RED,
	},
});

export default Toggle;
