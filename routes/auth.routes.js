import { Router } from 'express'
import authController from '../controller/auth.controller.js'

const router = Router()

router.post( '/api/auth/change_email', authController.changeEmail )
router.post( '/api/auth/change_password', authController.changePassword )
router.post( '/api/auth/change_phone', authController.changePhone )
router.post( '/api/auth/confirm_email', authController.confirmEmail )
router.post( '/api/auth/confirm_phone', authController.confirmPhone )

router.post( '/api/auth/check_sms_code', authController.checkSMSCode )
router.post( '/api/auth/recover', authController.accRecovery )
router.post( '/api/auth/resend_code', authController.resendSMSCode )
router.post( '/api/auth/resend_email_code', authController.resendEmailCode )
router.post( '/api/auth/set_password', authController.setPassword )

router.post( '/api/auth/registration', authController.regUser )
router.post( '/api/auth/confirm_email_reg', authController.confirmEmailReg )
router.post( '/api/auth/confirm_phone_reg', authController.confirmPhoneReg )

router.post( '/api/auth/login', authController.loginUser )
router.post( '/api/auth/logout', authController.logoutUser )


export default router
