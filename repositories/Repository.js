import axios from 'axios';
export const isGrapql = true;
/*const baseDomain = 'http://http://localhost:1337';*/
const baseDomain = 'https://evening-fjord-80887.herokuapp.com';
const authorization_prefix = 'Bearer ';
export const customHeaders = {
    Accept: 'application/json',
    /* Authorization: authorization_prefix + token || undefined*/
};

export const baseUrl = `${baseDomain}`;


export default axios.create({
    baseUrl,
    headers: customHeaders,
});

export const serializeQuery = (query) => {
    return Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
