import { StartFunc as StartFuncFromgetValueBtn } from './getValueBtn/entryFile.js';
import { StartFunc as StartFuncFromButtonLoginId } from './ButtonLoginId/entryFile.js';

const StartFunc = () => {
	StartFuncFromgetValueBtn();
	StartFuncFromButtonLoginId();
};

export { StartFunc };