const axios = require("axios");

const parseResponse = (response) => {
    if (response.status === 401)
        return { ok: false, errors: [{ message: 'unauthorized' }] };
    if (response.status === 204) return { ok: true, data: {} };

    const json = response.data;
    if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 202
    )
        return { ok: true, data: json };
    if (response.status >= 400 || response.status <= 499) {
        return { ok: false, errors: json.errors };
    }

    return { ok: true, json };
};


const getConfig = (
    baseUrl,
    params
) => {
    return new Promise((resolve) => {
        const axiosConfig = {
            baseURL: baseUrl,
            headers: {
                Accept: 'application/json;charset=utf-8'
            },
            params
        };
        resolve(axiosConfig);
    });
};

const get = (
    resource,
    params,
    baseUrl
) => {
    return getConfig(baseUrl, params)
        .then((config) => axios.get(resource, config))
        .then((res) => parseResponse(res))
        .catch((err) => parseResponse(err));
};

const post = (resource, body, baseUrl) => {
    return getConfig(baseUrl)
        .then((config) =>
            axios.post(resource, body, config)
        )
        .then((res) => parseResponse(res))
        .catch((err) => parseResponse(err.response));
};

const put = (resource, body, baseUrl) => {
    return getConfig(baseUrl)
        .then((config) => axios.put(resource, body, config))
        .then((res) => parseResponse(res))
        .catch((err) => parseResponse(err.response));
};

const deleteResource = (resource, baseUrl) => {
    return getConfig(baseUrl)
        .then((config) => axios.delete(resource, config))
        .then((res) => parseResponse(res))
        .catch((err) => parseResponse(err.response));
};

module.exports = { get , put, post, deleteResource}