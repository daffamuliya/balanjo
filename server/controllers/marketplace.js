const model = require('../models/indexmodel');
const { Op, QueryTypes } = require('sequelize');
const slugify = require('slugify');
const controller = {};

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
        attributes: ['id', 'id_penjual', 'id_kategori', 'nama', 'gambar', 'deskripsi', 'rate', 'harga'],
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
        attributes: ['id', 'id_penjual', 'id_kategori', 'nama', 'gambar', 'deskripsi', 'rate', 'harga'],
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
  try {
    const { id_penjual, id_kategori, nama, deskripsi, harga, stok } = req.body;
    const gambar = req.file.filename;
    const slug = slugify(nama);
    await model.produk.create({ id_penjual, id_kategori, nama, gambar, deskripsi, harga, stok, slug });
    res.status(200).redirect('/marketplace/daftarBarang');
  } catch (error) {
    res.json({ message: error.message });
    // res.redirect("/dosen/add-course");
  }
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
        attributes: ['id', 'id_penjual', 'produk_id', 'jumlah', 'status'],
      })
      .then((result) => {
        if (result) {
          // res.json("blog/allCart", { items: result,dasbordaktif: "", rpsaktif: "active"  });
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

controller.addCart = async (req, res) => {
  try {
    const { id_penjual, produk_id, jumlah, status } = req.body;
    await model.cart.create({
      id_penjual: id_penjual,
      produk_id: produk_id,
      jumlah: jumlah,
      status: status,
    });
    res.status(200).json({
      message: 'berhasil menambah cart',
    });
    //   res.redirect("/dosen/courses");
  } catch (error) {
    res.json({ message: error.message });
    // res.redirect("/dosen/add-course");
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
