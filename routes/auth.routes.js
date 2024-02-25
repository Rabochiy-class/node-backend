import { Router } from 'express';
import AuthController from '../controller/auth.controller.js';

const router = Router();
const controller = new AuthController();

router.post('/api/auth/change_email', controller.changeEmail);
router.post('/api/auth/change_password', controller.changePassword);
router.post('/api/auth/change_phone', controller.changePhone);
router.post('/api/auth/confirm_email', controller.confirmEmail);
router.post('/api/auth/confirm_phone', controller.confirmPhone);

router.post('/api/auth/check_sms_code', controller.checkSMSCode);
router.post('/api/auth/recover', controller.recovery);
router.post('/api/auth/resend_code', controller.resendSMSCode);
router.post('/api/auth/resend_email_code', controller.resendEmailCode);
router.post('/api/auth/set_password', controller.setPassword);

router.post('/api/auth/registration', controller.register);
router.post('/api/auth/confirm_email_reg', controller.confirmEmailOnRegistration);
router.post('/api/auth/confirm_phone_reg', controller.confirmPhoneOnRegistration);

router.post('/api/auth/login', controller.login);
router.post('/api/auth/logout', controller.logout);

router.get('/api/auth/donor_card', controller.getDonorCard);

router.get( '/api/auth/me', controller.getAuthMe )
router.patch( '/api/auth/me', controller.patchAuthMe )

export default router;