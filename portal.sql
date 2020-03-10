-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 10, 2020 at 05:58 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portal`
--

-- --------------------------------------------------------

--
-- Table structure for table `action`
--

CREATE TABLE `action` (
  `id` varchar(5) NOT NULL,
  `action` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `action`
--

INSERT INTO `action` (`id`, `action`) VALUES
('1', 'AVAILABLE'),
('2', 'NOT AVAILABLE');

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `number` int(15) NOT NULL,
  `cid` int(5) NOT NULL,
  `cname` varchar(1000) NOT NULL,
  `csection` varchar(20) NOT NULL,
  `ctime` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`number`, `cid`, `cname`, `csection`, `ctime`) VALUES
(1, 1112, 'Artificial Intelegence', 'F', '2:00-3:30'),
(2, 1212, 'ENGINEERING MANAGEMENT', 'F', '11:00-2:00'),
(3, 1213, 'ENGINEERING MANAGEMENT', 'G', '8:00-4:00');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `no` int(5) NOT NULL,
  `id` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `cname` varchar(100) NOT NULL,
  `section` varchar(15) NOT NULL,
  `result` varchar(15) NOT NULL,
  `creditcomplete` varchar(20) NOT NULL,
  `cgpa` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`no`, `id`, `name`, `cname`, `section`, `result`, `creditcomplete`, `cgpa`, `email`) VALUES
(1, '17-34013-1', 'Nur,iftikharul Faridee', 'Artificial Intelligence', 'F', '00', '115', '3.81', ''),
(2, '17-34014-1', 'NUR', 'Engineering Mangement', 'F', '80', '12', '3.3', ''),
(3, '17-34015-1', 'SHOILY', 'ENGINEERING MANAGEMENT', 'G', '00', '122', '3.61', ''),
(4, '18-34444-1', 'Ifti', 'ARTIFICIAL INTELEGENCE', 'F', '00', '22', '3.81', 'amicableifti@gmail.c');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(5) NOT NULL,
  `name` varchar(20) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(30) NOT NULL,
  `email` varchar(20) NOT NULL,
  `type` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `username`, `password`, `email`, `type`) VALUES
(1, 'Ifti', 'ifti', 'ifti', 'amicableifti@gmail.c', 'teacher'),
(2, 'Ifti', 'alamin', 'alamin', 'amicableifti@gmail.c', 'teacher');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
