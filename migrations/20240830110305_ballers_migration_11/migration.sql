/*
  Warnings:

  - You are about to drop the column `userId` on the `Activity` table. All the data in the column will be lost.
  - Added the required column `coach` to the `Activity` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Activity` DROP FOREIGN KEY `Activity_userId_fkey`;

-- AlterTable
ALTER TABLE `Activity` DROP COLUMN `userId`,
    ADD COLUMN `coach` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `userId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Activity` ADD CONSTRAINT `Activity_coach_fkey` FOREIGN KEY (`coach`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
