import {
	formAPIUrl,
	getAPIUrl,
	getIDsFromPath,
	isObject,
	objectKeysToCamelCase,
	toCamelCase
} from './'

describe('Utils', () => {
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

	describe('getIDsFromPath()', () => {
		it('should extract the IDs from the provided path', () => {
			const expectedIDs = ['en', '2021-01', '01', 'whatever-goes-here']
			const path = formAPIUrl(...expectedIDs)
			expect(getIDsFromPath(path)).toStrictEqual(expectedIDs)
		})
	})

	describe('formAPIUrl()', () => {
		it('should return the appropiate URL according to the provided IDs', () => {
			expect(formAPIUrl('en')).toBe('/en/quarterlies')
			expect(formAPIUrl('en', '2021-01-whatever')).toBe('/en/quarterlies/2021-01-whatever')
			expect(formAPIUrl('en', '2021-01', '01')).toBe('/en/quarterlies/2021-01/lessons/01')
			expect(formAPIUrl('en', '2021-01', '01', 'whatever-goes-here')).toBe('/en/quarterlies/2021-01/lessons/01/days/whatever-goes-here')
		})
	})

	describe('toCamelCase()', () => {
		it('should transform snake_case or kebab-case to camelCase', () => {
			expect(toCamelCase('some_value_1')).toBe('someValue1')
			expect(toCamelCase('some-value-1')).toBe('someValue1')
		})
	})

	describe('isObject()', () => {
		it('should detect in something is an object or not', () => {
			expect(isObject(getIDsFromPath)).toBeFalsy()
			expect(isObject('Object')).toBeFalsy()
			expect(isObject([1, 2, 3])).toBeFalsy()
			expect(isObject(1)).toBeFalsy()
			expect(isObject({})).toBeTruthy()
			expect(isObject({a: 1, b: 2})).toBeTruthy()
		})
	})

	describe('objectKeysToCamelCase()', () => {
		it('should return an object with camelCase keys', () => {
			const obj = {
				some_property: {
					other_property: 'Some value',
				},
				some_array: [
					{
						some_object: {
							a: 1,
						}
					},
					{
						other_object: {
							b: 2,
						}
					}
				],
			}
			const expectedObject = {
        someProperty: {
          otherProperty: 'Some value',
        },
        someArray: [
          {
            someObject: {
              a: 1,
            },
          },
          {
            otherObject: {
              b: 2,
            },
          },
        ],
      }
			expect(objectKeysToCamelCase(obj)).toStrictEqual(expectedObject)
		})
	})
})
