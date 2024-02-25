import { performGenericJSONRequest } from "../utils/api.js";
import { errorToResponseObject } from "../utils/format.js";

export default class DonationController {
    async createDonation(request, response) {
        try {
            const responseContent = await performGenericJSONRequest({
                path: '/api/donations/', 
                method: 'POST', 
                data: request.body,
                options: {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': request.headers.authorization
                    }
                }
            });

            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }

    async postPicture(request, response) {
        try {
            const responseContent = await performGenericJSONRequest({
                path: '/api/picture/', 
                method: 'POST', 
                data: request.body,
                options: {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': request.headers.authorization
                    }
                }
            });

            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }

    async getDonations(request, response) {
        try {
            const responseContent = await performGenericJSONRequest({
                path: '/api/donations/', 
                method: 'GET', 
                data: request.body,
                options: {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': request.headers.authorization
                    }
                }
            });

            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }

    async getDonationById(request, response) {
        try {
            const id = request.params.id;
            const responseContent = await performGenericJSONRequest({
                path: `/api/donations/${id}/`, 
                method: 'GET', 
                data: request.body,
                options: {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': request.headers.authorization
                    }
                }
            });

            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }

    async updateDonation(request, response) {
        try {
            const id = request.params.id;
            const responseContent = await performGenericJSONRequest({
                path: `/api/donations/${id}/`, 
                method: 'PUT', 
                data: request.body,
                options: {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': request.headers.authorization
                    }
                }
            });

            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }

    async patchDonation(request, response) {
        try {
            const id = request.params.id;
            const responseContent = await performGenericJSONRequest({
                path: `/api/donations/${id}/`, 
                method: 'PATCH', 
                data: request.body,
                options: {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': request.headers.authorization
                    }
                }
            });

            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }

    async deleteDonation(request, response) {
        try {
            const id = request.params.id;
            const responseContent = await performGenericJSONRequest({
                path: `/api/donations/${id}`, 
                method: 'DELETE', 
                data: request.body,
                options: {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': request.headers.authorization
                    }
                }
            });

            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }

    async isExists(request, response) {
        try {
            const responseContent = await performGenericJSONRequest({
                path: `/api/donations/is-exists/`, 
                method: 'GET', 
                data: request.body,
                options: {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': request.headers.authorization
                    }
                }
            });

            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }
}