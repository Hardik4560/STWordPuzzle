import React, { useCallback } from "react"
import { FlatList, StyleSheet, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { useNavigation } from "@react-navigation/native"
import CategoryTile from "../components/CategoryTile"
import { FlatListHeight } from "../constants/Styles"
import { updateSelectedCategory } from "../redux/reducers/gameReducer"

function GameScreen() {
	const dispatch = useDispatch()
	const navigation = useNavigation()

	const { categories } = useSelector(state => state.game)

	const onCardPressed = useCallback(itemId => {
		const clickedCategory = categories.find(element => element.id === itemId)

		console.log(clickedCategory)
		dispatch(updateSelectedCategory(clickedCategory))

		navigation.navigate("Questions")
	})

	const renderItem = ({ item }) => (
		<CategoryTile {...item} onCardClicked={onCardPressed} />
	)

	const verticalItemSeparator = () => (
		<View style={styles.flat_list_item_separator} />
	)

	return (
		<View style={styles.content}>
			<FlatList
				contentContainerStyle={[styles.flat_list, { height: FlatListHeight() }]}
				columnWrapperStyle={styles.flat_list_column_separator}
				ItemSeparatorComponent={verticalItemSeparator}
				key={3}
				numColumns={2}
				data={categories}
				renderItem={renderItem}
				keyExtractor={item => `_${item.id}`}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	content: { display: "flex", flexDirection: "column" },
	flat_list: {
		marginHorizontal: 8,
		paddingVertical: 12
	},
	flat_list_column_separator: {
		justifyContent: "space-around"
	},
	flat_list_item_separator: { padding: 4 }
})

export default GameScreen
