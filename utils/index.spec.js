import { getAPIUrl } from './'

describe('getAPIUrl()', () => {
	it('should return an empty string if nothing is provided', () => {
		expect(getAPIUrl()).toBe('')
	})
	it('should return the appropiate URL according to the passed index string', () => {
		expect(getAPIUrl('en')).toBe('/en/quarterlies')
		expect(getAPIUrl('en-2021-01')).toBe('/en/quarterlies/2021-01')
		expect(getAPIUrl('en-2021-01-01')).toBe('/en/quarterlies/2021-01/lessons/01')
		expect(getAPIUrl('en-2021-01-01-05')).toBe('/en/quarterlies/2021-01/lessons/01/days/05')
		expect(getAPIUrl('en-2021-01-01-whatever-goes-here')).toBe('/en/quarterlies/2021-01/lessons/01/days/whatever-goes-here')
	})
})
