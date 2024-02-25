import { performGenericJSONRequest } from "../utils/api.js";
import { errorToResponseObject } from "../utils/format.js";

export default class DonationPlanController {
    async postDonationPlan(request, response) {
        try {
            const responseContent = await performGenericJSONRequest({
                path: '/api/donation_plan/', 
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

    async getDonationPlan(request, response) {
        try {
            const responseContent = await performGenericJSONRequest({
                path: '/api/donation_plan/', 
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

    async getDonationPlanById(request, response) {
        try {
            const id = request.query.id;
            const responseContent = await performGenericJSONRequest({
                path: `/api/donation_plan/${id}/`, 
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

    async patchDonationPlan(request, response) {
        try {
            const id = request.query.id;
            const responseContent = await performGenericJSONRequest({
                path: `/api/donation_plan/${id}/`, 
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

    async deleteDonationPlan(request, response) {
        try {
            const id = request.query.id;
            const responseContent = await performGenericJSONRequest({
                path: `/api/donation_plan/${id}/`, 
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
}