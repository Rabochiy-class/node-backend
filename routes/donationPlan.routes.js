import { Router } from 'express'
import donationPlanController from '../controller/donationPlan.controller.js'

const router = Router()

router.post( '/api/donation_plan', donationPlanController.postDonationPlan )

router.get( '/api/donation_plan', donationPlanController.getDonationPlan )
router.get( '/api/donation_plan/:id', donationPlanController.getDonationPlanById )

router.patch( '/api/donation_plan/:id', donationPlanController.patchDonationPlan )

router.delete( '/api/donation_plan/:id', donationPlanController.deleteDonationPlan )

export default router
