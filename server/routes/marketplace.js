const express = require('express');
const controller = require(`../controllers/indexcontroller`);
const multer = require('multer');
const path = require('path');
const router = express();
router.set('view engine', 'ejs');
router.use(express.static('public'));
const { verifyUser, adminOnly } = require(`../middleware/AuthUser.js`);

const fileStorageBarang = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/uploads/produk'));
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now().toString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const uploadBarang = multer({
  storage: fileStorageBarang,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

router.get('/', controller.marketplace.getAllProduk);
router.get('/dashboard', verifyUser, controller.marketplace.getAllDashboardProduk);
router.get('/:id/produk', controller.marketplace.getProdukById);
router.get('/jualProduk', controller.marketplace.jualProduk);
router.get('/:id/detailProduk', controller.marketplace.detailProduk);
router.get('/detailPembayaran', controller.marketplace.detailPembayaran);
router.get('/bayar', controller.marketplace.bayar);
router.post('/transfer', verifyUser, controller.marketplace.transfer);
router.get('/daftarBarang', controller.marketplace.daftarBarang);
router.get('/pesananPelanggan', controller.marketplace.pesananPelanggan);
router.get('/barangTerjual', controller.marketplace.barangTerjual);
router.get('/riwayat', controller.marketplace.riwayat);
router.post('/addProduk', controller.marketplace.addProduk);
router.put('/updateProduk/:id', controller.marketplace.updateProduk);
router.delete('/deleteProduk/:id', controller.marketplace.deleteProduk);
router.get('/:user_id/getCart', controller.marketplace.getAllCart);
router.get('/myCart', verifyUser, controller.marketplace.getMyCart);
router.get('/transaksi', controller.marketplace.getAllTransaksi);
router.get('/transaksi/:id', controller.marketplace.getTransaksiById);
router.get('/:user_id/getOrderDetail', controller.marketplace.getOrderDetail);
router.get('/getMyOrder', verifyUser, controller.marketplace.getMyOrder);
router.post('/addOrderDetail', verifyUser, controller.marketplace.addOrderDetail);
router.post('/cart/addCart', controller.marketplace.addCart);
router.post('/banner/addBanner', controller.marketplace.addBanner);
router.post('/banner/addActiveBanner/:id', controller.marketplace.addActiveBanner);
router.get('/banner/requestedBanner', controller.marketplace.requestedBanner);
router.get('/banner/activeBanner', controller.marketplace.activeBanner);
router.get('/banner/total', controller.marketplace.getTotalBanner);
router.get('/banner/:id', controller.marketplace.getBannerById);
router.delete('/banner/rejectBanner/:id', controller.marketplace.rejectBanner);
router.delete('/banner/deleteActiveBanner/:id', controller.marketplace.deleteActiveBanner);
router.delete('/deleteCart/:id', controller.marketplace.deleteCart);
router.delete('/deleteOrderDetail/:id', controller.marketplace.deleteOrderDetail);
router.delete('/deleteAllCartItems/:user_id', verifyUser, controller.marketplace.deleteAllCartItems);

module.exports = router;
