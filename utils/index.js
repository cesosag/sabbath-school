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
	const cleanPath = path[0] === '/' ? path.substring(1) : path
	const [lang, _, quarterlyId, __, lessonId, ___, dayId] = cleanPath.split('/')
	return [lang, quarterlyId, lessonId, dayId]
}

export const toCamelCase = string => {
	const regex = /[-_]([a-z]|[0-9])/gi
	const camelCaseString = string.replace(regex, $1 => $1.toUpperCase().replace('-', '').replace('_', ''))
	return camelCaseString
}

export const isObject = obj => {
	return obj === Object(obj) && !Array.isArray(obj) && typeof obj !== 'function'
}

export const objectKeysToCamelCase = obj => {
	if (isObject(obj)) {
		const newObject = {}
		Object.keys(obj).forEach(key => {
			newObject[toCamelCase(key)] = objectKeysToCamelCase(obj[key])
		})
		return newObject
	} else if (Array.isArray(obj)) {
		return obj.map(i => objectKeysToCamelCase(i))
	}
	return obj
}
