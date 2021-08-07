import { ApolloServer } from 'apollo-server-micro'
import { schema } from '../../apollo'

const apolloServer = new ApolloServer({ schema })
const startServer = apolloServer.start()

export default async function handler(req, res) {
	res.setHeader('Cache-Control', `max-age=${process.env.MAX_AGE}, stale-while-revalidate=${process.env.SWR}`)
	await startServer
  await apolloServer.createHandler({
		path: '/api/graphql',
  })(req, res)
}

export const config = {
	api: {
		bodyParser: false,
	},
}
