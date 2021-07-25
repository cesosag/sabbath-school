import { lessons } from 'services'

const resolvers = {
	Query: {
		Day: async (_, { id }) => {
			const [langCode, year, quarterlyId, lessonId, dayId] = id.split("-");
			try {
				const { data } = await lessons.get(
					`/${langCode}/quarterlies/${year}-${quarterlyId}/lessons/${lessonId}/days/${dayId}`
				);
				return data;
			} catch (error) {
				throw error;
			}
		},
		Days: async (_, { lessonID }) => {
			const [langCode, year, quarterlyId, lessonId] = lessonID.split("-");
			try {
				const { data } = await lessons.get(
					`/${langCode}/quarterlies/${year}-${quarterlyId}/lessons/${lessonId}/days`
				);
				return data;
			} catch (error) {
				throw error;
			}
		},
		Languages: async () => {
			try {
				const { data } = await lessons.get("/languages");
				return data;
			} catch (error) {
				throw error;
			}
		},
		Lesson: async (_, { id }) => {
			const [langCode, year, quarterlyId, lessonId] = id.split("-");
			try {
				const { data } = await lessons.get(
					`/${langCode}/quarterlies/${year}-${quarterlyId}/lessons/${lessonId}`
				);
				return data.lesson
			} catch (error) {
				throw error;
			}
		},
		Lessons: async (_, { quarterlyID }) => {
			const [langCode, year, quarterlyId] = quarterlyID.split("-");
			try {
				const { data } = await lessons.get(
					`/${langCode}/quarterlies/${year}-${quarterlyId}/lessons`
				);
				return data;
			} catch (error) {
				throw error;
			}
		},
		Quarterly: async (_, { id }) => {
			const [langCode, year, quarterlyId] = id.split("-");
			try {
				const { data } = await lessons.get(
					`/${langCode}/quarterlies/${year}-${quarterlyId}`
				);
				return data.quarterly;
			} catch (error) {
				throw error;
			}
		},
		Quarterlies: async (_, { langCode }) => {
			try {
				const { data } = await lessons.get(`/${langCode}/quarterlies`);
				return data;
			} catch (error) {
				throw error;
			}
		},
		Read: async (_, { id }) => {
			const [langCode, year, quarterlyId, lessonId, dayId] = id.split("-");
			try {
				const { data } = await lessons.get(
					`/${langCode}/quarterlies/${year}-${quarterlyId}/lessons/${lessonId}/days/${dayId}/read`
				);
				return data;
			} catch (error) {
				throw error;
			}
		},
	},
};

export default resolvers
