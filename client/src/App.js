import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Register, Landing, Home, Forum, Blog, UploadBlog, DetailBlog, ECommerce, KategoriEcom, DetailProduk, Cart, Checkout, DetailOrder, BuktiBayar } from './pages';
import { API_URL } from './utils/constants';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + 'marketplace')
      .then((res) => {
        const items = res.data;
        this.setState({ items });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    console.log(this.state.items);
    return (
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />=
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/upload-blog" element={<UploadBlog />} />
            <Route path="/detail-blog" element={<DetailBlog />} />
            <Route path="/ecommerce" element={<ECommerce />} />
            <Route path="/kategori-ecom" element={<KategoriEcom />} />
            <Route path="/detail-produk" element={<DetailProduk />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/detail-order" element={<DetailOrder />} />
            <Route path="/bukti-bayar" element={<BuktiBayar />} />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}
