import {storeToken, clearToken} from '../utils/';
import {
    consumeResponseWithJson,
    consumeResponseWithText,
    makeRequest,
} from './utils.js';


const _logInRequestParameters = {
    method: 'POST',
    mimeTypes: {
        accept: 'application/json',
        contentType: 'application/json',
    },
    isAuthenticated: false,
};
function _handleLogInResponse(logInData) {
    const { session_token } = logInData.data;
    storeToken(session_token);
    return logInData;
};
function requestLogIn(parameters) {
    return makeRequest('auth/', _logInRequestParameters, parameters)
        .then(consumeResponseWithJson)
        .then(_handleLogInResponse);
}

const _logOutRequestParameters = {
    method: 'POST',
    mimeTypes: {
        accept: 'text',
        contentType: 'application/json',
    },
    isAuthenticated: true,
};
function _handleLogOutResponse(logOutData) {
    clearToken();
    return logOutData;
}
function requestLogOut() {
    return makeRequest('logout/', _logOutRequestParameters)
        .then(consumeResponseWithText)
        .then(_handleLogOutResponse);
}

const _getUserInfoRequestParameters = {
    method: 'POST',
    mimeTypes: {
        accept: 'application/json',
        contentType: 'application/json',
    },
    isAuthenticated: true,
}
/** getUserInfo(parameters)
 * Get authenticated user information.
 * Authenticated route.
 * @param {Object} parameters - Request parameters
 * @returns {Promise}
 */
function getUserInfo(parameters) {
    return makeRequest('myInfo', _getUserInfoRequestParameters)
        .then(consumeResponseWithJson);
}

const _isAuthenticatedRequestParameters = {
    method: 'POST',
    mimeTypes: {
        accept: 'application/json',
        contentType: 'application/json',
    },
    isAuthenticated: true,
}
/** isAuthenticated()
 * Is the user authenticated or not
 * @returns {Promise} Resolves if authenticated, rejects otherwise
 */
function isAuthenticated() {
    debugger
    return makeRequest('myInfo', _isAuthenticatedRequestParameters)
        .then(consumeResponseWithJson);
}


export {
    requestLogIn,
    requestLogOut,
    getUserInfo,
    isAuthenticated,
}
