export const vars = {
	transitionTime: "0.3s",
	phoneUpperBoundary: 600,
	tabletPortraitUpperBoundary: 900,
	tabletLandscapeUpperBoundary: 1200,
	desktopUpperBoundary: 1800,
};

export const zIndex = {
	modal: 900,
	overlay: 800,
	dropdown: 700,
	header: 600,
	footer: 500,
};

// Based on https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/
export const mediaQueries = {
	phoneOnly: `@media (max-width: ${vars.phoneUpperBoundary - 1}px)`,
	tabletPortraitUp: `@media (min-width: ${vars.phoneUpperBoundary}px)`,
	tabletLandscapeUp: `@media (min-width: ${vars.tabletPortraitUpperBoundary}px)`,
	desktopUp: `@media (min-width: ${vars.tabletLandscapeUpperBoundary}px)`,
	largeDesktop: `@media (min-width: ${vars.desktopUpperBoundary}px)`,
};
