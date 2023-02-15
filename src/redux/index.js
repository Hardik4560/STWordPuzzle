import { configureStore } from "@reduxjs/toolkit"
import playerReducer from "./reducers/playerReducer"
import gameReducer from "./reducers/gameReducer"

const store = configureStore({
	reducer: {
		player: playerReducer,
		game: gameReducer
	}
})

export default store
