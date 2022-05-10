import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import ButtonSelect from "./buttonSelect";

const statusBarHeight = Constants.statusBarHeight;

const CategoryBar = ({ category, setCategory }) => {
	return (
		<View style={styles.wrapper}>
			<ButtonSelect text={"All"} id={0} category={category} setCategory={setCategory} />
			<ButtonSelect text={"Important"} id={1} category={category} setCategory={setCategory} />
			<ButtonSelect text={"Done"} id={2} category={category} setCategory={setCategory} />
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		marginTop: Platform.OS === "android" ? statusBarHeight + 20 : statusBarHeight + 10,
		marginHorizontal: 20,
		marginBottom: 10,
		height: 50,
		flexDirection: "row",
		alignItems: "center",
	},
});

export default CategoryBar;
