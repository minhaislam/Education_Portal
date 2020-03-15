-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2020 at 04:51 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.28

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
  `cid` varchar(20) NOT NULL,
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

INSERT INTO `student` (`no`, `id`, `name`, `cid`, `cname`, `section`, `result`, `creditcomplete`, `cgpa`, `email`, `ntitle`, `notice`) VALUES
(1, '17-34013-1', 'Iftikharul faridee Nur', '111', 'ARTIFICIAL INTELEGENCE', 'F', '70', '333', '3.81', 'amicableifti@gmail.com', 'Quiz', 'contact my office at 2 pm.'),
(2, '17-3333-1', 'SHOILY', '222', 'COMPUTER NETWORK', 'G', '00', '123', '3.55', 'abc@gmail.com', 'HEy', 'Hi meet with me asap.'),
(3, '17-340133-1', 'Ifti', '222', 'COMPUTER NETWORK', 'G', '00', '22', '3.81', 'ifti@gmail.com', '--', '--');

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
(5, '1112', 'Go to the class.'),
(13, '1112', 'rcgbb'),
(14, '1112', 'Hey how are you?');

-- --------------------------------------------------------

--
-- Table structure for table `uploadenote`
--

CREATE TABLE `uploadenote` (
  `no` int(5) NOT NULL,
  `cid` varchar(30) NOT NULL,
  `note` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `uploadenote`
--

INSERT INTO `uploadenote` (`no`, `cid`, `note`) VALUES
(1, '1112', '1584111363847-1811323.jpg'),
(8, '1212', '1584285152890-1415731.jpg'),
(9, '1112', '1584285174825-1811333.jpg'),
(10, '1112', '1584285201640-portal.sql');

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
(1, 'Ifti', 'ifti', '1234', 'amicable@gmail.com', 'teacher', 'danger'),
(2, 'ifti', 'ifti', '1234', 'ifti@gmail.com', 'teacher', 'danger');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`no`);

--
-- Indexes for table `upload`
--
ALTER TABLE `upload`
  ADD PRIMARY KEY (`no`);

--
-- Indexes for table `uploadenote`
--
ALTER TABLE `uploadenote`
  ADD PRIMARY KEY (`no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `upload`
--
ALTER TABLE `upload`
  MODIFY `no` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `uploadenote`
--
ALTER TABLE `uploadenote`
  MODIFY `no` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
