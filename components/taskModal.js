import React from "react";
import theme from "../styles/theme.style.js";
import { View, Text, StyleSheet, Modal, TouchableOpacity, SafeAreaView } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import Toggle from "./toggle.js";

const TaskModal = ({ name, modalOpen, setModalOpen, handleToggle, important, handleDelete }) => {
	return (
		<Modal visible={modalOpen} transparent={true} animationType="fade">
			<View style={styles.centeredView}>
				<TouchableOpacity
					style={{
						flex: 1,
						width: "100%",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: 25,
					}}
					onPress={() => setModalOpen(false)}
				/>

				<View style={styles.modalView}>
					<SafeAreaView>
						<View style={styles.titleBar}>
							<Text style={styles.text}>{name}</Text>
							<TouchableOpacity style={styles.close} onPress={() => setModalOpen(false)}>
								<FontAwesome name="close" size={22} color="white" />
							</TouchableOpacity>
						</View>

						<View style={styles.buttonContainer}>
							<View style={styles.importantContainer}>
								<Text style={styles.text}>Important</Text>
								<Toggle handleToggle={handleToggle} position={important} />
							</View>

							<View style={styles.line} />

							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-evenly",
									alignItems: "center",
									height: 55,
								}}
							>
								<TouchableOpacity onPress={handleDelete} style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
									<FontAwesome name="trash-o" size={24} color="black" />
								</TouchableOpacity>

								<View style={styles.verticalLine} />

								<TouchableOpacity style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
									<FontAwesome5 name="pen" size={20} color="black" />
								</TouchableOpacity>
							</View>
						</View>
					</SafeAreaView>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: theme.FONT_SIZE_LARGE,
	},
	centeredView: {
		backgroundColor: "rgba(0, 0, 0, 0.1)",
		flex: 1,
		alignItems: "center",
	},
	modalView: {
		shadowOpacity: 0.1,
		backgroundColor: "white",
		borderTopLeftRadius: theme.BORDER_RADIUS,
		borderTopRightRadius: theme.BORDER_RADIUS,
		padding: 0,
		width: "100%",
		elevation: 20,
		shadowRadius: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
	},
	titleBar: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginLeft: 20,
		height: 60,
		paddingHorizontal: 20,
	},
	close: {
		height: 50,
		width: 50,
		top: -25,
		backgroundColor: theme.RED,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: theme.BORDER_RADIUS,
		elevation: 10,
		shadowOpacity: 0.3,
		shadowRadius: 3,
		shadowColor: "black",
		shadowOffset: {
			width: 0,
			height: 2,
		},
	},
	importantContainer: {
		height: 55,
		justifyContent: "center",
		paddingHorizontal: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	buttonContainer: {
		backgroundColor: theme.BACKGROUND,
		marginHorizontal: 20,
		marginBottom: 0,
		borderRadius: theme.BORDER_RADIUS,
	},
	line: {
		backgroundColor: "white",
		height: 3,
		borderRadius: 2,
		marginVertical: 0,
		marginHorizontal: 20,
	},
	verticalLine: {
		backgroundColor: "white",
		width: 3,
		height: 30,
		borderRadius: 2,
		marginVertical: 0,
		marginHorizontal: 0,
	},
});

export default TaskModal;
