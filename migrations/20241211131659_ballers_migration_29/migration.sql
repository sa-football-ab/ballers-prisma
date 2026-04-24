/*
  Warnings:

  - You are about to drop the `Install` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LinkedAccounts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LinkedUserId` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_UserTeams` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_UserTeams` DROP FOREIGN KEY `_UserTeams_A_fkey`;

-- DropForeignKey
ALTER TABLE `_UserTeams` DROP FOREIGN KEY `_UserTeams_B_fkey`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `teamId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Install`;

-- DropTable
DROP TABLE `LinkedAccounts`;

-- DropTable
DROP TABLE `LinkedUserId`;

-- DropTable
DROP TABLE `_UserTeams`;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `Team`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
