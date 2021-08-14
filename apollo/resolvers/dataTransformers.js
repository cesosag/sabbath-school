import { parse } from 'html-parse-stringify'

export const transformLessonData = ({lesson, days}) => {
	const transformedData = {...lesson, days}
	return transformedData
}

export const transformQuarterlyData = ({quarterly, lessons}) => {
  const transformedData = {...quarterly, lessons}
  return transformedData
}

export const transformReadData = ({bible, content , ...read}) => {
	const parsedBible = bible.map(({ name, verses }) => {
		for (const verse in verses) {
			verses[verse] = {
				html: verses[verse],
				json: parse(verses[verse]),
			}
		}
		return { name, verses }
	})
	const jsonContent = parse(content)
	return { bible: parsedBible, content: jsonContent, html: content, ...read }
}
