import {
    consumeResponseWithJson,
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
    return makeRequest('audience/', _requestAudienceDataRequestParameters, parameters)
        .then(consumeResponseWithJson)
        .then(_handleAudienceDataResponse);
}

const _requestBandwidthDataRequestParameters = {
    method: 'POST',
    mimeTypes: {
        accept: 'application/json',
        contentType: 'application/json',
    },
    isAuthenticated: true,
};
function _handleBandwidthDataResponse(audienceData) {
    debugger
    return {
        cdn: audienceData.data.cdn,
        p2p: audienceData.data.p2p,
    };
};
function requestBandwidthData(parameters) {
    debugger
    return makeRequest('bandwidth/', _requestBandwidthDataRequestParameters, parameters)
        .then(consumeResponseWithJson)
        .then(_handleBandwidthDataResponse);
}

export {
    requestBandwidthData,
    requestAudienceData,
    _handleBandwidthDataResponse,
    _handleAudienceDataResponse,
}
