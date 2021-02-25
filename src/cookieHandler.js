import Cookies from 'universal-cookie';
const cookies = new Cookies();

function getCookie(cookie) {
    return cookies.get(cookie);
}

function setCookie(cookie, data) {
    var date = new Date();
    date.setFullYear(date.getFullYear() + 1);

    cookies.set(cookie, data, {path: '/', expires: date});
}

export {getCookie, setCookie};