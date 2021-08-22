import chunk from 'lodash.chunk'
import sanitize from 'sanitize-html'

const sanitizeOptions = {
  allowedTags: [],
  allowedAttributes: {},
}

const groupNameSeparatorRegExp = /<h2>(?<name>(?:\w|\d)+\s\d+:\d+(?:-\d+)*)<\/h2>/
const verseSeparatorRegExp = /<(?:sup|span)\sclass="(?:versenum|chapternum)">(?<verseNum>\d+)\s<\/(?:sup|span)>/

export const verseToJSON = verseGroup => {
	const rawGroups = verseGroup.split(groupNameSeparatorRegExp)
	rawGroups.shift()
	const groups = chunk(rawGroups, 2)

	const jsonVerseGroups = groups.map(group => {
		const [name, rawVerses] = group
		const rawVersesArray = rawVerses.split(verseSeparatorRegExp)
		rawVersesArray.shift()
		const versesArray = chunk(rv, 2)

		const verses = {}

		versesArray.forEach(([num, verse]) => {
			verses[num] = sanitize(verse, sanitizeOptions)
		})

		return { name, verses }
	})
  return jsonVerseGroups
}
