import Config from "../Config/Config"
import Auth from "../Auth/Auth";

var SendRequest = (function (){

    var formRequest = async (uri, bodySerialize) => {
        const response = await fetch(
            `${Config.api.base_url}${uri}`,
            {
                method: "POST",
                headers: Config.api.headers,
                body: bodySerialize,
            });
        return response;
    }

    var apiRequest = async function (uri) {
        const response = await fetch(
            `${Config.api.base_url}${uri}`,
            {
                method: "POST",
                headers: Config.api.headers,
                body: `api_key=${Auth.getApiKey()}`,
            });
        return response;
    }

    return {
        formRequest: formRequest,
        apiRequest: apiRequest,
    }
})();


export default SendRequest;