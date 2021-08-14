import { gql } from 'apollo-server-micro'

const typeDefs = gql`
  scalar JSON

  type Bible {
    name: String
    verses: JSON
  }

  type Credit {
    name: String
    value: String
  }

  type Day {
    id: ID
    index: String
    title: String
    date: String
    read: Read
  }

  type Feature {
    name: String
    title: String
    description: String
    image: String
  }

  type Language {
    name: String
    code: String
  }

  type Lesson {
    id: ID
    index: String
    title: String
    startDate: String
    endDate: String
    cover: String
    days: [Day]
  }

  type Quarterly {
    id: ID
    index: String
    title: String!
    description: String
    humanDate: String
    startDate: String
    endDate: String
    colorPrimary: String
    colorPrimaryDark: String
    quarterlyName: String
    features: [Feature]
    credits: [Credit]
    lang: String
    introduction: String
    quarterlyGroup: QuarterlyGroup
    splash: String
    cover: String
    lessons: [Lesson]
  }

  type QuarterlyGroup {
    name: String
    order: Int
  }

  type Read {
    id: ID
    date: String
    index: String
    title: String
    bible: [Bible]
    content: JSON
		html: String
  }

  type Query {
    Day(lang: String!, quarterlyId: String!, lessonId: String!, dayId: String!): Day!
    Days(lang: String!, quarterlyId: String!, lessonId: String!): [Day]
    Languages: [Language]
    Lesson(lang: String!, quarterlyId: String!, lessonId: String!): Lesson!
    Lessons(lang: String!, quarterlyId: String!): [Lesson]
    Quarterly(lang: String!, quarterlyId: String!): Quarterly!
    Quarterlies(lang: String!): [Quarterly]
    Read(lang: String!, quarterlyId: String!, lessonId: String!, dayId: String!): Read!
  }
`

export default typeDefs
