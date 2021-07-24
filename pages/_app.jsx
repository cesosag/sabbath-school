import { useEffect } from 'react'
import { GlobalStyle, dynamicElement } from 'styles'
import pkg from '../package.json'

const Main = dynamicElement('main')

const App = ({ Component, pageProps }) => {
	useEffect(() => {
		console.info(
			`%c${pkg.description}, version: ${pkg.version}`,
			`background: #000;
			color: #FFF;
			font-size: x-large;
			padding: 0.5em;`
		)
	}, [])

	return (
		<>
			<GlobalStyle />
			<Main>
				<Component {...pageProps} />
			</Main>
		</>
	)
}

export default App
