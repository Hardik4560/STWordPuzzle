import { createSlice } from "@reduxjs/toolkit"
import Categories from "../../data/Categories"
import produce from "immer"

export const getInitState = () => {
	return {
		categories: Categories,
		isLoading: false,
		selectedCategory: null
	}
}

export const gameSlice = createSlice({
	name: "game",
	initialState: getInitState(),
	reducers: {
		updateSelectedCategory: produce((state, action) => {
			state.selectedCategory = action.payload
		}),
		setLoading: produce((state, action) => {
			state.isLoading = action.payload
		}),
		resetGame: produce(state => {
			state.selectedCategory = undefined
			state.isLoading = false
		})
	}
})

// Action creators are generated for each case reducer function
export const { updateSelectedCategory, setLoading, resetGame } =
	gameSlice.actions

export default gameSlice.reducer
