-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 26, 2024 at 04:20 PM
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
-- Database: `hxp_test`
--
CREATE DATABASE IF NOT EXISTS `hxp_test` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `hxp_test`;

-- --------------------------------------------------------

--
-- Table structure for table `Donors`
--

CREATE TABLE `Donors` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `donor_id` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) NOT NULL,
  `middlename` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `suffix` varchar(255) DEFAULT NULL,
  `refferalId` varchar(255) DEFAULT NULL,
  `birthday` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `level` int NOT NULL,
  `status` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `contactNumber` varchar(255) NOT NULL,
  `depositSlip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `depositfile` varchar(255) DEFAULT NULL,
  `dateOfdonation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `bankfile` varchar(255) DEFAULT NULL,
  `validIdFile` varchar(255) DEFAULT NULL,
  `bankAccount` varchar(255) DEFAULT NULL,
  `philId` varchar(255) DEFAULT NULL,
  `M_O_D` varchar(255) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `isVerified` tinyint(1) DEFAULT NULL,
  `verifiedDate` varchar(255) DEFAULT NULL,
  `isValidated` tinyint(1) DEFAULT NULL,
  `validatedDate` varchar(255) DEFAULT NULL,
  `verifedBy` varchar(255) DEFAULT NULL,
  `validatedBy` varchar(255) DEFAULT NULL,
  `isVerifiedDonorSolicitor` tinyint(1) DEFAULT NULL,
  `verifiedDonorSolicitorDate` varchar(255) DEFAULT NULL,
  `isValidatedDonorSolicitor` tinyint(1) DEFAULT NULL,
  `validatedDonorSolicitorDate` varchar(255) DEFAULT NULL,
  `verifedDonorSolicitorBy` varchar(255) DEFAULT NULL,
  `validatedDonorSolicitorBy` varchar(255) DEFAULT NULL,
  `isRejected` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `uplineId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Genders`
--

CREATE TABLE `Genders` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `NetworkNodes`
--

CREATE TABLE `NetworkNodes` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `level` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `uplineId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Reasons`
--

CREATE TABLE `Reasons` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `reason` varchar(255) NOT NULL,
  `deleted_at` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Reasons`
--

INSERT INTO `Reasons` (`id`, `reason`, `deleted_at`, `createdAt`, `updatedAt`) VALUES
('22636962-b0f6-4d5b-9c41-f336ffabfc32', 'Blurred Deposit Slip, Metrobank Personal Bank Account', NULL, '2024-02-23 18:59:46', '2024-02-23 18:59:46'),
('6754d1b2-1cd3-4ee2-81b0-89f00ff12b79', 'Blurred Proof of Donation Photo', NULL, '2024-02-23 18:56:12', '2024-02-23 18:56:12'),
('a0d8279a-b3b0-48f1-8c54-e1ed24fdce83', 'Valid ID Name Does not Match with Metrobank Account No.', NULL, '2024-02-23 18:58:12', '2024-02-23 18:58:12'),
('cde4be80-b68f-456d-8bd8-7597065ba752', 'Blurred/Shadow of Valid Id', NULL, '2024-02-23 18:58:58', '2024-02-23 18:58:58');

-- --------------------------------------------------------

--
-- Table structure for table `Rejections`
--

CREATE TABLE `Rejections` (
  `rejection_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `donor_id` varchar(255) DEFAULT NULL,
  `rejection_date` varchar(255) DEFAULT NULL,
  `rejection_by` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `rejection_comments` text,
  `rejection_type` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Roles`
--

CREATE TABLE `Roles` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
-- Table structure for table `Statuses`
--

CREATE TABLE `Statuses` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `status` varchar(255) NOT NULL,
  `deleted_at` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Statuses`
--

INSERT INTO `Statuses` (`id`, `status`, `deleted_at`, `createdAt`, `updatedAt`) VALUES
('a587fb85-2851-4fc9-aaec-0c1088b600b6', 'For Verification', NULL, '2023-10-15 11:42:25', '2023-10-15 11:42:25'),
('be56bb08-711f-4195-b0b4-4def08a09723', 'For Validation', NULL, '2024-02-04 17:24:29', '2024-02-04 17:24:29'),
('d35932f3-5cf8-4ce1-8bed-ca0faa7db726', 'Donor Solicitor', NULL, '2024-01-05 18:00:02', '2024-01-05 18:00:02'),
('e93b78ed-ed32-4a69-880b-e8545b8ae067', 'Verified Donor', NULL, '2023-10-15 11:42:25', '2023-10-15 11:42:25');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `donor` varchar(255) DEFAULT NULL,
  `role` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `email` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `middlename` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `suffix` varchar(255) DEFAULT NULL,
  `contact_no` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `username`, `password`, `donor`, `role`, `email`, `firstname`, `middlename`, `lastname`, `suffix`, `contact_no`, `createdAt`, `updatedAt`) VALUES
('60314fc2-ed2b-4e35-bb86-e70ef957dbc5', 'hmo@gmail.com', '$2b$10$Q4xniexrH3.L8Ul95jTFcuWIsG8Tsnueb/wCaT.rjTL1GZXl8YpDC', NULL, '9e71956c-8cb4-4baa-bc7b-a614d8403c32', 'hmo@gmail.com', 'Daniel Meynard', 'Abao', 'Mabunga', NULL, '09270478777', '2023-11-13 10:07:57', '2023-11-13 10:07:57'),
('ea98566b-34f2-4fff-af64-001f38e06e48', 'verifier@gmail.com', '$2b$10$Q4xniexrH3.L8Ul95jTFcuWIsG8Tsnueb/wCaT.rjTL1GZXl8YpDC', NULL, '893d8a64-9d23-4ebb-86d6-750b194de98a', 'verifier@gmail.com', 'Daniel Meynard', 'Abao', 'Mabunga', NULL, '09270478777', '2023-11-13 05:24:15', '2023-11-13 05:24:15'),
('ef1b8698-9dbb-4f02-aeda-fbe9f7f012ad', 'validator@gmail.com', '$2b$10$Q4xniexrH3.L8Ul95jTFcuWIsG8Tsnueb/wCaT.rjTL1GZXl8YpDC', NULL, 'b7d6efab-8745-4e46-87fe-26d80d0f050e', 'validator@gmail.com', '', '', '', NULL, '123', '2023-10-23 09:37:55', '2023-10-23 09:37:55'),
('f4144363-690a-49b1-b3a7-47562bd1adb8', 'admin@gmail.com', '$2b$10$Q4xniexrH3.L8Ul95jTFcuWIsG8Tsnueb/wCaT.rjTL1GZXl8YpDC', NULL, '64574f6f-fcf8-4d55-a6d8-6bffaf4d308a', 'admin@gmail.com', '', '', '', NULL, '9270478777', '2023-10-23 13:56:48', '2023-10-23 13:56:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Donors`
--
ALTER TABLE `Donors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `status` (`status`),
  ADD KEY `uplineId` (`uplineId`);

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
-- Indexes for table `NetworkNodes`
--
ALTER TABLE `NetworkNodes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `uplineId` (`uplineId`);

--
-- Indexes for table `Reasons`
--
ALTER TABLE `Reasons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Rejections`
--
ALTER TABLE `Rejections`
  ADD PRIMARY KEY (`rejection_id`);

--
-- Indexes for table `Roles`
--
ALTER TABLE `Roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Statuses`
--
ALTER TABLE `Statuses`
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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `NetworkNodes`
--
ALTER TABLE `NetworkNodes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Donors`
--
ALTER TABLE `Donors`
  ADD CONSTRAINT `Donors_ibfk_1` FOREIGN KEY (`status`) REFERENCES `Statuses` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Donors_ibfk_2` FOREIGN KEY (`uplineId`) REFERENCES `Donors` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `NetworkNodes`
--
ALTER TABLE `NetworkNodes`
  ADD CONSTRAINT `NetworkNodes_ibfk_1` FOREIGN KEY (`uplineId`) REFERENCES `NetworkNodes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

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