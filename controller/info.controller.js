import { performGenericJSONRequest } from "../utils/api.js";

export default class InfoController {
    // TODO: Page & PageSize
    async getCities(request, response) {
        try {
            const page = 1;
            const pageSize = 5;
            const responseContent = await performGenericJSONRequest({
                path: `/api/cities/?page=${page}&page_size=${pageSize}/`, 
                method: 'GET', 
                data: request.body,
                options: {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${request.headers.cookie.slice(6)}`
                    }
                }
            });

            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }

    async getStationById(request, response) {
        try {
            const id = request.query.id;
            const responseContent = await performGenericJSONRequest({
                path: `/api/blood_stations/${id}/`, 
                method: 'GET', 
                data: request.body,
                options: {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${request.headers.cookie.slice(6)}`
                    }
                }
            });

            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }

    async getBloodStationsByCity(request, response) {
        try {
            const cityId = request.query.city_id;
            const responseContent = await performGenericJSONRequest({
                path: `/api/blood_stations/?city_id=${cityId}`, 
                method: 'GET', 
                data: request.body,
                options: {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${request.headers.cookie.slice(6)}`
                    }
                }
            });

            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }

    async getAddressNeeds(request, response) {
        try {
            const responseContent = await performGenericJSONRequest({
                path: '/api/address_needs/', 
                method: 'GET', 
                data: request.body,
                options: {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${request.headers.cookie.slice(6)}`
                    }
                }
            });

            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }

    async getBonuses(request, response) {
        try {
            const responseContent = await performGenericJSONRequest({
                path: '/api/bonuses/', 
                method: 'GET', 
                data: request.body,
                options: {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${request.headers.cookie.slice(6)}`
                    }
                }
            });

            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }

    async getBonusById(request, response) {
        try {
            const id = request.query.id;
            const responseContent = await performGenericJSONRequest({
                path: `/api/bonuses/${id}`, 
                method: 'GET', 
                data: request.body,
                options: {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${request.headers.cookie.slice(6)}`
                    }
                }
            });

            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }
}