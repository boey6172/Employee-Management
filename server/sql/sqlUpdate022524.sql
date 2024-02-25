ALTER TABLE `Donors`  ADD `donor_id` VARCHAR(255) NOT NULL  AFTER `id`;
ALTER TABLE `Donors` CHANGE `donor_id` `donor_id` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL;