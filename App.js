import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { Provider } from "react-redux"
import store from "./src/redux"
import AppColors from "./src/constants/Colors"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import GameScreen from "./src/screens/Gamescreen"
import QuestionScreen from "./src/screens/QuestionScreen"

const Stack = createNativeStackNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<SafeAreaProvider style={styles.container}>
				<Provider store={store}>
					<Stack.Navigator initialRouteName="Home">
						<Stack.Screen name="Home" component={GameScreen} />
						<Stack.Screen name="Questions" component={QuestionScreen} />
					</Stack.Navigator>
				</Provider>
			</SafeAreaProvider>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: AppColors.app_bg
	}
})

export default App
