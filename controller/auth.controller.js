import { performChunkedRequestWithSideEffect, prepareRequestOptions, performGenericJSONRequest } from '../utils/api.js';
import { errorToResponseObject } from '../utils/format.js';

export default class AuthController {
    async register(request, response) {
        try {
            const responseContent = await performGenericJSONRequest({
                path: '/api/auth/registration/', 
                method: 'POST', 
                data: request.body
            });

            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }

    async confirmEmailOnRegistration(request, response) {
        try {
            const responseContent = await performGenericJSONRequest({
                path: '/api/auth/confirm_email_reg/', 
                method: 'POST', 
                data: request.body
            });
        
            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }

    async confirmPhoneOnRegistration(request, response) {
        try {
            const responseContent = await performGenericJSONRequest({
                path: '/api/auth/confirm_phone_reg/', 
                method: 'POST', 
                data: request.body
            });
        
            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }

    async confirmEmail(request, response) {
        try {
            const responseContent = await performGenericJSONRequest({
                path: '/api/auth/confirm_email/', 
                method: 'POST', 
                data: request.body
            });
        
            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }

    async confirmPhone(request, response) {
        try {
            const responseContent = await performGenericJSONRequest({
                path: '/api/auth/confirm_phone/', 
                method: 'POST', 
                data: request.body
            });
        
            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }

    async login(request, response) {
        try {
            const parameters = {
                path: '/api/auth/login/', 
                method: 'POST', 
                data: request.body
            };
            const stringified = JSON.stringify(parameters.data);
            const requestOptions = prepareRequestOptions({...parameters, data: stringified});
            const res = await performChunkedRequestWithSideEffect(requestOptions, stringified, (apiResponse) => {
                response.cookie('token', apiResponse.headers.token, { maxAge: 90000000, httpOnly: true });
            });
            const responseContent = JSON.parse(res);

            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }

    async logout(request, response) {
        try {
            const responseContent = await performGenericJSONRequest({
                path: '/api/auth/logout/', 
                method: 'POST', 
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

    async recovery(request, response) {
        try {
            const responseContent = await performGenericJSONRequest({
                path: '/api/auth/recover/', 
                method: 'POST', 
                data: request.body
            });
        
            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }

    async resendSMSCode(request, response) {
        try {
            const responseContent = await performGenericJSONRequest({
                path: '/api/auth/resend_code/', 
                method: 'POST', 
                data: request.body
            });
        
            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }

    async resendEmailCode(request, response) {
        try {
            const responseContent = await performGenericJSONRequest({
                path: '/api/auth/resend_email_code/', 
                method: 'POST', 
                data: request.body
            });
        
            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }

    async checkSMSCode(request, response) {
        try {
            const responseContent = await performGenericJSONRequest({
                path: '/api/auth/check_sms_code/', 
                method: 'POST', 
                data: request.body
            });
        
            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }

    async setPassword(request, response) {
        try {
            const responseContent = await performGenericJSONRequest({
                path: '/api/auth/set_password/', 
                method: 'POST', 
                data: request.body
            });
        
            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }

    async changeEmail(request, response) {
        try {
            const responseContent = await performGenericJSONRequest({
                path: '/api/auth/change_email/', 
                method: 'POST', 
                data: request.body
            });
        
            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }

    async changePassword(request, response) {
        try {
            const responseContent = await performGenericJSONRequest({
                path: '/api/auth/change_password/', 
                method: 'POST', 
                data: request.body
            });
        
            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }

    async changePhone(request, response) {
        try {
            const responseContent = await performGenericJSONRequest({
                path: '/api/auth/change_phone/', 
                method: 'POST', 
                data: request.body
            });
        
            response.status(201).json(responseContent);
        } catch (e) {
            response.status(500).json(errorToResponseObject(e));
        }
    }

    async getDonorCard() {
        try {
            const responseContent = await performGenericJSONRequest({
                path: '/api/auth/change_phone/', 
                method: 'POST', 
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