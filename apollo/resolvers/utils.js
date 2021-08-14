import { parse } from 'html-parse-stringify'

export const verseToJSON = verseGroup => {
	const group = verseGroup.split('<h2>')
	group.shift()
	const jsonVerseGroups = group.map(group => {
		const jsonVerse = parse(`<h2>${group}`.trim())
		const verseSet = {
			name: '',
			verses: {},
		}
		jsonVerse.forEach(({ type, name, children }, i) => {
			const isTitle = type === 'tag' && name === 'h2'
			const isVerseNumber = type === 'tag' && (name === 'sup' || name === 'span') && children[0]?.content
			if (isTitle) {
				verseSet.name = children[0]?.content
			}
			if (isVerseNumber) {
    			verseSet.verses[children[0].content.trim()] = (jsonVerse[i + 1]?.content).trim()
    		}
		})
		return verseSet
	})
  return jsonVerseGroups
}
