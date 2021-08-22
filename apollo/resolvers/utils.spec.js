import { verseToJSON } from './utils'

const htmlVerseGroup =
  '<h2>Genesis 1:1-2</h2><span class="chapternum">1 </span>In the beginning God created the heaven and the earth.<sup class="versenum">2 </sup>And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.<h2>Exodus 20:8-10</h2><sup class="versenum">8 </sup>Remember the sabbath day, to keep it holy.<sup class="versenum">9 </sup>Six days shalt thou labour, and do all thy work:<sup class="versenum">10 </sup>But the seventh day is the sabbath of the <span style="font-variant: small-caps" class="small-caps">Lord</span> thy God: in it thou shalt not do any work, thou, nor thy son, nor thy daughter, thy manservant, nor thy maidservant, nor thy cattle, nor thy stranger that is within thy gates:'

const objectVerseGroup = [
  {
    name: 'Genesis 1:1-2',
    verses: {
      1: 'In the beginning God created the heaven and the earth.',
      2: 'And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.',
    },
  },
  {
    name: 'Exodus 20:8-10',
    verses: {
      8: 'Remember the sabbath day, to keep it holy.',
      9: 'Six days shalt thou labour, and do all thy work:',
      10: 'But the seventh day is the sabbath of the Lord thy God: in it thou shalt not do any work, thou, nor thy son, nor thy daughter, thy manservant, nor thy maidservant, nor thy cattle, nor thy stranger that is within thy gates:',
    },
  },
]

describe('Util functions for resolvers', () => {
	describe('verseToJSON()', () => {
		it('should return a structured object from a verse group in HTML', () => {
			expect(verseToJSON(htmlVerseGroup)).toStrictEqual(objectVerseGroup)
		})
	})
})
