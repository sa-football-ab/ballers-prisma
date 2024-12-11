/*
  Warnings:

  - You are about to drop the column `teamId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `_CoachTeams` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_teamId_fkey`;

-- DropForeignKey
ALTER TABLE `_CoachTeams` DROP FOREIGN KEY `_CoachTeams_A_fkey`;

-- DropForeignKey
ALTER TABLE `_CoachTeams` DROP FOREIGN KEY `_CoachTeams_B_fkey`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `teamId`;

-- DropTable
DROP TABLE `_CoachTeams`;

-- CreateTable
CREATE TABLE `_UserTeams` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_UserTeams_AB_unique`(`A`, `B`),
    INDEX `_UserTeams_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_UserTeams` ADD CONSTRAINT `_UserTeams_A_fkey` FOREIGN KEY (`A`) REFERENCES `Team`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserTeams` ADD CONSTRAINT `_UserTeams_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
