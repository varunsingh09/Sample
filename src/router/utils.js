const ACCESS_TOKEN_KEY = "_token";
const LOGIN_USER_ID = "_user";
const BEARER = "Bearer "

const ACCESS_USER_ID = localStorage.getItem(LOGIN_USER_ID);
const DEFAULT_TOKEN = localStorage.getItem(ACCESS_TOKEN_KEY);

export const TOKEN = DEFAULT_TOKEN
export const USER_ID = ACCESS_USER_ID
export const CONTENT_TYPE = { "Content-Type": "application/json" };
export const CONTENT_TYPE_DEFAULT = { "Authorization": `${BEARER}${DEFAULT_TOKEN}`, "Content-Type": "application/json" };
export const CONTENT_TYPE_FILE = { "Authorization": `${BEARER}${DEFAULT_TOKEN}`, "Content-Type": "multipart/form-data" };


export const login = (data, access_token) => {

	localStorage.setItem(ACCESS_TOKEN_KEY, access_token && access_token);
	localStorage.setItem(LOGIN_USER_ID, data && data.data && data.data.empId && data.data.empId);
	window.location = "/admin/dashboard"
}

export const logout = () => {
	localStorage.clear();
	window.location = "/login"
}

export const isLogin = () => {
	if (localStorage.getItem(ACCESS_TOKEN_KEY)) {
		return true;
	}
	return false;
}

export const token = () => {
	return localStorage.getItem(ACCESS_TOKEN_KEY);
}