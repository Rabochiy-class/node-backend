import { Router } from 'express';
import InfoController from '../controller/info.controller.js'

const router = Router();
const controller = new InfoController();

router.get('/api/cities', controller.getCities);
router.get('/api/blood_stations/:id', controller.getStationById);

router.get('/api/address_needs', controller.getAddressNeeds);

router.get('/api/blood_stations', controller.getBloodStationsByCity);

router.get('/api/bonuses', controller.getBonuses);
router.get('/api/bonuses/:id', controller.getBonusById);

export default router;