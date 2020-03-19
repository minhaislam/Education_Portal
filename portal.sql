-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 19, 2020 at 03:21 PM
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
-- Database: `portal`
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
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `number` int(15) NOT NULL,
  `cid` int(5) NOT NULL,
  `cname` varchar(1000) NOT NULL,
  `csection` varchar(20) NOT NULL,
  `ctime` varchar(40) NOT NULL,
  `notice` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`number`, `cid`, `cname`, `csection`, `ctime`, `notice`) VALUES
(1, 1112, 'Artificial Intelegence', 'F', '2:00-3:30', ''),
(2, 1212, 'ENGINEERING MANAGEMENT', 'F', '11:00-2:00', ''),
(3, 1213, 'ENGINEERING MANAGEMENT', 'G', '8:00-4:00', '');

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
  `email` varchar(50) NOT NULL,
  `ntitle` varchar(100) NOT NULL,
  `notice` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`no`, `id`, `name`, `cname`, `section`, `result`, `creditcomplete`, `cgpa`, `email`, `ntitle`, `notice`) VALUES
(1, '17-34013-1', 'Iftikharul faridee Nur', 'ARTIFICIAL INTELEGENCE', 'F', '70', '333', '3.81', 'amicableifti@gmail.com', 'Drop prposal!', 'Drop paper accepted,check it.'),
(2, '17-3333-1', 'SHOILY', 'COMPUTER NETWORK', 'G', '00', '123', '3.55', 'abc@gmail.com', '--', '--');

-- --------------------------------------------------------

--
-- Table structure for table `studentprofile`
--

CREATE TABLE `studentprofile` (
  `id` int(5) NOT NULL,
  `userid` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `CGPA` varchar(255) NOT NULL,
  `passingyear` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `studentprofile`
--

INSERT INTO `studentprofile` (`id`, `userid`, `fullname`, `department`, `CGPA`, `passingyear`) VALUES
(1, 'S33430', 'Tanjimul Hasan', 'C.S.E', '3.85', '2021'),
(2, 'S14048', 'Tahmid Mahtab Ratul', 'C.S.E', '3.70', '2021');

-- --------------------------------------------------------

--
-- Table structure for table `teacherprofile`
--

CREATE TABLE `teacherprofile` (
  `id` int(5) NOT NULL,
  `userid` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `education` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teacherprofile`
--

INSERT INTO `teacherprofile` (`id`, `userid`, `fullname`, `department`, `email`, `education`) VALUES
(1, 'T34013', 'Faridee Nur', 'C.S.E.', 'amicableifti@gmail.com', 'M.S.C in CSE'),
(2, 'T33039', 'Riaz Nur', 'E.E.E', 'riaz@gmail.com', 'Msc EEE');

-- --------------------------------------------------------

--
-- Table structure for table `upload`
--

CREATE TABLE `upload` (
  `no` int(5) NOT NULL,
  `cid` varchar(40) NOT NULL,
  `notice` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `upload`
--

INSERT INTO `upload` (`no`, `cid`, `notice`) VALUES
(1, '1112', 'TOMORROE CALL WILL BE CANCEL.'),
(2, '1212', 'Tomorrow i will se your peoject proposal.'),
(3, '1212', 'Hew how are you?'),
(4, '1112', 'Hey lets chill baby..'),
(5, '1112', 'Go to the class.');

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
  `type` varchar(30) NOT NULL,
  `status` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `username`, `password`, `email`, `type`, `status`) VALUES
(1, 'Ifti', 'ifti', 'ifti', 'amicable@gmail.com', 'teacher', 'success');

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
(3, 'Habibul Amin', 'A34044', '123456', 'admin'),
(5, 'Tahmid Mahtab ratul', 'A33980', '123456', 'admin'),
(6, 'Faridee Nur', 'T34013', '123456', 'teacher'),
(7, 'Tanjimul Hasan T', 'S33430', '123456', 'student'),
(13, 'Riaz Nur', 'T33039', '123456', 'teacher'),
(24, 'Tahmid Mahtab Ratul', 'S14048', '123456', 'student'),
(27, 'Riaz Nur', 'S00019', '123456', 'student'),
(28, 'Syed Sanjid', 'T31301', '123456', 'teacher'),
(29, 'Ishtiak Ahmed', 'A13001', '123456', 'admin'),
(30, 'MD.Minhajul Islam', 'A34048', '123123', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`no`);

--
-- Indexes for table `studentprofile`
--
ALTER TABLE `studentprofile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teacherprofile`
--
ALTER TABLE `teacherprofile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `upload`
--
ALTER TABLE `upload`
  ADD PRIMARY KEY (`no`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `studentprofile`
--
ALTER TABLE `studentprofile`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `teacherprofile`
--
ALTER TABLE `teacherprofile`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `upload`
--
ALTER TABLE `upload`
  MODIFY `no` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
