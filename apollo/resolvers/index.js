import {
	fetchDay,
	fetchDays,
	fetchLanguages,
	fetchLesson,
	fetchLessons,
	fetchQuarterly,
	fetchQuarterlies,
	fetchRead
} from 'services'

const resolvers = {
	Query: {
		Day: async (_, { id }) => {
			return await fetchDay(id)
		},
		Days: async (_, { lessonID }) => {
			return await fetchDays(lessonID)
		},
		Languages: async () => {
			return await fetchLanguages()
		},
		Lesson: async (_, { id }) => {
			return (await fetchLesson(id)).lesson
		},
		Lessons: async (_, { quarterlyID }) => {
			return await fetchLessons(quarterlyID)
		},
		Quarterly: async (_, { id }) => {
			return (await fetchQuarterly(id)).quarterly
		},
		Quarterlies: async (_, { langCode }) => {
			return await fetchQuarterlies(langCode)
		},
		Read: async (_, { id }) => {
			return await fetchRead(id)
		},
	},
	Day: {
		read: async ({ index }) => {
			return await fetchRead(index)
		},
	},
}

export default resolvers
