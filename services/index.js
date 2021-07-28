import lessons from './lessons'
import { formAPIUrl } from 'utils'

const fetchData = async (url) => {
	try {
		const { data } = await lessons.get(url)
		return data
	} catch (error) {
		const err = new Error(error)
		console.error(err.message)
		return err
	}
}

export const fetchDay = async (lang, quarterlyId, lessonId, dayId) => {
  const url = formAPIUrl(lang, quarterlyId, lessonId, dayId)
  const data = await fetchData(url)
  return data
}

export const fetchDays = async (lang, quarterlyId, lessonId) => {
  const url = `${formAPIUrl(lang, quarterlyId, lessonId)}/days`
  const data = await fetchData(url)
  return data
}

export const fetchLanguages = async () => {
	const url = '/languages'
	const data =  await fetchData(url)
	return data
}

export const fetchLesson = async (lang, quarterlyId, lessonId) => {
  const url = formAPIUrl(lang, quarterlyId, lessonId)
  const data = await fetchData(url)
  return data
}

export const fetchLessons = async (lang, quarterlyId) => {
  const url = `${formAPIUrl(lang, quarterlyId)}/lessons`
  const data = await fetchData(url)
  return data
}

export const fetchQuarterly = async (lang, quarterlyId) => {
  const url = formAPIUrl(lang, quarterlyId)
  const data = await fetchData(url)
  return data
}

export const fetchQuarterlies = async lang => {
  const url = formAPIUrl(lang)
  const data = await fetchData(url)
  return data
}

export const fetchRead = async (lang, quarterlyId, lessonId, dayId) => {
  const url = `${formAPIUrl(lang, quarterlyId, lessonId, dayId)}/read`
  const data = await fetchData(url)
  return data
}
