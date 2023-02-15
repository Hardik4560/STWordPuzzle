import React, { useCallback } from "react"
import { FlatListHeight } from "../constants/Styles"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"

const GameScreen = () => {
	const dispatch = useDispatch()

	const { categories } = useSelector(state => state.game)

	const onCardPressed = useCallback(console.log("Item clicked"))

	const renderItem = ({ item }) => (
		<Text onCardClicked={onCardPressed}>{item.name}</Text>
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
				keyExtractor={item => "_" + item.id}
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
