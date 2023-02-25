import { useNavigation, useRoute } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import getQuestions from "../redux/helpers/QuestionsByCategory"

const QuestionScreen = props => {
	const dispatch = useDispatch()

	const { selectedCategory } = useSelector(state => state.game)
	const questions = getQuestions(selectedCategory.id)

	return (
		<PagerView style={styles.pagerView} initialPage={0}>
			<View key="1">
				<Text>First page</Text>
			</View>
			<View key="2">
				<Text>Second page</Text>
			</View>
		</PagerView>
	)
}

export default QuestionScreen
