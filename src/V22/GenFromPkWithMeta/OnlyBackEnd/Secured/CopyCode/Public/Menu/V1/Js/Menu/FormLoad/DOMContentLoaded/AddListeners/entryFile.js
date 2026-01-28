import { StartFunc as StartFuncFromgetValueBtn } from './getValueBtn/EntryFile.js';
import { StartFunc as StartFuncFromButtonLoginId } from './ButtonLoginId/EntryFile.js';

const StartFunc = () => {
	StartFuncFromgetValueBtn();
	StartFuncFromButtonLoginId();
};

export { StartFunc };