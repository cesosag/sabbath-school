import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { vars, mediaQueries } from "./theme";

export const GlobalStyle = createGlobalStyle`
	${normalize()}

	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}

	img {
		max-width: 100%;
		vertical-align: middle;
	}
`;

export const Wrapper = styled.div`
	margin: 0 auto;
	max-width: ${vars.desktopUpperBoundary}px;
	padding: 1.2rem;
	width: 100vw;
	${mediaQueries.desktopUp} {
		padding: 5rem;
	}
`;
