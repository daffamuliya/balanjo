const model = require('../models/indexmodel');
const { Op, QueryTypes } = require('sequelize');
const slugify = require('slugify');
const { blog } = require('./indexcontroller');
const path = require('path');
const controller = {};

controller.getAllBlog = async (req, res) => {
  try {
    await model.blog
      .findAll({
        order: [['created_at', 'DESC']],
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
    res.json({ error });
  }
};

controller.getBlogBySlug = async (req, res) => {
  try {
    const result = await model.blog.findOne({
      include: [
        {
          model: model.komentar_blog,
          attributes: ['id', 'blog_id', 'user_id', 'user', 'komentar', 'created_at'],
          required: false,
          order: [['id', 'ASC']],
        },
      ],
      where: {
        slug: req.params.slug,
      },
    });

    if (result) {
      res.json({ items: result });
    } else {
      res.status(404).json({
        message: 'Data tidak ditemukan',
        data: [],
      });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data blog' });
  }
};

controller.addBlog = async (req, res) => {
  if (req.files === null) return res.status(400).json({ msg: 'No File Uploaded' });
  const user_id = req.body.user_id;
  const user = req.body.user;
  const judul = req.body.judul;
  const slug = req.body.slug;
  const kategori_blog = req.body.kategori_blog;
  const summary = req.body.summary;
  const konten = req.body.konten;
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
      await model.blog.create({ user_id: user_id, kategori_blog: kategori_blog, judul: judul, slug: slug, summary: summary, konten: konten, user: user, gambar: fileName, url: url });
      res.redirect('/blog');
    } catch (error) {
      console.log(error.message);
    }
  });
};

controller.updateBlog = async (req, res) => {
  try {
    const { user_id, kategori_id, judul, konten } = req.body;
    await model.blog.update(
      { user_id, kategori_id, judul, summary, konten },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({
      message: 'berhasil edit blog',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

controller.deleteBlog = async function (req, res) {
  try {
    await model.blog.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: 'berhasil hapus blog',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

controller.getAllComment = async (req, res) => {
  try {
    await model.komentar_blog
      .findAll({
        attributes: ['id', 'blog_id', 'user_id', 'user', 'komentar'],
      })
      .then((result) => {
        if (result.length > 0) {
          res.status(200).json({
            message: 'mendapat data komentar',
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

controller.addBlogComment = async function (req, res) {
  const { blog_id, user_id, komentar, user } = req.body;

  try {
    await model.komentar_blog.create({ blog_id, user_id, user, komentar });
    res.redirect('back');
  } catch (error) {
    console.log(error);
  }
};

controller.deleteBlogComment = async (req, res) => {
  try {
    await model.komentar_blog.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: 'berhasil hapus komen',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

controller.tampilTambahBlog = async (req, res) => {
  try {
    await model.kategori_blog.findAll().then((result) => {
      if (result.length > 0) {
        res.json({ items: result });
      } else {
        res.status(200).json({
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

module.exports = controller;
