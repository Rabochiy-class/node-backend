import https from 'https';

/**
 * Создает `Promise`-обёртку над https-запросом с полезной нагрузкой и опциями запроса,
 * с возможность добавить вызов дополнительной side effect функции, в случае успеха.
 *
 * @param {*} options настройки запроса, передаваемые в https клиент
 * @param {*} data полезная нагрузка запроса
 * @param {*} effect функция с сигнатурой `f(response: IncomingMessage)`, вызываемая в случае успешного запроса
 * @return {*} `Promise` с https запросом
 */
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

/* TODO: Remove code duplication */
/**
 * Создает `Promise`-обёртку над https-запросом с полезной нагрузкой и опциями запроса.
 *
 * @param {*} options настройки запроса, передаваемые в https клиент
 * @param {*} data полезная нагрузка запроса
 * @param {*} effect функция с сигнатурой `f(response: IncomingMessage)`, вызываемая в случае успешного запроса
 * @return {*} `Promise` с https запросом
 */
export function performChunkedRequest(options, data) {
    return new Promise((resolve, reject) => {
        const bodyBuffer = [];
        const request = https.request(options, (response) => {
            response.on('data', (chunk) => bodyBuffer.push(chunk));
            response.on('end', () => {
                if (response.statusCode && response.statusCode % 100 !== 2)
                    console.log(`[${options.method}][${options.path}] Returned non-200s code ${response.statusCode}`)
                resolve(Buffer.concat(bodyBuffer).toString());
            })
        });

        request.on('error', (err) => reject(err));
        request.write(data);
        request.end();
    });
}


/**
 * Подгатавливает опции для запроса через `https` клиент на указаный endpoint.
 * Если передан параметр `data`, заголовок 'Content-Length' будет автоматически указан.
 *
 * @export
 * @param {*} {
 *     path,
 *     method,
 *     data,
 *     hostname = 'hackaton.donorsearch.org',
 *     port = 443,
 *     headers = {
 *         'Content-Type': 'application/json'
 *     }
 * }
 * @return {*} Объект, подготовленный для передачи в `https.request()` как аргумент `options`
 */
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

/**
 * Выполняет простой запрос к endpoint, принимающему и возвращающему в формате `JSON`.
 * Сериализация и десерализация выполняются автоматически.
 * @export
 * @param {*} {
 *     path, 
 *     method, 
 *     data,
 *     options = {}
 * }
 * @return {*} Ответ от endpoint в формате `JSON`
 */
export async function performGenericJSONRequest({
    path, 
    method, 
    data,
    options = {}
}) {
    const stringified = JSON.stringify(data);
    const requestOptions = prepareRequestOptions({path: path, method: method, data: stringified, ...options});
    const response = await performChunkedRequest(requestOptions, stringified);
    const content = response ? JSON.parse(response) : {};

    return content;
}