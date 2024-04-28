const model = require('../models/indexmodel');
const { Op, QueryTypes } = require('sequelize');
const controller = {};
const path = require('path');

controller.jualProduk = async (req, res) => {
  const kategori = await model.kategori_produk.findAll({ attributes: ['id', 'nama'] });

  res.json({ kategori });
};

controller.daftarBarang = async (req, res) => {
  const kategori = await model.kategori_produk.findAll({ attributes: ['id', 'nama'] });

  res.json({ kategori });
};

controller.pesananPelanggan = async (req, res) => {
  const kategori = await model.kategori_produk.findAll({ attributes: ['id', 'nama'] });

  res.json({ kategori });
};

controller.barangTerjual = async (req, res) => {
  const kategori = await model.kategori_produk.findAll({ attributes: ['id', 'nama'] });

  res.json({ kategori });
};

controller.riwayat = async (req, res) => {
  const kategori = await model.produk.findAll({ attributes: ['id', 'nama'] });

  res.json({ kategori });
};

controller.detailProduk = async (req, res) => {
  try {
    await model.produk
      .findOne({
        attributes: ['id', 'id_penjual', 'id_kategori', 'nama', 'gambar', 'deskripsi', 'rate', 'harga', 'stok', 'created_at'],
        where: {
          id: req.params.id,
        },
      })
      .then((result) => {
        if (result) {
          res.json({ items: result });
        } else {
          res.status(404).json({
            message: 'data tidak ada',
            data: [],
          });
        }
      });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

controller.detailPembayaran = async (req, res) => {
  const kategori = await model.kategori_produk.findAll({ attributes: ['id', 'nama'] });

  res.json({ kategori });
};

controller.bayar = async (req, res) => {
  const kategori = await model.kategori_produk.findAll({ attributes: ['id', 'nama'] });

  res.json({ kategori });
};

controller.upload_bukti = async (req, res) => {
  const kategori = await model.kategori_produk.findAll({ attributes: ['id', 'nama'] });

  res.json({ kategori });
};

controller.allCart = async (req, res) => {
  const kategori = await model.kategori_produk.findAll({ attributes: ['id', 'nama'] });

  res.json({ kategori });
};

controller.getAllProduk = async (req, res) => {
  try {
    await model.produk
      .findAll({
        attributes: ['id', 'id_penjual', 'id_kategori', 'nama', 'gambar', 'deskripsi', 'rate', 'harga', 'stok', 'created_at'],
      })
      .then((result) => {
        if (result.length > 0) {
          res.json({ items: result });
        } else {
          res.status(404).json({
            message: 'data tidak ada',
            data: [],
          });
        }
      });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

controller.getProdukById = async (req, res) => {
  try {
    await model.produk
      .findOne({
        attributes: ['id', 'id_penjual', 'id_kategori', 'nama', 'gambar', 'deskripsi', 'rate', 'harga', 'stok'],
        where: {
          id: req.params.id,
        },
      })
      .then((result) => {
        if (result) {
          res.json({ items: result });
        } else {
          res.status(404).json({
            message: 'data tidak ada',
            data: [],
          });
        }
      });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

controller.addProduk = async (req, res) => {
  if (req.files === null) return res.status(400).json({ msg: 'No File Uploaded' });
  const id_penjual = req.body.id_penjual;
  const id_kategori = req.body.id_kategori;
  const nama = req.body.nama;
  const deskripsi = req.body.deskripsi;
  const harga = req.body.harga;
  const stok = req.body.stok;

  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get('host')}/images/${fileName}`;
  const allowedType = ['.png', '.jpg', '.jpeg'];

  if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: 'Invalid Images' });
  if (fileSize > 5000000) return res.status(422).json({ msg: 'Image must be less than 5 MB' });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await model.produk.create({ id_penjual: id_penjual, id_kategori: id_kategori, nama: nama, deskripsi: deskripsi, harga: harga, stok: stok, gambar: url });
      res.redirect('/seller/product');
    } catch (error) {
      console.log(error.message);
    }
  });
};

controller.updateProduk = async (req, res) => {
  try {
    const { id_penjual, id_kategori, konten, nama, gambar, deskripsi, rate, harga } = req.body;
    await model.produk.update(
      { id_penjual, id_kategori, nama, deskripsi, rate, harga },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({
      message: 'berhasil edit data',
    });
  } catch (error) {
    res.json({ message: error.message });
    // res.redirect("/dosen/add-course");
  }
};

controller.deleteProduk = async (req, res) => {
  try {
    await model.produk.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: 'berhasil hapus data',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

controller.getAllCart = async function (req, res) {
  try {
    await model.cart
      .findAll({
        attributes: ['id', 'user_id', 'produk_id', 'jumlah', 'harga', 'sub_total', 'gambar', 'created_at'],
        include: [
          {
            model: model.produk,
            attributes: ['nama', 'deskripsi'],
          },
        ],
        where: {
          user_id: req.params.user_id,
        },
      })
      .then((result) => {
        if (result) {
          res.status(200).json({
            message: 'mendapat cart',
            data: result,
          });
        } else {
          res.status(404).json({
            message: 'data tidak ada',
            data: [],
          });
        }
      });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

controller.getOrderDetail = async function (req, res) {
  try {
    await model.order_detail
      .findAll({
        attributes: ['id', 'user_id', 'produk_id', 'alamat', 'total'],
        include: [
          {
            model: model.produk,
            attributes: ['nama', 'deskripsi', 'gambar'],
          },
        ],
        where: {
          user_id: req.params.user_id,
        },
      })
      .then((result) => {
        if (result) {
          res.status(200).json({
            message: 'mendapatkan data order',
            data: result,
          });
        } else {
          res.status(404).json({
            message: 'data tidak ada',
            data: [],
          });
        }
      });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

controller.addOrderDetail = async function (req, res) {
  try {
    const { user_id, produk_id, alamat, total } = req.body;
    await model.order_detail.create({
      user_id: user_id,
      produk_id: produk_id,
      alamat: alamat,
      total: total,
    });
    res.status(200).json({
      message: 'berhasil menambahkan data ke order detail',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

controller.addCart = async (req, res) => {
  try {
    const { user_id, produk_id, jumlah, harga, sub_total, gambar } = req.body;
    await model.cart.create({
      user_id: user_id,
      produk_id: produk_id,
      jumlah: jumlah,
      harga: harga,
      sub_total: sub_total,
      gambar: gambar,
    });
    res.status(200).json({
      message: 'berhasil menambah cart',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

controller.deleteCart = async function (req, res) {
  try {
    await model.cart.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: 'berhasil hapus id',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

controller.deleteOrderDetail = async function (req, res) {
  try {
    await model.order_detail.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: 'berhasil hapus id',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

controller.deleteAllCartItems = async function (req, res) {
  try {
    await model.cart.destroy({
      where: {
        user_id: req.params.user_id,
      },
    });
    res.status(200).json({
      message: 'Berhasil menghapus semua item dari keranjang',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

controller.checkout = async function (req, res) {
  //checkout
  // try {
  //     const { id, id_penjual,} = req.body;
  //     await model.produk.create({
  //         id_penjual: id_penjual,
  //         id_kategori: id_kategori,
  //         konten: konten,
  //         nama: nama,
  //         gambar: gambar,
  //         deskripsi: deskripsi,
  //         rate: rate,
  //         harga
  //     });
  //     //   res.redirect("/dosen/courses");
  //   } catch (error) {
  //     res.json({ message: error.message });
  //     // res.redirect("/dosen/add-course");
  // }
};

// controller.tampilProduk= async function(req, res){
//     const ekomers = await model.produk.findAll({
//         attributes: ['id', 'name']
//     });
//     res.json("rpsadmin", { kurikulum ,dasbordaktif: "", rpsaktif: "active" });
// }

module.exports = controller;
