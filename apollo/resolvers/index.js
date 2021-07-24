import { lessons } from 'services'

const resolvers = {
	Query: {
		Languages: async () => {
			try {
				const languages = (await lessons.get("/languages")).data;
				return languages;
			} catch (error) {
				throw error;
			}
		},
		Read: async (_, { id }) => {
			const [langCode, year, quarterlyId, lessonId, dayId] = id.split('-');
			try {
				const read = (await lessons.get(`/${langCode}/quarterlies/${year}-${quarterlyId}/lessons/${lessonId}/days/${dayId}/read`)).data
				return read
			} catch (error) {
				throw error
			}
		}
	}
}

export default resolvers
