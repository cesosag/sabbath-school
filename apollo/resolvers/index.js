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
import { transformLessonData, transformQuarterlyData, transformReadData } from './dataTransformers'
import { getIDsFromPath } from 'utils'

const resolvers = {
  Query: {
    Day: async (_, {lang, quarterlyId, lessonId, dayId}) => {
      return await fetchDay(lang, quarterlyId, lessonId, dayId)
    },
    Days: async (_, {lang, quarterlyId, lessonId}) => {
      return await fetchDays(lang, quarterlyId, lessonId)
    },
    Languages: async () => {
      return await fetchLanguages()
    },
    Lesson: async (_, {lang, quarterlyId, lessonId}) => {
			const lessonData = await fetchLesson(lang, quarterlyId, lessonId)
			const lesson = transformLessonData(lessonData)
      return lesson
    },
    Lessons: async (_, {lang, quarterlyId}) => {
      return await fetchLessons(lang, quarterlyId)
    },
    Quarterly: async (_, {lang, quarterlyId}) => {
			const quarterlyData = await fetchQuarterly(lang, quarterlyId)
			const quarterly = transformQuarterlyData(quarterlyData)
      return quarterly
    },
    Quarterlies: async (_, {lang}) => {
      return await fetchQuarterlies(lang)
    },
    Read: async (_, {lang, quarterlyId, lessonId, dayId}) => {
			const read = await fetchRead(lang, quarterlyId, lessonId, dayId)
      return transformReadData(read)
    },
  },
  Day: {
    read: async ({path}) => {
      const ids = getIDsFromPath(path)
			const read = await fetchRead(...ids)
      return transformReadData(read)
    },
  },
  Lesson: {
    days: async ({path, days}) => {
			if (days) {
				return days
			}
      const ids = getIDsFromPath(path)
      return await fetchDays(...ids)
    },
  },
  Quarterly: {
    lessons: async ({path, lessons}) => {
			if (lessons) {
				return lessons
			}
      const ids = getIDsFromPath(path)
      return await fetchLessons(...ids)
    },
  },
}

export default resolvers
