/*
  Warnings:

  - You are about to drop the column `coach` on the `Activity` table. All the data in the column will be lost.
  - Added the required column `coachUserId` to the `Activity` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Activity` DROP FOREIGN KEY `Activity_coach_fkey`;

-- AlterTable
ALTER TABLE `Activity` DROP COLUMN `coach`,
    ADD COLUMN `coachUserId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Activity` ADD CONSTRAINT `Activity_coachUserId_fkey` FOREIGN KEY (`coachUserId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
