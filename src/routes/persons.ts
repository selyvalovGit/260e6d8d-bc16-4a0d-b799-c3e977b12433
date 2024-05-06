import { createPerson } from "../controllers/createPerson";
import { getAllPersons } from "../controllers/getAllPersons";
import { getPerson } from "../controllers/getPerson";
import { updatePerson } from "../controllers/updatePerson";



const express  = require('express');

const router = express.Router();

console.log('customers route');

router.get('/', getAllPersons);
router.post('/', createPerson);
router.put('/:id', updatePerson);

router.get('/:id', getPerson);

module.exports = router;