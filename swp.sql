-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 10, 2020 at 11:01 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `swp`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminprofile`
--

CREATE TABLE `adminprofile` (
  `id` int(5) NOT NULL,
  `userid` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` int(11) NOT NULL,
  `profession` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `adminprofile`
--

INSERT INTO `adminprofile` (`id`, `userid`, `fullname`, `email`, `phone`, `profession`) VALUES
(1, 'A34048', 'MD.Minhajul Islam', 'minhajislam95@gmail.com', 1797436723, 'Back end Developer'),
(2, 'A34044', 'Habibul Amin', 'habib@gmail.com', 12345678, 'Developer');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(5) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `userid` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `userid`, `password`, `type`) VALUES
(1, 'MD.Minhajul Islam', 'A34048', '123456', 'admin'),
(3, 'Habibul Amin', 'A34044', '123456', 'admin'),
(5, 'Tahmid Mahtab ratul', 'A33980', '123456', 'admin'),
(6, 'Faridee Nur', 'T34013', '123456', 'teacher'),
(7, 'Tanjimul Hasan', 'S33430', '123456', 'student'),
(9, 'Maidul Islam', '1733333', '123456', 'student'),
(11, 'Mahmud', '1734000', '123456', 'student'),
(12, 'Ishtiak', 'A32032', '123456', 'admin'),
(13, 'Riaz Nur', 'T33039', '123456', 'teacher'),
(24, 'Tahmid Mahtab Ratul', 'S14048', '123456', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminprofile`
--
ALTER TABLE `adminprofile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adminprofile`
--
ALTER TABLE `adminprofile`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
