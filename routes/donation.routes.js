import { Router } from 'express';
import DonationController from '../controller/donation.controller.js';

const router = Router();
const controller = new DonationController();

router.post('/api/donations', controller.createDonation);
router.post('/api/picture', controller.postPicture);

router.get('/api/donations', controller.getDonations);
router.get('/api/donations/:id', controller.getDonationById);
router.get('/api/donations/is-exists', controller.isExists);

router.put('/api/donations/:id', controller.updateDonation);

router.patch('/api/donations/:id', controller.patchDonation);

router.delete('/api/donations/:id', controller.deleteDonation);

export default router;