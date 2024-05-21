const indexmodel = {};

indexmodel.blog = require('./blog.js');
indexmodel.cart = require('./cart.js');
indexmodel.forum = require('./forum.js');
indexmodel.kategori_produk = require('./kategori_produk.js');
indexmodel.kategori_blog = require('./kategori_blog.js');
indexmodel.komentar_forum = require('./komentar_forum.js');
indexmodel.produk = require('./produk.js');
indexmodel.users = require('./users.js');
indexmodel.order_detail = require('./order_detail.js');
indexmodel.transaksi = require('./transaksi.js');
indexmodel.requested_banner = require('./requested_banner.js');
indexmodel.active_banner = require('./active_banner.js');

module.exports = indexmodel;
