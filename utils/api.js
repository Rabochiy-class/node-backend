import https from 'https';

export function performChunkedRequestWithSideEffect(options, data, effect) {
    return new Promise((resolve, reject) => {
        const bodyBuffer = [];
        const request = https.request(options, (response) => {
            response.on('data', (chunk) => bodyBuffer.push(chunk));
            response.on('end', () => {
                effect(response);
                resolve(Buffer.concat(bodyBuffer).toString());
            })
        });

        request.on('error', (err) => reject(err));
        request.write(data);
        request.end();
    });
}

export function performChunkedRequest(options, data) {
    return new Promise((resolve, reject) => {
        const bodyBuffer = [];
        const request = https.request(options, (response) => {
            response.on('data', (chunk) => bodyBuffer.push(chunk));
            response.on('end', () => {
                resolve(Buffer.concat(bodyBuffer).toString());
            })
        });

        request.on('error', (err) => reject(err));
        request.write(data);
        request.end();
    });
}

export function prepareRequestOptions({
    path,
    method,
    data,
    hostname = 'hackaton.donorsearch.org',
    port = 443,
    headers = {
        'Content-Type': 'application/json'
    }
}) {
    let options_headers = { ...headers };

    if (data) {
        options_headers['Content-Length'] = data.length;
    }

    return {
        hostname: hostname,
        port: port,
        path: path,
        method: method,
        headers: options_headers
    }
}

export async function performGenericJSONRequest({
    path, 
    method, 
    data,
    options = {}
}) {
    const stringified = JSON.stringify(data);
    const requestOptions = prepareRequestOptions({path: path, method: method, data: stringified, ...options});
    const response = await performChunkedRequest(requestOptions, stringified);
    const content = JSON.parse(response);

    return content;
}

// TODO: Проверка и добавление "/" в конце и начале
export function apiPath(path) {
    return path;
}