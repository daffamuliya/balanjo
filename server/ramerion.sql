-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2024 at 10:41 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ramerion`
--

-- --------------------------------------------------------

--
-- Table structure for table `active_banners`
--

CREATE TABLE `active_banners` (
  `id` bigint(20) NOT NULL,
  `id_user` bigint(20) NOT NULL,
  `nama_banner` varchar(255) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `active_banners`
--

INSERT INTO `active_banners` (`id`, `id_user`, `nama_banner`, `gambar`, `status`) VALUES
(18, 26, 'wqwq', 'http://localhost:3000/images/b4a7a81346828d7db00162f4c89c54c3.png', 'Aktif'),
(19, 26, '121', 'http://localhost:3000/images/b4a7a81346828d7db00162f4c89c54c3.png', 'Aktif');

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `user` varchar(255) NOT NULL,
  `kategori_blog` varchar(100) NOT NULL,
  `judul` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `gambar` varchar(255) DEFAULT NULL,
  `url` varchar(500) NOT NULL,
  `summary` varchar(255) NOT NULL,
  `konten` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `user_id`, `user`, `kategori_blog`, `judul`, `slug`, `gambar`, `url`, `summary`, `konten`, `created_at`) VALUES
(59, 2, 'Daffa', 'Bisnis Teknologi', 'Layanan Internet Milik Elon Musk Akan Beroperasi di Indonesia, Ini dia Fiturnya', 'layanan-internet-milik-elon-musk-akan-beroperasi-di-indonesia-ini-dia-fiturnya', '9ae145c43f79d51f358a6b26c5da61ec.jpg', 'http://localhost:3000/images/9ae145c43f79d51f358a6b26c5da61ec.jpg', 'Kementerian Komunikasi dan Informatika telah memastikan bahwa Layanan Starlink milik Elon Musk akan segera beroperasi di Indonesia. Pengurusan izin penyelenggara jasa internet dan izin prinsip penyelenggara jaringan (izin VSAT dan ISP) sedang dalam tahapa', '<p>Kementerian Komunikasi dan Informatika telah memastikan bahwa Layanan Starlink milik Elon Musk akan segera beroperasi di Indonesia. Pengurusan izin penyelenggara jasa internet dan izin prinsip penyelenggara jaringan (izin VSAT dan ISP) sedang dalam tahapan menuju final. Saat ini, sudah berdiri PT Starlink Services Indonesia, yang menjadi badan milik Starlink di Indonesia.&nbsp;</p><p>Starlink Indonesia sendiri telah diaktifkan pada hari Kamis (28/03/2024) lalu. Layanan berbasis satelit orbit rendah ini akan menjalankan uji coba pertamanya di IKN setelah lebaran 14450 H. Uji coba ini menargetkan pengguna satu ground segment-nya agar menggunakan layanan mereka.</p><p>Starlink Indonesia telah menampilkan harga berlangganan dan produk yang ditawarkan dengan kuota tanpa batas. Fitur utamanya adalah menyediakan internet super cepat dan latensi rendah tanpa batas. Meskipun kecepatan download atau upload di Indonesia belum diumumkan, namun kita bisa melihat data kecepatan Starlink di beberapa negara sebagai acuan. Di Amerika Serikat, kecepatan Starlink untuk download adalah 66,59 Mbps dan upload 7,74 Mbps dengan latensi 62ms. Di negara tetangga kita, yaitu Filipina, kecepatan internet Starlink untuk download mencapai 110,78 Mbps, kecepatan upload 13,69 Mbps, dengan latensi 162 ms. Kecepatan layanan Starlink ini jauh lebih cepat daripada berbagai layanan internet di Indonesia, yang hanya berkisar 24,21 Mbps-27,11 Mbps untuk download dan 13,38 Mbps – 14,69 Mbps untuk upload, dengan latensi 27 ms – 7 ms.</p><p>Nantinya, layanan super cepat ini juga segera bisa dinikmati oleh para pengguna retail. Dilansir dari Kompas.com, Direktur Jenderal Penyelenggaraan Pos dan Informatika Kominfo, Wayan Toni Suriyanto mengatakan bahwa layanan telekomunikasi satelit Starlink untuk retail ini akan bersaing sejajar dengan penyelenggara jasa internet lokal dengan tarif jual sama.&nbsp;</p><p>Starlink juga digaungkan lebih cocok bagi daerah 3K atau daerah-daerah pelosok dan industri. Dengan fitur yang ditawarkan, pelanggan internet di Indonesia yang selama ini sulit menjangkau layanan telekomunikasi dikarenakan kondisi geografis, akan diuntungkan dengan hadirnya satelit Starlink ini. Di industri perikanan mislanya, kapal-kapal ikan yang jelajahnya seluruh wilayah Indonesia akan tetap bisa berkomunikasi tanpa putus dengan menggunakan layanan Starlink.</p>', '2024-04-21 11:48:34'),
(67, 28, 'Daffa Riza Muliya', 'Bisnis Teknologi', 'Apple Beri Peringatan Kepada Pengguna di 92 Negara', 'apple-beri-peringatan-kepada-pengguna-di-92-negara', '58e7d4052ff8a3e95ec17dae17646982.jpg', 'http://localhost:3000/images/58e7d4052ff8a3e95ec17dae17646982.jpg', 'Apple memberi peringatan kepada para pengguna di 92 negara terhadap potensi menjadi korban serangan spyware. Deteksi Apple atas ancaman ini didasarkan atas informasi dan investigasi intelijen ancaman internal.', '<p><i>Apple mendeteksi bahwa Anda sedang ditarget oleh serangan mercenary spyware yang mencoba untuk menyusupi iPhone yang terkait dengan ID Apple xxx dari jarak jauh. Serangan ini kemungkinan besar menargetkan Anda secara spesifik karena siapa Anda atau apa yang Anda lakukan. Meskipun penyelidikan kami tidak pernah mencapai kepastian mutlak, pemberitahuan ancaman Apple adalah peringatan dengan tingkat keyakinan tinggi bahwa pengguna secara individu telah menjadi sasaran serangan spyware tentara bayaran dan harus ditanggapi dengan sangat serius.”</i></p><p>Pada Rabu siang (10/04/2024), Apple memberi peringatan kepada para pengguna di 92 negara terhadap potensi menjadi korban serangan <i>spyware. </i>Deteksi Apple atas ancaman ini didasarkan atas informasi dan investigasi intelijen ancaman internal.</p><p>Dalam notifikasi tersebut, Apple memberitahu telah mendeteksi bahwasannya para pengguna bisa menjadi target serangan <i>spyware </i>dari tentara bayaran yang mencoba menyusupi iPhone mereka dari jarak jauh. Hal seperti ini sangat jarang terjadi dan jauh lebih canggih dibandingkan aktivitas kejahatan biasa di dunia maya atau malware konsumen. Sedangkan untuk identitas oknum atau negara yang diduga menjadi dalang dari serangan <i>spyware </i>ini tidak diberitahu oleh pihak Apple.&nbsp;</p><p>Peringatan serupa itu sudah beberapa kali dikirimkan oleh pihak Apple sejak tahun 2021 di lebih dari 150 negara. Pada Oktober tahun 2023, Apple juga turut mengirimkan peringatan serupa kepada sejumlah jurnalis dan politisi India.</p><p>Pemberitahuan atas serangan <i>spyware </i>ini muncul saat banyak negara sedang mempersiapkan pemilihan umum. Namun, Apple sendiri tidak menyebutkan waktu serangan tersebut. Jika diumumkan, hal ini dapat membantu penyerang <i>spyware </i>tentara bayaran untuk mengambil tindakan agar bisa terhindar dari deteksi perusahaan.</p><p>Apple sendiri awalnya menggambarkan penyerangan tersebut sebagai “aksi yang disponsori negara”. Namun, mereka mengganti diksi dengan “serangan <i>spyware </i>tentara bayaran”.</p>', '2024-05-15 07:13:44'),
(71, 29, 'Hagi Siraj Sumanta', 'Wirausaha', 'Cara kaya', 'cara-kaya', '6c3a7b93e83698477dcdb39b9508ddd6.jpg', 'http://localhost:3000/images/6c3a7b93e83698477dcdb39b9508ddd6.jpg', 'cara cepat kaya', '<p>aiejaiejaiejaijeaijeaijeiajeiajeiajeijaeijaijeaijeiaje</p><p>aeaeaeaeaaaaaaaaaaaaaaaaaaaaaaaa</p>', '2024-05-26 11:03:53'),
(72, 29, 'Hagi Siraj Sumanta ', 'Wirausaha', '10 Tips Marketing Jitu yang Sederhana', '10-tips-marketing-jitu-yang-sederhana', 'c173399d4a0e3926d290bec26a5f18bf.png', 'http://localhost:3000/images/c173399d4a0e3926d290bec26a5f18bf.png', 'Merupakan sebuah pengujian', '<p>Merupakan sebuah pengujian, Merupakan sebuah pengujian, Merupakan sebuah pengujian, Merupakan sebuah pengujian.</p>', '2024-05-26 17:38:09'),
(73, 27, 'Admin Ganteng', 'Bisnis Teknologi', '12121', '12121', '7b36bbbe48d5dba03d77781d6c577388.png', 'http://localhost:3000/images/7b36bbbe48d5dba03d77781d6c577388.png', '2121', '<p>2121</p>', '2024-05-26 17:53:34');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `produk_id` bigint(20) NOT NULL,
  `id_penjual` bigint(20) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `keterangan` varchar(100) NOT NULL,
  `harga` bigint(20) NOT NULL,
  `sub_total` bigint(20) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `user_id`, `produk_id`, `id_penjual`, `jumlah`, `keterangan`, `harga`, `sub_total`, `gambar`, `created_at`) VALUES
(26, 1, 20, 0, 1, '', 125000, 125000, 'http://localhost:3000/images/86acecac2711c3fbc15045055ca96de3.jpg', NULL),
(27, 1, 20, 0, 1, '', 125000, 125000, 'http://localhost:3000/images/86acecac2711c3fbc15045055ca96de3.jpg', NULL),
(31, 2, 17, 0, 1, '', 25000, 25000, 'http://localhost:3000/images/860e87917069977dc61b7575a2109a50.jpg', NULL),
(33, 2, 20, 0, 1, '', 125000, 125000, 'http://localhost:3000/images/86acecac2711c3fbc15045055ca96de3.jpg', NULL),
(36, 2, 18, 0, 1, '', 250000, 250000, 'http://localhost:3000/images/9db1c97b098be8f9523a5820c4ab164c.jpg', NULL),
(37, 2, 20, 0, 1, '', 125000, 125000, 'http://localhost:3000/images/86acecac2711c3fbc15045055ca96de3.jpg', NULL),
(38, 2, 17, 0, 1, '', 25000, 25000, 'http://localhost:3000/images/860e87917069977dc61b7575a2109a50.jpg', NULL),
(39, 2, 17, 0, 1, '', 25000, 25000, 'http://localhost:3000/images/860e87917069977dc61b7575a2109a50.jpg', NULL),
(40, 2, 18, 0, 1, '', 250000, 250000, 'http://localhost:3000/images/9db1c97b098be8f9523a5820c4ab164c.jpg', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `forum`
--

CREATE TABLE `forum` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `user` varchar(255) DEFAULT NULL,
  `konten` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `forum`
--

INSERT INTO `forum` (`id`, `user_id`, `user`, `konten`, `created_at`) VALUES
(51, 2, 'Daffa', 'Hello, Rangers!', '2024-03-14 06:43:16'),
(77, 2, 'Daffa', 'Selamat siang', '2024-04-08 07:02:33'),
(79, 2, 'Daffa', 'Sekarang di kopkit', '2024-04-14 07:50:46'),
(99, 2, 'Daffa', 'Merjer', '2024-04-17 14:17:37'),
(100, 2, 'Daffa', 'Halo', '2024-04-22 05:37:08'),
(103, 26, 'Tiara Valma Alzena', 'Aku di perpuss', '2024-05-06 08:36:08'),
(106, 26, 'Tiara Valma Alzena', 'Halo', '2024-05-11 06:56:06'),
(116, 28, 'Daffa Riza Muliya', 'sasasasa', '2024-05-14 18:27:46'),
(117, 28, 'Daffa Riza Muliya', 'bismillah', '2024-05-14 18:32:03'),
(119, 26, 'Tiara Valma Alzena', 'hai', '2024-05-18 06:34:39'),
(120, 26, 'Tiara Valma Alzena', '12', '2024-05-20 16:49:52'),
(121, 28, 'Daffa Riza Muliya', 'awokwkwk', '2024-05-21 05:51:22'),
(122, 28, 'Daffa Riza Muliya', 'Haii', '2024-05-21 10:03:43'),
(123, 29, 'Hagi Siraj Sumanta', 'top 5 cowok terganteng di unand', '2024-05-26 11:04:26'),
(124, 26, 'Tiara Valma Alzena', 'Ada yang tau info KKN?', '2024-05-26 16:49:36');

-- --------------------------------------------------------

--
-- Table structure for table `gambar_blog`
--

CREATE TABLE `gambar_blog` (
  `id` bigint(20) NOT NULL,
  `blog_id` bigint(20) NOT NULL,
  `gambar` blob NOT NULL,
  `keterangan` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `gambar_forum`
--

CREATE TABLE `gambar_forum` (
  `id` bigint(20) NOT NULL,
  `forum_id` bigint(20) NOT NULL,
  `gambar` varchar(255) DEFAULT NULL,
  `keterangan` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `gambar_produk`
--

CREATE TABLE `gambar_produk` (
  `id` bigint(20) NOT NULL,
  `id_produk` bigint(20) NOT NULL,
  `gambar` blob NOT NULL,
  `keterangan` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kategori_blog`
--

CREATE TABLE `kategori_blog` (
  `id` bigint(20) NOT NULL,
  `nama` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kategori_blog`
--

INSERT INTO `kategori_blog` (`id`, `nama`) VALUES
(1, 'Wirausaha\r\n'),
(2, 'Keuangan Finansial\r\n'),
(3, 'Bisnis Teknologi\r\n'),
(4, 'Agribisnis\r\n'),
(5, 'Bisnis Peternakan\r\n\r\n'),
(6, 'Bisnis Kuliner'),
(7, 'Bisnis Kreatif'),
(9, 'Bisnis Jasa\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `kategori_produk`
--

CREATE TABLE `kategori_produk` (
  `id` bigint(20) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kategori_produk`
--

INSERT INTO `kategori_produk` (`id`, `nama`, `created_at`) VALUES
(1, 'Aksesoris', NULL),
(2, 'Pakaian', NULL),
(3, 'Makanan', NULL),
(4, 'Minuman', NULL),
(5, 'Herbal', NULL),
(6, 'Kreatif', NULL),
(7, 'Jasa', NULL),
(8, 'Lainnya', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `komentar_forum`
--

CREATE TABLE `komentar_forum` (
  `id` bigint(20) NOT NULL,
  `forum_id` bigint(20) NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `user` varchar(255) NOT NULL,
  `komentar` text NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `komentar_forum`
--

INSERT INTO `komentar_forum` (`id`, `forum_id`, `user_id`, `user`, `komentar`, `created_at`) VALUES
(20, 51, 2, 'Daffa', 'Hai, Daffa', '2024-03-17 05:03:32'),
(24, 51, 2, 'Daffa', 'a', '2024-04-07 23:59:16'),
(25, 51, 2, 'Daffa', 'a', '2024-04-07 23:59:16'),
(26, 51, 2, 'Daffa', 'a', '2024-04-07 23:59:16'),
(27, 51, 2, 'Daffa', 'a', '2024-04-07 23:59:18'),
(29, 51, 2, 'Daffa', 'asa', '2024-04-08 07:30:26'),
(31, 51, 2, 'Daffa', 'a', '2024-04-08 07:36:09'),
(32, 51, 2, 'Daffa', 'asep', '2024-04-08 07:36:21'),
(34, 51, 2, 'Daffa', 'wahyudi', '2024-04-08 07:46:54'),
(35, 77, 2, 'Daffa', 'berikan satu', '2024-04-08 07:47:15'),
(36, 77, 2, 'Daffa', 'siang daffa, finally', '2024-04-08 07:48:25'),
(37, 77, 2, 'Daffa', 'saya mau set', '2024-04-08 07:49:34'),
(38, 77, 2, 'Daffa', 'Testing lagi', '2024-04-08 08:05:53'),
(40, 79, 2, 'Daffa', 'Serius tu?', '2024-04-14 07:50:53'),
(41, 79, 2, 'Daffa', 'Saya juga di kopkit', '2024-04-14 12:49:00'),
(42, 79, 2, 'Daffa', 'weqwq', '2024-04-14 13:39:17'),
(45, 99, 2, 'Daffa', 'Saya juga', '2024-04-17 14:17:46'),
(46, 100, 2, 'Daffa', 'HALO JUGA', '2024-04-22 05:37:27'),
(47, 99, 26, 'Tiara Sayang', 'haloo', '2024-05-07 09:21:45'),
(48, 99, 26, 'Tiara Sayang', 'haloo', '2024-05-07 09:21:46'),
(49, 99, 26, 'Tiara Sayang', 'haloo', '2024-05-07 09:21:47'),
(50, 99, 26, 'Tiara Sayang', 'aa', '2024-05-07 09:22:24'),
(51, 119, 26, 'Tiara Valma Alzena', 'halo', '2024-05-18 06:34:48'),
(52, 119, 26, 'Tiara Valma Alzena', 'halo', '2024-05-18 06:34:48'),
(53, 119, 26, 'Tiara Valma Alzena', 'halo', '2024-05-18 06:34:49'),
(54, 119, 26, 'Tiara Valma Alzena', 'halo', '2024-05-18 06:34:49'),
(55, 119, 26, 'Tiara Valma Alzena', 'halo', '2024-05-18 06:34:50'),
(56, 119, 26, 'Tiara Valma Alzena', 'halo', '2024-05-18 06:34:50'),
(57, 119, 26, 'Tiara Valma Alzena', 'halo', '2024-05-18 06:34:50'),
(58, 119, 26, 'Tiara Valma Alzena', 'halo', '2024-05-18 06:34:51'),
(59, 119, 26, 'Tiara Valma Alzena', 'halo', '2024-05-18 06:34:51'),
(60, 119, 26, 'Tiara Valma Alzena', 'halo', '2024-05-18 06:34:51'),
(61, 51, 26, 'Tiara Valma Alzena', 'haii', '2024-05-18 06:54:16'),
(62, 51, 26, 'Tiara Valma Alzena', 'haii', '2024-05-18 06:54:17'),
(63, 51, 26, 'Tiara Valma Alzena', 'haii', '2024-05-18 06:54:17'),
(64, 51, 26, 'Tiara Valma Alzena', 'haii', '2024-05-18 06:54:17'),
(65, 51, 26, 'Tiara Valma Alzena', 'haii', '2024-05-18 06:54:17'),
(66, 51, 26, 'Tiara Valma Alzena', 'haii', '2024-05-18 06:54:17'),
(67, 51, 26, 'Tiara Valma Alzena', 'haii', '2024-05-18 06:54:18'),
(68, 51, 26, 'Tiara Valma Alzena', 'haii', '2024-05-18 06:54:18'),
(69, 51, 26, 'Tiara Valma Alzena', 'haii', '2024-05-18 06:54:55'),
(70, 51, 26, 'Tiara Valma Alzena', 'haii', '2024-05-18 06:55:03'),
(71, 51, 26, 'Tiara Valma Alzena', 'haii', '2024-05-18 06:55:42'),
(72, 117, 26, 'Tiara Valma Alzena', 'a', '2024-05-18 06:56:16'),
(73, 117, 26, 'Tiara Valma Alzena', 'a', '2024-05-18 06:56:16'),
(74, 117, 26, 'Tiara Valma Alzena', 'a', '2024-05-18 06:56:18'),
(75, 117, 26, 'Tiara Valma Alzena', 'a', '2024-05-18 06:56:19'),
(76, 117, 26, 'Tiara Valma Alzena', 'a', '2024-05-18 06:59:06'),
(77, 106, 26, 'Tiara Valma Alzena', '1', '2024-05-18 07:00:02'),
(78, 106, 26, 'Tiara Valma Alzena', '2', '2024-05-18 07:01:07'),
(79, 119, 26, 'Tiara Valma Alzena', '12', '2024-05-18 07:09:13'),
(80, 119, 26, 'Tiara Valma Alzena', '13', '2024-05-20 16:35:45'),
(81, 119, 26, 'Tiara Valma Alzena', '1', '2024-05-20 16:43:04'),
(82, 119, 26, 'Tiara Valma Alzena', '2', '2024-05-20 16:47:54'),
(83, 120, 26, 'Tiara Valma Alzena', '12', '2024-05-20 16:49:59'),
(84, 120, 26, 'Tiara Valma Alzena', '11', '2024-05-20 16:52:30'),
(85, 120, 26, 'Tiara Valma Alzena', '88', '2024-05-20 16:57:44'),
(86, 122, 26, 'Tiara Valma Alzena', 'haii juga', '2024-05-21 12:39:04'),
(87, 123, 29, 'Hagi Siraj Sumanta', 'fti\n', '2024-05-26 11:04:55'),
(92, 124, 30, 'Dimas Harianto', 'saya tau', '2024-05-28 08:06:47');

-- --------------------------------------------------------

--
-- Table structure for table `order_detail`
--

CREATE TABLE `order_detail` (
  `id` bigint(11) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `id_penjual` bigint(20) NOT NULL,
  `produk_id` bigint(20) NOT NULL,
  `keterangan` varchar(100) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `total` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE `produk` (
  `id` bigint(20) NOT NULL,
  `id_penjual` bigint(20) NOT NULL,
  `id_kategori` bigint(20) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `deskripsi` text NOT NULL,
  `rate` int(11) DEFAULT NULL,
  `harga` int(11) NOT NULL,
  `stok` int(50) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`id`, `id_penjual`, `id_kategori`, `nama`, `gambar`, `deskripsi`, `rate`, `harga`, `stok`, `slug`, `updated_at`, `created_at`) VALUES
(17, 2, 1, 'Kalung', 'http://localhost:3000/images/860e87917069977dc61b7575a2109a50.jpg', 'Kalung adalah sejenis perhiasan yang dikenakan di sekitar leher. Biasanya terbuat dari berbagai bahan seperti logam mulia (emas, perak, atau platinum), batu permata, mutiara, kristal, atau bahan lainnya. Kalung memiliki berbagai desain dan panjang, mulai dari model sederhana hingga yang lebih rumit dan mewah. Selain sebagai aksesori mode, kalung juga sering kali memiliki makna simbolis atau religius dalam beberapa budaya.', NULL, 25000, 23, NULL, '2024-04-24 05:11:55', '2024-04-24 05:11:55'),
(18, 2, 2, 'Baju Wanita Lavita Blouse ', 'http://localhost:3000/images/9db1c97b098be8f9523a5820c4ab164c.jpg', 'Baju adalah pakaian yang dikenakan untuk menutupi tubuh, khususnya bagian atas tubuh seperti dada, bahu, dan lengan. Baju dapat terbuat dari berbagai jenis bahan, termasuk katun, wol, sutra, dan sintetis.', NULL, 250000, 12, NULL, '2024-04-24 05:12:56', '2024-04-24 05:12:56'),
(20, 2, 2, 'Celana', 'http://localhost:3000/images/86acecac2711c3fbc15045055ca96de3.jpg', 'Celana adalah pakaian yang dikenakan pada bagian bawah tubuh, mulai dari pinggang hingga kaki. Celana umumnya terbuat dari bahan tekstil seperti katun, denim, polyester, atau bahan lainnya.', NULL, 125000, 50, NULL, '2024-04-24 05:15:32', '2024-04-24 05:15:32'),
(25, 28, 8, 'Laptop MSI Nvidia Gforce GTY', 'http://localhost:3000/images/225ce25d0dee4553d8f34bdeb83395ba.jpg', '<p>Laptop Nvidia Geforce</p>', NULL, 25000000, 2, NULL, '2024-05-21 09:12:30', '2024-05-15 09:35:12'),
(27, 28, 3, 'Sate Ayam Bundo', 'http://localhost:3000/images/e0ce3e6e539573b4f69b56d8d7727aeb.jpg', '<p>Sate ayam paling enak di dunia</p>', NULL, 25000, 12, NULL, '2024-05-21 09:08:39', '2024-05-21 06:44:40'),
(28, 28, 3, 'Risoles Mayo', 'http://localhost:3000/images/6c54154beed18d9694db29fe2969babc.jpg', '<p>Risoles mayo terenak di Dunia</p>', NULL, 20000, 12, NULL, '2024-05-21 08:53:03', '2024-05-21 06:45:51'),
(29, 28, 4, 'Jelly Segar', 'http://localhost:3000/images/7322d2f281f562c26adbf7e965e8bd2f.png', '<p>Si Paling Nikmat, Inilah Resep Es Jelly Segar Rasa Pandan dan Anggur Solusi Gerahmu</p>', NULL, 50000, 15, NULL, '2024-05-21 09:03:03', '2024-05-21 06:48:58'),
(30, 28, 7, 'Jasa Desain Rumah', 'http://localhost:3000/images/63368a9f50afe47379c1907570f70bb5.jpg', '<p>Jasa desain rumah</p>', NULL, 2000000, 1, NULL, '2024-05-21 09:03:26', '2024-05-21 06:50:59'),
(42, 26, 5, 'Madu Trigona', 'http://localhost:3000/images/ccf778bc4d0f6d6cfa644389dd73d7f0.png', 'Madu Sehat Alami ', NULL, 12, 12, NULL, '2024-05-24 06:38:43', '2024-05-24 06:38:43'),
(44, 29, 7, 'Diri', 'http://localhost:3000/images/c440cd1c9446ecb2a7dcbc3e4c27ebd0.png', 'mantep', NULL, 2147483647, 1, NULL, '2024-05-26 11:10:11', '2024-05-26 11:10:11'),
(45, 26, 5, 'Madu Trigona', 'http://localhost:3000/images/ccf778bc4d0f6d6cfa644389dd73d7f0.png', 'Madu Trigona', NULL, 25000, 12, NULL, '2024-05-26 18:19:21', '2024-05-26 18:19:21');

-- --------------------------------------------------------

--
-- Table structure for table `requested_banners`
--

CREATE TABLE `requested_banners` (
  `id` bigint(11) NOT NULL,
  `id_user` bigint(11) NOT NULL,
  `nama_banner` varchar(255) NOT NULL,
  `deskripsi` varchar(255) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `bukti_transfer` varchar(255) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`sid`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
('-pCrPd_kDZMSmHgPrD_6MGxPMdaznlJB', '2024-05-29 08:03:33', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}', '2024-05-28 08:03:33', '2024-05-28 08:03:33'),
('49LKi-xL3XWXgZ_MTwrEZpkDp_05iJtA', '2024-05-29 04:57:43', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}', '2024-05-28 04:57:43', '2024-05-28 04:57:43'),
('BBROqzmc7AZpV-S5Ob4KH736zb3uiD_v', '2024-05-29 08:03:08', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}', '2024-05-28 08:03:08', '2024-05-28 08:03:08'),
('d8hzoAkAFg4TbrIa8_Y3A4E_XLmfgbIG', '2024-05-29 06:17:57', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"userId\":\"f34c5a80-4762-406d-99e3-08eabb7b8e98\"}', '2024-05-28 04:57:43', '2024-05-28 06:17:57'),
('ExMd7t5av2UxicOVgy2nZgT4PPpuiNLx', '2024-05-28 08:41:56', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}', '2024-05-27 08:41:56', '2024-05-27 08:41:56'),
('FIUS9EdGs9E1OAfmoZZxSLOoK39bWBma', '2024-05-29 08:08:43', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"userId\":\"a344f612-40e3-4615-92b2-927c475bd62f\"}', '2024-05-28 08:03:33', '2024-05-28 08:08:43'),
('KDcE5kkes-hdjPTLvNMyiRL-VEqQP4GD', '2024-05-28 13:30:28', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}', '2024-05-27 13:30:28', '2024-05-27 13:30:28'),
('MwdgYKAemrsVDAd8_o9Bzgm2GX2Cvvvf', '2024-05-28 07:28:13', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}', '2024-05-27 07:28:13', '2024-05-27 07:28:13'),
('nUzuKB9q6ayZK9yFPOJ1cEKL--XpSEa8', '2024-05-29 04:57:37', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}', '2024-05-28 04:57:37', '2024-05-28 04:57:37'),
('rJ8rmy-lfuAPOc2C3OBeXaXnxYlbpOUY', '2024-05-28 07:50:35', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-05-27 07:50:35', '2024-05-27 07:50:35'),
('S_jYT3-FBVgdGQsxAjtK90Mj6fJhl7Cm', '2024-05-28 07:27:46', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}', '2024-05-27 07:27:47', '2024-05-27 07:27:47'),
('Uj6l-0hHBnAAY-eaRhjsb7zicNbTcORJ', '2024-05-28 14:33:28', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"userId\":\"1da77528-6f61-43d2-8abc-a14f7f657e34\"}', '2024-05-27 09:05:19', '2024-05-27 14:33:28'),
('UoN0vn58zmzDz6GV5-ZOMp1AnT8kQyk9', '2024-05-29 04:57:37', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}', '2024-05-28 04:57:37', '2024-05-28 04:57:37'),
('uZea1nIgS75W_jLkOCExk6-SMZaStlvO', '2024-05-28 07:27:46', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}', '2024-05-27 07:27:47', '2024-05-27 07:27:47'),
('Y02Qjv5oVfZU9_gKC6HyZLlBGj6XV4y5', '2024-05-29 08:03:08', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}', '2024-05-28 08:03:08', '2024-05-28 08:03:08'),
('zEGpAWfjDxcHOsJTL1u521VnRB477j8w', '2024-05-28 14:11:43', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"userId\":\"1da77528-6f61-43d2-8abc-a14f7f657e34\"}', '2024-05-27 09:32:25', '2024-05-27 14:11:43'),
('zXk570YgcbQq3cY-6A0MfaJnUmQ6beSR', '2024-05-28 13:30:28', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}', '2024-05-27 13:30:28', '2024-05-27 13:30:28');

-- --------------------------------------------------------

--
-- Table structure for table `transaksi`
--

CREATE TABLE `transaksi` (
  `id` bigint(50) NOT NULL,
  `tanggal_pesan` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_pembeli` bigint(20) NOT NULL,
  `id_penjual` bigint(20) NOT NULL,
  `total` bigint(50) NOT NULL,
  `keterangan` varchar(100) NOT NULL,
  `produk` varchar(50) NOT NULL,
  `payment` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `bukti_transfer` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transaksi`
--

INSERT INTO `transaksi` (`id`, `tanggal_pesan`, `id_pembeli`, `id_penjual`, `total`, `keterangan`, `produk`, `payment`, `status`, `bukti_transfer`) VALUES
(18, '2024-05-28 06:17:47', 28, 28, 25000000, 'Daffa memang ganteng', 'Nasi', 'Transfer Bank', 'Pesanan diterima pembeli', 'http://localhost:3000/images/847c9e6e82aa5e453cbe320e77f86f57.jpg'),
(25, '2024-05-28 05:31:35', 28, 2, 25000, '', 'Kalung', 'E Wallet', 'Sudah Bayar', 'http://localhost:3000/images/3ee3540beba843b5dcf84b6ae86778e7.jpg'),
(26, '2024-05-28 05:51:45', 28, 26, 25000, '', 'Madu Trigona', 'Transfer Bank', 'Sudah Bayar', 'http://localhost:3000/images/bd9d95576bfffab46883aafe7e307804.png'),
(27, '2024-05-28 08:08:11', 30, 28, 20000, '', 'Risoles Mayo', 'Transfer Bank', 'Sudah Bayar', 'http://localhost:3000/images/7559f2bbbe69796a112435879fa06aff.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(200) NOT NULL,
  `no_telp` varchar(20) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(500) DEFAULT NULL,
  `role` tinytext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `uuid`, `username`, `name`, `email`, `no_telp`, `alamat`, `password`, `remember_token`, `role`, `created_at`, `updated_at`) VALUES
(1, '', '2011522023', 'Boby', 'boby@email.com', '628783434243', 'Jalan Seberang Padang ', '$2a$10$eD71y2kOD8dt59uecMZGv.GrQKmOBAwzt8bI11x9oaSVv3hmFYiqS', '', 'm', '2022-07-02 17:50:28', '2023-02-03 09:00:18'),
(2, '', '2011527001', 'Daffa', 'daffa@email.com', '628511289374', 'Jala Utama Residence, Blok A/4, Kota Padang, Sumatera Barat, Indonesia 25124', '$2a$10$FFhrC998SYAXea52uzE5T..8YXRyvrZL3bT5V0Hp/DY0XMZqmCba2', '', 'm', '2022-07-02 19:34:21', '2024-04-04 05:19:10'),
(3, '', '2011523019', 'Kemal', 'kemal@email.com', '622358328953', 'Jalan Seberang Padang ', '$2a$10$Nt7pd7djbPhSrDoernRGQOtcS5fOqBUq4Kdp2A/QBgx4s3jJ0.L1i', '', 'm', '2022-07-04 01:08:14', '2023-02-07 05:35:39'),
(8, '', 'admin', 'admin', 'admin@ramerion.id', '085155158625', 'Jalan Seberang Padang ', '$2a$10$GOb3vFuqzKoyr4MBGAjtZuVKJhrNl/CU5t6Okv35f3UaQ1sz18xDS', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwibmFtYSI6ImFkbWluIiwiaWQiOjgsInJvbGUiOiJkIiwiZW1haWwiOiJhZG1pbkByYW1lcmlvbi5pZCIsIm5vX3RlbHAiOiIwODUxNTUxNTg2MjUiLCJpYXQiOjE2NzU5MzAwMjMsImV4cCI6MTY3NjAxNjQyM30.foSP56xU7TIA5uxNOE0k2JtYbH-wJ-Z1l4VXdY6wRUs', 'admin', '2023-02-07 05:37:14', '2023-02-09 08:07:03'),
(26, '1da77528-6f61-43d2-8abc-a14f7f657e34', '@tiaravalma', 'Tiara Valma Alzena', 'tiara1239910wqwq@gmail.com', '088888888', 'Filano Yang nda ada di GMAPS', '$argon2id$v=19$m=65536,t=3,p=4$BypR0WNmu81Za+Sr4x5LAA$JxJxTjbIwZ2EYvSeIRhILjw04bUO7KUMIWvYjx8SwdI', NULL, 'User', '2024-05-04 13:25:24', '2024-05-27 13:55:28'),
(27, '3df26ba1-8fcb-4c84-b19f-a8a061f08255', 'admin a', 'Admin Ganteng', 'admin@gmail.com', '082286541161', 'Alamat belum dilengkapi', '$argon2id$v=19$m=65536,t=3,p=4$2MyNN8qn4E34iShEFAC/Yg$CsPoR4Y7cSZJRbW1bicdm0fKo1tffprUi5ANP906/So', NULL, 'admin', '2024-05-07 03:21:52', '2024-05-07 03:21:52'),
(28, 'f34c5a80-4762-406d-99e3-08eabb7b8e98', '@daffamuliya', 'Daffa Riza Muliya', 'daffamuliya15@gmail.com', '082286541161', 'Alamat belum dilengkapi', '$argon2id$v=19$m=65536,t=3,p=4$ZQMfel9no2th/2u2KbRmaQ$qqRvUDV8TapcDM1kzcCV7+N2x50Kx9Kmd0e1xAJ+mdw', NULL, 'User', '2024-05-07 07:27:36', '2024-05-21 12:59:47'),
(29, '045f96c9-f25d-4ce4-9e29-2f9c07b5b4ae', 'hagisiraj', 'Hagi Siraj Sumanta', 'hagisiraj123@gmail.com', '082170246895', 'Alamat belum dilengkapi', '$argon2id$v=19$m=65536,t=3,p=4$TfJ9ud/lOvGmzl/6LXwKdA$YRJlIkl12D7IlDRQgi4gOfrPDB4DrlAoC/kig1I0fbE', NULL, 'User', '2024-05-26 11:02:36', '2024-05-26 11:02:36'),
(30, 'a344f612-40e3-4615-92b2-927c475bd62f', 'dimas123', 'Dimas Harianto', 'dimas@gmail.com', '082286541161', 'Auduri Number 18', '$argon2id$v=19$m=65536,t=3,p=4$Ts760g7uPFb/V1+WLDuEzw$QKXFOc0eipEnCa+d7ke30QivMyi7m225nXa5jFMH2q8', NULL, 'User', '2024-05-28 08:05:32', '2024-05-28 08:07:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `active_banners`
--
ALTER TABLE `active_banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `produk_id` (`produk_id`);

--
-- Indexes for table `forum`
--
ALTER TABLE `forum`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `gambar_blog`
--
ALTER TABLE `gambar_blog`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blog_id` (`blog_id`);

--
-- Indexes for table `gambar_forum`
--
ALTER TABLE `gambar_forum`
  ADD PRIMARY KEY (`id`),
  ADD KEY `forum_id` (`forum_id`);

--
-- Indexes for table `gambar_produk`
--
ALTER TABLE `gambar_produk`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_produk` (`id_produk`);

--
-- Indexes for table `kategori_blog`
--
ALTER TABLE `kategori_blog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kategori_produk`
--
ALTER TABLE `kategori_produk`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `komentar_forum`
--
ALTER TABLE `komentar_forum`
  ADD PRIMARY KEY (`id`),
  ADD KEY `forum_id` (`forum_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `produk_id` (`produk_id`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`id_penjual`),
  ADD KEY `user_id_2` (`id_penjual`),
  ADD KEY `id_kategori` (`id_kategori`);

--
-- Indexes for table `requested_banners`
--
ALTER TABLE `requested_banners`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_pembeli` (`id_pembeli`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `active_banners`
--
ALTER TABLE `active_banners`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- AUTO_INCREMENT for table `forum`
--
ALTER TABLE `forum`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=153;

--
-- AUTO_INCREMENT for table `gambar_blog`
--
ALTER TABLE `gambar_blog`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gambar_forum`
--
ALTER TABLE `gambar_forum`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gambar_produk`
--
ALTER TABLE `gambar_produk`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kategori_blog`
--
ALTER TABLE `kategori_blog`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `kategori_produk`
--
ALTER TABLE `kategori_produk`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `komentar_forum`
--
ALTER TABLE `komentar_forum`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT for table `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `requested_banners`
--
ALTER TABLE `requested_banners`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `transaksi`
--
ALTER TABLE `transaksi`
  MODIFY `id` bigint(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `blog`
--
ALTER TABLE `blog`
  ADD CONSTRAINT `blog_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`produk_id`) REFERENCES `produk` (`id`);

--
-- Constraints for table `forum`
--
ALTER TABLE `forum`
  ADD CONSTRAINT `forum_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `gambar_blog`
--
ALTER TABLE `gambar_blog`
  ADD CONSTRAINT `gambar_blog_ibfk_1` FOREIGN KEY (`blog_id`) REFERENCES `blog` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `gambar_forum`
--
ALTER TABLE `gambar_forum`
  ADD CONSTRAINT `gambar_forum_ibfk_1` FOREIGN KEY (`forum_id`) REFERENCES `forum` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `gambar_produk`
--
ALTER TABLE `gambar_produk`
  ADD CONSTRAINT `gambar_produk_ibfk_1` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `komentar_forum`
--
ALTER TABLE `komentar_forum`
  ADD CONSTRAINT `komentar_forum_ibfk_1` FOREIGN KEY (`forum_id`) REFERENCES `forum` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `komentar_forum_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD CONSTRAINT `order_detail_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `order_detail_ibfk_2` FOREIGN KEY (`produk_id`) REFERENCES `produk` (`id`);

--
-- Constraints for table `produk`
--
ALTER TABLE `produk`
  ADD CONSTRAINT `produk_ibfk_1` FOREIGN KEY (`id_penjual`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `produk_ibfk_2` FOREIGN KEY (`id_kategori`) REFERENCES `kategori_produk` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `requested_banners`
--
ALTER TABLE `requested_banners`
  ADD CONSTRAINT `requested_banners_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Constraints for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD CONSTRAINT `transaksi_ibfk_1` FOREIGN KEY (`id_pembeli`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
