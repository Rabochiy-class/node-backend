import { Router } from 'express'
import donationController from '../controller/donation.controller.js'

const router = Router()

router.post( '/api/donation_plan', donationController.createDonationPlan )
router.post( '/api/donations', donationController.createDonation )
router.post( '/api/picture', donationController.postPicture )

router.get( '/api/donation_plan', donationController.getDonations )


export default router
