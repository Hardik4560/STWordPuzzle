import Questions from "../../data/CategoryQuestion"

const getQuestionsByCategory = id => {
	if (!id) {
		throw new Error(`Invalid id`)
	}

	return Questions.filter(item => {
		return item.categoryId == id
	})
}

export default getQuestionsByCategory
