import { Router } from 'express';
const router = Router();

//import controllers
import * as controller from '../controllers/controller.js';

//Question routes api
router.route('/questions')
    .get(controller.getQuestions) //get request
    .post(controller.insertQuestions)  //post request
    .delete(controller.dropQuestions)  //delete request

router.route('/results')
    .get(controller.getResult) //get result
    .post(controller.storeResult)  //post request
    .delete(controller.dropResult)  //delete request


export default router;