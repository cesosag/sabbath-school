export const getAPIUrl = (index = '') => {
	let url = ''

	if(index) {
		const splitId = index.split('-')
		const [langCode, year, quarterlyId, lessonId] = splitId
		const dayId = splitId.slice(4).join('-')
		url = langCode ? `${url}/${langCode}/quarterlies` : url
		url = year && quarterlyId ? `${url}/${year}-${quarterlyId}` : url
		url = lessonId ? `${url}/lessons/${lessonId}` : url
		url = dayId ? `${url}/days/${dayId}` : url
	}

	return url
}

export const formAPIUrl = (lang, quarterlyId, lessonId, dayId) => {
  let url = ''

	url = lang ? `${url}/${lang}/quarterlies` : url
	url = quarterlyId ? `${url}/${quarterlyId}` : url
	url = lessonId ? `${url}/lessons/${lessonId}` : url
	url = dayId ? `${url}/days/${dayId}` : url

  return url
}

export const getIDsFromPath = path => {
	const [lang, _, quarterlyId, __, lessonId, ___, dayId] = path.split('/')
	return [lang, quarterlyId, lessonId, dayId]
}
