import {
    consumeResponseWithJson,
    consumeResponseWithText,
    makeRequest,
} from './utils.js';

const _requestAudienceDataRequestParameters = {
    method: 'POST',
    mimeTypes: {
        accept: 'application/json',
        contentType: 'application/json',
    },
    isAuthenticated: true,
};
function _handleAudienceDataResponse(audienceData) {
    return audienceData.data.audience;
};
function requestAudienceData(parameters) {
    const daRequestParams = {
        from: new Date(1969, 7, 20).getTime(),
        to: Date.now(),
    }
    debugger
    return makeRequest('audience/', _requestAudienceDataRequestParameters, daRequestParams)
        .then(consumeResponseWithJson)
        .then(_handleAudienceDataResponse);
}

export {
    requestAudienceData,
    _handleAudienceDataResponse,
}
