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
import { getIDsFromPath } from 'utils'

const resolvers = {
  Query: {
    Day: async (_, {lang, quarterlyId, lessonId, dayId}) => {
      return await fetchDay(lang, quarterlyId, lessonId, dayId)
    },
    Days: async (_, {lang, quarterlyId, lessonId}, __, {cacheControl}) => {
      cacheControl.setCacheHint({maxAge: 86400})
      return await fetchDays(lang, quarterlyId, lessonId)
    },
    Languages: async () => {
      return await fetchLanguages()
    },
    Lesson: async (_, {lang, quarterlyId, lessonId}) => {
      return (await fetchLesson(lang, quarterlyId, lessonId)).lesson
    },
    Lessons: async (_, {lang, quarterlyId}, __, {cacheControl}) => {
      cacheControl.setCacheHint({maxAge: 86400})
      return await fetchLessons(lang, quarterlyId)
    },
    Quarterly: async (_, {lang, quarterlyId}) => {
      return (await fetchQuarterly(lang, quarterlyId)).quarterly
    },
    Quarterlies: async (_, {lang}) => {
      return await fetchQuarterlies(lang)
    },
    Read: async (_, {lang, quarterlyId, lessonId, dayId}, __, {cacheControl}) => {
      cacheControl.setCacheHint({maxAge: 86400})
      return await fetchRead(lang, quarterlyId, lessonId, dayId)
    },
  },
  Day: {
    read: async ({path}) => {
      const ids = getIDsFromPath(path)
      return await fetchRead(...ids)
    },
  },
  Lesson: {
    days: async ({path}) => {
      const ids = getIDsFromPath(path)
      return await fetchDays(...ids)
    },
  },
  Quarterly: {
    lessons: async ({path}) => {
      const ids = getIDsFromPath(path)
      return await fetchLessons(...ids)
    },
  },
}

export default resolvers
