import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Register, Landing, Home, Forum, Blog, UploadBlog } from './pages';

export default class App extends Component {
  render() {
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
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}
