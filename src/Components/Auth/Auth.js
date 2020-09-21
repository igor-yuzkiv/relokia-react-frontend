import Config from "../Config/Config"

var Auth = (function () {

    const localStorageField = {
        api_key: "api_key",
        userName: "userName",
        userEmail: "userEmail",
        role: "role"
    };

    var localStorage = window.localStorage;

    var login = (api_key, name, email, role) => {
        localStorage.setItem(localStorageField.api_key, api_key);
        localStorage.setItem(localStorageField.userName, name);
        localStorage.setItem(localStorageField.userEmail, email);
        localStorage.setItem(localStorageField.role, role);
        window.location.href = "/ticket-list";
    }

    var logout = () => {
        localStorage.removeItem(localStorageField.api_key);
        localStorage.removeItem(localStorageField.userName);
        localStorage.removeItem(localStorageField.userEmail);
        localStorage.removeItem(localStorageField.role);
        window.location.href = "/login";
    }

    var getApiKey = () => {
        return localStorage.getItem(localStorageField.api_key);
    }

    var getUserName = () => {
        return localStorage.getItem(localStorageField.userName)
    }

    var getUserEmail = () => {
        return localStorage.getItem(localStorageField.userEmail)
    }

    var getUserRole = () => {
        return localStorage.getItem(localStorageField.role)
    }

    var getUserRoleNames = () => {

        let roles =  JSON.parse(localStorage.getItem(localStorageField.role))
        if (roles !== null) {
            let rolesNames = roles.map((item) => {
                return item.name;
            });

            return rolesNames
        }else {
            return Config.auth.defaultUserRole
        }
    }

    var isLogin = () => {
        if (localStorage.getItem(localStorageField.api_key) != null) {
            return true;
        } else {
            return false;
        }
    }

    return {
        login: login,
        getUserName: getUserName,
        getUserEmail: getUserEmail,
        getApiKey: getApiKey,
        isLogin: isLogin,
        logout: logout,
        getUserRoleNames: getUserRoleNames
    }
})();

export default Auth;