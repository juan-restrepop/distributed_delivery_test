import { api_server } from './config.js';
import { getToken } from '../utils/';

/** _consumeResponseWithJson(response)
 * Fetch returns a promise as soon as the server responds, regardless
 * of the response status code. The returned promise resolves
 * on a succesful (200<= code < 300) status, it rejects otherwise.
 * This method handles the actual meaning of status codes.
 * @param {Object} res - response as returned by fetch()
 * @return {Promise}
 */
function consumeResponseWithJson(res) {
    const responseHandlingPromise = new Promise( (resolve, reject) => {
        if (res.ok) {
            res.json()
                .then( data => resolve({status: res.status, data: data}) )
                .catch(err => reject(err) );
        } else {
            reject(res);
        }
    });

    return responseHandlingPromise;
}

/** _consumeResponseWithText(response)
 * Fetch returns a promise as soon as the server responds, regardless
 * of the response status code. The returned promise resolves
 * on a succesful (200<= code < 300) status, it rejects otherwise.
 * This method handles the actual meaning of status codes.
 * @param {Object} res - response as returned by fetch()
 * @return {Promise}
 */
function consumeResponseWithText(res) {
    const responseHandlingPromise = new Promise( (resolve, reject) => {
        if (res.ok) {
            res.text()
                .then( text => resolve({status: res.status, text: text}) )
                .catch(err => reject(err) );
        } else {
            reject(res);
        }
    });

    return responseHandlingPromise;
}

function _makeRequestParameters(parameters) {
    const {method, mimeTypes, isAuthenticated} = parameters;
    if (!['POST', 'GET', 'PUT', 'DELETE'].includes(method)) {
        throw new Error('invalid request method');
    }
    if ( !('accept' in mimeTypes) || !('contentType' in mimeTypes)  ) {
            throw new Error('invalid request mime types');
    }

    const reqParameters = {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            Accept: mimeTypes.accept,
            'Content-Type': mimeTypes.contentType,
        },
    };

    if (isAuthenticated) {
        reqParameters.body = {session_token: getToken()};
    }

    return reqParameters;
}

function makeRequest(route, requestParameters, apiCallParameters) {
    const {protocol, host, port} = api_server;
    const url = `${protocol}://${host}:${port}/${route}`;

    const reqParameters = _makeRequestParameters(requestParameters);
    if ( apiCallParameters ) {
        reqParameters.body = JSON.stringify({
            ...apiCallParameters,
            ...reqParameters.body
        })
    } else {
        reqParameters.body = JSON.stringify(reqParameters.body)
    }

    return fetch(url, reqParameters);
}

export {
    consumeResponseWithJson,
    consumeResponseWithText,
    makeRequest,
    _makeRequestParameters,
}
