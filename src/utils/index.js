import ProtectedRoute from './ProtectedRoute';

/* Handling session token */
function storeToken(token) {
    return sessionStorage.setItem('session_token', token);
};

function getToken() {
    return sessionStorage.getItem('session_token');
};

function clearToken() {
    return sessionStorage.removeItem('session_token');
};





export {
    storeToken,
    getToken,
    clearToken,
    ProtectedRoute,
}
