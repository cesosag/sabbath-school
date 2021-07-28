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
    start_date: String
    end_date: String
    cover: String
    days: [Day]
  }

  type Quarterly {
    id: ID
    index: String
    title: String!
    description: String
    human_date: String
    start_date: String
    end_date: String
    color_primary: String
    color_primary_dark: String
    quarterly_name: String
    features: [Feature]
    credits: [Credit]
    lang: String
    introduction: String
    quarterly_group: QuarterlyGroup
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
    content: String
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
