import React, { useCallback } from "react"
import {
	ImageBackground,
	StyleSheet,
	Text,
	TouchableHighlight,
	View
} from "react-native"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import AppColors from "../constants/Colors"

const CategoryTile = props => {
	const onItemClicked = useCallback(() => {
		props.onCardClicked(props.id)
	}, [props])

	return (
		<View>
			<TouchableHighlight underlayColor="none" onPress={onItemClicked}>
				<View style={styles.parent}>
					<FontAwesome5
						style={styles.icon}
						color={"white"}
						name={props.icon}
						size={40}
						light
					/>
					<Text>{props.name}</Text>
				</View>
			</TouchableHighlight>
		</View>
	)
}

const styles = StyleSheet.create({
	parent: {
		width: 115,
		height: 100,
		backgroundColor: AppColors.card_bg,
		alignContent: "center",
		alignItems: "center"
	},
	icon: {
		margin: 13
	}
})

export default CategoryTile
