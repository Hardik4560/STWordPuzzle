import React from "react"
import { StyleSheet, Text, View } from "react-native"
import GameScreen from "./screens/Gamescreen"

const AppContainer = () => {
	return (
		<View style={styles.container}>
			<GameScreen />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {}
})

export default AppContainer
