import lessons from './lessons'
import { getAPIUrl } from 'utils'

const fetchData = async (url) => {
	try {
		const { data } = await lessons.get(url)
		return data
	} catch (error) {
		throw error
	}
}

export const fetchDay = async (index) => {
  const url = getAPIUrl(index)
  const data = await fetchData(url)
  return data
}

export const fetchDays = async index => {
  const url = `${getAPIUrl(index)}/days`
  const data = await fetchData(url)
  return data
}

export const fetchLanguages = async () => {
	const url = '/languages'
	const data =  await fetchData(url)
	return data
}

export const fetchLesson = async index => {
  const url = getAPIUrl(index)
  const data = await fetchData(url)
  return data
}

export const fetchLessons = async index => {
  const url = `${getAPIUrl(index)}/lessons`
  const data = await fetchData(url)
  return data
}

export const fetchQuarterly = async index => {
  const url = getAPIUrl(index)
  const data = await fetchData(url)
  return data
}

export const fetchQuarterlies = async index => {
  const url = getAPIUrl(index)
  const data = await fetchData(url)
  return data
}

export const fetchRead = async index => {
	const url = `${getAPIUrl(index)}/read`
  const data = await fetchData(url)
  return data
}
