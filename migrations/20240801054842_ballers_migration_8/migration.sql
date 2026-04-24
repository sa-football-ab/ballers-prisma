/*
  Warnings:

  - Added the required column `activityUrl` to the `Activity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Activity` ADD COLUMN `activityUrl` VARCHAR(191) NOT NULL;
