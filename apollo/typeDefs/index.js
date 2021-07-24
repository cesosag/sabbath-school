import { gql } from 'apollo-server-micro'

const typeDefs = gql`
	scalar JSON

	type Bible {
		name: String
		verses: JSON
	}

	type Language {
		name: String
		code: String
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
		Languages: [Language!]
		Read(id: String!): Read!
	}
`

export default typeDefs
