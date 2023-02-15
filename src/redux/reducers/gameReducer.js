import { createSlice } from "@reduxjs/toolkit"
import Categories from "../../data/Categories"

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
	reducers: {}
})

export default gameSlice.reducer
