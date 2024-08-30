/*
  Warnings:

  - You are about to drop the column `coach` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the `_ActivityToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Activity` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_ActivityToUser` DROP FOREIGN KEY `_ActivityToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ActivityToUser` DROP FOREIGN KEY `_ActivityToUser_B_fkey`;

-- AlterTable
ALTER TABLE `Activity` DROP COLUMN `coach`,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `clubOnboarding` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `gender` VARCHAR(191) NULL,
    ADD COLUMN `name` VARCHAR(191) NULL,
    ADD COLUMN `personNumber` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `_ActivityToUser`;

-- AddForeignKey
ALTER TABLE `Activity` ADD CONSTRAINT `Activity_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
