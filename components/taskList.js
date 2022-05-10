import React from "react";
import { View, Text, StyleSheet, ScrollView, Keyboard } from "react-native";
import Task from "./task.js";

const TaskList = ({ taskItems, setTaskItems, category }) => {
	if (category === 0) {
		return (
			<ScrollView style={styles.itemWrapper} onPress={Keyboard.dismiss}>
				{taskItems.map((item, index) => {
					if (item.completed === false) {
						return (
							<Task
								key={index}
								index={index}
								name={item.name}
								important={item.important}
								completed={item.completed}
								taskItems={taskItems}
								setTaskItems={setTaskItems}
							/>
						);
					}
				})}
				<View style={styles.line} />
				{taskItems.map((item, index) => {
					if (item.completed === true) {
						return (
							<Task
								key={index}
								index={index}
								name={item.name}
								important={item.important}
								completed={item.completed}
								taskItems={taskItems}
								setTaskItems={setTaskItems}
							/>
						);
					}
				})}
			</ScrollView>
		);
	} else if (category === 1) {
		return (
			<ScrollView style={styles.itemWrapper} onPress={Keyboard.dismiss}>
				{taskItems.map((item, index) => {
					if (item.completed === false && item.important === true) {
						return (
							<Task
								key={index}
								index={index}
								name={item.name}
								important={item.important}
								completed={item.completed}
								taskItems={taskItems}
								setTaskItems={setTaskItems}
							/>
						);
					}
				})}
				<View style={styles.line} />
				{taskItems.map((item, index) => {
					if (item.completed === true && item.important === true) {
						return (
							<Task
								key={index}
								index={index}
								name={item.name}
								important={item.important}
								completed={item.completed}
								taskItems={taskItems}
								setTaskItems={setTaskItems}
							/>
						);
					}
				})}
			</ScrollView>
		);
	} else {
		return (
			<ScrollView style={styles.itemWrapper} onPress={Keyboard.dismiss}>
				{taskItems.map((item, index) => {
					if (item.completed === true) {
						return (
							<Task
								key={index}
								index={index}
								name={item.name}
								important={item.important}
								completed={item.completed}
								taskItems={taskItems}
								setTaskItems={setTaskItems}
							/>
						);
					}
				})}
			</ScrollView>
		);
	}
};

const styles = StyleSheet.create({
	itemWrapper: {
		flex: 1,
	},
	line: {
		backgroundColor: "white",
		height: 3,
		borderRadius: 2,
		marginVertical: 10,
		marginHorizontal: 40,
	},
});

export default TaskList;
