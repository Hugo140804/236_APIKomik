const express = require('express');
const router = express.Router();

const KomikController = require('../controller/komikcontroller');
const userController = require('../controller/userController');
const authMiddleware = require('../middleware/authMiddleware.js');

router.post('/register', userController.register);
router.post('/login', userController.login);

router.get('/komik', KomikController.getAllKomik);
router.get('/komik/:id', KomikController.getKomikById);
router.post('/komik', authMiddleware, KomikController.createKomik);
router.put('/komik/:id', authMiddleware, KomikController.updateKomik);
router.delete('/komik/:id', authMiddleware, KomikController.deleteKomik);

module.exports = router;