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

controller.transfer = async (req, res) => {
  try {
    console.log('Memeriksa apakah ada berkas yang diunggah...');
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ msg: 'Tidak ada berkas yang diunggah' });
    }

    const allowedTypes = ['.png', '.jpg', '.jpeg'];
    const { id_pembeli, id_penjual, total, payment, status } = req.body;
    const { bukti_transfer } = req.files;

    console.log('Memvalidasi jenis file...');
    if (!allowedTypes.includes(path.extname(bukti_transfer.name).toLowerCase())) {
      return res.status(422).json({ msg: 'Bukti transfer tidak valid' });
    }

    console.log('Memeriksa ukuran file...');
    if (bukti_transfer.size > 5000000) {
      return res.status(422).json({ msg: 'Ukuran bukti transfer harus kurang dari 5 MB' });
    }

    const buktiTransferName = bukti_transfer.md5 + path.extname(bukti_transfer.name);
    const buktiTransferUrl = `${req.protocol}://${req.get('host')}/images/${buktiTransferName}`;

    console.log('Menyimpan file...');
    await bukti_transfer.mv(`./public/images/${buktiTransferName}`);
    console.log('File berhasil disimpan:', buktiTransferName);

    console.log('Membuat catatan transaksi...');
    await model.transaksi.create({
      id_pembeli,
      id_penjual,
      total,
      payment,
      status,
      bukti_transfer: buktiTransferUrl,
    });

    console.log('Transaksi berhasil dibuat.');
    return res.status(200).json({ msg: 'Bukti transfer berhasil diunggah!' });
  } catch (error) {
    console.error('Error saat menambahkan banner:', error);
    return res.status(500).json({ msg: 'Terjadi kesalahan saat menambahkan banner' });
  }
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

controller.getAllDashboardProduk = async (req, res) => {
  try {
    let result;
    if (req.role === 'admin') {
      result = await model.produk.findAll({
        attributes: ['id', 'id_penjual', 'id_kategori', 'nama', 'gambar', 'deskripsi', 'rate', 'harga', 'stok', 'created_at'],
      });
    } else {
      result = await model.produk.findAll({
        attributes: ['id', 'id_penjual', 'id_kategori', 'nama', 'gambar', 'deskripsi', 'rate', 'harga', 'stok', 'created_at'],
        where: { id_penjual: req.userId },
      });
    }

    if (result.length > 0) {
      res.status(200).json({ items: result });
    } else {
      res.status(404).json({ message: 'data tidak ada', data: [] });
    }
  } catch (error) {
    console.error('Error in getAllDashboardProduk:', error);
    res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data produk' });
  }
};

controller.requestedBanner = async (req, res) => {
  try {
    await model.requested_banner
      .findAll({
        attributes: ['id', 'id_user', 'nama_banner', 'deskripsi', 'gambar', 'bukti_transfer', 'status'],
        include: [
          {
            model: model.users,
            attributes: ['name'],
          },
        ],
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

controller.activeBanner = async (req, res) => {
  try {
    await model.active_banner
      .findAll({
        attributes: ['id', 'id_user', 'nama_banner', 'gambar', 'status'],
        include: [
          {
            model: model.users,
            attributes: ['name'],
          },
        ],
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

controller.getTotalBanner = async (req, res) => {
  try {
    await model.active_banner.count().then((count) => {
      res.json({ totalBanner: count });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

controller.getBannerById = async (req, res) => {
  try {
    await model.active_banner
      .findOne({
        attributes: ['id', 'gambar'],
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

controller.getMyCart = async function (req, res) {
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
          user_id: req.userId,
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

controller.getAllTransaksi = async function (req, res) {
  try {
    const result = await model.transaksi.findAll({
      attributes: ['id', 'id_pembeli', 'tanggal_pesan', 'total', 'payment', 'status', 'bukti_transfer'],
      include: [
        {
          model: model.users,
          attributes: ['name'],
        },
      ],
      where: {
        id_pembeli: req.userId,
      },
    });

    if (result.length > 0) {
      res.status(200).json({
        message: 'Berhasil mendapatkan transaksi',
        data: result,
      });
    } else {
      res.status(404).json({
        message: 'Data tidak ditemukan',
        data: [],
      });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      message: 'Terjadi kesalahan dalam memproses permintaan',
      error: error.message,
    });
  }
};

controller.getTransaksiById = async function (req, res) {
  try {
    const result = await model.transaksi.findOne({
      attributes: ['id', 'tanggal_pesan', 'id_pembeli', 'total', 'payment', 'status', 'bukti_transfer'],
      include: [
        {
          model: model.users,
          attributes: ['name'],
        },
      ],
      where: {
        id: req.params.id,
      },
    });

    if (result) {
      res.status(200).json({
        message: 'Berhasil mendapatkan transaksi',
        data: result,
      });
    } else {
      res.status(404).json({
        message: 'Data tidak ditemukan',
        data: [],
      });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      message: 'Terjadi kesalahan dalam memproses permintaan',
      error: error.message,
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
          user_id: req.params.userId,
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

controller.getMyOrder = async function (req, res) {
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
          user_id: req.userId,
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

    if (!user_id || !produk_id || !alamat || !total) {
      throw new Error('Semua data yang diperlukan harus disediakan');
    }

    await model.order_detail.create({
      user_id: user_id,
      produk_id: produk_id,
      alamat: alamat,
      total: total,
    });

    res.status(200).json({
      message: 'Berhasil menambahkan data ke order detail',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
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

controller.rejectBanner = async (req, res) => {
  try {
    await model.requested_banner.destroy({
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

controller.deleteActiveBanner = async (req, res) => {
  try {
    await model.active_banner.destroy({
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

controller.addActiveBanner = async (req, res) => {
  try {
    const { id_user, nama_banner, gambar, status } = req.body;
    await model.active_banner.create({
      id_user: id_user,
      nama_banner: nama_banner,
      gambar: gambar,
      status: status,
    });
    await model.requested_banner.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: 'berhasil menambahkan data ke order detail',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

controller.addBanner = async (req, res) => {
  try {
    // Periksa apakah ada berkas yang diunggah
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ msg: 'Tidak ada berkas yang diunggah' });
    }

    const { id_user, nama_banner, deskripsi, status } = req.body;
    const { gambar, bukti_transfer } = req.files;

    // Pastikan jenis file yang diunggah adalah gambar
    const allowedTypes = ['.png', '.jpg', '.jpeg'];
    if (!allowedTypes.includes(path.extname(gambar.name).toLowerCase())) {
      return res.status(422).json({ msg: 'Gambar tidak valid' });
    }

    // Pastikan ukuran gambar tidak melebihi 5 MB
    const gambarSize = gambar.size;
    if (gambarSize > 5000000) {
      return res.status(422).json({ msg: 'Ukuran gambar harus kurang dari 5 MB' });
    }

    // Simpan gambar
    const gambarName = gambar.md5 + path.extname(gambar.name);
    const gambarUrl = `${req.protocol}://${req.get('host')}/images/${gambarName}`;
    await gambar.mv(`./public/images/${gambarName}`);

    // Pastikan jenis file yang diunggah untuk bukti transfer adalah gambar
    if (!allowedTypes.includes(path.extname(bukti_transfer.name).toLowerCase())) {
      return res.status(422).json({ msg: 'Bukti transfer tidak valid' });
    }

    // Pastikan ukuran bukti transfer tidak melebihi 5 MB
    const buktiTransferSize = bukti_transfer.size;
    if (buktiTransferSize > 5000000) {
      return res.status(422).json({ msg: 'Ukuran bukti transfer harus kurang dari 5 MB' });
    }

    // Simpan bukti transfer
    const buktiTransferName = bukti_transfer.md5 + path.extname(bukti_transfer.name);
    const buktiTransferUrl = `${req.protocol}://${req.get('host')}/images/${buktiTransferName}`;
    await bukti_transfer.mv(`./public/images/${buktiTransferName}`);

    // Buat banner dengan menyertakan URL gambar dan bukti transfer
    await model.requested_banner.create({
      id_user,
      nama_banner,
      deskripsi,
      gambar: gambarUrl,
      bukti_transfer: buktiTransferUrl,
      status,
    });

    res.redirect('/seller/upload-banner');
  } catch (error) {
    console.error('Error saat menambahkan banner:', error);
    return res.status(500).json({ msg: 'Terjadi kesalahan saat menambahkan banner' });
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
        user_id: req.userId,
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
