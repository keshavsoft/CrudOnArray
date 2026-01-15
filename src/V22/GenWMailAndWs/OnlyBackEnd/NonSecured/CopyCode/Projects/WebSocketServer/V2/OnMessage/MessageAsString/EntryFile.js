import { StartFunc as StartFuncreturnOnlineClients } from "./returnOnlineClients.js";
import { StartFunc as StartFuncGetWebSocketId } from "./getWebSocketId.js";
import { StartFunc as StartFuncreturnOnlineClientsWOMe } from "./returnOnlineClientsWOMe.js";
import { StartFunc as myChat } from "./myChat.js";
import { StartFunc as myPhone } from "./myPhone.js";
import { StartFunc as StartFuncAiChat } from "./AiChat/entryFile.js";
import { StartFunc as StartFuncFromReturnWhoAmI } from "./returnWhoAmI.js";
import { StartFunc as StartFuncfromFullChat } from "./fullChat.js";
import { StartFunc as StartFuncFromChatIn } from "./chatIn.js";

let StartFunc = ({ inDataAsString, inws, inClients, inChatLog, inSendFunc }) => {
    let LocalDataAsSting = inDataAsString;
    // console.log("LocalDataAsSting : ", LocalDataAsSting);

    if (LocalDataAsSting === "returnWhoAmI") {
        StartFuncFromReturnWhoAmI({ inDataAsString: LocalDataAsSting, inws: inws, inClients, inSendFunc });
    };

    if (LocalDataAsSting === "returnOnlineClients") {
        StartFuncreturnOnlineClients({ inDataAsString: LocalDataAsSting, inClients, inSendFunc });
    };

    if (LocalDataAsSting === "GetWebSocketId") {
        StartFuncGetWebSocketId({ inDataAsString: LocalDataAsSting, inws, inClients, inSendFunc });
    };

    if (LocalDataAsSting === "returnOnlineClientsWOMe") {
        StartFuncreturnOnlineClientsWOMe({ inDataAsString: LocalDataAsSting, inws: inws, inClients: inClients });
    };

    if (LocalDataAsSting === "myChat") {
        myChat({ inChatLog, inws: inws, inClients: inClients });
    };

    if (LocalDataAsSting === "myPhone") {
        myPhone({ inSendFunc });
    };

    if (LocalDataAsSting === "fullChat") {
        StartFuncfromFullChat({ inDataAsString: LocalDataAsSting, inClients, inSendFunc });
    };

    if (LocalDataAsSting === "ChatIn") {
        StartFuncFromChatIn({ inDataAsString: LocalDataAsSting, inClients, inSendFunc });
    }

    StartFuncAiChat({ inDataAsString, inws, inClients, inChatLog, inSendFunc });
};

export { StartFunc };