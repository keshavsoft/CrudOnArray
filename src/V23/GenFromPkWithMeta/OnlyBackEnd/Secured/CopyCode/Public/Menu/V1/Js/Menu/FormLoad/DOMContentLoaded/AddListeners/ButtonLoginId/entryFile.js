import { StartFunc as StartFuncButtonClickFunc } from './ButtonClickFunc.js';

let StartFunc = () => {
	let jVarLocalHtmlId = document.getElementById('ButtonLoginId');

	if (jVarLocalHtmlId === null === false) {
		jVarLocalHtmlId.addEventListener('click', StartFuncButtonClickFunc);
	};
};

export { StartFunc };