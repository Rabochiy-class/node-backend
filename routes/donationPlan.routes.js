import { Router } from 'express';
import DonationPlanController from '../controller/donationPlan.controller.js';

const router = Router();
const controller = new DonationPlanController();

router.post('/api/donation_plan', controller.postDonationPlan);

router.get('/api/donation_plan', controller.getDonationPlan);
router.get('/api/donation_plan/:id', controller.getDonationPlanById);

router.patch('/api/donation_plan/:id', controller.patchDonationPlan);

router.delete('/api/donation_plan/:id', controller.deleteDonationPlan);

export default router;