USE `hxp`
ALTER TABLE `Donors`  ADD `donor_id` VARCHAR(255) NOT NULL  AFTER `id`;
ALTER TABLE `Donors` CHANGE `donor_id` `donor_id` VARCHAR(255) NULL;
ALTER TABLE `Donors`  ADD `isRejected` TINYINT NULL  AFTER `validatedDonorSolicitorBy`;