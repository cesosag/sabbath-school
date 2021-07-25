import { gql } from 'apollo-server-micro'

const typeDefs = gql`
	scalar JSON

	type Bible {
		name: String
		verses: JSON
	}

	type Day {
		id: ID
		index: String
		title: String
		date: String
		path: String
		full_path: String
		read_path: String
		full_read_path: String
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
		path: String
		full_path: String
		cover: String
	}

	type Quarterly {
		id: ID
		index: String
		title: String!
		description: String
		human_date: String
		path: String
		full_path: String
		cover: String
		lang: String
		start_date: String
		end_date: String
		color_primary: String
		color_primary_dark: String
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
		Day(id: String!): Day!
		Days(lessonID: String!): [Day]
		Languages: [Language]
		Lesson(id: String!): Lesson!
		Lessons(quarterlyID: String!): [Lesson]
		Quarterly(id: String!): Quarterly!
		Quarterlies(langCode: String!): [Quarterly]
		Read(id: String!): Read!
	}
`;

export default typeDefs
