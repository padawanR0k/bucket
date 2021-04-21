import React from "react";

const makeRandomRGB = () => {
	const R = Math.floor(Math.random() * 255);
	const G = Math.floor(Math.random() * 255);
	const B = Math.floor(Math.random() * 255);
	return `rgb(${R}, ${G}, ${B})`;
};
export const ThemeContext = React.createContext("");

const ThemeColorMaker: React.FC = (props) => {
	const themeColor = makeRandomRGB();
	const themeStyleVariables = `
		:root {
			--theme-color: ${themeColor};
		}
	`;
	return (<ThemeContext.Provider value={themeColor}>
		<style>
			{themeStyleVariables}
		</style>
		{props.children}
	</ThemeContext.Provider>)
};

export default ThemeColorMaker;