import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Register, Landing, Home, Forum, Blog, UploadBlog, DetailBlog, ECommerce, KategoriEcom, DetailProduk, Cart, Checkout, DetailOrder, BuktiBayar, Dashboard } from './pages';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/upload-blog" element={<UploadBlog />} />
            <Route path="/detail-blog/:slug" element={<DetailBlog />} />
            <Route path="/ecommerce" element={<ECommerce />} />
            <Route path="/kategori-ecom" element={<KategoriEcom />} />
            <Route path="/detail-produk/:id" element={<DetailProduk />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/detail-order" element={<DetailOrder />} />
            <Route path="/bukti-bayar" element={<BuktiBayar />} />
            <Route path="/admin" element={<Dashboard />} />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}
