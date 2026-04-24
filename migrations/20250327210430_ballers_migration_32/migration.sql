/*
  Warnings:

  - The values [CLUB_ADMIN] on the enum `User_userType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Activity` MODIFY `type` ENUM('GENERAL', 'BALLERS', 'LOK') NOT NULL DEFAULT 'LOK';

-- AlterTable
ALTER TABLE `User` ADD COLUMN `createdBy` ENUM('GENERAL', 'BALLERS', 'LOK') NOT NULL DEFAULT 'LOK',
    ADD COLUMN `email` VARCHAR(191) NULL,
    MODIFY `userType` ENUM('PLAYER', 'COACH', 'ADMIN') NOT NULL DEFAULT 'PLAYER';
