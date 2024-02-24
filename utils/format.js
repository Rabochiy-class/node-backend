// TODO: Фильтрация информации об ошибке на основании окружения
export function errorToResponseObject(error) {
    return { "message": error.message };
}