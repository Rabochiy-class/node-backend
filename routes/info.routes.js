import { Router } from 'express'
import infoController from '../controller/info.controller.js'

const router = Router()

router.get( '/api/cities', infoController.getCities )
router.get( 'api/blood_stations/:id', infoController.getStationById )

router.get( '/api/address_needs', infoController.getAddressNeeds )

router.get( '/api/blood_stations', infoController.getBloodStationsByCity )

router.get( '/api/bonuses', infoController.getBonuses )
router.get( '/api/bonuses/:id', infoController.getBonusById )


export default router