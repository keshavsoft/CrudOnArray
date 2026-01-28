import { StartFunc as StartFuncFormAddListeners } from "./AddListeners/entryFile.js";
import { StartFunc as StartFuncFromFetchAsGet } from "./FetchAsGet/entryFile.js";

const StartFunc = () => {
    StartFuncFormAddListeners();
    StartFuncFromFetchAsGet();
};

export { StartFunc };
