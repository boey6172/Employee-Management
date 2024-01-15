-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 15, 2024 at 05:56 PM
-- Server version: 8.0.33-0ubuntu0.22.04.2
-- PHP Version: 8.1.2-1ubuntu2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hxp`
--
CREATE DATABASE IF NOT EXISTS `hxp` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `hxp`;

-- --------------------------------------------------------

--
-- Table structure for table `Attachments`
--

CREATE TABLE `Attachments` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `employee` varchar(255) NOT NULL,
  `documentType` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `file` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `DocumentTypes`
--

CREATE TABLE `DocumentTypes` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `documentType` varchar(255) NOT NULL,
  `deleted_at` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Donors`
--

CREATE TABLE `Donors` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `middlename` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `suffix` varchar(256) DEFAULT NULL,
  `refferalId` varchar(255) NOT NULL,
  `level` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `status` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `contactNumber` varchar(255) NOT NULL,
  `depositSlip` varchar(255) NOT NULL,
  `depositfile` varchar(255) DEFAULT NULL,
  `bankfile` varchar(255) DEFAULT NULL,
  `bankAccount` varchar(255) DEFAULT NULL,
  `validIdFile` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `philId` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Donors`
--

INSERT INTO `Donors` (`id`, `firstname`, `middlename`, `lastname`, `suffix`, `refferalId`, `level`, `status`, `contactNumber`, `depositSlip`, `depositfile`, `bankfile`, `bankAccount`, `validIdFile`, `philId`, `createdAt`, `updatedAt`) VALUES
('049ba845-1336-4c1e-83ef-79314c8777d8', '123', '123', '123', '1', 'b71bba42-bd47-4bc8-ad5e-e429df2760be', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', NULL, NULL, NULL, NULL, '123', '2024-01-13 09:41:01', '2024-01-13 09:41:01'),
('0c31699f-f2d3-4381-8afb-7bfba3f8c2c1', '123', '123', '123', '1', 'b71bba42-bd47-4bc8-ad5e-e429df2760be', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', NULL, NULL, NULL, NULL, '123', '2024-01-07 04:44:50', '2024-01-07 04:44:50'),
('0f92683a-2721-4ca3-95d2-5e86194acaac', '123', '123', '123', '1', '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', NULL, NULL, NULL, NULL, '123', '2024-01-07 06:46:31', '2024-01-07 06:46:31'),
('1f1f0461-16a4-4486-a676-22884247046a', '123', '123', '123', '1', 'b71bba42-bd47-4bc8-ad5e-e429df2760be', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', NULL, NULL, NULL, NULL, '123', '2024-01-07 05:01:13', '2024-01-07 05:01:13'),
('2f32749b-1cfe-4731-b397-793a29deaa33', '123', '123', '123', '1', '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', 'Images/1704608608184.jpg', NULL, NULL, NULL, '123', '2024-01-07 06:23:28', '2024-01-07 06:23:28'),
('2f5bf502-2cef-47b8-ae99-6587abf90b4f', 'Daniel Meynard', 'Abao', 'Mabunga', NULL, '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', NULL, NULL, '123', '', '123', '2023-10-28 15:59:03', '2023-10-28 15:59:03'),
('361db083-a164-4f84-bc69-699c18e4f5aa', '123', '123', '123', '1', 'b71bba42-bd47-4bc8-ad5e-e429df2760be', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', 'Images/1704604298358.png', NULL, NULL, NULL, '123', '2024-01-07 05:01:53', '2024-01-07 05:11:38'),
('4196f4d2-549e-417e-a1de-203284e611be', '123', '123', '123', '1', '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', 'Images/1704609360331.png', NULL, NULL, NULL, '123', '2024-01-07 06:36:00', '2024-01-07 06:36:00'),
('42b8554e-bfa3-4990-a6bf-fc71dffbf3ba', '123', '123', '123', '1', 'b71bba42-bd47-4bc8-ad5e-e429df2760be', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', NULL, NULL, NULL, NULL, '123', '2024-01-07 04:48:31', '2024-01-07 04:48:31'),
('4f56d273-7ef2-4b40-a3e0-7a977856103f', '123', '123', '123', '1', '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', 'Images/1704609520586.jpg', NULL, NULL, NULL, '123', '2024-01-07 06:38:40', '2024-01-07 06:38:40'),
('50a65175-cfab-46be-a7e1-e777252f2bab', '123', '123', '123', NULL, '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', NULL, NULL, '123', '', '123', '2023-10-28 16:01:20', '2023-10-28 16:01:20'),
('5338b4ba-7f58-4e27-884c-6385a0d3e0a8', '123', '123', '123', NULL, '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', NULL, NULL, '123', '', '123', '2023-10-23 09:46:43', '2023-10-23 09:46:43'),
('55c6b0ab-75d7-40c7-8260-513fdac18993', 'Daniel Meynard', 'Abao', 'Mabunga', NULL, '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', NULL, NULL, '123', '', '123', '2023-10-28 15:59:44', '2023-10-28 15:59:44'),
('589ee660-0daf-4454-ae2f-d8512736f042', 'Daniel Meynard', 'Abao', 'Mabunga', NULL, '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', NULL, NULL, '123', '', '123', '2023-10-28 16:09:23', '2023-10-28 16:09:23'),
('5b6a6006-d60b-45c0-8150-fb102024f63f', 'Daniel Meynard', 'Abao', 'Mabunga', NULL, '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', NULL, NULL, '123', '', '123', '2023-10-28 15:52:31', '2023-10-28 15:52:31'),
('5dc7f1a2-d717-431a-8aa3-01509e083cd2', 'Daniel', 'Abao', 'Mabunga', NULL, '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'e93b78ed-ed32-4a69-880b-e8545b8ae067', '9076041446', '123', NULL, NULL, '1233', '', '123', '2023-10-16 11:37:40', '2023-10-16 11:37:40'),
('5f94c235-73d9-469f-ba11-7298cc9249b6', '123', '123', '123', '1', 'b71bba42-bd47-4bc8-ad5e-e429df2760be', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', NULL, NULL, NULL, NULL, '123', '2024-01-07 04:54:26', '2024-01-07 04:54:26'),
('63a4ecaa-8700-4c51-a6af-77167b1f9b72', '123', '123', '123', '1', 'b71bba42-bd47-4bc8-ad5e-e429df2760be', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', NULL, NULL, NULL, NULL, '123', '2024-01-07 04:07:37', '2024-01-07 04:07:37'),
('64e236df-74d6-4877-88ca-035ad21efd19', '123', '123', '123', '1', '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', NULL, NULL, NULL, NULL, '123', '2024-01-07 06:34:27', '2024-01-07 06:34:27'),
('64e9d2bd-f4f5-4332-8ddd-dbe44be50f94', '123', '123', '123', '1', 'b71bba42-bd47-4bc8-ad5e-e429df2760be', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', NULL, NULL, NULL, NULL, '123', '2024-01-07 04:17:27', '2024-01-07 04:17:27'),
('653b768d-e64b-41d3-a82f-a954bfcb41ca', '123', '123', '123', '1', 'b71bba42-bd47-4bc8-ad5e-e429df2760be', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', NULL, NULL, NULL, '', '123', '2024-01-06 10:25:34', '2024-01-06 10:25:34'),
('65877ddd-3290-425c-9e0f-eb098e6cbb52', 'Daniel Meynard', 'Abao', 'Mabunga', NULL, '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', NULL, NULL, '123', '', '123', '2023-10-28 16:05:33', '2023-10-28 16:05:33'),
('6861ad5e-e5ba-4fed-aa0b-af5d239b9aa8', '123', '123', '123', '1', 'b71bba42-bd47-4bc8-ad5e-e429df2760be', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', NULL, NULL, NULL, NULL, '123', '2024-01-07 04:33:29', '2024-01-07 04:33:29'),
('6aa388aa-e811-4ddc-ba8f-95df09421163', '123', '123', '123', '1', '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', NULL, NULL, NULL, NULL, '123', '2024-01-07 06:47:28', '2024-01-07 06:47:28'),
('70c7370d-c589-4207-bbf4-d918eac0f148', '123', '123', '123', NULL, '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123123', '123', NULL, NULL, '123', '', '123', '2023-10-23 09:50:21', '2023-10-23 09:50:21'),
('8c5228ad-fbb0-4cf3-becc-35544a21bb2c', '123', '123', '123', NULL, '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', NULL, NULL, '123', '', '123', '2023-10-28 16:02:31', '2023-10-28 16:02:31'),
('8cb2de90-596c-4ce8-bf4c-80a22eb328e1', '123', '123', '123', '1', '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', 'Images/1704608743939.png', NULL, NULL, NULL, '123', '2024-01-07 06:25:43', '2024-01-07 06:25:43'),
('918f4b51-4b6a-4733-8723-9d906817a4c6', 'Daniel Meynard', 'Abao', 'Mabunga', NULL, '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', NULL, NULL, '123', '', '123', '2023-10-28 15:56:14', '2023-10-28 15:56:14'),
('9b8d3dee-ef61-427f-bbe5-307e0f6b4f52', '123', '123', '123', '1', '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', 'Images/1704610114754.jpg', NULL, NULL, 'Images/1704610115184.png', '123', '2024-01-07 06:48:34', '2024-01-07 06:48:35'),
('b30fc786-cd7d-487d-88b7-565939ef6464', '123', '123', '123', '1', '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', 'Images/1704609911931.jpg', NULL, NULL, 'Images/1704609955413.png', '123', '2024-01-07 06:45:11', '2024-01-07 06:45:55'),
('b71bba42-bd47-4bc8-ad5e-e429df2760be', '123', '123', '123', NULL, '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'd35932f3-5cf8-4ce1-8bed-ca0faa7db726', '123', '123', NULL, NULL, '123', '', '123', '2023-10-15 04:27:05', '2023-10-15 04:27:05'),
('c4c57a6f-cc22-4e4b-b2d4-df181d59276b', '123', '123', '123', NULL, '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', NULL, NULL, '123', '', '123', '2023-10-28 16:03:37', '2023-10-28 16:03:37'),
('d3951d3e-cac0-4bb7-a823-e335413797cd', '123', '123', '12', NULL, '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', NULL, NULL, '123', '', '123', '2023-10-23 09:37:55', '2023-10-23 09:37:55'),
('de69f734-9fd0-47ed-9590-1a274d0248b2', 'Daniel Meynard', 'Abao', 'Mabunga', NULL, '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', NULL, NULL, '123', '', '123', '2023-10-28 15:54:00', '2023-10-28 15:54:00'),
('de9140c5-289a-4049-9ef1-d02ce935d282', '123', '123', '123', NULL, '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', NULL, NULL, '123', '', '123', '2023-10-23 09:42:51', '2023-10-23 09:42:51'),
('e12f6f3c-0399-4fb2-8118-b3572d341868', 'Daniel Meynard', 'Abao', 'Mabunga', NULL, '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '9270478777', '123', NULL, NULL, '123', '', '123', '2023-10-23 13:56:47', '2023-10-23 13:56:47'),
('e66a4a5c-4b88-4a95-b7ab-d714ff8d94c2', '123', '123', '123', '1', 'b71bba42-bd47-4bc8-ad5e-e429df2760be', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', NULL, NULL, NULL, NULL, '123', '2024-01-07 04:46:24', '2024-01-07 04:46:24'),
('f728d91b-b5b5-4705-b18b-8d4b79914a67', '123', '123', '123', '1', 'b71bba42-bd47-4bc8-ad5e-e429df2760be', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', 'Images/1704606711792.jpg', NULL, NULL, NULL, '123', '2024-01-07 05:51:51', '2024-01-07 05:51:51'),
('ff9ddb9d-613e-42a7-89de-fe68c9d88efe', '123', '123', '123', '1', '123', '0668b972-1aba-4ce1-b893-868fda9da679', 'a587fb85-2851-4fc9-aaec-0c1088b600b6', '123', '123', 'Images/1704608358723.png', NULL, NULL, NULL, '123', '2024-01-07 06:19:18', '2024-01-07 06:19:18');

-- --------------------------------------------------------

--
-- Table structure for table `Employees`
--

CREATE TABLE `Employees` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `middlename` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `suffix` varchar(255) NOT NULL,
  `birthday` varchar(255) NOT NULL,
  `gender` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `rank` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `regionAssignment` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `religion` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `contactNumber` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `empDate` varchar(255) NOT NULL,
  `philNumber` varchar(255) NOT NULL,
  `pagIbigNumber` varchar(255) NOT NULL,
  `gsisNumber` varchar(255) NOT NULL,
  `nhmcNumber` varchar(255) NOT NULL,
  `tinNumber` varchar(255) NOT NULL,
  `taxstat` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `salaryGrade` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Genders`
--

CREATE TABLE `Genders` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `GenealogyTrees`
--

CREATE TABLE `GenealogyTrees` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `uplineId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `downlineId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `level` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Levels`
--

CREATE TABLE `Levels` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `level` varchar(255) NOT NULL,
  `deleted_at` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Levels`
--

INSERT INTO `Levels` (`id`, `level`, `deleted_at`, `createdAt`, `updatedAt`) VALUES
('0668b972-1aba-4ce1-b893-868fda9da679', '1', NULL, '2023-10-15 11:44:06', '2023-10-15 11:44:06'),
('5551674b-047b-4a27-a230-ac2774505c5d', '2', NULL, '2023-10-15 11:44:06', '2023-10-15 11:44:06');

-- --------------------------------------------------------

--
-- Table structure for table `Primaries`
--

CREATE TABLE `Primaries` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `employee` varchar(255) NOT NULL,
  `school_name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `year_completed` varchar(255) NOT NULL,
  `year_graduated` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Ranks`
--

CREATE TABLE `Ranks` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `rank` varchar(255) NOT NULL,
  `deleted_at` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `RegionAssignments`
--

CREATE TABLE `RegionAssignments` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `regionAssignment` varchar(255) NOT NULL,
  `deleted_at` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Religions`
--

CREATE TABLE `Religions` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `religion` varchar(255) NOT NULL,
  `deleted_at` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Roles`
--

CREATE TABLE `Roles` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Roles`
--

INSERT INTO `Roles` (`id`, `description`, `createdAt`, `updatedAt`) VALUES
('64574f6f-fcf8-4d55-a6d8-6bffaf4d308a', 'admin', '2023-10-19 23:59:54', '2023-10-19 23:59:54'),
('893d8a64-9d23-4ebb-86d6-750b194de98a', 'verifier', '2023-11-13 21:06:27', '2023-11-13 21:06:27'),
('9e71956c-8cb4-4baa-bc7b-a614d8403c32', 'hmo', '2023-11-13 16:03:36', '2023-11-13 16:03:36'),
('b7d6efab-8745-4e46-87fe-26d80d0f050e', 'validator', '2023-11-13 21:06:41', '2023-11-13 21:06:41'),
('d0eff7f7-2740-44ca-850f-836eb28093e6', 'donor', '2023-10-15 11:46:20', '2023-10-15 11:46:20');

-- --------------------------------------------------------

--
-- Table structure for table `Secondaries`
--

CREATE TABLE `Secondaries` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `employee` varchar(255) NOT NULL,
  `school_name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `year_completed` varchar(255) NOT NULL,
  `year_graduated` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Statuses`
--

CREATE TABLE `Statuses` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `status` varchar(255) NOT NULL,
  `deleted_at` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Statuses`
--

INSERT INTO `Statuses` (`id`, `status`, `deleted_at`, `createdAt`, `updatedAt`) VALUES
('a587fb85-2851-4fc9-aaec-0c1088b600b6', 'For Verification', NULL, '2023-10-15 11:42:25', '2023-10-15 11:42:25'),
('d35932f3-5cf8-4ce1-8bed-ca0faa7db726', 'Donor Solicitor', NULL, '2024-01-05 18:00:02', '2024-01-05 18:00:02'),
('e93b78ed-ed32-4a69-880b-e8545b8ae067', 'Verified Donor', NULL, '2023-10-15 11:42:25', '2023-10-15 11:42:25');

-- --------------------------------------------------------

--
-- Table structure for table `TaxStatuses`
--

CREATE TABLE `TaxStatuses` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `description` varchar(255) NOT NULL,
  `deleted_at` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Tertiaries`
--

CREATE TABLE `Tertiaries` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `employee` varchar(255) NOT NULL,
  `school_name` varchar(255) NOT NULL,
  `course` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `year_completed` varchar(255) NOT NULL,
  `year_graduated` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Transactions`
--

CREATE TABLE `Transactions` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `transaction` varchar(255) NOT NULL,
  `donor` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `amount` int DEFAULT NULL,
  `created_by` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `updated_by` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `deleted_at` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Transactions`
--

INSERT INTO `Transactions` (`id`, `transaction`, `donor`, `amount`, `created_by`, `updated_by`, `deleted_at`, `createdAt`, `updatedAt`) VALUES
('2d6a5152-1640-425b-b27e-7e59f77aef25', '2023-11-19-3cd2-1', '5dc7f1a2-d717-431a-8aa3-01509e083cd2', NULL, '60314fc2-ed2b-4e35-bb86-e70ef957dbc5', '60314fc2-ed2b-4e35-bb86-e70ef957dbc5', NULL, '2023-11-19 12:45:26', '2023-11-19 12:45:26'),
('550d30e5-60b6-4947-8d82-cbfe30605c97', '2023-11-13-3cd2-2', '5dc7f1a2-d717-431a-8aa3-01509e083cd2', NULL, '60314fc2-ed2b-4e35-bb86-e70ef957dbc5', '60314fc2-ed2b-4e35-bb86-e70ef957dbc5', NULL, '2023-11-13 13:23:33', '2023-11-13 13:23:33'),
('64282b78-0f7a-4cc4-9406-d2762e06d870', '2023-11-13-3cd2-5', '5dc7f1a2-d717-431a-8aa3-01509e083cd2', NULL, '60314fc2-ed2b-4e35-bb86-e70ef957dbc5', '60314fc2-ed2b-4e35-bb86-e70ef957dbc5', NULL, '2023-11-13 13:46:22', '2023-11-13 13:46:22'),
('706d22f1-51bd-4fae-90c9-bb7e026e7000', '2023-11-13-3cd2-3', '5dc7f1a2-d717-431a-8aa3-01509e083cd2', NULL, '60314fc2-ed2b-4e35-bb86-e70ef957dbc5', '60314fc2-ed2b-4e35-bb86-e70ef957dbc5', NULL, '2023-11-13 13:43:25', '2023-11-13 13:43:25'),
('8397ecec-6807-4f6c-87e0-9809cd61db56', '2023-11-13-0b4f-1', '2f5bf502-2cef-47b8-ae99-6587abf90b4f', NULL, 'ea98566b-34f2-4fff-af64-001f38e06e48', 'ea98566b-34f2-4fff-af64-001f38e06e48', NULL, '2023-11-13 06:06:53', '2023-11-13 06:06:53'),
('b12cb8a8-9d3f-421a-985e-141137cd9383', '2023-11-13-3cd2-4', '5dc7f1a2-d717-431a-8aa3-01509e083cd2', NULL, '60314fc2-ed2b-4e35-bb86-e70ef957dbc5', '60314fc2-ed2b-4e35-bb86-e70ef957dbc5', NULL, '2023-11-13 13:45:10', '2023-11-13 13:45:10'),
('d2a51bca-f96b-4d61-9a39-c020d5e0355b', '2024-01-10-60be-1', 'b71bba42-bd47-4bc8-ad5e-e429df2760be', NULL, '60314fc2-ed2b-4e35-bb86-e70ef957dbc5', '60314fc2-ed2b-4e35-bb86-e70ef957dbc5', NULL, '2024-01-10 14:15:21', '2024-01-10 14:15:21'),
('d5dd0b25-f8b9-48dd-8e6b-33902d6b85b4', '2023-11-19-3cd2-2', '5dc7f1a2-d717-431a-8aa3-01509e083cd2', NULL, '60314fc2-ed2b-4e35-bb86-e70ef957dbc5', '60314fc2-ed2b-4e35-bb86-e70ef957dbc5', NULL, '2023-11-19 12:46:40', '2023-11-19 12:46:40');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `donor` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `firstname` varchar(255) NOT NULL,
  `middlename` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `suffix` varchar(255) DEFAULT NULL,
  `role` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact_no` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `username`, `password`, `donor`, `firstname`, `middlename`, `lastname`, `suffix`, `role`, `email`, `contact_no`, `createdAt`, `updatedAt`) VALUES
('19f88e09-98ca-4b51-a980-dc1bf64f50d5', '123@gmail.comt', '$2b$10$.ji8/Iz0q3IkrlBzpwaUzuUNGoK185XcPPPMzyOszMfaR7va77OFm', '4f56d273-7ef2-4b40-a3e0-7a977856103f', '123', '123', '123', NULL, '64574f6f-fcf8-4d55-a6d8-6bffaf4d308a', '123@gmail.comt', '123', '2024-01-07 06:38:40', '2024-01-07 06:38:40'),
('321c5a52-8b59-47fc-a60b-6482f94ddd5b', '123@gmail.comp', '$2b$10$oFoDjtLIqM4tTXa9U1cyROdw5bCL76d/tbWIDDEu.6LnA6tTHzcru', 'ff9ddb9d-613e-42a7-89de-fe68c9d88efe', '123', '123', '123', NULL, '64574f6f-fcf8-4d55-a6d8-6bffaf4d308a', '123@gmail.comp', '123', '2024-01-07 06:19:18', '2024-01-07 06:19:18'),
('3526c77a-630f-4a2e-a6d9-43e769ae1829', 'Mabungadaniel@gmail.com', '$2b$10$Q4xniexrH3.L8Ul95jTFcuWIsG8Tsnueb/wCaT.rjTL1GZXl8YpDC', '5dc7f1a2-d717-431a-8aa3-01509e083cd2', '', '', '', NULL, 'd0eff7f7-2740-44ca-850f-836eb28093e6', 'Mabungadaniel@gmail.com', '9076041446', '2023-10-16 11:37:40', '2023-10-16 11:37:40'),
('36d98e98-f869-42d9-8bd7-f6bb9e6bbdd2', '123@gmail.comy', '$2b$10$ShuDRa2NsP25bCZimg3VF.stnW9X29QcpGkmINQMijXYfVoN1Y9k2', '4196f4d2-549e-417e-a1de-203284e611be', '123', '123', '123', NULL, '64574f6f-fcf8-4d55-a6d8-6bffaf4d308a', '123@gmail.comy', '123', '2024-01-07 06:36:00', '2024-01-07 06:36:00'),
('60314fc2-ed2b-4e35-bb86-e70ef957dbc5', 'hmo@gmail.com', '$2b$10$Q4xniexrH3.L8Ul95jTFcuWIsG8Tsnueb/wCaT.rjTL1GZXl8YpDC', NULL, 'Daniel Meynard', 'Abao', 'Mabunga', NULL, '9e71956c-8cb4-4baa-bc7b-a614d8403c32', 'hmo@gmail.com', '09270478777', '2023-11-13 10:07:57', '2023-11-13 10:07:57'),
('6a860555-d017-4e00-9342-5c9b0d9908c8', '123@gmail.comn', '$2b$10$w3Kayuj4GTcyu7kbKuNHUebyEwBcAgKKwLrF1u9uzEvFo7zPNCpi2', '9b8d3dee-ef61-427f-bbe5-307e0f6b4f52', '123', '123', '123', NULL, 'd0eff7f7-2740-44ca-850f-836eb28093e6', '123@gmail.comn', '123', '2024-01-07 06:48:34', '2024-01-07 06:48:34'),
('8afe11e1-d8bc-443a-a53b-e47076b08830', '123@gmail.comj', '$2b$10$BN1xYdFkVRLWLAhnJowpcukN2RqcCTgPuB5hvrL50soB5TMN8bG2O', 'f728d91b-b5b5-4705-b18b-8d4b79914a67', '123', '123', '123', NULL, '64574f6f-fcf8-4d55-a6d8-6bffaf4d308a', '123@gmail.comj', '123', '2024-01-07 05:51:51', '2024-01-07 05:51:51'),
('8f9cd9da-f69c-4d5a-989f-512257a937bb', '123@gm.cqw', '$2b$10$yEgglDtTBkMKulweJEYR0eZgxT0X6BgGz1d5VmCGvpfMCGuRjrwTq', 'de9140c5-289a-4049-9ef1-d02ce935d282', '', '', '', NULL, 'd0eff7f7-2740-44ca-850f-836eb28093e6', '123@gm.cqw', '123', '2023-10-23 09:42:52', '2023-10-23 09:42:52'),
('958e0fd5-653a-41e7-8509-70f42bae1f38', '123@gm.c', '$2b$10$Q4xniexrH3.L8Ul95jTFcuWIsG8Tsnueb/wCaT.rjTL1GZXl8YpDC', 'b71bba42-bd47-4bc8-ad5e-e429df2760be', '', '', '', NULL, 'd0eff7f7-2740-44ca-850f-836eb28093e6', '123@gm.c', '123', '2023-10-15 04:27:06', '2023-10-15 04:27:06'),
('9b8af8e0-7e32-47df-a2a6-0239b412c0c3', '123@gm.cw', '$2b$10$STO1eTxc4XNV9V4jZ000/uSBQEgN/08XVX6iHeNmmishNlq0Jlici', '5338b4ba-7f58-4e27-884c-6385a0d3e0a8', '', '', '', NULL, 'd0eff7f7-2740-44ca-850f-836eb28093e6', '123@gm.cw', '123', '2023-10-23 09:46:43', '2023-10-23 09:46:43'),
('a4465253-bf89-4165-8758-83b8013d73d9', '1231@gm.c', '$2b$10$eoNx/Z8MPio6nhxtSqyAIeXNjg4X8WU4ze9MpgreSUHLXuhJ5AWKO', 'c4c57a6f-cc22-4e4b-b2d4-df181d59276b', '', '', '', NULL, '64574f6f-fcf8-4d55-a6d8-6bffaf4d308a', '1231@gm.c', '123', '2023-10-28 16:03:38', '2023-10-28 16:03:38'),
('ae08974c-f568-477c-b961-ea858d7eaad9', '123@gmail.comz', '$2b$10$mZzvvCKGHzyKjJcKzD7Rh.Q.R3v684IM/.uU1dytEuYH3R8TLCxH2', '64e9d2bd-f4f5-4332-8ddd-dbe44be50f94', '123', '123', '123', NULL, '64574f6f-fcf8-4d55-a6d8-6bffaf4d308a', '123@gmail.comz', '123', '2024-01-07 04:17:27', '2024-01-07 04:17:27'),
('dd87a437-7275-45d9-8642-ad1af84f545b', '123@gmail.comb', '$2b$10$IP/UeMAshTGq4zgfWh74OOti7WBe2LcuYS716cXUWHX.3mmIogwpG', 'b30fc786-cd7d-487d-88b7-565939ef6464', '123', '123', '123', NULL, '64574f6f-fcf8-4d55-a6d8-6bffaf4d308a', '123@gmail.comb', '123', '2024-01-07 06:45:11', '2024-01-07 06:45:11'),
('ea98566b-34f2-4fff-af64-001f38e06e48', 'verifier@gmail.com', '$2b$10$Q4xniexrH3.L8Ul95jTFcuWIsG8Tsnueb/wCaT.rjTL1GZXl8YpDC', NULL, 'Daniel Meynard', 'Abao', 'Mabunga', NULL, '893d8a64-9d23-4ebb-86d6-750b194de98a', 'verifier@gmail.com', '09270478777', '2023-11-13 05:24:15', '2023-11-13 05:24:15'),
('ef1b8698-9dbb-4f02-aeda-fbe9f7f012ad', 'validator@gmail.com', '$2b$10$Q4xniexrH3.L8Ul95jTFcuWIsG8Tsnueb/wCaT.rjTL1GZXl8YpDC', 'd3951d3e-cac0-4bb7-a823-e335413797cd', '', '', '', NULL, 'b7d6efab-8745-4e46-87fe-26d80d0f050e', 'validator@gmail.com', '123', '2023-10-23 09:37:55', '2023-10-23 09:37:55'),
('f4144363-690a-49b1-b3a7-47562bd1adb8', 'admin@gmail.com', '$2b$10$Q4xniexrH3.L8Ul95jTFcuWIsG8Tsnueb/wCaT.rjTL1GZXl8YpDC', 'e12f6f3c-0399-4fb2-8118-b3572d341868', '', '', '', NULL, '64574f6f-fcf8-4d55-a6d8-6bffaf4d308a', 'admin@gmail.com', '9270478777', '2023-10-23 13:56:48', '2023-10-23 13:56:48'),
('f65fe16d-8bb6-41ac-a079-6c1485bd6987', 'Mabungadaniel4@gmail.com', '$2b$10$nHVGc5HKIK2cFreAvwQFJumkmmwaOzXbeABZ0Dqu/1Cx.UbRFUpUS', '65877ddd-3290-425c-9e0f-eb098e6cbb52', '', '', '', NULL, '64574f6f-fcf8-4d55-a6d8-6bffaf4d308a', 'Mabungadaniel4@gmail.com', '123', '2023-10-28 16:05:33', '2023-10-28 16:05:33'),
('f972e65d-4c2e-43ac-ae0c-68e78cc633e9', 'Mabungadaniel1@gmail.com', '$2b$10$h6ykNIFNgPA4mmXvByw71uCfYpeDegsJW5XC8fOR54J1YGrCoe.Wu', 'de69f734-9fd0-47ed-9590-1a274d0248b2', '', '', '', NULL, '64574f6f-fcf8-4d55-a6d8-6bffaf4d308a', 'Mabungadaniel1@gmail.com', '123', '2023-10-28 15:54:00', '2023-10-28 15:54:00'),
('fd25c111-e768-4b22-a23f-c86ee511a53a', '123@gmail.coml', '$2b$10$m8jTPcCsWpKydanjh7FtZuZbtXuLn7uNitVMr9/OjyKayaAorIrY6', '2f32749b-1cfe-4731-b397-793a29deaa33', '123', '123', '123', NULL, '64574f6f-fcf8-4d55-a6d8-6bffaf4d308a', '123@gmail.coml', '123', '2024-01-07 06:23:28', '2024-01-07 06:23:28'),
('fd7d86b5-6c68-422d-8200-f078082c63fc', '123@gmail.comu', '$2b$10$ANJ/M5ennZK92vcw7gKvIubpKvkSGxRZInyHn.lRQA6S01an2Qexe', '8cb2de90-596c-4ce8-bf4c-80a22eb328e1', '123', '123', '123', NULL, '64574f6f-fcf8-4d55-a6d8-6bffaf4d308a', '123@gmail.comu', '123', '2024-01-07 06:25:43', '2024-01-07 06:25:43');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Attachments`
--
ALTER TABLE `Attachments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `documentType` (`documentType`);

--
-- Indexes for table `DocumentTypes`
--
ALTER TABLE `DocumentTypes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Donors`
--
ALTER TABLE `Donors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `level` (`level`),
  ADD KEY `status` (`status`);

--
-- Indexes for table `Employees`
--
ALTER TABLE `Employees`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gender` (`gender`),
  ADD KEY `rank` (`rank`),
  ADD KEY `regionAssignment` (`regionAssignment`),
  ADD KEY `religion` (`religion`),
  ADD KEY `taxstat` (`taxstat`);

--
-- Indexes for table `Genders`
--
ALTER TABLE `Genders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `GenealogyTrees`
--
ALTER TABLE `GenealogyTrees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Levels`
--
ALTER TABLE `Levels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Primaries`
--
ALTER TABLE `Primaries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Ranks`
--
ALTER TABLE `Ranks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `RegionAssignments`
--
ALTER TABLE `RegionAssignments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Religions`
--
ALTER TABLE `Religions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Roles`
--
ALTER TABLE `Roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Secondaries`
--
ALTER TABLE `Secondaries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Statuses`
--
ALTER TABLE `Statuses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `TaxStatuses`
--
ALTER TABLE `TaxStatuses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Tertiaries`
--
ALTER TABLE `Tertiaries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Transactions`
--
ALTER TABLE `Transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `donor` (`donor`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `updated_by` (`updated_by`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role` (`role`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Attachments`
--
ALTER TABLE `Attachments`
  ADD CONSTRAINT `Attachments_ibfk_1` FOREIGN KEY (`documentType`) REFERENCES `DocumentTypes` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `Donors`
--
ALTER TABLE `Donors`
  ADD CONSTRAINT `Donors_ibfk_1` FOREIGN KEY (`level`) REFERENCES `Levels` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Donors_ibfk_2` FOREIGN KEY (`status`) REFERENCES `Statuses` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `Employees`
--
ALTER TABLE `Employees`
  ADD CONSTRAINT `Employees_ibfk_1` FOREIGN KEY (`gender`) REFERENCES `Genders` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Employees_ibfk_2` FOREIGN KEY (`rank`) REFERENCES `Ranks` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Employees_ibfk_3` FOREIGN KEY (`regionAssignment`) REFERENCES `RegionAssignments` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Employees_ibfk_4` FOREIGN KEY (`religion`) REFERENCES `Religions` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Employees_ibfk_5` FOREIGN KEY (`taxstat`) REFERENCES `TaxStatuses` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `Transactions`
--
ALTER TABLE `Transactions`
  ADD CONSTRAINT `Transactions_ibfk_1` FOREIGN KEY (`donor`) REFERENCES `Donors` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Transactions_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `Users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Transactions_ibfk_3` FOREIGN KEY (`updated_by`) REFERENCES `Users` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `Users`
--
ALTER TABLE `Users`
  ADD CONSTRAINT `Users_ibfk_1` FOREIGN KEY (`role`) REFERENCES `Roles` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
