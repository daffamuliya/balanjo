const express = require('express');
const router = express();
const controller = require(`../controllers/indexcontroller`);

router.use(express.static('public'));
router.get('/daftaruser', controller.daftaruser.getAllUser);

module.exports = router;
