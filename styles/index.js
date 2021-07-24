/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { GlobalStyle, Wrapper } from "./global.styles";
import * as theme from "./theme";

const dynamicElement = (Tag, hasWrapper = false) =>
	forwardRef(({ children, ...props }, ref) => {
		const content = hasWrapper ? <Wrapper>{children}</Wrapper> : children
		return (
			<Tag ref={ref} {...props}>
				{content}
			</Tag>
		)
})

export { GlobalStyle, Wrapper, dynamicElement, theme };
