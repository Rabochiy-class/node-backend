import { Router } from 'express'
import donationController from '../controller/donation.controller.js'

const router = Router()

router.post( '/api/donations', donationController.createDonation )
router.post( '/api/picture', donationController.postPicture )

router.get( '/api/donations', donationController.getDonations )
router.get( '/api/donations/:id', donationController.getDonationById )
router.get( '/api/donations/is-exists', donationController.isExists )

router.put( '/api/donations/:id', donationController.updateDonation )

router.patch( '/api/donations/:id', donationController.patchDonation )

router.delete( '/api/donations/:id', donationController.deleteDonation )

export default router
