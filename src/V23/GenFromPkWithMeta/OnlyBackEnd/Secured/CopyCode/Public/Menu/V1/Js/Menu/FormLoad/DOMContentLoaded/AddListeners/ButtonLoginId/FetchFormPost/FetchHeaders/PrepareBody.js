const StartFunc = () => {
    let jVarLocalPostObject = {};

    jVarLocalPostObject.UserName = jFLocalusername();
    jVarLocalPostObject.Password = jFLocalpassword();

    return jVarLocalPostObject
};

let jFLocalusername = () => {
    let jVarLocalusername = 'username'
    let jVarLocalHtmlId = document.getElementById(jVarLocalusername);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalpassword = () => {
    let jVarLocalpassword = 'password'
    let jVarLocalHtmlId = document.getElementById(jVarLocalpassword);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };

};

export { StartFunc }